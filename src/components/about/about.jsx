"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCreative,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHeader from "../sections-header";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function AboutSection() {

  let t = useTranslations("About");

  const slides = [
    {
      icon: "/images/logo 2.svg",
      title: t("expert"),
      text: t("expert_desc"),
    },
    {
      icon: "/images/logo 2.svg",
      title: t("creative"),
      text: t("creative_desc"),
    },
    {
      icon: "/images/logo 2.svg",
      title: t("excellence"),
      text: t("excellence_desc"),
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* الصورة */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-lg md:order-first order-last"
        >
          <Image
            src="/images/5.jpg"
            alt={t("title")}
            fill
            className="object-cover max-w-full"
          />
          <div className="absolute inset-0 bg-blue-800/30 flex items-center justify-center" />
        </motion.div>

        {/* النص + السويبر */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader title={t("title")} subtitle={t("subtitle") } />

          <Swiper
            modules={[EffectCreative, Autoplay, Navigation, Pagination]}
            grabCursor
            autoplay={{ delay: 4000 }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet custom-bullet",
              bulletActiveClass:
                "swiper-pagination-bullet-active custom-bullet-active",
            }}
            className="w-full md:h-[200px] relative"
          >
            {slides.map((item, i) => (
              <SwiperSlide
                key={i}
                className="flex flex-col items-center justify-center p-6 text-center"
              >
                <h4 className="md:text-2xl font-semibold text-main mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-500 leading-relaxed">{item.text}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

    </section>
  );
}
