"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeader from "../sections-header";
import { useTranslations } from "next-intl";

export default function Testimonials() {

  let t = useTranslations("Testimonials");

  const testimonials = [
    {
      name: t("first_name"),
      role: t("first_title"),
      image: "/images/businessman.png",
      text: t("first_desc"),
    },
    {
      name: t("second_name"),
      role: t("second_title"),
      image: "/images/businesswoman.png",
      text: t("second_desc"),
    },
    {
      name: t("third_name"),
      role: t("third_title"),
      image: "/images/businessman.png",
      text: t("third_desc"),
    },
    {
      name: t("fourth_name"),
      role: t("fourth_title"),
      image: "/images/businessman.png",
      text: t("fourth_desc"),
    },
    {
      name: t("sixth_name"),
      role: t("sixth_title"),
      image: "/images/businesswoman.png",
      text: t("sixth_desc"),
    },
    {
      name: t("seventh_name"),
      role: t("seventh_title"),
      image: "/images/businessman.png",
      text: t("seventh_desc"),
    },
    {
      name: t("eigth_name"),
      role: t("eigth_title"),
      image: "/images/businesswoman.png",
      text: t("eigth_desc"),
    },
  ];

  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-6 md:px-0">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          loop
          className="relative"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto text-center my-8"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-blue-900">
                  {t.name}
                </h3>
                <span className="text-sm text-gray-500">{t.role}</span>
                <p className="mt-4 text-gray-700 leading-relaxed">{t.text}</p>
              </motion.div>
            </SwiperSlide>
          ))}

          {/* أزرار التنقل */}
          <div className="swiper-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-blue-900/80 hover:bg-blue-800 text-white flex items-center justify-center rounded-full cursor-pointer shadow-md">
            <ArrowLeft />
          </div>
          <div className="swiper-next absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-blue-900/80 hover:bg-blue-800 text-white flex items-center justify-center rounded-full cursor-pointer shadow-md">
            <ArrowRight />
          </div>
        </Swiper>
      </div>
    </section>
  );
}
