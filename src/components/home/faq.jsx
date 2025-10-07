"use client";

import SectionHeader from "../sections-header";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
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

  return (
    <section className="py-20 bg-gradient-to-tr from-[#1e549f] to-[#dda853]">
      <div className="container mx-auto px-6 md:px-0">
        <SectionHeader title="الأسئلة الشائعة" subtitle="ماذا يدور في ذهنك؟" />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-gray-200 rounded-lg p-5 bg-white shadow-sm transition-all duration-300 ease-linear hover:shadow-md"
            >
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-main list-none">
                {faq.question}
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <ChevronDown className="w-6 h-6 text-main" />
                </span>
              </summary>

              <p className="mt-3 text-slate-500 leading-relaxed bg-[#ffe1ae10] p-3 rounded-md">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
