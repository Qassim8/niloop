import { getTranslations } from "next-intl/server";
import WebsitePageClient from "./WebsitePageClient";

export async function generateMetadata({ params }) {
  const t = await getTranslations("SEO");
  return {
    title: t("web_title"),
    description: t("web_desc"),
  };
}

export default function WebPage({ params }) {
  return <WebsitePageClient />;
}
