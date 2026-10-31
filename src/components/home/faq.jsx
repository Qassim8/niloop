"use client";

import { useTranslations } from "next-intl";
import SectionHeader from "../sections-header";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Wave from "../ui/wave";
import { Blobs } from "../ui/shapes";

export default function FAQ({ home }) {
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
    {
      question: t("q_seven"),
      answer: t("q_seven_desc"),
    },
    {
      question: t("q_eight"),
      answer: t("q_eight_desc"),
    },
  ];

  return (
    <section
      className={`relative overflow-hidden ${
        home
          ? "gradient-pan bg-gradient-to-tr from-[#0b2a57] via-[#1e549f] to-[#c58f3c] py-32"
          : "bg-white py-20"
      }`}
    >
      {home ? <Wave position="top" className="text-water" /> : <Blobs />}
      <div className="container relative z-20">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} light={home} />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.details
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
              className="group rounded-2xl border border-[#1e549f]/10 border-s-4 border-s-transparent bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg open:border-s-[#dda853] open:shadow-lg"
            >
              <summary className="text-sm md:text-lg flex justify-between items-center cursor-pointer font-semibold text-main list-none">
                {faq.question}
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <ChevronDown className="w-6 h-6 text-alt" />
                </span>
              </summary>

              <p className="mt-3 rounded-xl bg-[#dda853]/10 p-4 leading-relaxed text-slate-600">
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
      {home && <Wave className="text-white" />}
    </section>
  );
}
