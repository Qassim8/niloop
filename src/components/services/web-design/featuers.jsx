"use client";

import SectionHeader from "@/components/sections-header";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  ShoppingBag,
  Search,
  Palette,
  Share2,
} from "lucide-react";

const features = [
  {
    icon: <Globe className="w-10 h-10 text-[#d4b483]" />,
    title: "إدارة المحتوى بسهولة",
    description:
      "نساعدك على اختيار نظام إدارة المحتوى الأنسب لموقعك الإلكتروني حسب احتياجاتك الفنية والتجارية لتضمن تجربة إدارة مرنة وسلسة.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-[#d4b483]" />,
    title: "تصميم متجاوب مع جميع الأجهزة",
    description:
      "موقعك سيبدو رائعًا على كل الشاشات من الموبايل إلى الكمبيوتر، بتصميم ذكي يراعي تجربة المستخدم أينما كان.",
  },
  {
    icon: <ShoppingBag className="w-10 h-10 text-[#d4b483]" />,
    title: "حلول المتاجر الإلكترونية",
    description:
      "نصمم ونطور متاجر إلكترونية احترافية تضمن سهولة التسوق، سرعة الأداء، وتكامل مع أنظمة الدفع الحديثة.",
  },
  {
    icon: <Search className="w-10 h-10 text-[#d4b483]" />,
    title: "تحسين محركات البحث (SEO)",
    description:
      "نصمم المواقع بأسلوب صديق لمحركات البحث لضمان ظهورك في الصفحات الأولى عبر تحسين الأداء والمحتوى.",
  },
  {
    icon: <Palette className="w-10 h-10 text-[#d4b483]" />,
    title: "تجربة مستخدم مميزة (UI/UX)",
    description:
      "نهتم بأدق تفاصيل الواجهات والتجربة البصرية لتجعل موقعك جذابًا وسهل الاستخدام في آنٍ واحد.",
  },
  {
    icon: <Share2 className="w-10 h-10 text-[#d4b483]" />,
    title: "تكامل مع شبكات التواصل",
    description:
      "نربط موقعك بسهولة مع مختلف المنصات الاجتماعية لتوسيع انتشار علامتك التجارية وزيادة التفاعل.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-50">
      {/* <div className="absolute -top-5 -start-5 w-[150px] -rotate-12">
        <img src="/images/logo 2.svg" alt="logo" className="max-w-full" />
      </div>
      <div className="absolute bottom-0 -end-5-0 w-[150px] -rotate-12">
        <img src="/images/logo 2.svg" alt="logo" className="max-w-full" />
      </div> */}
      <div className="container mx-auto px-4 text-center">
        <SectionHeader title=" لماذا خدماتنا؟" subtitle="ستحصل على مزايا فريدة" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border-t-4 border-[#d4b483] hover:border-[#1a237e]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-main mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
