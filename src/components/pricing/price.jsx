"use client";

import { useLocale, useTranslations } from "next-intl";
import { formatSar, items } from "@/data/pricing";

// "From 2,000 SAR" style price tag for a catalog item (e.g. on service cards).
export function FromPrice({ id, className = "" }) {
  const t = useTranslations("Pricing");
  const locale = useLocale();
  const { price, unit } = items[id];

  return (
    <span className={className}>
      {t("from")}{" "}
      <bdi className="font-bold">{formatSar(price, locale)}</bdi>
      {unit !== "once" && <span> {t(`units.${unit}`)}</span>}
    </span>
  );
}
