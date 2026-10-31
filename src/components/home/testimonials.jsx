"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeader from "../sections-header";
import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";
import { Blobs } from "../ui/shapes";
import Wave from "../ui/wave";

export default function Testimonials({ wave = "text-white" }) {
  let t = useTranslations("Testimonials");

  const testimonials = [
    {
      name: t("first_name"),
      role: t("first_title"),
      image: "/images/bareq-logo.webp",
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
    <section className="relative overflow-hidden bg-water pb-28 pt-20">
      <Blobs />
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
                className="relative my-8 mx-8 max-w-3xl overflow-hidden rounded-[2rem] border border-[#1e549f]/10 bg-white p-8 px-6 text-center shadow-[0_20px_50px_-20px_rgba(30,84,159,0.35)] md:mx-auto"
              >
                <Quote
                  aria-hidden="true"
                  className="absolute -top-2 start-5 h-16 w-16 text-[#dda853]/20"
                />
                <div className="flex justify-center items-center h-[60px] md:h-[150px] w-[80px] md:w-[200px] mx-auto mb-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
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
          <div className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-7 md:w-10 h-7 md:h-10 bg-[#1e549f] hover:bg-[#dda853] hover:text-[#0b2a57] text-white flex items-center justify-center rounded-full cursor-pointer shadow-lg transition">
            <ArrowLeft />
          </div>
          <div className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-7 md:w-10 h-7 md:h-10 bg-[#1e549f] hover:bg-[#dda853] hover:text-[#0b2a57] text-white flex items-center justify-center rounded-full cursor-pointer shadow-lg transition">
            <ArrowRight />
          </div>
        </Swiper>
      </div>
      {wave && <Wave className={wave} />}
    </section>
  );
}
