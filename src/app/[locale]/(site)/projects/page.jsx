import ProjectsPageClient from "./ProjectsPageClient";
import PageSchema from "@/components/page-schema";
import JsonLd from "@/components/json-ld";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { createMetadata } from "@/lib/seo";
import { projectsListSchema } from "@/lib/schema";
import { projects } from "@/data/projects";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return createMetadata({ locale, path: "/projects", key: "projects" });
}

export default async function ProjectsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Projects" });

  return (
    <>
      <PageSchema
        locale={locale}
        path="/projects"
        seoKey="projects"
        webPageType="CollectionPage"
        crumbs={[{ name: t("title"), path: "/projects" }]}
      />
      <JsonLd
        data={projectsListSchema(
          locale,
          projects.map((p) => ({
            name: t(`${p.key}_title`),
            path: `/projects/${p.slug}`,
          }))
        )}
      />
      <ProjectsPageClient />
    </>
  );
}
