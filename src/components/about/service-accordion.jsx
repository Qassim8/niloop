"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Plus } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import Editorial from "../ui/editorial";
import SplitReveal from "../ui/split-reveal";

const items = [
  { key: "web", href: "/services/web-design", sample: "web_starter" },
  { key: "erp", href: "/services/erp", sample: "erp_mini" },
  { key: "graphic", href: "/services/graphic-design", sample: "identity" },
  { key: "ads", href: "/services/ads", sample: "ads" },
  { key: "content", href: "/services/content-writing", sample: "content_pack" },
];

// Dark section: services as an accordion. One row is open at a time and shows what we do.
export default function ServiceAccordion() {
  const t = useTranslations("Services");
  const a = useTranslations("About");
  const p = useTranslations("Pricing");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const [open, setOpen] = useState(0);

  return (
    <section className="px-3 py-3 md:px-4">
      <div className="surface-nile relative mx-auto max-w-[1280px] overflow-hidden rounded-[2rem] md:rounded-[3rem]">
        <div aria-hidden="true" className="logo-pattern absolute inset-0" />
        <div className="container relative py-16 md:py-24">
          <Editorial label={a("services_label")} tone="dark">
            <h2 className="mb-10 max-w-3xl text-3xl font-semibold leading-[1.3] text-white md:mb-14 md:text-5xl md:leading-[1.2]">
              <SplitReveal text={t("list_title")} />
            </h2>

            <ul className="border-b border-white/15">
              {items.map(({ key, href, sample }, i) => {
                const isOpen = open === i;
                return (
                  <li key={key} className="border-t border-white/15">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="group flex w-full cursor-pointer items-center gap-4 py-5 text-start md:gap-8 md:py-7"
                    >
                      <span dir="ltr" className={`w-8 shrink-0 text-sm font-medium transition-colors ${isOpen ? "text-gold-400" : "text-nile-300"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`flex-1 text-xl font-semibold transition-colors md:text-3xl ${isOpen ? "text-gold-300" : "text-white group-hover:text-gold-300"}`}>
                        {t(key)}
                      </span>
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
                          isOpen ? "rotate-45 border-gold-400 bg-gold-400 text-nile-950" : "border-white/25 text-white group-hover:border-gold-400"
                        }`}
                      >
                        <Plus size={18} />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-8 pb-8 md:grid-cols-12 md:pb-10 md:ps-16">
                            <div className="md:col-span-6">
                              <p className="text-lg leading-relaxed text-nile-100">
                                {key === "content" ? t("content_desc") : t(`${key}_desc`)}
                              </p>
                              <Link
                                href={`/${locale}${href}`}
                                className="btn-gold group mt-6"
                              >
                                {t("details")}
                                <Arrow size={16} className="transition rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1" />
                              </Link>
                            </div>
                            <div className="md:col-span-6">
                              <p className="mb-3 text-sm text-nile-300">{a("works_on")}</p>
                              <ul className="space-y-2.5 text-nile-50">
                                {p.raw(`items.${sample}.features`).map((f) => (
                                  <li key={f} className="flex items-start gap-3">
                                    <Check size={16} className="mt-1 shrink-0 text-gold-400" />
                                    {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </Editorial>
        </div>
      </div>
    </section>
  );
}
