"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import Wave from "../ui/wave";
import { Ripples } from "../ui/shapes";

export default function QuoteSection() {
  const t = useTranslations("Projects");

  return (
    <section className="gradient-pan relative overflow-hidden bg-gradient-to-r from-[#0b2a57] via-[#1e549f] to-[#c58f3c] py-32 text-center md:py-40">
      <Wave position="top" className="text-white" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Ripples className="start-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rtl:translate-x-1/2" />
        <div className="blob float-y absolute -start-10 top-1/3 h-52 w-52 bg-[#dda853]/25 blur-2xl" />
      </div>

      <div className="container relative z-20">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <Quote className="float-y mx-auto mb-6 h-12 w-12 text-[#dda853]" />
          <p className="text-2xl font-bold leading-relaxed text-white md:text-4xl md:leading-relaxed">
            {t("quote")}
          </p>
        </motion.blockquote>
      </div>
      <Wave className="text-water" />
    </section>
  );
}
