"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeader from "../sections-header";
import { useLocale, useTranslations } from "next-intl";
import WorkCard from "./work-card";
import { projects } from "@/data/projects";

export default function WorksSection({ home }) {
  const t = useTranslations("Projects");
  const locale = useLocale();
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
    <section className="relative overflow-hidden bg-white py-20">
      <div className="container">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        {!home && (
          <div
            role="group"
            className="my-8 flex flex-wrap justify-center gap-3"
          >
            {filterBtns.map(({ title, type }) => (
              <button
                key={type}
                type="button"
                aria-pressed={activeFilter === type}
                className={`text-xs md:text-base px-5 md:px-7 py-2 font-bold rounded-full outline-0 cursor-pointer transition duration-300
                  ${
                    activeFilter === type
                      ? "bg-main text-white shadow-lg shadow-[#1e549f]/30"
                      : "bg-[#dda853]/15 text-main hover:bg-[#dda853]/30"
                  }`}
                onClick={() => setActiveFilter(type)}
              >
                {title}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {(home ? visible.slice(0, 6) : visible).map((work) => (
            <WorkCard
              key={work.slug}
              href={`/${locale}/projects/${work.slug}`}
              image={work.image}
              title={work.title}
              label={t("show")}
              tag={t(`type_${work.type}`)}
            />
          ))}
        </div>

        {home && (
          <div className="text-center mt-12">
            <Link
              href={`/${locale}/projects`}
              className="btn-blue"
            >
              {t("more")}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
