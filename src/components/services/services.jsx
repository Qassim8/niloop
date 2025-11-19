"use client";
import { motion } from "framer-motion";
import {
  Code,
  PenTool,
  FileText,
  LogsIcon,
  Video,
  SmartphoneCharging,
  PencilRulerIcon,
} from "lucide-react";
import SectionHeader from "../sections-header";
import { useTranslations } from "next-intl";


export default function ServicesSection() {
  const t = useTranslations("Services");

  const cards = [
    {
      id: 1,
      title: t("web"),
      desc: t("web_desc"),
      icon: <Code size={48} className="mx-auto text-white" />,
      bg: "images/bigstock-female-programmer-working-on-c-471073905.jpg",
    },
    {
      id: 2,
      title: t("graphic"),
      desc: t("graphic_desc"),
      icon: <PenTool size={48} className="mx-auto text-white" />,
      bg: "images/How-To-Design-a-Logo-5-Easy-Steps.jpg",
    },
    {
      id: 3,
      title: t("content"),
      desc: t("content_desc"),
      icon: <FileText size={48} className="mx-auto text-white" />,
      bg: "images/content-writing.webp",
    },
    {
      id: 4,
      title: t("branding"),
      desc: t("branding_desc"),
      icon: <PencilRulerIcon size={48} className="mx-auto text-white" />,
      bg: "images/content-writing.webp",
    },
    {
      id: 5,
      title: t("montage"),
      desc: t("montage_desc"),
      icon: <Video size={48} className="mx-auto text-white" />,
      bg: "images/content-writing.webp",
    },
    {
      id: 6,
      title: t("social_media"),
      desc: t("social_media_desc"),
      icon: <SmartphoneCharging size={48} className="mx-auto text-white" />,
      bg: "images/content-writing.webp",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        <SectionHeader
          title={t("title")}
          subtitle={t("subtitle")}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              className="relative h-80 rounded-md overflow-hidden shadow-lg group"
              initial={{ opacity: 0, y: 100, rotateX: 90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* الخلفية */}
              <div
                className="absolute top-full group-hover:top-0 transition-all duration-1000 inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.bg})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-main group-hover:!bg-blue-800/70 transition-all duration-500" />

              {/* المحتوى */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                <p className="text-center text-gray-200">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
