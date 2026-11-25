import Header from "@/components/header";
import Footer from "@/components/footer";
import RouteLoader from "@/components/route-loader";
import MotionProvider from "@/components/motion-provider";
import JsonLd from "@/components/json-ld";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  Readex_Pro,
  IBM_Plex_Sans_Arabic,
  Aref_Ruqaa,
  Instrument_Serif,
} from "next/font/google";
import { routing } from "@/i18n/routing";
import { SITE_URL, siteConfig } from "@/lib/site";
import { organizationGraph } from "@/lib/schema";
import "../globals.css";

const readex = Readex_Pro({
  subsets: ["arabic", "latin"],
  variable: "--font-readex",
  display: "swap",
});

const plex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

// Accent fonts for the highlighted word in headlines (see .accent in globals.css)
const aref = Aref_Ruqaa({
  subsets: ["arabic", "latin"],
  weight: ["700"],
  variable: "--font-aref",
  display: "swap",
  preload: false,
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-instrument",
  display: "swap",
  preload: false,
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport = {
  themeColor: "#081b38",
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Brand" });

  return {
    metadataBase: new URL(SITE_URL),
    applicationName: t("name"),
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: { index: true, follow: true },
    formatDetection: { telephone: false, email: false, address: false },
    verification: {
      google: siteConfig.verification.google,
      other: siteConfig.verification.bing
        ? { "msvalidate.01": siteConfig.verification.bing }
        : undefined,
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "SEO" });

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${readex.variable} ${plex.variable} ${aref.variable} ${instrument.variable}`}
      suppressHydrationWarning
    >
      <body>
        <JsonLd data={organizationGraph(locale, { description: t("home_desc") })} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MotionProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <RouteLoader />
          </MotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
