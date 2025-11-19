"use client";

import { ShieldCheck, Users, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "../sections-header";
import { useTranslations } from "next-intl";

export default function WhyUs() {

  const t = useTranslations('Services');

  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-alt" />,
      title: t("quality"),
      desc: t("quality_desc"),
    },
    {
      icon: <Users className="w-10 h-10 text-alt" />,
      title: t("professionalism"),
      desc: t("professionalism_desc"),
    },
    {
      icon: <Zap className="w-10 h-10 text-alt" />,
      title: t("creativety"),
      desc: t("creativety_desc"),
    },
    {
      icon: <Award className="w-10 h-10 text-alt" />,
      title: t("trust"),
      desc: t("trust_desc"),
    },
  ];

  return (
    <section className="py-20 bg-slate-100" id="why-us">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <SectionHeader title={t("why_niloop")} subtitle={t("why_niloop_desc")} />

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg hover:shadow-lg transition ease-linear group"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-main group-hover:!text-[#dda853] transition duration-300">
                {item.title}
              </h3>
              <p className="text-slate-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
