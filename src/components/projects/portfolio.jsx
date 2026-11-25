"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeader from "../sections-header";
import { useLocale, useTranslations } from "next-intl";
import WorkCard from "./work-card";
import Reveal from "../ui/reveal";
import { projects } from "@/data/projects";

export default function WorksSection({ home }) {
  const t = useTranslations("Projects");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const [activeFilter, setActiveFilter] = useState("all");

  const works = projects.map((project) => ({
    ...project,
    title: t(`${project.key}_title`),
  }));

  const visible =
    activeFilter === "all"
      ? works
      : works.filter((work) => work.type === activeFilter);

  const filterBtns = [
    { type: "all", title: t("all") },
    { type: "website", title: t("website") },
    { type: "system", title: t("system") },
    { type: "graphic", title: t("graphic") },
    { type: "collection", title: `${t("website")} & ${t("graphic")}` },
  ];

  return (
    <section className={`section ${home ? "bg-sand" : "bg-white"}`}>
      <div className="container">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        {!home && (
          <div role="group" className="mb-10 flex flex-wrap justify-center gap-2">
            {filterBtns.map(({ title, type }) => (
              <button
                key={type}
                type="button"
                aria-pressed={activeFilter === type}
                onClick={() => setActiveFilter(type)}
                className={`cursor-pointer rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-300 md:text-base ${
                  activeFilter === type
                    ? "border-nile-600 bg-nile-600 text-white"
                    : "border-line bg-white text-nile-700 hover:border-nile-600/40"
                }`}
              >
                {title}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {(home ? visible.slice(0, 6) : visible).map((work, i) => (
            <Reveal key={work.slug} delay={(i % 3) * 0.08}>
              <WorkCard
                href={`/${locale}/projects/${work.slug}`}
                image={work.image}
                title={work.title}
                label={t("show")}
                tag={t(`type_${work.type}`)}
              />
            </Reveal>
          ))}
        </div>

        {home && (
          <div className="mt-12 text-center">
            <Link href={`/${locale}/projects`} className="btn-outline">
              {t("more")}
              <Arrow size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
