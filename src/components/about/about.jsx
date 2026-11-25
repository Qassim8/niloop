"use client";

import ImageSlot from "../ui/image-slot";
import { Briefcase, Lightbulb, Sparkles } from "lucide-react";
import SectionHeader from "../sections-header";
import Reveal from "../ui/reveal";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site";

export default function AboutSection() {
  const t = useTranslations("About");
  const stats = useTranslations("Stats");

  const years = new Date().getFullYear() - siteConfig.foundingYear;

  const values = [
    { Icon: Briefcase, title: t("expert", { years }), text: t("expert_desc") },
    { Icon: Lightbulb, title: t("creative"), text: t("creative_desc") },
    { Icon: Sparkles, title: t("excellence"), text: t("excellence_desc") },
  ];

  return (
    <section id="about" className="section bg-sand">
      <div className="container grid items-center gap-14 lg:grid-cols-12">
        <Reveal x={-40} y={0} className="relative order-last lg:order-first lg:col-span-5">
          <div className="relative">
            <ImageSlot
              id="about-team"
              alt={t("image_alt")}
              fallback="/images/about.webp"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="rounded-[var(--radius-media)] shadow-[var(--shadow-lift)]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[var(--radius-media)] bg-gradient-to-t from-nile-950/40 to-transparent" />
          </div>

          <div className="float-soft absolute -bottom-5 end-4 rounded-2xl border border-line bg-white px-6 py-4 shadow-[var(--shadow-lift)] md:-end-6">
            <p dir="ltr" className="text-4xl font-semibold text-nile-600">{years}+</p>
            <p className="text-sm text-slate-500">{stats("expert")}</p>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <SectionHeader
            title={t("title")}
            subtitle={t("subtitle")}
            align="start"
            className="mb-10"
          />
          <ul className="space-y-4">
            {values.map(({ Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 0.1}>
                <div className="card flex items-start gap-5 p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-nile-50 text-nile-600">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-nile-950">{title}</h3>
                    <p className="mt-1 leading-relaxed text-slate-600">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
