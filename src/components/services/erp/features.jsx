"use client";

import SectionHeader from "@/components/sections-header";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Calculator, Boxes, BarChart3, UserCog, Users } from "lucide-react";

const features = [
  { key: "feature_one", Icon: Calculator },
  { key: "feature_two", Icon: Boxes },
  { key: "feature_three", Icon: BarChart3 },
  { key: "feature_four", Icon: UserCog },
  { key: "feature_five", Icon: Users },
];

export default function ErpFeatures() {
  const t = useTranslations("ERP");
  const locale = useLocale();

  return (
    <section className="section relative overflow-hidden bg-sand">
      <div className="container">
        <SectionHeader
          title={t("features_title")}
          subtitle={t("features_subtitle")}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {features.map(({ key, Icon }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card card-hover h-full p-8"
            >
              <div className="flex flex-col items-start text-start">
                <Icon className="mb-5 h-12 w-12 rounded-2xl bg-nile-50 p-3 text-nile-600" strokeWidth={1.75} />
                <h3 className="text-xl font-semibold text-nile-950 mb-2">
                  {t(key)}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t(`${key}_desc`)}
                </p>
              </div>
            </motion.div>
          ))}

          <div className="surface-nile flex h-full flex-col items-start justify-center rounded-[var(--radius-card)] p-8 text-start">
            <h3 className="text-xl font-semibold mb-2">{t("example_title")}</h3>
            <p className="leading-relaxed mb-5 text-white/90">
              {t("example_desc")}
            </p>
            <Link
              href={`/${locale}/projects/matajri`}
              className="btn-gold !min-h-10 !px-5 !py-2"
            >
              {t("example_cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
