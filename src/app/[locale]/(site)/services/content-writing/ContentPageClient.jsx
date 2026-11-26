"use client";

import { FileText, Package, Newspaper, Share2, Megaphone } from "lucide-react";
import BreadcrumbSection from "@/components/breadcrumb";
import PricingTiers from "@/components/pricing/tiers";
import ServiceFeatures from "@/components/services/service-features";
import ServiceIntro from "@/components/services/service-intro";
import { useTranslations } from "next-intl";

const features = [
  { key: "feature_one", Icon: FileText },
  { key: "feature_two", Icon: Package },
  { key: "feature_three", Icon: Newspaper },
  { key: "feature_four", Icon: Share2 },
  { key: "feature_five", Icon: Megaphone },
];

export default function ContentPageClient() {
  const t = useTranslations("Content");

  return (
    <>
      <BreadcrumbSection
        title={t("title")}
        links={[{ label: t("subtitle"), href: "/services" }, { label: t("title") }]}
      />
      <ServiceIntro namespace="Content" slot="service-content" image="/images/content-writing.webp" />
      <ServiceFeatures namespace="Content" features={features} />
      <PricingTiers group="content" />
    </>
  );
}
