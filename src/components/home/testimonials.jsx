"use client";

import { Quote } from "lucide-react";
import Image from "next/image";
import ImageSlot, { hasSlotImage } from "../ui/image-slot";
import SectionHeader from "../sections-header";
import Reveal from "../ui/reveal";
import { useTranslations } from "next-intl";

export default function Testimonials({ tone = "white" }) {
  const t = useTranslations("Testimonials");

  const testimonials = [
    { name: t("first_name"), role: t("first_title"), slot: "person-bareq", image: "/images/bareq-logo.webp", text: t("first_desc") },
    { name: t("second_name"), role: t("second_title"), slot: "person-sanaa", image: "/images/sanaa.png", text: t("second_desc") },
    { name: t("third_name"), role: t("third_title"), slot: "person-badr", image: "/images/badr-logo.png", text: t("third_desc") },
    { name: t("fourth_name"), role: t("fourth_title"), slot: "person-zadi", image: "/images/zadi-logo.png", text: t("fourth_desc") },
    { name: t("seventh_name"), role: t("seventh_title"), slot: "person-abda", image: "/images/abda_bswal.png", text: t("seventh_desc") },
    { name: t("eigth_name"), role: t("eigth_title"), slot: "person-eatc", image: "/images/eatc-logo.png", text: t("eigth_desc") },
  ];

  return (
    <section className={`section ${tone === "sand" ? "bg-sand" : "bg-white"}`}>
      <div className="container">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {testimonials.map((item, i) => {
            const featured = i === 1;
            return (
              <Reveal key={item.name} delay={(i % 3) * 0.08}>
                <figure
                  data-spotlight
                  className={`flex h-full flex-col rounded-[var(--radius-media)] border p-7 md:p-8 ${
                    featured
                      ? "surface-nile border-nile-800 text-white shadow-[var(--shadow-lift)]"
                      : tone === "sand" ? "border-line bg-white shadow-[var(--shadow-card)]" : "border-line bg-sand shadow-[var(--shadow-card)]"
                  }`}
                >
                  <Quote size={28} className={featured ? "text-gold-400" : "text-gold-500"} />
                  <blockquote
                    className={`mt-5 flex-1 leading-relaxed ${featured ? "text-nile-50" : "text-slate-700"}`}
                  >
                    {item.text}
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    {hasSlotImage(item.slot) ? (
                      <ImageSlot
                        id={item.slot}
                        alt={item.name}
                        sizes="56px"
                        className="h-14 w-14 shrink-0 rounded-full"
                      />
                    ) : (
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-2">
                        <Image
                          src={item.image}
                          alt=""
                          width={56}
                          height={56}
                          className="max-h-full w-auto object-contain"
                        />
                      </span>
                    )}
                    <span>
                      <span className={`block font-semibold ${featured ? "text-white" : "text-nile-950"}`}>
                        {item.name}
                      </span>
                      <span className={`block text-sm ${featured ? "text-nile-200" : "text-slate-500"}`}>
                        {item.role}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
