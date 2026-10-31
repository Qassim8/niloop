"use client";
import { motion } from "framer-motion";
import {
  Code,
  PenTool,
  FileText,
  Video,
  SmartphoneCharging,
  PencilRulerIcon,
  Calculator,
  ArrowUpRight,
} from "lucide-react";
import SectionHeader from "../sections-header";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Blobs } from "../ui/shapes";
import Wave from "../ui/wave";

export default function ServicesSection({ wave = "text-sand" }) {
  const t = useTranslations("Services");
  const locale = useLocale();

  const cards = [
    {
      id: 1,
      title: t("web"),
      desc: t("web_desc"),
      Icon: Code,
      bg: "/images/web-dev-card.webp",
      href: "/services/web-design",
    },
    {
      id: 7,
      title: t("erp"),
      desc: t("erp_desc"),
      Icon: Calculator,
      bg: "/images/vecteezy_businesswoman-with-business-plan-data-analytic-start-up_.webp",
      href: "/services/erp",
    },
    {
      id: 2,
      title: t("graphic"),
      desc: t("graphic_desc"),
      Icon: PenTool,
      bg: "/images/How-To-Design-a-Logo-5-Easy-Steps.jpg",
      href: "/services/graphic-design",
    },
    {
      id: 3,
      title: t("content"),
      desc: t("content_desc"),
      Icon: FileText,
      bg: "/images/content-writing.webp",
    },
    {
      id: 4,
      title: t("branding"),
      desc: t("branding_desc"),
      Icon: PencilRulerIcon,
      bg: "/images/Branding.jpg",
    },
    {
      id: 5,
      title: t("montage"),
      desc: t("montage_desc"),
      Icon: Video,
      bg: "/images/video-editing.png",
    },
    {
      id: 6,
      title: t("social_media"),
      desc: t("social_media_desc"),
      Icon: SmartphoneCharging,
      bg: "/images/social-media-card.webp",
      href: "/services/marketing",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white pb-28 pt-20">
      <Blobs />
      <div className="container relative">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {cards.map(({ id, title, desc, Icon, bg, href }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.12, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
              className="group relative isolate h-64 w-full overflow-hidden rounded-[2rem] border border-[#1e549f]/10 bg-white shadow-[0_10px_40px_-15px_rgba(30,84,159,0.25)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-15px_rgba(30,84,159,0.4)] md:w-[calc(33.333%-1rem)]"
            >
              {/* Water rising on hover */}
              <div className="absolute inset-x-0 top-0 -z-10 h-full translate-y-[102%] transition-transform duration-700 ease-out group-hover:translate-y-0">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${bg})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a57]/95 via-[#1e549f]/90 to-[#1e549f]/80" />
              </div>

              {href && (
                <Link
                  href={`/${locale}${href}`}
                  aria-label={title}
                  className="absolute inset-0 z-20"
                />
              )}

              <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1e549f] to-[#2d6bbf] text-white shadow-lg shadow-[#1e549f]/30 transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:from-[#dda853] group-hover:to-[#e9c277] group-hover:text-[#0b2a57]">
                  <Icon size={30} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-main transition-colors duration-500 group-hover:text-white md:text-xl">
                  {title}
                </h3>
                <p className="text-sm text-slate-500 transition-colors duration-500 group-hover:text-blue-50 md:text-base">
                  {desc}
                </p>
              </div>

              {href && (
                <ArrowUpRight
                  size={20}
                  className="absolute end-5 top-5 z-10 text-[#dda853] opacity-0 transition duration-500 group-hover:opacity-100 rtl:-scale-x-100"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
      {wave && <Wave className={wave} />}
    </section>
  );
}
