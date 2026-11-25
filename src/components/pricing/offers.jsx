"use client";

import { Check, Sparkles } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import SectionHeader from "../sections-header";
import Reveal from "../ui/reveal";
import { formatSar, offers, offerValue } from "@/data/pricing";

function OfferCard({ offer, index }) {
  const t = useTranslations("Pricing");
  const locale = useLocale();
  const value = offerValue(offer);
  const saving = value - offer.price;
  const dark = offer.popular;

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <article
        data-spotlight
        className={`relative flex h-full flex-col overflow-hidden rounded-[var(--radius-media)] border p-7 transition duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 md:p-8 ${
          dark
            ? "surface-nile border-nile-800 shadow-[var(--shadow-lift)]"
            : "border-line bg-white shadow-[var(--shadow-card)] hover:border-nile-600/30 hover:shadow-[var(--shadow-lift)]"
        }`}
      >
        {dark && (
          <>
            <div aria-hidden="true" className="logo-pattern absolute inset-0" />
            <span className="absolute end-5 top-5 inline-flex items-center gap-1 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold text-nile-950">
              <Sparkles size={12} />
              {t("popular")}
            </span>
          </>
        )}

        <h3 className={`relative text-2xl font-semibold ${dark ? "text-white" : "text-nile-950"}`}>
          {t(`offers.${offer.id}.title`)}
        </h3>
        <p className={`relative mt-2 text-sm leading-relaxed ${dark ? "text-nile-100" : "text-slate-600"}`}>
          {t(`offers.${offer.id}.desc`)}
        </p>

        <div className="relative mt-6">
          <p className={`text-sm ${dark ? "text-nile-200" : "text-slate-500"}`}>{t("from")}</p>
          <p className={`text-4xl font-semibold ${dark ? "text-gold-400" : "text-nile-600"}`}>
            <bdi>{formatSar(offer.price, locale)}</bdi>
          </p>
          <p className={`mt-2 flex flex-wrap items-center gap-2 text-sm ${dark ? "text-nile-200" : "text-slate-500"}`}>
            <span>{t("value")}:</span>
            <bdi className="line-through">{formatSar(value, locale)}</bdi>
            <span
              className={`rounded-full px-2.5 py-0.5 font-semibold ${
                dark ? "bg-white/10 text-gold-300" : "bg-gold-100 text-gold-700"
              }`}
            >
              <bdi>{t("save", { amount: formatSar(saving, locale) })}</bdi>
            </span>
          </p>
        </div>

        <p className={`relative mt-6 text-sm font-semibold ${dark ? "text-white" : "text-nile-950"}`}>
          {t("includes")}
        </p>
        <ul className="relative mt-3 flex-1 space-y-3">
          {offer.includes.map(({ id, qty = 1 }) => (
            <li
              key={id}
              className={`flex items-start gap-3 text-sm ${dark ? "text-nile-50" : "text-slate-600"}`}
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400 text-nile-950">
                <Check size={12} strokeWidth={3} />
              </span>
              <span>
                {qty > 1 && <bdi>{qty} × </bdi>}
                {t(`items.${id}.title`)}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href={`/${locale}/contact?plan=${offer.id}`}
          className={`relative mt-8 w-full ${dark ? "btn-gold" : "btn-blue"}`}
        >
          {t("cta_offer")}
        </Link>
      </article>
    </Reveal>
  );
}

export default function OffersSection({
  limit,
  showAllLink = false,
  background = "bg-white",
}) {
  const t = useTranslations("Pricing");
  const locale = useLocale();
  const list = limit ? offers.slice(0, limit) : offers;

  return (
    <section className={`section ${background}`} id="offers">
      <div className="container">
        <SectionHeader title={t("offers_title")} subtitle={t("offers_subtitle")} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {list.map((offer, i) => (
            <OfferCard key={offer.id} offer={offer} index={i} />
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-slate-500">
          {t("note")}
        </p>
        {showAllLink && (
          <div className="mt-8 text-center">
            <Link href={`/${locale}/pricing`} className="btn-outline">
              {t("all")}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
