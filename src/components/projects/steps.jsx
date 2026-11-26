"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import ImageSlot from "../ui/image-slot";

// "How we work": a dark panel that is pinned while the page scrolls. The active step changes
// with the scroll position (or on tap) and the picture on the side changes with it.
export default function HowWeWork() {
  const t = useTranslations("Projects");
  const p = useTranslations("Process");

  const steps = ["one", "two", "three", "four"].map((k, i) => ({
    id: i + 1,
    title: t(`step_${k}`),
    desc: t(`step_${k}_desc`),
  }));

  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const update = () => setPinned(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!pinned) return;
    setActive(Math.min(steps.length - 1, Math.floor(v * steps.length)));
  });

  const current = steps[active];

  return (
    <section ref={sectionRef} className="relative bg-sand md:h-[320vh]">
      <div className="px-3 py-4 md:sticky md:top-0 md:flex md:h-screen md:items-center md:px-4">
        <div className="surface-nile relative mx-auto w-full max-w-[1280px] overflow-hidden rounded-[2rem] p-6 md:rounded-[3rem] md:p-12">
          <div aria-hidden="true" className="logo-pattern absolute inset-0" />

          <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <span className="eyebrow eyebrow-dark">{t("how_it_work_desc")}</span>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.25] text-white md:text-5xl">
                {t("how_it_work")}
              </h2>

              <div role="tablist" className="mt-8 space-y-2.5">
                {steps.map((step, i) => {
                  const on = i === active;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      role="tab"
                      aria-selected={on}
                      onClick={() => setActive(i)}
                      className={`w-full cursor-pointer rounded-2xl border p-4 text-start transition-colors duration-500 md:p-5 ${
                        on
                          ? "border-gold-400 bg-gold-400 text-nile-950"
                          : "border-white/10 bg-white/[0.04] text-white hover:bg-white/10"
                      }`}
                    >
                      <span className="flex items-center gap-4">
                        <span dir="ltr" className={`text-sm font-semibold ${on ? "text-nile-700" : "text-nile-200"}`}>
                          {String(step.id).padStart(2, "0")}
                        </span>
                        <span className="flex-1 text-lg font-semibold md:text-xl">{step.title}</span>
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                            on ? "bg-nile-950 text-gold-400" : "bg-white/10 text-white"
                          }`}
                        >
                          <ArrowUpRight size={16} className="rtl:-scale-x-100" />
                        </span>
                      </span>
                      <motion.span
                        initial={false}
                        animate={{ height: on ? "auto" : 0, opacity: on ? 1 : 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="block overflow-hidden"
                      >
                        <span className="block pt-3 ps-9 leading-relaxed text-nile-800 md:ps-10">
                          {step.desc}
                        </span>
                      </motion.span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Picture for the active step */}
            <div className="hidden lg:col-span-6 lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ImageSlot
                    id={`process-${current.id}`}
                    alt={current.title}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="rounded-[2rem] border border-white/10"
                    empty={
                      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06]">
                        <div aria-hidden="true" className="logo-pattern absolute inset-0 opacity-60" />
                        <span dir="ltr" className="relative font-[family-name:var(--font-display)] text-[9rem] font-bold leading-none text-gold-400">
                          {String(current.id).padStart(2, "0")}
                        </span>
                        <span className="absolute bottom-5 start-6 text-sm text-nile-100">
                          {p("step")} {current.id} {p("of")} {steps.length}
                        </span>
                      </div>
                    }
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
