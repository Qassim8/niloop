"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// The Niloop "loop": one thin infinity-shaped line that draws itself as its container scrolls
// through the viewport. Decorative; used once per page as the brand's signature motif.
export default function LoopThread({ className = "", stroke = "#dda853" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 40%"],
  });
  const draw = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <svg
      ref={ref}
      aria-hidden="true"
      viewBox="0 0 800 260"
      fill="none"
      className={`pointer-events-none ${className}`}
    >
      <path
        d="M400 130 C 330 20, 120 20, 120 130 S 330 240, 400 130 S 470 20, 680 20 S 680 240, 400 130"
        stroke="#1e549f"
        strokeOpacity="0.12"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <motion.path
        d="M400 130 C 330 20, 120 20, 120 130 S 330 240, 400 130 S 470 20, 680 20 S 680 240, 400 130"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{ pathLength: draw }}
      />
    </svg>
  );
}
