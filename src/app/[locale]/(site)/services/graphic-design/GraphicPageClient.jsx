"use client";

import BreadcrumbSection from "@/components/breadcrumb";
import PricingTiers from "@/components/pricing/tiers";
import ServiceFeatures from "@/components/services/service-features";
import ServiceIntro from "@/components/services/service-intro";
import { useTranslations } from "next-intl";

const keys = ["feature_one", "feature_two", "feature_three", "feature_four", "feature_fife"];

export default function GraphicPageClient() {
  const t = useTranslations("Graphic");

  return (
    <>
      <BreadcrumbSection
        title={t("title")}
        links={[{ label: t("subtitle"), href: "/services" }, { label: t("title") }]}
      />
      <ServiceIntro
        namespace="Graphic"
        slot="service-graphic"
        image="/images/vecteezy_graphic-designer-with-creative-inspiration-at-work-space_6031624.webp"
      />
      <ServiceFeatures namespace="Graphic" keys={keys} />
      <PricingTiers group="graphic" />
    </>
  );
}
