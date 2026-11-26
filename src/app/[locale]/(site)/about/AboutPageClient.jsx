"use client";

import AboutSection from "@/components/about/about";
import AboutGallery from "@/components/about/gallery";
import ApproachSection from "@/components/about/approach";
import StatsSection from "@/components/about/statistic";
import ValuesSection from "@/components/about/values";
import BreadcrumbSection from "@/components/breadcrumb";
import Testimonials from "@/components/home/testimonials";
import { useTranslations } from "next-intl";

export default function AboutPageClient() {
  const t = useTranslations("About");

  return (
    <>
      <BreadcrumbSection title={t("title")} lead={t("lead")} links={[{ label: t("title") }]} />
      <AboutSection />
      <ApproachSection />
      <ValuesSection />
      <StatsSection />
      <AboutGallery />
      <Testimonials />
    </>
  );
}
