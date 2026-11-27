"use client";

import BreadcrumbSection from "@/components/breadcrumb";
import PricingTiers from "@/components/pricing/tiers";
import ServiceFeatures from "@/components/services/service-features";
import ServiceIntro from "@/components/services/service-intro";
import { useTranslations } from "next-intl";

const keys = ["feature_one", "feature_two", "feature_three", "feature_four", "feature_five"];

export default function AdsPageClient() {
  const t = useTranslations("Ads");

  return (
    <>
      <BreadcrumbSection
        title={t("title")}
        links={[{ label: t("subtitle"), href: "/services" }, { label: t("title") }]}
      />
      <ServiceIntro
        namespace="Ads"
        slot="service-ads"
        image="/images/advertising-banner.png"
      />
      <ServiceFeatures namespace="Ads" keys={keys} />
      <PricingTiers group="ads" />
    </>
  );
}
