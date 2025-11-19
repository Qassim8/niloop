"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Hero() {

  const t = useTranslations("Hero")
  const locale = useLocale();

  return (
    <section className="relative h-[95vh] flex items-center justify-center text-center">
      {/* خلفية الصورة */}
      <div className="absolute inset-0">
        <img
          src="/images/modern-buildings.webp"
          alt="خلفية تقنية"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-800/70"></div>
      </div>

      {/* المحتوى */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center z-10 max-w-6xl px-6"
      >
        <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight mb-6">
          {t("hero_title")}
          <span className="text-alt text-4xl md:text-6xl font-bold">
            {t("niloop")}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          {`' ${t("hero_subtitle")} '`}
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href={`${locale}/services`}
            className="bg-alt text-main px-6 py-3 rounded-xl font-semibold hover:opacity-85 transition"
          >
            {t("start_now")}
          </Link>
          <Link
            href={`${locale}/about`}
            className="border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#1e549f] transition"
          >
            {t("more")}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
