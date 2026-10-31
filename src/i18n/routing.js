import { defineRouting } from "next-intl/routing";
import { locales, defaultLocale } from "@/lib/site";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
  // hreflang is declared in page metadata, so skip the Link headers the middleware would add.
  alternateLinks: false,
});
