"use client";

import { ArrowLeft, ArrowRight, BarChart3, Boxes, Calculator, Users } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import BreadcrumbSection from "@/components/breadcrumb";
import PricingTiers from "@/components/pricing/tiers";
import ServiceFeatures from "@/components/services/service-features";
import ServiceIntro from "@/components/services/service-intro";

const keys = ["feature_one", "feature_two", "feature_three", "feature_four", "feature_five"];
const tiles = [Calculator, Boxes, BarChart3, Users];

export default function ErpPageClient() {
  const t = useTranslations("ERP");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <>
      <BreadcrumbSection
        title={t("title")}
        links={[{ label: t("subtitle"), href: "/services" }, { label: t("title") }]}
      />
      <ServiceIntro
        namespace="ERP"
        slot="erp-dashboard"
        imageClassName="border border-line"
        empty={
          <div aria-hidden="true" className="surface-nile grid grid-cols-2 gap-3 rounded-[var(--radius-media)] p-6 md:p-8">
            {tiles.map((Icon, i) => (
              <div key={i} className="flex aspect-square items-center justify-center rounded-2xl bg-white/[0.07]">
                <Icon className="h-14 w-14 text-gold-400" strokeWidth={1.5} />
              </div>
            ))}
          </div>
        }
      />
      <ServiceFeatures namespace="ERP" keys={keys}>
        <div className="mt-10 flex flex-col items-start gap-4 rounded-[var(--radius-card)] border border-white/15 bg-white/[0.05] p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <h3 className="mb-1 text-xl font-semibold text-white">{t("example_title")}</h3>
            <p className="max-w-xl leading-relaxed text-nile-100">{t("example_desc")}</p>
          </div>
          <Link href={`/${locale}/projects/matajri`} className="btn-gold group shrink-0">
            {t("example_cta")}
            <Arrow size={16} />
          </Link>
        </div>
      </ServiceFeatures>
      <PricingTiers group="erp" />
    </>
  );
}
