"use client";
import BreadcrumbSection from "@/components/breadcrumb";
import WorksSection from "@/components/projects/portfolio";
import HowWeWork from "@/components/projects/steps";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const Projects = () => {
  const t = useTranslations("Projects");

  const [title, setTitle] = useState(t("title"));

  useEffect(() => {
    setTitle(title);
  }, [title]);

  return (
    <>
      <BreadcrumbSection title={title} links={[{ label: title }]} />
      <WorksSection home={false} />
      <HowWeWork />
    </>
  );
};

export default Projects;
