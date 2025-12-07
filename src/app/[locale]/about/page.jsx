import AboutPageClient from "./AboutPageClient"; // مكون client فقط
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const t = await getTranslations("SEO");
  return {
    title: t("about_title"),
    description: t("about_desc"),
  };
}

export default function AboutPage({ params }) {
  return <AboutPageClient />;
}
