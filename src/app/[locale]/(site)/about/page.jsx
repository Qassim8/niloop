import AboutPageClient from "./AboutPageClient";
import PageSchema from "@/components/page-schema";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return createMetadata({ locale, path: "/about", key: "about" });
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "About" });

  return (
    <>
      <PageSchema
        locale={locale}
        path="/about"
        seoKey="about"
        webPageType="AboutPage"
        crumbs={[{ name: t("title"), path: "/about" }]}
      />
      <AboutPageClient />
    </>
  );
}
