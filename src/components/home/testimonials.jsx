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
      image: "/images/bareq.png",
      text: t("first_desc"),
    },
    {
      name: t("second_name"),
      role: t("second_title"),
      image: "/images/sanaa.png",
      text: t("second_desc"),
    },
    {
      name: t("third_name"),
      role: t("third_title"),
      image: "/images/badr-logo.png",
      text: t("third_desc"),
    },
    {
      name: t("fourth_name"),
      role: t("fourth_title"),
      image: "/images/zadi-logo.png",
      text: t("fourth_desc"),
    },
    {
      name: t("seventh_name"),
      role: t("seventh_title"),
      image: "/images/abda_bswal.png",
      text: t("seventh_desc"),
    },
    {
      name: t("eigth_name"),
      role: t("eigth_title"),
      image: "/images/eatc-logo.png",
      text: t("eigth_desc"),
    },
  ];

  return (
    <section className="py-20 bg-slate-100">
      <div className="container">
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
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 max-w-3xl px-5 text-center my-8 mx-8 md:mx-auto"
              >
                <div className="flex justify-center items-center h-[60px] md:h-[150px] w-[80px] md:w-[200px] mx-auto mb-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="max-w-full max-h-full"
                  />
                </div>
                <h3 className="md:text-xl font-semibold text-blue-900">
                  {t.name}
                </h3>
                <span className="text-gray-500">{t.role}</span>
                <p className="text-sm mt-4 text-gray-700 leading-relaxed">
                  {t.text}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}

          {/* أزرار التنقل */}
          <div className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-7 md:w-10 h-7 md:h-10 bg-blue-900/80 hover:bg-blue-800 text-white flex items-center justify-center rounded-full cursor-pointer shadow-md">
            <ArrowLeft />
          </div>
          <div className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-7 md:w-10 h-7 md:h-10 bg-blue-900/80 hover:bg-blue-800 text-white flex items-center justify-center rounded-full cursor-pointer shadow-md">
            <ArrowRight />
          </div>
        </Swiper>
      </div>
    </section>
  );
}
