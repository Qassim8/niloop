"use client";

import { motion } from "framer-motion";

export default function SectionHeader({ title, subtitle, align = "center" }) {
  return (
    <div
      className={`relative mb-12 z-20 text-${align} flex flex-col items-${
        align === "center" ? "center" : "start"
      }`}
    >
      <div className="relative">
        {/* الوصف */}
        <p
          className="relative top-8 md:top-12 text-5xl md:text-[80px] font-extrabold text-alt opacity-10"
        >
          {subtitle}
        </p>
        {/* العنوان */}
        <h2
          className="text-2xl md:text-5xl font-bold text-main inline-block mb-4"
        >
          {title}
        </h2>
      </div>
    </div>
  );
}
