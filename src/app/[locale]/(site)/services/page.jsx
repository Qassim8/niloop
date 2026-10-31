import ServicesPageClient from "./ServicesPageClient";
import PageSchema from "@/components/page-schema";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return createMetadata({ locale, path: "/services", key: "services" });
}

export default async function ServicesPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Services" });

  return (
    <>
      <PageSchema
        locale={locale}
        path="/services"
        seoKey="services"
        crumbs={[{ name: t("title"), path: "/services" }]}
      />
      <ServicesPageClient />
    </>
  );
}
