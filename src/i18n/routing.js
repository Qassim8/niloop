import { defineRouting } from "next-intl/routing";
import { locales, defaultLocale } from "@/lib/site";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
  // Arabic is the primary language: never switch visitors to English based on their browser
  // language or a stored cookie. The language switcher still lets them choose English.
  localeDetection: false,
  // hreflang is declared in page metadata, so skip the Link headers the middleware would add.
  alternateLinks: false,
});
