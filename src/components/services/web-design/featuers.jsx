"use client";

import SectionHeader from "@/components/sections-header";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function FeaturesSection() {
  const t = useTranslations("Web");

  const features = [
    {
      image: "/images/responsive.png",
      title: t("feature_two"),
      description: t("feature_two_desc"),
    },
    {
      image: "/images/shopping.png",
      title: t("feature_three"),
      description: t("feature_three_desc"),
    },
    {
      image: "/images/seo.png",
      title: t("feature_four"),
      description: t("feature_four_desc"),
    },
    {
      image: "/images/ux.png",
      title: t("feature_fife"),
      description: t("feature_fife_desc"),
    },
    {
      image: "/images/network.png",
      title: t("feature_six"),
      description: t("feature_six_desc"),
    },
  ];

  return (
    <section className="section relative overflow-hidden bg-sand">
      <div className="container">
        <SectionHeader
          title={t("features_title")}
          subtitle={t("features_subtitle")}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card card-hover h-full p-8"
            >
              <div className="flex flex-col items-start text-start">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={500}
                  className="mb-5 h-14 w-14 object-contain"
                />
                <h3 className="text-xl font-semibold text-nile-950 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
