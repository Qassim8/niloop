"use client";

import { motion } from "framer-motion";
import Editorial from "./ui/editorial";
import SplitReveal from "./ui/split-reveal";

// `subtitle` renders as the small eyebrow label above the title.
// variant="editorial" (inner pages): the label sits beside a start-aligned title, like the About page.
export default function SectionHeader({
  title,
  subtitle,
  description,
  chip,
  align = "center",
  light = false,
  className = "mb-12 md:mb-16",
  variant = "center",
}) {
  const isCenter = align === "center";

  if (variant === "editorial") {
    return (
      <Editorial label={subtitle} className={className}>
        <h2 className="max-w-3xl text-3xl font-semibold leading-[1.3] text-nile-950 md:text-5xl md:leading-[1.2]">
          <SplitReveal text={title} />
          {chip}
        </h2>
        {description && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{description}</p>}
      </Editorial>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-4 ${
        isCenter ? "items-center text-center" : "items-start text-start"
      } ${className}`}
    >
      {subtitle && (
        <span className={`eyebrow ${light ? "eyebrow-dark" : ""}`}>{subtitle}</span>
      )}
      <h2
        className={`max-w-3xl text-3xl font-semibold leading-[1.3] md:text-5xl md:leading-[1.2] ${
          light ? "text-white" : "text-nile-950"
        }`}
      >
        <SplitReveal text={title} />
        {chip}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-lg leading-relaxed ${
            light ? "text-nile-100" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
