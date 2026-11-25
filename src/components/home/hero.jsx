"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Calculator } from "lucide-react";
import LoopThread from "@/components/ui/loop-thread";
import { getProject } from "@/data/projects";

const showcaseSlugs = [
  "villance",
  "zus",
  "bareq-al-shati",
  "start-with-a-question",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
// Text stays visible before JavaScript loads (important for first paint); it only slides up.
const item = {
  hidden: { opacity: 1, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// Real projects shown inside a browser-style frame.
function Showcase() {
  const t = useTranslations("Projects");
  const hero = useTranslations("Hero");
  const locale = useLocale();
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const slides = showcaseSlugs.map((slug) => {
    const p = getProject(slug);
    return { slug, image: p.image, title: t(`${p.key}_title`) };
  });

  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      4500,
    );
    return () => clearInterval(id);
  }, [reduce, paused, slides.length]);

  const current = slides[active];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <LoopThread className="absolute -inset-x-10 -top-10 h-auto w-[130%] opacity-0" />

      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-nile-900/60 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-md">
        {/* Window chrome */}
        <div
          dir="ltr"
          className="flex items-center gap-3 border-b border-white/10 px-4 py-3"
        >
          <span className="flex gap-1.5">
            <i className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <i className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <i className="h-2.5 w-2.5 rounded-full bg-white/25" />
          </span>
          <span className="mx-auto max-w-[70%] truncate rounded-full bg-white/10 px-4 py-1 text-xs text-nile-100">
            {hero("showcase_label")} · {current.title}
          </span>
        </div>

        <Link
          href={`/${locale}/projects/${current.slug}`}
          className="group relative block aspect-[16/10] bg-nile-950"
          aria-label={current.title}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                priority={active === 0}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover object-top"
              />
            </motion.div>
          </AnimatePresence>
          <span className="absolute end-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-nile-950 opacity-0 transition group-hover:opacity-100">
            <ArrowUpRight size={16} className="rtl:-scale-x-100" />
          </span>
        </Link>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.slug}
            type="button"
            aria-label={s.title}
            aria-current={i === active}
            onClick={() => setActive(i)}
            className={`h-1.5 cursor-pointer rounded-full transition-all duration-500 ${
              i === active
                ? "w-8 bg-gold-400"
                : "w-3 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Floating ERP chip */}
      <Link
        href={`/${locale}/projects/matajri`}
        className="float-soft absolute -bottom-2 -start-3 hidden items-center gap-3 rounded-2xl border border-white/20 bg-white px-4 py-3 shadow-xl md:flex"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-nile-600 text-white">
          <Calculator size={20} />
        </span>
        <span className="text-start">
          <span className="block text-xs text-slate-500">
            {hero("chip_label")}
          </span>
          <span className="block text-sm font-bold text-nile-950">
            {t("matajri_title").split("–")[0].trim()}
          </span>
        </span>
      </Link>
    </div>
  );
}

export default function Hero() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="surface-nile relative overflow-hidden rounded-b-[2rem] pb-20 pt-32 md:rounded-b-[3rem] md:pb-28 md:pt-44">
      <div aria-hidden="true" className="logo-pattern absolute inset-0" />

      <div className="container relative grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-6"
        >
          <motion.span variants={item} className="eyebrow eyebrow-dark">
            {t("eyebrow")}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-[2.5rem] font-semibold leading-[1.3] text-white sm:text-5xl md:text-6xl md:leading-[1.2]"
          >
            {t.rich("headline", {
              accent: (chunks) => <span className="accent">{chunks}</span>,
            })}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-nile-100 md:text-xl"
          >
            {t("hero_subtitle")}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href={`/${locale}/contact`}
              className="btn-gold group text-lg"
            >
              {t("cta_primary")}
              <Arrow
                size={18}
                className="transition rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1"
              />
            </Link>
            <Link href={`/${locale}/projects`} className="btn-ghost text-lg">
              {t("cta_secondary")}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6"
        >
          <Showcase />
        </motion.div>
      </div>
    </section>
  );
}
