"use client";

import { motion } from "framer-motion";

const container = (delay, stagger) => ({
  hidden: {},
  show: { transition: { delayChildren: delay, staggerChildren: stagger } },
});

const word = {
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

// Heading text that reveals word by word (each word slides up out of a mask) when it scrolls
// into view. Words only, never letters: splitting Arabic into letters would break the joins.
// The scroll trigger sits on the (unclipped) wrapper, because an element hidden by its own mask
// would never count as "in view".
export default function SplitReveal({ text, delay = 0, stagger = 0.05 }) {
  const words = text.split(" ");
  return (
    <motion.span
      className="inline"
      variants={container(delay, stagger)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
    >
      {words.map((w, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden align-bottom pb-[0.18em] -mb-[0.18em]">
            <motion.span className="inline-block" variants={word}>
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </motion.span>
  );
}
