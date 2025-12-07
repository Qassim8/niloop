import { getTranslations } from "next-intl/server";
import ProjectsPageClient from "./ProjectsPageClient";

export async function generateMetadata({ params }) {
  const t = await getTranslations("SEO");

  return {
    title: t("projects_title"),
    description: t("projects_desc"),
  };
}

export default function ProjectsPage({ params }) {
  return <ProjectsPageClient />;
}
