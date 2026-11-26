"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquareQuote, Quote } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionHeader from "../sections-header";
import Chip from "../ui/chip";
import Reveal from "../ui/reveal";
import ImageSlot, { hasSlotImage } from "../ui/image-slot";
import { useLocale, useTranslations } from "next-intl";
import { extraTestimonials } from "@/data/testimonials";

function Card({ item, featured }) {
  return (
    <figure
      data-spotlight
      className={`flex h-full flex-col rounded-[var(--radius-media)] border p-7 md:p-8 ${
        featured
          ? "surface-nile border-nile-800 text-white shadow-[var(--shadow-lift)]"
          : "border-line bg-sand shadow-[var(--shadow-card)]"
      }`}
    >
      <Quote size={28} className={featured ? "text-gold-400" : "text-gold-500"} />
      <blockquote className={`mt-5 flex-1 leading-relaxed ${featured ? "text-nile-50" : "text-slate-700"}`}>
        {item.text}
      </blockquote>
      {item.via && (
        <p className={`mt-4 text-xs ${featured ? "text-nile-300" : "text-slate-400"}`}>{item.via}</p>
      )}
      <figcaption className="mt-8 flex items-center gap-4">
        {hasSlotImage(item.slot) ? (
          <ImageSlot id={item.slot} alt={item.name} sizes="56px" className="h-14 w-14 shrink-0 rounded-full" />
        ) : (
          <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-2">
            <Image src={item.image} alt="" width={56} height={56} className="max-h-full w-auto object-contain" />
          </span>
        )}
        <span>
          <span className={`block font-semibold ${featured ? "text-white" : "text-nile-950"}`}>{item.name}</span>
          <span className={`block text-sm ${featured ? "text-nile-200" : "text-slate-500"}`}>{item.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

// Three columns that drift in opposite directions while the section scrolls by.
export default function Testimonials() {
  const t = useTranslations("Testimonials");
  const locale = useLocale();
  const ref = useRef(null);
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const up = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const down = useTransform(scrollYProgress, [0, 1], [-70, 70]);

  const items = [
    { name: t("first_name"), role: t("first_title"), image: "/images/bareq-logo.webp", slot: "person-bareq", text: t("first_desc") },
    { name: t("second_name"), role: t("second_title"), image: "/images/sanaa.png", slot: "person-sanaa", text: t("second_desc") },
    { name: t("third_name"), role: t("third_title"), image: "/images/badr-logo.png", slot: "person-badr", text: t("third_desc") },
    { name: t("fourth_name"), role: t("fourth_title"), image: "/images/zadi-logo.png", slot: "person-zadi", text: t("fourth_desc") },
    { name: t("seventh_name"), role: t("seventh_title"), image: "/images/abda_bswal.png", slot: "person-abda", text: t("seventh_desc") },
    { name: t("eigth_name"), role: t("eigth_title"), image: "/images/eatc-logo.png", slot: "person-eatc", text: t("eigth_desc") },
  ];

  // Entries added in src/data/testimonials.js (e.g. messages collected on WhatsApp)
  const pick = (v) => (v && typeof v === "object" ? v[locale] ?? v.ar : v);
  extraTestimonials.forEach((e) =>
    items.push({
      name: pick(e.name) || t("client_label"),
      role: pick(e.role) || "",
      image: "/images/Logo_mark.svg",
      slot: `person-${e.id}`,
      text: pick(e.text),
      via: e.source === "whatsapp" ? t("via_whatsapp") : null,
    })
  );

  // Spread the cards over three columns (card i goes to column i % 3)
  const columns = [0, 1, 2].map((c) => items.filter((_, i) => i % 3 === c));
  const shifts = [up, down, up];

  return (
    <section ref={ref} className="section overflow-hidden bg-white">
      <div className="container">
        <SectionHeader
          title={t("title")}
          subtitle={t("subtitle")}
          chip={<Chip icon={MessageSquareQuote} tone="gold" />}
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {columns.map((col, c) => (
            <motion.div
              key={c}
              style={desktop ? { y: shifts[c] } : undefined}
              className="flex flex-col gap-4 lg:gap-5"
            >
              {col.map((item, r) => (
                <Reveal key={item.name} delay={(c + r) * 0.06}>
                  <Card item={item} featured={c === 1 && r === 0} />
                </Reveal>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
