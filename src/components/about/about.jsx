"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "../sections-header";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site";
import Wave from "../ui/wave";
import { Ripples } from "../ui/shapes";

export default function AboutSection({ wave = "text-white" }) {
  const t = useTranslations("About");
  const stats = useTranslations("Stats");

  const years = new Date().getFullYear() - siteConfig.foundingYear;

  const slides = [
    { title: t("expert", { years }), text: t("expert_desc") },
    { title: t("creative"), text: t("creative_desc") },
    { title: t("excellence"), text: t("excellence_desc") },
  ];

  return (
    <section id="about" className="bg-sand relative overflow-hidden pb-28 pt-20">
      <div className="container grid grid-cols-1 items-center gap-14 md:grid-cols-2">
        {/* Image in an organic "dune" shape with a gold shadow blob */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative order-last mx-auto w-full max-w-md md:order-first md:max-w-none"
        >
          <div className="blob absolute -bottom-6 -end-6 h-full w-full bg-gradient-to-br from-[#dda853] to-[#f1d49a] opacity-80" />
          <div className="blob relative aspect-[4/5] w-full overflow-hidden shadow-2xl">
            <Image
              src="/images/about.webp"
              alt={t("image_alt")}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a57]/50 to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="float-y absolute -start-3 bottom-10 rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md md:-start-8">
            <p dir="ltr" className="text-3xl font-extrabold text-main">{years}+</p>
            <p className="text-sm text-slate-500">{stats("expert")}</p>
          </div>
          <Ripples className="-top-10 -end-10 h-40 w-40 [&>span]:!border-[#dda853]/40" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <SectionHeader title={t("title")} subtitle={t("subtitle")} align="start" />

          <Swiper
            modules={[Autoplay, Pagination]}
            grabCursor
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="relative w-full !pb-10"
          >
            {slides.map((item, i) => (
              <SwiperSlide key={i} className="!h-auto">
                <div className="card-soft h-full p-7">
                  <h3 className="mb-3 text-xl font-bold text-main md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-slate-600">{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
      {wave && <Wave className={wave} />}
    </section>
  );
}
