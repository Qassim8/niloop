import { getTranslations } from "next-intl/server";
import MarketingPageClient from "./MarketingPageClient";

export async function generateMetadata({ params }) {
  const t = await getTranslations("SEO");
  return {
    title: t("marketing_title"),
    description: t("marketing_desc"),
  };
}

export default function MarketingPage({ params }) {
  return <MarketingPageClient />;
}
