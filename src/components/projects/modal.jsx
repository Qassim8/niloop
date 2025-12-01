"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

function Modal({ work, onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg w-full max-w-lg p-6 relative shadow-2xl animate-fadeIn overflow-y-auto overflow-auto max-h-[80vh]"
      >
        {/* زر الإغلاق */}
        <button
          onClick={onClose}
          className="absolute block top-1 right-3 mb-10 text-2xl font-bold text-gray-400 hover:text-gray-700 cursor-pointer"
        >
          ×
        </button>

        {/* صورة */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          loop
          className="relative my-3 border border-amber-200"
        >
          {work.images?.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt="Work Image"
                width={500}
                height={400}
                className="h-[350px] w-full"
              />
            </SwiperSlide>
          ))}

          <div className="swiper-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-blue-900/80 hover:bg-blue-800 text-white flex items-center justify-center rounded-full cursor-pointer shadow-md">
            <ArrowLeft />
          </div>
          <div className="swiper-next absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-blue-900/80 hover:bg-blue-800 text-white flex items-center justify-center rounded-full cursor-pointer shadow-md">
            <ArrowRight />
          </div>
        </Swiper>

        {/* نبذة */}
        <p className="text-gray-700 mb-4 leading-relaxed">{work.desc}</p>

        {/* زر زيارة */}
        <Link
          href={work.link}
          className="inline-block bg-main text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
        >
          زيارة المشروع
        </Link>
      </div>
    </div>
  );
}

export default Modal;
