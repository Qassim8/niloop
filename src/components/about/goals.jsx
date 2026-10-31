"use client";

import { Eye, MessageSquareText, Compass } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "../sections-header";
import { useTranslations } from "next-intl";

export default function GoalsSection() {
  const t = useTranslations("About");

  const goals = [
    {
      icon: <Eye size={32} className="text-main" />,
      title: t("vision"),
      description: t("vision_desc"),
    },
    {
      icon: <MessageSquareText size={32} className="text-main" />,
      title: t("mission"),
      description: t("mission_desc"),
    },
    {
      icon: <Compass size={32} className="text-main" />,
      title: t("strategy"),
      description: t("strategy_desc"),
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container">
        <SectionHeader title={t("our_goals")} subtitle={t("our_goals_desc")} />

        <div className="flex flex-col gap-6">
          {goals.map((goal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="card-soft flex items-start gap-5 border-s-4 border-s-[#dda853] p-6"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#dda853] to-[#e9c277] shadow-md">{goal.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-main">
                  {goal.title}
                </h3>
                <p className="text-sm md:text-[16px] text-slate-600 leading-relaxed">
                  {goal.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
