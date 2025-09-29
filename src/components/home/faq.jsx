"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "ما هي الخدمات التي تقدمونها؟",
      answer:
        "نقدم خدمات تطوير مواقع الويب، تطبيقات الجوال، التسويق الإلكتروني، وتصميم العلامات التجارية.",
    },
    {
      question: "هل أستطيع طلب تصميم مخصص لمشروعي؟",
      answer:
        "بالطبع! نحن نعمل مع عملائنا لتقديم حلول مخصصة تناسب احتياجاتهم الخاصة.",
    },
    {
      question: "كم يستغرق إنجاز المشروع؟",
      answer:
        "المدة تعتمد على حجم المشروع وتعقيده، لكننا نلتزم دائمًا بالجداول الزمنية المتفق عليها.",
    },
    {
      question: "هل تقدمون دعم بعد التسليم؟",
      answer:
        "نعم، نوفر خطط دعم وصيانة لضمان استمرار عمل مشاريع عملائنا بكفاءة عالية.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-yellow-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          الأسئلة الشائعة
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              {/* رأس السؤال */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-right duration-300"
              >
                <span className="text-lg font-semibold text-blue-900">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ChevronDown className="w-5 h-5 text-blue-900" />
                </motion.div>
              </button>

              {/* الإجابة */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 , ease: "linear" }}
                    className="px-6 pb-4 text-gray-700 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
