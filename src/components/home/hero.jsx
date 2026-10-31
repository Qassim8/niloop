"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Code, Calculator, PenTool, FileText } from "lucide-react";
import Wave from "@/components/ui/wave";
import { Ripples } from "@/components/ui/shapes";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  const t = useTranslations("Hero");
  const s = useTranslations("Services");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  const chips = [
    { Icon: Code, label: s("web") },
    { Icon: Calculator, label: s("erp") },
    { Icon: PenTool, label: s("graphic") },
    { Icon: FileText, label: s("content") },
  ];

  return (
    <section className="gradient-pan relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b2a57] via-[#1e549f] to-[#2d6bbf] pb-24 pt-16 text-center">
      {/* Skyline texture */}
      <Image
        src="/images/modern-buildings.webp"
        alt={t("hero_alt")}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-20 mix-blend-luminosity"
      />

      {/* Desert glow + Nile ripples */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob float-y absolute -top-20 -start-20 h-80 w-80 bg-[#dda853]/30 blur-3xl" />
        <div className="blob float-y-delay absolute -bottom-24 end-0 h-96 w-96 bg-[#dda853]/20 blur-3xl" />
        <div className="absolute -end-32 top-10 h-[34rem] w-[34rem]">
          <Ripples className="inset-0" />
        </div>
        <div className="absolute -start-40 bottom-10 h-[26rem] w-[26rem]">
          <Ripples className="inset-0" />
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl px-6"
      >
        <motion.h1
          variants={item}
          className="mb-6 text-4xl font-semibold leading-tight text-white md:text-6xl md:leading-[1.25]"
        >
          {t("hero_title")}
          <span className="text-shimmer text-4xl font-bold md:text-6xl">
            {t("niloop")}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mb-8 max-w-3xl text-lg text-blue-50/90 md:text-xl"
        >
          {t("hero_subtitle")}
        </motion.p>

        <motion.ul
          variants={item}
          className="mb-10 flex flex-wrap items-center justify-center gap-3"
        >
          {chips.map(({ Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md"
            >
              <Icon size={16} className="text-[#dda853]" />
              {label}
            </li>
          ))}
        </motion.ul>

        <motion.div
          variants={item}
          className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center"
        >
          <Link href={`/${locale}/contact`} className="btn-gold group text-lg">
            {t("start_now")}
            <Arrow size={18} className="transition rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1" />
          </Link>
          <Link href={`/${locale}/about`} className="btn-ghost text-lg">
            {t("more")}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div
        aria-hidden="true"
        className="absolute bottom-24 left-1/2 z-10 hidden h-10 w-6 -translate-x-1/2 justify-center rounded-full border-2 border-white/40 pt-2 md:flex"
      >
        <span className="scroll-dot h-2 w-1 rounded-full bg-white" />
      </div>

      <Wave className="text-white" height="h-16 md:h-28" />
    </section>
  );
}
