"use client"
import SectionHeader from "@/components/sections-header";
import { PenTool, Brush, Image, Layers, Monitor, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <PenTool className="w-10 h-10 text-[#d4b483]" />,
    title: "تصميم شعارات احترافية",
    description:
      "نصمم شعارات تعكس هوية علامتك التجارية وتبقى عالقة في ذهن عملائك.",
  },
  {
    icon: <Brush className="w-10 h-10 text-[#d4b483]" />,
    title: "تصاميم عصرية وجذابة",
    description: "نواكب أحدث صيحات التصميم لنمنحك مظهراً مميزاً يلفت الانتباه.",
  },
  {
    icon: <Image className="w-10 h-10 text-[#d4b483]" />,
    title: "معالجة الصور باحترافية",
    description:
      "تحسين وتعديل الصور بجودة عالية تجعلها جاهزة للاستخدام في أي مكان.",
  },
  {
    icon: <Layers className="w-10 h-10 text-[#d4b483]" />,
    title: "تصميم هوية بصرية متكاملة",
    description:
      "من الشعار إلى الألوان والخطوط، نصنع لك هوية بصرية قوية ومتناسقة.",
  },
  {
    icon: <Monitor className="w-10 h-10 text-[#d4b483]" />,
    title: "تصميم واجهات رقمية",
    description:
      "نصمم واجهات أنيقة وسهلة الاستخدام للمواقع والتطبيقات تعزز تجربة المستخدم.",
  },
  {
    icon: <Share2 className="w-10 h-10 text-[#d4b483]" />,
    title: "تصاميم منصات التواصل",
    description:
      "بوستات وبانرات احترافية تزيد من تفاعل جمهورك مع علامتك التجارية.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <SectionHeader
          title=" لماذا خدماتنا؟"
          subtitle="جمال يلفت الانتباه"
        />

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
                <p className="text-slate-500 text-[15px]">
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
