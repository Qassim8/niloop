import AboutSection from "@/components/about/about";
import Contact from "@/components/contact/contact";
import FAQ from "@/components/home/faq";
import Hero from "@/components/home/hero";
import WorksSection from "@/components/projects/portfolio";
import QuoteSection from "@/components/home/quote";
import ServicesSection from "@/components/services/services";
import Testimonials from "@/components/home/testimonials";
import { getTranslations } from "next-intl/server";
import "../globals.css";

export async function generateMetadata({ params }) {
  // const { locale } = params;
  const t = await getTranslations("SEO");

  // const baseUrl = "https://your-domain.com";

  return {
    title: t("home_title"),
    description: t("home_desc"),
    // alternates: {
    //   canonical: `${baseUrl}/${locale}`,
    //   languages: {
    //     en: `${baseUrl}/en`,
    //     ar: `${baseUrl}/ar`,
    //   },
    // },
    openGraph: {
      title: t("home_title"),
      description: t("home_desc"),
      // url: `${baseUrl}/${locale}`,
      siteName: "Niloop",
      type: "website",
      // images: [`${baseUrl}/og-image.png`],
    },
    twitter: {
      card: "summary_large_image",
      title: t("home_title"),
      description: t("home_desc"),
      // images: [`${baseUrl}/og-image.png`],
    },
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <WorksSection home={true} />
      <QuoteSection />
      <Testimonials />
      <FAQ home={true} />
      <Contact />
    </>
  );
}
