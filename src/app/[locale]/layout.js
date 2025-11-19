import Header from "@/components/header";
import Footer from "@/components/footer";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Nunito } from "next/font/google";
import { Changa } from "next/font/google";
import "../globals.css";

const inter = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const cairo = Changa({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-ar",
  display: "swap",
});

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params; // ✅ بدون await
  let messages;

  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.log(error);
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${cairo.variable}`}
      suppressHydrationWarning
    >
      <body dir={locale === "ar" ? "rtl" : "ltr"}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
