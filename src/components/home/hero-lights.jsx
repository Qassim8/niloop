"use client";

import { useEffect, useRef } from "react";

// Animated light over the hero picture: streaks of light travel along the road towards the
// glowing horizon (towards the future), the horizon glows softly, and tiny lights twinkle on the
// buildings. Pure canvas, no video: it costs a few KB, scales to any screen and pauses when the
// hero is off screen, the tab is hidden, or the visitor prefers reduced motion.
//
// `vanishing` is where the road meets the horizon, as a fraction of the picture (x, y).
// `image` is the picture's pixel size; it is needed to place the lights correctly on the picture
// because the hero image is cropped with object-fit: cover.
const COLORS = [
  [255, 255, 255],
  [255, 255, 255],
  [143, 211, 255],
  [143, 211, 255],
  [255, 207, 107],
];

const rand = (a, b) => a + Math.random() * (b - a);

export default function HeroLights({ vanishing = [0.505, 0.44], image = { w: 1792, h: 1024 } }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0, dw = 0, dh = 0, ox = 0, oy = 0;
    let vp = { x: 0, y: 0 };
    let streaks = [];
    let sparks = [];
    let visible = true;
    let raf = 0;
    let last = performance.now();

    const spawn = (initial = false) => {
      const road = Math.random() < 0.6;
      const spread = road ? rand(-0.6, 0.6) : (Math.random() < 0.5 ? 1 : -1) * rand(0.6, 1.2);
      return {
        a: Math.PI / 2 + spread, // angle from the vanishing point (π/2 = straight down)
        maxR: Math.hypot(w, h) * rand(0.75, 1.1),
        dur: rand(2.6, 5),
        p: initial ? Math.random() : 0,
        len: rand(0.1, 0.3),
        c: COLORS[(Math.random() * COLORS.length) | 0],
        wd: rand(1, 2.2),
        amp: rand(0.35, 0.8),
      };
    };

    const layout = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      if (!w || !h) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Where the picture sits inside the cropped (cover) frame
      const sc = Math.max(w / image.w, h / image.h);
      dw = image.w * sc;
      dh = image.h * sc;
      ox = (w - dw) / 2;
      oy = (h - dh) / 2;
      vp = { x: ox + vanishing[0] * dw, y: oy + vanishing[1] * dh };

      const small = w < 640;
      streaks = Array.from({ length: small ? 20 : 38 }, () => spawn(true));
      sparks = Array.from({ length: small ? 16 : 32 }, () => ({
        ix: rand(0.05, 0.95),
        iy: rand(0.18, 0.78),
        r: rand(0.8, 1.9),
        f: rand(0.6, 1.6),
        p: rand(0, 6.28),
        c: Math.random() < 0.7 ? [190, 225, 255] : [255, 226, 160],
      }));
    };

    const frame = (t) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(0.05, (t - last) / 1000);
      last = t;
      if (!visible || document.hidden || !w) return;

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      // Soft breathing glow where the road meets the horizon
      const pulse = 0.16 + 0.06 * Math.sin(t / 1400);
      const glow = ctx.createRadialGradient(vp.x, vp.y, 0, vp.x, vp.y, Math.min(w, h) * 0.55);
      glow.addColorStop(0, `rgba(255,220,150,${pulse})`);
      glow.addColorStop(1, "rgba(255,220,150,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      // Tiny lights twinkling on the buildings
      for (const s of sparks) {
        const a = 0.15 + 0.5 * (Math.sin((t / 1000) * s.f + s.p) * 0.5 + 0.5);
        ctx.fillStyle = `rgba(${s.c[0]},${s.c[1]},${s.c[2]},${a})`;
        ctx.beginPath();
        ctx.arc(ox + s.ix * dw, oy + s.iy * dh, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Light streaks racing towards the horizon: fast when far away, slowing down as they
      // approach, getting thinner and fainter
      ctx.lineCap = "round";
      for (const s of streaks) {
        s.p += dt / s.dur;
        if (s.p >= 1) Object.assign(s, spawn());
        const e = Math.pow(1 - s.p, 2.2);
        const r = s.maxR * e;
        const tail = Math.min(s.maxR, r * (1 + s.len * (1 + (1 - s.p))));
        const cos = Math.cos(s.a);
        const sin = Math.sin(s.a);
        const x1 = vp.x + cos * r;
        const y1 = vp.y + sin * r;
        const x0 = vp.x + cos * tail;
        const y0 = vp.y + sin * tail;
        const alpha = Math.sin(Math.PI * Math.min(1, s.p * 1.08)) * s.amp;
        const grad = ctx.createLinearGradient(x0, y0, x1, y1);
        grad.addColorStop(0, `rgba(${s.c[0]},${s.c[1]},${s.c[2]},0)`);
        grad.addColorStop(1, `rgba(${s.c[0]},${s.c[1]},${s.c[2]},${alpha})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.wd * (0.35 + e);
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.stroke();
      }
    };

    layout();
    raf = requestAnimationFrame(frame);

    const resize = new ResizeObserver(layout);
    resize.observe(canvas);
    const view = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    view.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      resize.disconnect();
      view.disconnect();
    };
  }, [vanishing, image]);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full mix-blend-screen"
      />
      {/* A wide soft sweep of light that glides over the skyline every few seconds */}
      <div aria-hidden="true" className="hero-sweep pointer-events-none absolute inset-0" />
    </>
  );
}
