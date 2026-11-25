"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// Keep the loader on screen at least this long so quick (prefetched) navigations don't flash.
const MIN_VISIBLE_MS = 600;
// Never leave the loader stuck if a navigation fails.
const SAFETY_MS = 10000;

// Full-screen page-transition loader: the Niloop logo with a light travelling around its loops.
// It starts when an internal link is clicked (or the language is switched) and ends when the
// new route has rendered.
export default function RouteLoader() {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const startedAt = useRef(0);
  const hideTimer = useRef(null);
  const safetyTimer = useRef(null);

  useEffect(() => {
    const start = () => {
      clearTimeout(hideTimer.current);
      clearTimeout(safetyTimer.current);
      startedAt.current = Date.now();
      setVisible(true);
      safetyTimer.current = setTimeout(() => {
        startedAt.current = 0;
        setVisible(false);
      }, SAFETY_MS);
    };

    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!link || (link.target && link.target !== "_self") || link.hasAttribute("download")) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      start();
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("niloop:navigate", start);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("niloop:navigate", start);
      clearTimeout(hideTimer.current);
      clearTimeout(safetyTimer.current);
    };
  }, []);

  // The new route has rendered: hide once the minimum display time has passed.
  useEffect(() => {
    if (!startedAt.current) return;
    const wait = Math.max(0, MIN_VISIBLE_MS - (Date.now() - startedAt.current));
    hideTimer.current = setTimeout(() => {
      clearTimeout(safetyTimer.current);
      startedAt.current = 0;
      setVisible(false);
    }, wait);
    return () => clearTimeout(hideTimer.current);
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-white/90 backdrop-blur-md"
        >
          <div className="loader-logo">
            <img src="/images/Logo_mark.svg" alt="" width="132" height="84" />
          </div>
          <span className="sr-only">{t("loading")}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
