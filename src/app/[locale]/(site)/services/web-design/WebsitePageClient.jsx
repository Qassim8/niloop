"use client";

import BreadcrumbSection from "@/components/breadcrumb";
import PricingTiers from "@/components/pricing/tiers";
import ServiceFeatures from "@/components/services/service-features";
import ServiceIntro from "@/components/services/service-intro";
import { useTranslations } from "next-intl";

const keys = ["feature_two", "feature_three", "feature_four", "feature_fife", "feature_six"];

export default function WebsitePageClient() {
  const t = useTranslations("Web");

  return (
    <>
      <BreadcrumbSection
        title={t("title")}
        links={[{ label: t("subtitle"), href: "/services" }, { label: t("title") }]}
      />
      <ServiceIntro
        namespace="Web"
        slot="service-web"
        image="/images/vecteezy_programmer-developer-engineer-with-laptop-sitting-at-the_8826724.webp"
      />
      <ServiceFeatures namespace="Web" keys={keys} />
      <PricingTiers group="web" />
    </>
  );
}
