"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Code, Calculator, PenTool, Megaphone, FileText, Layers } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useRef } from "react";
import SectionHeader from "../sections-header";
import Chip from "../ui/chip";
import { FromPrice } from "../pricing/price";

// Five core services as cards that stack on top of each other while scrolling.
const services = [
  { key: "web", Icon: Code, href: "/services/web-design", sample: "web_starter", tone: "light" },
  { key: "erp", Icon: Calculator, href: "/services/erp", sample: "erp_mini", tone: "dark" },
  { key: "graphic", Icon: PenTool, href: "/services/graphic-design", sample: "identity", tone: "gold" },
  { key: "marketing", Icon: Megaphone, href: "/services/marketing", sample: "social_mgmt", tone: "blue" },
  { key: "content", Icon: FileText, href: "/services/content-writing", sample: "content_pack", tone: "light" },
];

const toneClasses = {
  light: "bg-white text-nile-950 border-line",
  dark: "surface-nile text-white border-nile-800",
  gold: "bg-gold-100 text-nile-950 border-gold-200",
  blue: "bg-nile-100 text-nile-950 border-nile-200",
};

function StackCard({ service, index, total, progress }) {
  const t = useTranslations("Services");
  const p = useTranslations("Pricing");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const { key, Icon, href, sample, tone } = service;
  const dark = tone === "dark";

  // Cards further back shrink a little as the next one slides over them
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky" style={{ top: `calc(5.5rem + ${index * 1.1}rem)` }}>
      <motion.article
        style={{ scale, transformOrigin: "50% 0%" }}
        className={`relative mb-6 overflow-hidden rounded-[2rem] border p-7 shadow-[var(--shadow-lift)] md:rounded-[2.5rem] md:p-12 ${toneClasses[tone]}`}
      >
        {dark && <div aria-hidden="true" className="logo-pattern absolute inset-0" />}

        <div className="relative grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="flex items-center gap-4">
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                  dark ? "bg-gold-400 text-nile-950" : "bg-nile-950 text-white"
                }`}
              >
                <Icon size={26} />
              </span>
              <span dir="ltr" className={`text-sm font-semibold ${dark ? "text-nile-200" : "text-nile-600"}`}>
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-6 text-3xl font-semibold leading-tight md:text-5xl">{t(key)}</h3>
            <p className={`mt-3 max-w-xl text-lg leading-relaxed ${dark ? "text-nile-100" : "text-slate-600"}`}>
              {t(`${key}_desc`)}
            </p>

            <ul className="mt-6 grid gap-2.5 text-sm sm:grid-cols-2 md:text-base">
              {p.raw(`items.${sample}.features`).slice(0, 4).map((feature) => (
                <li key={feature} className={`flex items-start gap-2.5 ${dark ? "text-nile-50" : "text-slate-700"}`}>
                  <Check size={18} className="mt-0.5 shrink-0 text-gold-500" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href={`/${locale}${href}`}
                className={`${dark ? "btn-gold" : "btn-blue"} group`}
              >
                {t("details")}
                <Arrow size={16} className="transition rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1" />
              </Link>
              <FromPrice id={sample} className={`text-sm ${dark ? "text-gold-300" : "text-gold-700"}`} />
            </div>
          </div>

          {/* Large numeral as a graphic element */}
          <div className="hidden md:col-span-5 md:block" aria-hidden="true">
            <div
              className={`flex aspect-square items-center justify-center rounded-[2rem] font-[family-name:var(--font-display)] text-[9rem] font-bold leading-none ${
                dark ? "bg-white/[0.06] text-gold-400" : "bg-white/60 text-nile-600/90"
              }`}
            >
              <span dir="ltr">{String(index + 1).padStart(2, "0")}</span>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function ServicesSection() {
  const t = useTranslations("Services");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeader
          title={t("title")}
          subtitle={t("subtitle")}
          chip={<Chip icon={Layers} tone="gold" />}
        />

        <div ref={ref} className="relative">
          {services.map((service, i) => (
            <StackCard
              key={service.key}
              service={service}
              index={i}
              total={services.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {["branding", "montage", "social_media"].map((k) => (
            <span key={k} className="rounded-full border border-line bg-sand px-4 py-2 text-sm text-slate-600">
              {t(k)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
