"use client";

import { useTranslations } from "next-intl";
import SectionHeader from "../sections-header";
import { ChevronDown } from "lucide-react";

export default function FAQ() {

  let t = useTranslations("FAQ");

  const faqs = [
    {
      question: t("q_one"),
      answer: t("q_one_desc"),
    },
    {
      question: t("q_two"),
      answer: t("q_two_desc"),
    },
    {
      question: t("q_three"),
      answer: t("q_three_desc"),
    },
    {
      question: t("q_four"),
      answer: t("q_four_desc"),
    },
    {
      question: t("q_five"),
      answer: t("q_five_desc"),
    },
    {
      question: t("q_six"),
      answer: t("q_six_desc"),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-tr from-[#1e549f] to-[#dda853]">
      <div className="container mx-auto px-6 md:px-0">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-gray-200 rounded-lg p-5 bg-white shadow-sm transition-all duration-300 ease-linear hover:shadow-md"
            >
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-main list-none">
                {faq.question}
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <ChevronDown className="w-6 h-6 text-alt" />
                </span>
              </summary>

              <p className="mt-3 text-slate-500 leading-relaxed bg-[#ddaf6020] p-3 rounded-md">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
