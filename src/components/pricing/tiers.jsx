"use client";

import { Check } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import SectionHeader from "../sections-header";
import Reveal from "../ui/reveal";
import { formatSar, groups, items } from "@/data/pricing";

function TierCard({ id, index }) {
  const t = useTranslations("Pricing");
  const locale = useLocale();
  const { price, unit } = items[id];

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <article data-spotlight className="card card-hover flex h-full flex-col p-7">
        <h3 className="text-xl font-semibold text-nile-950">{t(`items.${id}.title`)}</h3>
        <p className="mt-1 text-sm text-slate-500">{t(`items.${id}.desc`)}</p>

        <p className="mt-6 text-sm text-slate-500">{t("from")}</p>
        <p className="text-3xl font-semibold text-nile-600">
          <bdi>{formatSar(price, locale)}</bdi>
          {unit !== "once" && (
            <span className="ms-1 text-sm font-medium text-slate-500">{t(`units.${unit}`)}</span>
          )}
        </p>

        <ul className="mt-6 flex-1 space-y-3">
          {t.raw(`items.${id}.features`).map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-slate-600">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400 text-nile-950">
                <Check size={12} strokeWidth={3} />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <Link href={`/${locale}/contact?plan=${id}`} className="btn-outline mt-8 w-full">
          {t("cta")}
        </Link>
      </article>
    </Reveal>
  );
}

// Price tiers for one service group (web, erp, graphic, marketing, content).
export function TierGrid({ group, ids }) {
  const list = ids ?? groups[group];
  return (
    <div
      className={`grid gap-4 sm:grid-cols-2 lg:gap-5 ${
        list.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
      }`}
    >
      {list.map((id, i) => (
        <TierCard key={id} id={id} index={i} />
      ))}
    </div>
  );
}

// Standalone section used at the bottom of the service pages.
export default function PricingTiers({ group }) {
  const t = useTranslations("Pricing");

  return (
    <section className="section bg-sand" id="pricing">
      <div className="container">
        <SectionHeader
          title={`${t("tiers_title")} – ${t(`groups.${group}`)}`}
          subtitle={t("tiers_subtitle")}
        />
        <TierGrid group={group} />
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-slate-500">
          {t("note")}
        </p>
      </div>
    </section>
  );
}
