"use client";
import SectionHeader from "@/components/sections-header";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function FeaturesSection() {
  const t = useTranslations("Marketing");
  const features = [
    {
      image: "/images/advertising-banner.png",
      title: t("feature_one"),
      description: t("feature_one_desc"),
    },
    {
      image: "/images/tracking.png",
      title: t("feature_two"),
      description: t("feature_two_desc"),
    },
    {
      image: "/images/loyalty.png",
      title: t("feature_three"),
      description: t("feature_three_desc"),
    },
    {
      image: "/images/social-media.png",
      title: t("feature_four"),
      description: t("feature_four_desc"),
    },
    {
      image: "/images/chart-up.png",
      title: t("feature_fife"),
      description: t("feature_fife_desc"),
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <SectionHeader title={""} subtitle={""} />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border-t-4 border-[#d4b483] hover:border-[#1e549f]"
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={500}
                  className="w-12 md:w-16 mb-4"
                />
                <h3 className="text-xl font-semibold text-main mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
