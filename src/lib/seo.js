import { getTranslations } from "next-intl/server";
import { SITE_URL, siteConfig, locales, defaultLocale } from "./site";

const ogLocale = { ar: "ar_SA", en: "en_US" };

// Trims text to a snippet-friendly length without cutting a word in half.
export const truncate = (text, max = 160) => {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
};

export const absoluteUrl = (path = "") => `${SITE_URL}${path}`;

// hreflang map for a locale-less path ("" for home, "/services", ...).
export const languageAlternates = (path = "") => ({
  ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
  "x-default": `/${defaultLocale}${path}`,
});

/**
 * Builds Next.js metadata for a page: title/description from the SEO namespace
 * (`${key}_title`, `${key}_desc`) unless overridden, plus canonical, hreflang,
 * Open Graph and Twitter tags.
 */
export async function createMetadata({
  locale,
  path = "",
  key,
  title,
  description,
  image = "/og-image.png",
  type = "website",
}) {
  if (key) {
    const t = await getTranslations({ locale, namespace: "SEO" });
    title ??= t(`${key}_title`);
    description ??= t(`${key}_desc`);
  }

  const url = `/${locale}${path}`;
  const siteName = locale === "ar" ? `${siteConfig.nameAr} - ${siteConfig.name}` : siteConfig.name;

  return {
    title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
