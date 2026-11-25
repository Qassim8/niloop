"use client";
import BreadcrumbSection from "@/components/breadcrumb";
import FeaturesSection from "@/components/services/marketing/features";
import TopSection from "@/components/services/marketing/top-section";
import PricingTiers from "@/components/pricing/tiers";
import { useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";

function MarketingPageClient() {
  const t = useTranslations("Marketing");
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
      <PricingTiers group="marketing" />
    </>
  );
}

export default MarketingPageClient;
