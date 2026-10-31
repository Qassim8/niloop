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
    <section className="py-20 relative overflow-hidden bg-slate-50">
      <div className="container text-center">
        <SectionHeader
          title={t("features_title")}
          subtitle={t("features_subtitle")}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ key, Icon }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border-t-4 border-[#d4b483] hover:border-[#1e549f]"
            >
              <div className="flex flex-col items-center text-center">
                <Icon className="w-12 md:w-14 h-12 md:h-14 mb-4 text-main" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-main mb-2">
                  {t(key)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`${key}_desc`)}
                </p>
              </div>
            </motion.div>
          ))}

          <div className="p-8 bg-main text-white rounded-2xl shadow-md flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-semibold mb-2">{t("example_title")}</h3>
            <p className="leading-relaxed mb-5 text-white/90">
              {t("example_desc")}
            </p>
            <Link
              href={`/${locale}/projects/matajri`}
              className="inline-block bg-alt text-main font-semibold px-5 py-2 rounded-xl hover:opacity-90 transition"
            >
              {t("example_cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
