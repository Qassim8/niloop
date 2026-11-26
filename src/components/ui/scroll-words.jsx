"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Fragment, useRef } from "react";

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}
    </motion.span>
  );
}

// A paragraph whose words light up one by one as it scrolls through the screen.
// `chips` maps a word index to a node (usually <Chip/>) inserted after that word.
export default function ScrollWords({ text, className = "", chips = {} }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <Word progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
            {word}
          </Word>
          {chips[i]}
          {" "}
        </Fragment>
      ))}
    </p>
  );
}
