import ContactPageClient from "./ContactPageClient";
import PageSchema from "@/components/page-schema";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return createMetadata({ locale, path: "/contact", key: "contact" });
}

export default async function ContactPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Contact" });

  return (
    <>
      <PageSchema
        locale={locale}
        path="/contact"
        seoKey="contact"
        webPageType="ContactPage"
        faq
        crumbs={[{ name: t("title"), path: "/contact" }]}
      />
      <ContactPageClient />
    </>
  );
}
