"use client";

import { ShieldCheck, Users, Zap, Award } from "lucide-react";
import SectionHeader from "../sections-header";
import Reveal from "../ui/reveal";
import { useTranslations } from "next-intl";

// "Why Niloop" — four reasons, plus the markets we serve.
export default function WhyUs({ tone = "sand" }) {
  const t = useTranslations("Services");
  const m = useTranslations("Markets");

  const features = [
    { Icon: ShieldCheck, title: t("quality"), desc: t("quality_desc") },
    { Icon: Users, title: t("professionalism"), desc: t("professionalism_desc") },
    { Icon: Zap, title: t("creativety"), desc: t("creativety_desc") },
    { Icon: Award, title: t("trust"), desc: t("trust_desc") },
  ];

  return (
    <section className={`section ${tone === "sand" ? "bg-sand" : "bg-white"}`} id="why-us">
      <div className="container">
        <SectionHeader variant="editorial" title={t("why_niloop")} subtitle={t("why_niloop_desc")} />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ Icon, title, desc }, idx) => (
            <Reveal key={title} delay={idx * 0.08}>
              <div data-spotlight className={`card card-hover h-full p-7 ${tone === "sand" ? "" : "bg-sand"}`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-nile-50 text-nile-600">
                  <Icon size={24} />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-nile-950">{title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <p className="mb-5 text-sm font-semibold text-slate-500">{m("title")}</p>
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {m.raw("list").map((place) => (
              <li
                key={place}
                className={`rounded-full border border-line px-4 py-2 text-sm font-medium text-nile-700 ${tone === "sand" ? "bg-white" : "bg-sand"}`}
              >
                {place}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
