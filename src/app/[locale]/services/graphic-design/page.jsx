import { getTranslations } from "next-intl/server";
import GraphicPageClient from "./GraphicPageClient";

export async function generateMetadata({ params }) {
  const t = await getTranslations("SEO");
  return {
    title: t("graphic_title"),
    description: t("graphic_desc"),
  };
}

export default function GraphicPage({ params }) {
  return <GraphicPageClient />;
}
