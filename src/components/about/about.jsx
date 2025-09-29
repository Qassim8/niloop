"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AboutSection() {
  const slides = [
    {
      icon: "/icons/experience.svg",
      title: "خبرة تزيد عن ١١ عام",
      text: "فريق من المبدعين في البرمجة والتصميم والتسويق. منذ ٢٠١٢ طورنا العديد من المشاريع الناجحة ونواصل تقديم حلول متكاملة.",
    },
    {
      icon: "/icons/creative.svg",
      title: "إبداع متجدد",
      text: "نبتكر أفكارًا جديدة ونفكر خارج الصندوق لنحول رؤى عملائنا إلى واقع ملموس وجذاب.",
    },
    {
      icon: "/icons/development.svg",
      title: "التميز",
      text: "قدمنا مشاريع وشراكات ناجحة مع كبرى العلامات التجارية مستخدمين أحدث التقنيات لنظل في الصدارة.",
    },
    {
      icon: "/icons/release.svg",
      title: "انتشار واسع",
      text: "من الرياض توسعنا إلى الخليج وتركيا والعالم، ونفخر بفريق مكون من خبراء متعددين التخصصات.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* الصورة + اللوقو */}
        <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/office.jpg"
            alt="عن نايلوب"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="شعار نايلوب"
              width={160}
              height={160}
              className="drop-shadow-lg"
            />
          </div>
        </div>

        {/* النص + السويبر */}
        <div>
          <h2 className="text-3xl font-bold text-[#1a237e] mb-8 text-center md:text-right">
            عن نايلوب
          </h2>

          <Swiper
            modules={[EffectCube, Autoplay, Navigation, Pagination]}
            effect="cube"
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            navigation
            className="w-full h-[320px] md:h-[360px] rounded-xl shadow-md bg-white"
          >
            {slides.map((item, i) => (
              <SwiperSlide
                key={i}
                className="flex flex-col items-center justify-center p-6 text-center"
              >
                <span className="mb-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={60}
                    height={60}
                  />
                </span>
                <h4 className="text-xl font-semibold text-[#1a237e] mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
