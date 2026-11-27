"use client";

import AboutGallery from "@/components/about/gallery";
import AboutHero from "@/components/about/about-hero";
import ApproachSection from "@/components/about/approach";
import ClientsGrid from "@/components/about/clients-grid";
import ServiceAccordion from "@/components/about/service-accordion";
import StatsSection from "@/components/about/statistic";
import Story, { WideImage } from "@/components/about/story";
import ValuesSection from "@/components/about/values";
import Testimonials from "@/components/home/testimonials";

export default function AboutPageClient() {
  return (
    <>
      <AboutHero />
      <Story />
      <StatsSection />
      <WideImage />
      <ServiceAccordion />
      <ApproachSection />
      <ValuesSection />
      <ClientsGrid />
      <AboutGallery />
      <Testimonials />
    </>
  );
}
