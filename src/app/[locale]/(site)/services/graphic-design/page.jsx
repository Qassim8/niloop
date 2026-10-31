import GraphicPageClient from "./GraphicPageClient";
import PageSchema from "@/components/page-schema";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { createMetadata } from "@/lib/seo";

const path = "/services/graphic-design";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return createMetadata({ locale, path, key: "graphic" });
}

export default async function Page({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const services = await getTranslations({ locale, namespace: "Services" });
  const t = await getTranslations({ locale, namespace: "Graphic" });

  return (
    <>
      <PageSchema
        locale={locale}
        path={path}
        seoKey="graphic"
        service
        crumbs={[
          { name: services("title"), path: "/services" },
          { name: t("title"), path },
        ]}
      />
      <GraphicPageClient />
    </>
  );
}
