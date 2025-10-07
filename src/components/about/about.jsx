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

export default function AboutSection() {
  const slides = [
    {
      icon: "/images/logo 2.svg",
      title: "خبرة تزيد عن ثلاث أعوام",
      text: "فريق من المبدعين في البرمجة والتصميم والتسويق. منذ 2021 طورنا العديد من المشاريع الناجحة ونواصل تقديم حلول متكاملة.",
    },
    {
      icon: "/images/logo 2.svg",
      title: "إبداع متجدد",
      text: "نبتكر أفكارًا جديدة ونفكر خارج الصندوق لنحول رؤى عملائنا إلى واقع ملموس وجذاب.",
    },
    {
      icon: "/images/logo 2.svg",
      title: "التميز",
      text: "قدمنا مشاريع وشراكات ناجحة مع كبرى العلامات التجارية مستخدمين أحدث التقنيات لنظل في الصدارة.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
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
            alt="عن نايلوب"
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
          <SectionHeader title="من نحن" subtitle="تعرف على نايلوب" />

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
