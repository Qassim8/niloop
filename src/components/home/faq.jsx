"use client";

import { useTranslations } from "next-intl";
import { Plus } from "lucide-react";
import SectionHeader from "../sections-header";
import Reveal from "../ui/reveal";

const keys = ["one", "two", "three", "four", "five", "six", "seven", "eight"];

export default function FAQ({ home }) {
  const t = useTranslations("FAQ");

  const faqs = keys.map((k) => ({
    question: t(`q_${k}`),
    answer: t(`q_${k}_desc`),
  }));

  return (
    <section className={`section ${home ? "bg-white" : "bg-white"}`}>
      <div className="container">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        <div className="mx-auto grid max-w-5xl items-start gap-4 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={(index % 2) * 0.08} y={14}>
              <details className="group rounded-[var(--radius-card)] border border-line bg-white p-5 shadow-[var(--shadow-card)] transition duration-300 open:border-gold-400/70 open:shadow-[var(--shadow-lift)] md:p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-nile-950 md:text-lg">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-nile-50 text-nile-600 transition duration-300 group-open:rotate-45 group-open:bg-gold-400 group-open:text-nile-950">
                    <Plus size={18} />
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-slate-600">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
