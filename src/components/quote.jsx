"use client";

import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="relative py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-[#d4b483] text-center">
      <div className="container mx-auto px-6">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-white leading-relaxed"
        >
          "الابتكار هو ما يميز القائد عن التابع"
        </motion.blockquote>
      </div>
    </section>
  );
}
