import ContentPageClient from "./ContentPageClient";
import PageSchema from "@/components/page-schema";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { createMetadata } from "@/lib/seo";

const path = "/services/content-writing";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return createMetadata({ locale, path, key: "content" });
}

export default async function Page({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const services = await getTranslations({ locale, namespace: "Services" });
  const t = await getTranslations({ locale, namespace: "Content" });

  return (
    <>
      <PageSchema
        locale={locale}
        path={path}
        seoKey="content"
        service
        crumbs={[
          { name: services("title"), path: "/services" },
          { name: t("title"), path },
        ]}
      />
      <ContentPageClient />
    </>
  );
}
