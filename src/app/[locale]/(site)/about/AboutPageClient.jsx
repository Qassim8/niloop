"use client";

import AboutSection from "@/components/about/about";
import GoalsSection from "@/components/about/goals";
import StatsSection from "@/components/about/statistic";
import BreadcrumbSection from "@/components/breadcrumb";
import Testimonials from "@/components/home/testimonials";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

export default function AboutPageClient() {
  const t = useTranslations("About");
  const [title, setTitle] = useState(t("title"));

  useEffect(() => {
    setTitle(title);
  }, [title]);

  return (
    <>
      <BreadcrumbSection title={title} links={[{ label: title }]} />
      <AboutSection />
      <GoalsSection />
      <StatsSection />
      <Testimonials />
    </>
  );
}
