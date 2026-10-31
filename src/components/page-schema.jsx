import { getTranslations } from "next-intl/server";
import JsonLd from "./json-ld";
import {
  breadcrumbSchema,
  serviceSchema,
  webPageSchema,
  faqSchema,
} from "@/lib/schema";

const faqKeys = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
];

export async function getFaqItems(locale) {
  const t = await getTranslations({ locale, namespace: "FAQ" });
  return faqKeys.map((k) => ({
    question: t(`q_${k}`),
    answer: t(`q_${k}_desc`),
  }));
}

/**
 * Server-rendered structured data for a page: WebPage + BreadcrumbList,
 * plus Service and/or FAQPage when requested.
 *
 * crumbs: [{ name, path }] after Home, ending with the current page.
 */
export default async function PageSchema({
  locale,
  path,
  seoKey,
  crumbs = [],
  service = false,
  faq = false,
  webPageType,
  name: nameOverride,
  description: descriptionOverride,
}) {
  const t = await getTranslations({ locale, namespace: "SEO" });
  const header = await getTranslations({ locale, namespace: "Header" });
  const name = nameOverride ?? t(`${seoKey}_title`);
  const description = descriptionOverride ?? t(`${seoKey}_desc`);

  const data = [
    webPageSchema(locale, { path, name, description, type: webPageType }),
  ];
  if (crumbs.length) {
    data.push(breadcrumbSchema(locale, header("home"), crumbs));
  }
  if (service) {
    data.push(
      serviceSchema(locale, { path, name: crumbs.at(-1)?.name ?? name, description })
    );
  }
  if (faq) data.push(faqSchema(await getFaqItems(locale)));

  return <JsonLd data={data} />;
}
