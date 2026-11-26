"use client";

import BreadcrumbSection from "@/components/breadcrumb";
import StatsSection from "@/components/about/statistic";
import ServiceRows from "@/components/services/service-rows";
import WhyUs from "@/components/services/whyus";
import OffersSection from "@/components/pricing/offers";
import { useTranslations } from "next-intl";

export default function ServicesPageClient() {
  const t = useTranslations("Services");

  return (
    <>
      <BreadcrumbSection title={t("title")} lead={t("page_lead")} links={[{ label: t("title") }]} />
      <ServiceRows />
      <StatsSection />
      <OffersSection showAllLink background="bg-sand" />
      <WhyUs tone="white" />
    </>
  );
}
