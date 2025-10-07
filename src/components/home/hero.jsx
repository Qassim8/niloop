"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[95vh] flex items-center justify-center text-center">
      {/* خلفية الصورة */}
      <div className="absolute inset-0">
        <img
          src="/images/modern-buildings.webp" // ضع صورتك في مجلد public/tech-bg.jpg
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
        className="relative text-center z-10 max-w-4xl px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          مستقبل التقنية يبدأ مع <span className="text-alt">نايلوب</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          حلول رقمية مبتكرة تساعدك على بناء حضور قوي في العالم الرقمي.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="bg-alt text-main px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            ابدأ الآن
          </Link>
          <Link
            href="/about"
            className="border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#1a237e] transition"
          >
            تعرف على المزيد
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
