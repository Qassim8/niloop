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
  Calculator,
} from "lucide-react";
import SectionHeader from "../sections-header";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function ServicesSection() {
  const t = useTranslations("Services");
  const locale = useLocale();

  const cards = [
    {
      id: 1,
      title: t("web"),
      desc: t("web_desc"),
      icon: <Code size={48} className="mx-auto text-white" />,
      bg: "/images/web-dev-card.webp",
      href: "/services/web-design",
    },
    {
      id: 7,
      title: t("erp"),
      desc: t("erp_desc"),
      icon: <Calculator size={48} className="mx-auto text-white" />,
      bg: "/images/vecteezy_businesswoman-with-business-plan-data-analytic-start-up_.webp",
      href: "/services/erp",
    },
    {
      id: 2,
      title: t("graphic"),
      desc: t("graphic_desc"),
      icon: <PenTool size={48} className="mx-auto text-white" />,
      bg: "/images/How-To-Design-a-Logo-5-Easy-Steps.jpg",
      href: "/services/graphic-design",
    },
    {
      id: 3,
      title: t("content"),
      desc: t("content_desc"),
      icon: <FileText size={48} className="mx-auto text-white" />,
      bg: "/images/content-writing.webp",
    },
    {
      id: 4,
      title: t("branding"),
      desc: t("branding_desc"),
      icon: <PencilRulerIcon size={48} className="mx-auto text-white" />,
      bg: "/images/Branding.jpg",
    },
    {
      id: 5,
      title: t("montage"),
      desc: t("montage_desc"),
      icon: <Video size={48} className="mx-auto text-white" />,
      bg: "/images/video-editing.png",
    },
    {
      id: 6,
      title: t("social_media"),
      desc: t("social_media_desc"),
      icon: <SmartphoneCharging size={48} className="mx-auto text-white" />,
      bg: "/images/social-media-card.webp",
      href: "/services/marketing",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        <div className="flex flex-wrap justify-center gap-5 mt-10">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              className="relative p-5 h-60 md:h-72 w-full md:w-[calc(33.333%-0.85rem)] rounded-md overflow-hidden shadow-lg group"
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

              {card.href && (
                <Link
                  href={`/${locale}${card.href}`}
                  aria-label={card.title}
                  className="absolute inset-0 z-20"
                />
              )}

              {/* المحتوى */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {card.title}
                </h3>
                <p className="text-sm md:text-lg text-center text-gray-200">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
