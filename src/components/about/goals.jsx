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
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeader title={t('our_goals')} subtitle={t('our_goals_desc')} />

        <div className="flex flex-col gap-6">
          {goals.map((goal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-alt shadow-md rounded-lg p-5 flex items-start gap-5 hover:!bg-yellow-50 transition duration-300"
            >
              <div className="flex-shrink-0">{goal.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-main">
                  {goal.title}
                </h3>
                <p className="text-slate-600 font-semibold leading-relaxed">
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
