"use client";

import { MotionConfig } from "framer-motion";
import { useEffect } from "react";

// Makes every framer-motion animation respect the visitor's "reduce motion" setting and
// feeds the pointer position to cards marked with data-spotlight (soft gold glow on hover).
export default function MotionProvider({ children }) {
  useEffect(() => {
    const onMove = (event) => {
      const card = event.target instanceof Element ? event.target.closest("[data-spotlight]") : null;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
