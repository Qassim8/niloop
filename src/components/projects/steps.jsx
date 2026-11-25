"use client";
import SectionHeader from "../sections-header";
import { motion } from "framer-motion";
import Reveal from "../ui/reveal";
import LoopThread from "../ui/loop-thread";
import { useTranslations } from "next-intl";

export default function HowWeWork({ tone = "white" }) {
  const t = useTranslations("Projects");

  const steps = ["one", "two", "three", "four"].map((k, i) => ({
    id: i + 1,
    title: t(`step_${k}`),
    desc: t(`step_${k}_desc`),
  }));

  return (
    <section className={`section relative overflow-hidden ${tone === "sand" ? "bg-sand" : "bg-white"}`}>
      <LoopThread className="absolute start-1/2 top-10 hidden w-[60rem] max-w-none -translate-x-1/2 opacity-70 md:block rtl:translate-x-1/2" />

      <div className="container relative">
        <SectionHeader title={t("how_it_work")} subtitle={t("how_it_work_desc")} />

        <motion.div
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 hidden h-0.5 origin-[100%_50%] rounded-full bg-gradient-to-l from-gold-400 via-nile-300 to-transparent lg:block ltr:origin-[0%_50%] ltr:bg-gradient-to-r"
        />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal as="li" key={step.id} delay={index * 0.1}>
              <div data-spotlight className="card card-hover relative h-full p-7">
                <span className="font-[family-name:var(--font-display)] text-6xl font-semibold text-nile-100">
                  <span dir="ltr">{String(step.id).padStart(2, "0")}</span>
                </span>
                <h3 className="mt-4 text-xl font-semibold text-nile-950">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{step.desc}</p>
                <span aria-hidden="true" className="absolute bottom-0 start-7 h-1 w-10 rounded-full bg-gold-400" />
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
