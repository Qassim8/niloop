"use client"

import BreadcrumbSection from "@/components/breadcrumb";
import FeaturesSection from "@/components/services/web-design/featuers";
import TopSection from "@/components/services/web-design/top-section";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

function Web() {
  const t = useTranslations("Web");
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
    </>
  );
}

export default Web;
