import { SITE_URL, siteConfig, areaServed } from "./site";

const orgId = `${SITE_URL}/#organization`;
const siteId = `${SITE_URL}/#website`;

const url = (locale, path = "") => `${SITE_URL}/${locale}${path}`;
const abs = (p) => (p?.startsWith("http") ? p : `${SITE_URL}${p}`);

const sameAs = () => Object.values(siteConfig.social).filter(Boolean);

// Services offered, used for the organization's offer catalog (helps search engines and AI assistants
// understand what the company does).
const offerings = {
  ar: [
    "تطوير المواقع والمتاجر الإلكترونية",
    "أنظمة ERP والمحاسبة وإدارة المخزون",
    "التصميم الجرافيكي والهوية البصرية",
    "بناء العلامات التجارية",
    "كتابة المحتوى",
    "إدارة وسائل التواصل الاجتماعي",
  ],
  en: [
    "Website and e-commerce development",
    "ERP, accounting and inventory systems",
    "Graphic design and visual identity",
    "Brand building",
    "Content writing",
    "Social media management",
  ],
};

export function organizationGraph(locale, { description }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: locale === "ar" ? siteConfig.nameAr : siteConfig.name,
        alternateName: locale === "ar" ? siteConfig.name : siteConfig.nameAr,
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: abs("/logo.png"), width: 512, height: 512 },
        image: abs("/og-image.png"),
        description,
        foundingDate: String(siteConfig.foundingYear),
        email: siteConfig.email,
        telephone: siteConfig.phone,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: siteConfig.phone,
            email: siteConfig.email,
            availableLanguage: ["Arabic", "English"],
          },
        ],
        areaServed: areaServed.map((code) => ({ "@type": "Country", name: code })),
        knowsAbout: offerings[locale],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: locale === "ar" ? "خدمات نايلوب" : "Niloop services",
          itemListElement: offerings[locale].map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
        ...(sameAs().length ? { sameAs: sameAs() } : {}),
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: SITE_URL,
        name: locale === "ar" ? `${siteConfig.nameAr} - ${siteConfig.name}` : siteConfig.name,
        inLanguage: ["ar", "en"],
        publisher: { "@id": orgId },
      },
    ],
  };
}

// items: [{ name, path }] after Home; the last item is the current page.
export function breadcrumbSchema(locale, homeName, items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: homeName, path: "" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: url(locale, item.path),
    })),
  };
}

export function webPageSchema(locale, { path, name, description, type = "WebPage" }) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url(locale, path)}#webpage`,
    url: url(locale, path),
    name,
    description,
    inLanguage: locale,
    isPartOf: { "@id": siteId },
    about: { "@id": orgId },
  };
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export function serviceSchema(locale, { path, name, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url(locale, path)}#service`,
    name,
    description,
    url: url(locale, path),
    provider: { "@id": orgId },
    areaServed: areaServed.map((code) => ({ "@type": "Country", name: code })),
    inLanguage: locale,
  };
}

export function projectSchema(locale, { path, name, description, images, link }) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url(locale, path)}#project`,
    name,
    description,
    url: url(locale, path),
    image: images.map(abs),
    creator: { "@id": orgId },
    inLanguage: locale,
    ...(link ? { sameAs: link } : {}),
  };
}

export function projectsListSchema(locale, items) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: url(locale, item.path),
      name: item.name,
    })),
  };
}
