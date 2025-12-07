import { getTranslations } from "next-intl/server";
import ContactPageClient from "./ContactPageClient";

export async function generateMetadata({ params }) {
  const t = await getTranslations("SEO");

  return {
    title: t("contact_title"),
    description: t("contact_desc"),
  };
}

export default function ContactPage({ params }) {
  return <ContactPageClient />;
}
