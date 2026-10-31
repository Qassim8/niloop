import Header from "@/components/header";
import Footer from "@/components/footer";
import MotionProvider from "@/components/motion-provider";
import JsonLd from "@/components/json-ld";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Tajawal, Asap } from "next/font/google";
import { routing } from "@/i18n/routing";
import { SITE_URL, siteConfig } from "@/lib/site";
import { organizationGraph } from "@/lib/schema";
import "../globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

const asap = Asap({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-asap",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport = {
  themeColor: "#1e549f",
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
      className={`${tajawal.variable} ${asap.variable}`}
      suppressHydrationWarning
    >
      <body>
        <JsonLd data={organizationGraph(locale, { description: t("home_desc") })} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MotionProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </MotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
