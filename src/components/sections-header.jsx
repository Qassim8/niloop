"use client";

import { motion } from "framer-motion";

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative mb-14 z-30 flex flex-col ${
        isCenter ? "items-center text-center" : "items-start text-start"
      }`}
    >
      <div className="relative">
        {/* Ghost word behind the title */}
        <p
          aria-hidden="true"
          className={`relative top-8 md:top-12 max-w-[88vw] truncate text-4xl md:text-[72px] font-extrabold opacity-10 select-none ${
            light ? "text-white" : "text-alt"
          }`}
        >
          {subtitle}
        </p>
        <h2
          className={`text-3xl md:text-5xl font-bold inline-block mb-4 ${
            light ? "text-white" : "text-main"
          }`}
        >
          {title}
        </h2>
      </div>
      {/* Wavy underline: the Nile in miniature */}
      <span
        aria-hidden="true"
        className="wavy-underline block h-2 w-28"
      />
      <span className="sr-only">{subtitle}</span>
    </motion.div>
  );
}
