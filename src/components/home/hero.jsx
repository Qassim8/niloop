"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useRef } from "react";
import ImageSlot from "@/components/ui/image-slot";

// Full-screen hero: city skyline under a blue wash, centred headline, two buttons.
// While scrolling, the picture drifts and zooms slowly and the text lifts away.
export default function Hero() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-screen min-h-[34rem] items-center justify-center overflow-hidden text-center"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <ImageSlot
          id="hero-bg"
          alt={t("hero_alt")}
          fallback="/images/modern-buildings.webp"
          sizes="100vw"
          quality={90}
          priority
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-blue-800/70" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 max-w-6xl px-6"
      >
        {/* Text stays visible before JavaScript loads (first paint); it only slides up. */}
        <motion.div
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="mb-6 text-4xl font-semibold leading-tight text-white md:text-6xl md:leading-tight">
            {t("hero_title")}
            <span className="text-4xl font-bold text-gold-400 md:text-6xl">
              {t("niloop")}
            </span>
          </h1>
          <p className="mb-8 text-lg text-gray-200 md:text-xl">{`' ${t("hero_subtitle")} '`}</p>

          <div className="flex flex-row justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="flex-1 rounded-xl bg-gold-400 py-3 font-semibold text-nile-600 transition hover:bg-gold-300 md:flex-none md:px-10"
            >
              {t("start_now")}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="flex-1 rounded-xl border border-white py-3 font-semibold text-white transition hover:bg-white hover:text-nile-600 md:flex-none md:px-10"
            >
              {t("more")}
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
