import { getTranslations } from "next-intl/server";
import ServicesPageClient from "./ServicesPageClient";

export async function generateMetadata({ params }) {
  const t = await getTranslations("SEO");

  return {
    title: t("services_title"),
    description: t("services_desc"),
  };
}

export default function ServicesPage({ params }) {
  return <ServicesPageClient />;
}
