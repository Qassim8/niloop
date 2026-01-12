"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function QuoteSection() {
  let t = useTranslations("Projects");
  return (
    <section className="relative py-24 bg-gradient-to-r from-[#1e549f] to-[#dda853] text-center">
      <div className="container">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl md:text-4xl font-bold text-white leading-relaxed"
        >
          "{t("quote")}"
        </motion.blockquote>
      </div>
    </section>
  );
}
