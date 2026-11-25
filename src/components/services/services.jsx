"use client";

import { ArrowLeft, ArrowRight, Check, Code, Calculator, PenTool, Megaphone, FileText } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import SectionHeader from "../sections-header";
import Reveal from "../ui/reveal";
import { FromPrice } from "../pricing/price";

// Five core services as a bento grid. `sample` is the catalog item whose first features are
// shown as deliverables and whose price is shown as "from" price.
const services = [
  { key: "web", Icon: Code, href: "/services/web-design", sample: "web_starter", span: "lg:col-span-5" },
  { key: "erp", Icon: Calculator, href: "/services/erp", sample: "erp_mini", span: "lg:col-span-7", featured: true },
  { key: "graphic", Icon: PenTool, href: "/services/graphic-design", sample: "identity", span: "lg:col-span-4" },
  { key: "marketing", Icon: Megaphone, href: "/services/marketing", sample: "social_mgmt", span: "lg:col-span-4" },
  { key: "content", Icon: FileText, href: "/pricing#content", sample: "content_pack", span: "lg:col-span-4" },
];

export default function ServicesSection() {
  const t = useTranslations("Services");
  const p = useTranslations("Pricing");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="bg-white section">
      <div className="container">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {services.map(({ key, Icon, href, sample, span, featured }, i) => (
            <Reveal key={key} delay={(i % 3) * 0.08} className={`md:col-span-1 ${span}`}>
              <Link
                href={`/${locale}${href}`}
                data-spotlight
                className={`group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-media)] border p-7 transition duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 md:p-9 ${
                  featured
                    ? "surface-nile border-nile-800 text-white shadow-[var(--shadow-lift)]"
                    : "border-line bg-sand shadow-[var(--shadow-card)] hover:border-nile-600/30 hover:shadow-[var(--shadow-lift)]"
                }`}
              >
                {featured && <div aria-hidden="true" className="logo-pattern absolute inset-0" />}

                <div className="relative flex items-start justify-between">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      featured ? "bg-gold-400 text-nile-950" : "bg-white text-nile-600 shadow-sm"
                    }`}
                  >
                    <Icon size={26} />
                  </span>
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 ${
                      featured
                        ? "border-white/20 text-white group-hover:bg-white group-hover:text-nile-950"
                        : "border-nile-600/20 text-nile-600 group-hover:bg-nile-600 group-hover:text-white"
                    }`}
                  >
                    <Arrow size={16} />
                  </span>
                </div>

                <h3 className={`relative mt-8 text-2xl font-semibold ${featured ? "text-white" : "text-nile-950"}`}>
                  {t(key)}
                </h3>
                <p className={`relative mt-2 leading-relaxed ${featured ? "text-nile-100" : "text-slate-600"}`}>
                  {t(`${key}_desc`)}
                </p>

                <ul className="relative mt-6 flex-1 space-y-2.5 text-sm">
                  {p.raw(`items.${sample}.features`).slice(0, 3).map((feature) => (
                    <li key={feature} className={`flex items-start gap-2.5 ${featured ? "text-nile-100" : "text-slate-600"}`}>
                      <Check size={16} className="mt-0.5 shrink-0 text-gold-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <FromPrice
                  id={sample}
                  className={`relative mt-6 inline-block text-sm ${featured ? "text-gold-300" : "text-gold-700"}`}
                />
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Complementary services */}
        <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {["branding", "montage", "social_media"].map((k) => (
            <span key={k} className="rounded-full border border-line bg-white px-4 py-2 text-sm text-slate-600">
              {t(k)}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
