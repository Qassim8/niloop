import StatsSection from "@/components/about/statistic";
import ClientsStrip from "@/components/home/clients";
import ErpSpotlight from "@/components/home/erp-spotlight";
import Intent from "@/components/home/intent";
import ServicesTicker from "@/components/home/ticker";
import HowWeWork from "@/components/projects/steps";
import WhyUs from "@/components/services/whyus";
import FAQ from "@/components/home/faq";
import Hero from "@/components/home/hero";
import WorksSection from "@/components/projects/portfolio";
import ServicesSection from "@/components/services/services";
import Testimonials from "@/components/home/testimonials";
import OffersSection from "@/components/pricing/offers";
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
      <ClientsStrip />
      <StatsSection />
      <Intent />
      <ServicesSection />
      {/* <ServicesTicker /> */}
      <WorksSection home={true} />
      <ErpSpotlight />
      <OffersSection limit={3} showAllLink />
      <HowWeWork tone="sand" />
      <WhyUs tone="white" />
      <Testimonials tone="sand" />
      <FAQ home={true} />
    </>
  );
}
