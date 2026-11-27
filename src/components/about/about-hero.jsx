"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import ImageSlot from "../ui/image-slot";
import Reveal from "../ui/reveal";
import SplitReveal from "../ui/split-reveal";

// About page opening: big statement on the left, team picture on the right (mirrored in Arabic).
export default function AboutHero() {
  const t = useTranslations("About");
  const h = useTranslations("Header");
  const locale = useLocale();
  const Sep = locale === "ar" ? ChevronLeft : ChevronRight;

  return (
    <section className="surface-nile relative overflow-hidden rounded-b-[2rem] pb-14 pt-32 md:rounded-b-[3rem] md:pb-20 md:pt-40">
      <div aria-hidden="true" className="logo-pattern absolute inset-0" />
      <div className="container relative grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-nile-200">
            <Link href={`/${locale}`} className="transition hover:text-gold-300">
              {h("home")}
            </Link>
            <Sep size={14} className="text-nile-400" />
            <span aria-current="page" className="text-gold-300">
              {t("title")}
            </span>
          </nav>

          <h1 className="text-4xl font-semibold leading-[1.25] text-white md:text-6xl md:leading-[1.15]">
            <SplitReveal text={t("lead")} />
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-nile-100">{t("hero_desc")}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${locale}/contact`} className="btn-gold">
              {t("book")}
            </Link>
            <Link href={`/${locale}/projects`} className="btn-ghost">
              {h("projects")}
            </Link>
          </div>
        </div>

        <Reveal delay={0.15} className="lg:col-span-5">
          <ImageSlot
            id="about-team"
            alt={t("image_alt")}
            fallback="/images/about.webp"
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="rounded-[var(--radius-media)] border border-white/10 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)]"
          />
        </Reveal>
      </div>
    </section>
  );
}
