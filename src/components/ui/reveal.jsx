"use client";

import { motion } from "framer-motion";

// Fade-and-rise on first scroll into view. Reduced motion is handled by MotionProvider.
export default function Reveal({
  children,
  delay = 0,
  y = 20,
  x = 0,
  scale = 1,
  className = "",
  as = "div",
}) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Tag>
  );
}
