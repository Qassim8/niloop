"use client";
import BreadcrumbSection from "@/components/breadcrumb";
import FeaturesSection from "@/components/services/graphic-design/features";
import TopSection from "@/components/services/graphic-design/top-section";
import PricingTiers from "@/components/pricing/tiers";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

function GraphicPageClient() {
  const t = useTranslations("Graphic");
  const [title, setTitle] = useState(t("title"));
  const [subtitle, setSubtitle] = useState(t("subtitle"));

  useEffect(() => {
    setTitle(title);
    setSubtitle(subtitle);
  }, [title, subtitle]);

  return (
    <>
      <BreadcrumbSection
        title={title}
        links={[{ label: subtitle, href: "/services" }, { label: title }]}
      />
      <TopSection />
      <FeaturesSection />
      <PricingTiers group="graphic" />
    </>
  );
}

export default GraphicPageClient;
