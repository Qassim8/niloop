"use client";

import BreadcrumbSection from "@/components/breadcrumb";
import CallToAction from "@/components/services/getservice";
import ServicesSection from "@/components/services/services";
import WhyUs from "@/components/services/whyus";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const ServicesPageClient = () => {
  const t = useTranslations("Services");

  const [title, setTitle] = useState(t("title"));

  useEffect(() => {
    setTitle(title);
  }, [title]);
  return (
    <>
      <BreadcrumbSection title={title} links={[{ label: title }]} />
      <ServicesSection wave={false} />
      <CallToAction />
      <WhyUs />
    </>
  );
};

export default ServicesPageClient;
