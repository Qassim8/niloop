// Single source of truth for site-wide SEO / contact settings.
// Set NEXT_PUBLIC_SITE_URL (e.g. https://your-domain.com) in the hosting environment
// once the domain is connected; canonicals, sitemap and structured data all derive from it.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (vercelHost ? `https://${vercelHost}` : "http://localhost:3000")
).replace(/\/$/, "");

export const siteConfig = {
  name: "Niloop",
  nameAr: "نايلوب",
  foundingYear: 2021,
  email: "niloop.tech@gmail.com",
  phone: "+966577190748",
  phoneDisplay: "+966 57 719 0748",
  whatsapp: "https://wa.me/966577190748",
  // Add the real profile URLs here; they are rendered in the footer and in structured data.
  social: {
    facebook: "",
    linkedin: "",
    instagram: "",
  },
  // Optional: verification tokens from Google Search Console / Bing Webmaster Tools.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || undefined,
  },
};

export const locales = ["ar", "en"];
export const defaultLocale = "ar";

// ISO 3166-1 codes of the markets we target, in priority order.
export const areaServed = [
  "SA", "AE", "KW", "QA", "BH", "OM",
  "SD", "EG", "JO", "LB", "SY", "PS", "IQ",
  "GB", "DE", "FR", "US", "CA", "AU",
];

// Indexable static routes (locale prefix is added by the sitemap / metadata helpers).
export const staticRoutes = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/web-design", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/erp", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/graphic-design", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/marketing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.8, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
];
