"use client"
import SectionHeader from "@/components/sections-header";
import { motion } from "framer-motion";
import {
  Megaphone,
  BarChart3,
  Users,
  Globe,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: <Megaphone className="w-10 h-10 text-alt" />,
    title: "إعلانات رقمية فعالة",
    description:
      "نصمم حملات إعلانية موجهة بدقة لتصل إلى جمهورك المستهدف بأقل تكلفة وأعلى عائد.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-alt" />,
    title: "تحليل الأداء والبيانات",
    description:
      "نستخدم أدوات التحليل المتقدمة لقياس النتائج وتحسين الحملات خطوة بخطوة.",
  },
  {
    icon: <Users className="w-10 h-10 text-alt" />,
    title: "بناء جمهور مستهدف",
    description:
      "نساعدك على تحديد جمهورك المثالي وزيادة عدد المتابعين والعملاء المحتملين.",
  },
  {
    icon: <Globe className="w-10 h-10 text-alt" />,
    title: "تحسين الظهور على محركات البحث (SEO)",
    description:
      "نرتقي بموقعك إلى النتائج الأولى في محركات البحث لجذب زيارات عضوية مستمرة.",
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-alt" />,
    title: "إدارة منصات التواصل الاجتماعي",
    description:
      "ننشر محتوى مميز ونبني علاقة تفاعلية قوية مع جمهورك عبر مختلف المنصات.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-alt" />,
    title: "زيادة المبيعات والتحويلات",
    description:
      "نستخدم استراتيجيات تسويق مدروسة لتحويل الزوار إلى عملاء دائمين.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <SectionHeader
          title=" لماذا خدماتنا التسويق؟"
          subtitle="خطوات مدروسة لنتائج ملموسة"
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
