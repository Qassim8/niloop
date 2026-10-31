"use client";

import BreadcrumbSection from "@/components/breadcrumb";
import ErpFeatures from "@/components/services/erp/features";
import ErpTopSection from "@/components/services/erp/top-section";
import CallToAction from "@/components/services/getservice";
import { useTranslations } from "next-intl";

export default function ErpPageClient() {
  const t = useTranslations("ERP");

  return (
    <>
      <BreadcrumbSection
        title={t("title")}
        links={[{ label: t("subtitle"), href: "/services" }, { label: t("title") }]}
      />
      <ErpTopSection />
      <ErpFeatures />
      <CallToAction />
    </>
  );
}
