import AboutSection from "@/components/about/about";
import Contact from "@/components/contact/contact";
import FAQ from "@/components/home/faq";
import Hero from "@/components/home/hero";
import WorksSection from "@/components/projects/portfolio";
import QuoteSection from "@/components/home/quote";
import ServicesSection from "@/components/services/services";
import Testimonials from "@/components/home/testimonials";
import PageSchema from "@/components/page-schema";
import { setRequestLocale } from "next-intl/server";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return createMetadata({ locale, key: "home" });
}

export default async function Home({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PageSchema locale={locale} path="" seoKey="home" faq />
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
