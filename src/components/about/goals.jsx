"use client";

import { Eye, MessageSquareText, Compass } from "lucide-react";
import { motion } from "framer-motion";

export default function GoalsSection() {
  const goals = [
    {
      icon: <Eye size={32} className="text-[#1a237e]" />,
      title: "الرؤية",
      description:
        "نسعى لأن نكون الرواد في تقديم الحلول التقنية المبتكرة التي تساهم في تطوير المجتمعات وتحقيق التحول الرقمي.",
    },
    {
      icon: <MessageSquareText size={32} className="text-[#1a237e]" />,
      title: "الرسالة",
      description:
        "تقديم خدمات وحلول عالية الجودة لعملائنا، مع التركيز على الابتكار والالتزام والتميز المستمر.",
    },
    {
      icon: <Compass size={32} className="text-[#1a237e]" />,
      title: "الاستراتيجية",
      description:
        "العمل بخطط واضحة مبنية على التحليل العميق للسوق، وبناء شراكات قوية لتحقيق أهدافنا المشتركة.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1a237e] mb-12">
          أهدافنا
        </h2>

        <div className="flex flex-col gap-6">
          {goals.map((goal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4 hover:shadow-lg transition"
            >
              <div className="flex-shrink-0">{goal.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#1a237e]">
                  {goal.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
