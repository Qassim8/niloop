"use client";

import { Eye, MessageSquareText, Compass } from "lucide-react";
import SectionHeader from "../sections-header";
import Reveal from "../ui/reveal";
import { useTranslations } from "next-intl";

export default function GoalsSection() {
  const t = useTranslations("About");

  const goals = [
    { Icon: Eye, title: t("vision"), description: t("vision_desc") },
    { Icon: MessageSquareText, title: t("mission"), description: t("mission_desc") },
    { Icon: Compass, title: t("strategy"), description: t("strategy_desc") },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeader title={t("our_goals")} subtitle={t("our_goals_desc")} />

        <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
          {goals.map(({ Icon, title, description }, idx) => (
            <Reveal key={title} delay={idx * 0.1}>
              <div className="card card-hover h-full bg-sand p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-400 text-nile-950">
                  <Icon size={26} />
                </span>
                <h3 className="mt-6 text-2xl font-semibold text-nile-950">{title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
