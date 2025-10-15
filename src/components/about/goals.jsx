"use client";

import { Eye, MessageSquareText, Compass } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "../sections-header";

export default function GoalsSection() {
  const goals = [
    {
      icon: <Eye size={32} className="text-main" />,
      title: "الرؤية",
      description:
        "نسعى لأن نكون الرواد في تقديم الحلول التقنية المبتكرة التي تساهم في تطوير المجتمعات وتحقيق التحول الرقمي.",
    },
    {
      icon: <MessageSquareText size={32} className="text-main" />,
      title: "الرسالة",
      description:
        "تقديم خدمات وحلول عالية الجودة لعملائنا، مع التركيز على الابتكار والالتزام والتميز المستمر.",
    },
    {
      icon: <Compass size={32} className="text-main" />,
      title: "الاستراتيجية",
      description:
        "العمل بخطط واضحة مبنية على التحليل العميق للسوق، وبناء شراكات قوية لتحقيق أهدافنا المشتركة.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeader title="اهدافنا" subtitle="ما نسعى لتحقيقه" />

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
                <h3 className="text-xl font-semibold mb-2 text-main">
                  {goal.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
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
