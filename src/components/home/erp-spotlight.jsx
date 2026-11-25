"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calculator, Boxes, BarChart3, UserCog, Users } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

const modules = [
  { key: "feature_one", Icon: Calculator },
  { key: "feature_two", Icon: Boxes },
  { key: "feature_three", Icon: BarChart3 },
  { key: "feature_four", Icon: UserCog },
  { key: "feature_five", Icon: Users },
];

// Module explorer for the ERP service. Shows a module map (not a fake dashboard screenshot).
export default function ErpSpotlight() {
  const t = useTranslations("ERP");
  const s = useTranslations("Services");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const [active, setActive] = useState(0);
  const { Icon: ActiveIcon, key: activeKey } = modules[active];

  return (
    <section className="px-3 py-3 md:px-4">
      <div className="surface-nile relative mx-auto max-w-[1280px] overflow-hidden rounded-[2rem] md:rounded-[3rem]">
        <div aria-hidden="true" className="logo-pattern absolute inset-0" />

        <div className="relative grid gap-12 px-6 py-16 md:px-12 md:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow eyebrow-dark">{t("spot_eyebrow")}</span>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.3] text-white md:text-5xl md:leading-[1.2]">
              {t("advantages_title")}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-nile-100">{t("advantages_desc")}</p>

            <div role="tablist" aria-label={t("features_title")} className="mt-8 space-y-2">
              {modules.map(({ key, Icon }, i) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`flex w-full cursor-pointer items-center gap-4 rounded-2xl border px-4 py-3.5 text-start transition duration-300 ${
                    active === i
                      ? "border-gold-400/60 bg-white/10 text-white"
                      : "border-white/10 text-nile-100 hover:bg-white/5"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${
                      active === i ? "bg-gold-400 text-nile-950" : "bg-white/10 text-nile-100"
                    }`}
                  >
                    <Icon size={20} />
                  </span>
                  <span className="font-semibold">{t(key)}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[22rem] rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-10">
              {/* Module map: the active module sits at the centre, the others orbit it */}
              <div className="relative mx-auto flex aspect-square w-full max-w-[20rem] items-center justify-center">
                <div aria-hidden="true" className="absolute inset-4 rounded-full border border-dashed border-white/15" />
                <div aria-hidden="true" className="absolute inset-16 rounded-full border border-white/10" />
                {modules.map(({ key, Icon }, i) => {
                  const angle = (i / modules.length) * Math.PI * 2 - Math.PI / 2;
                  const x = 50 + Math.cos(angle) * 42;
                  const y = 50 + Math.sin(angle) * 42;
                  return (
                    <button
                      key={key}
                      type="button"
                      tabIndex={-1}
                      aria-hidden="true"
                      onClick={() => setActive(i)}
                      style={{ left: `${x}%`, top: `${y}%` }}
                      className={`absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-2xl border transition duration-500 ${
                        active === i
                          ? "scale-110 border-gold-400 bg-gold-400 text-nile-950"
                          : "border-white/15 bg-nile-800 text-nile-100"
                      }`}
                    >
                      <Icon size={20} />
                    </button>
                  );
                })}
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-nile-600 text-white shadow-xl">
                  <ActiveIcon size={40} />
                </div>
              </div>

              <div className="mt-8 min-h-[7rem] text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeKey}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-semibold text-white">{t(activeKey)}</h3>
                    <p className="mx-auto mt-3 max-w-lg leading-relaxed text-nile-100">
                      {t(`${activeKey}_desc`)}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href={`/${locale}/services/erp`} className="btn-gold">
                  {s("details")}
                  <Arrow size={16} />
                </Link>
                <Link href={`/${locale}/projects/matajri`} className="btn-ghost">
                  {t("example_cta")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
