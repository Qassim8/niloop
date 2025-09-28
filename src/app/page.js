import AboutSection from "@/components/about";
import Contact from "@/components/contact";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import WorksSection from "@/components/portfolio";
import QuoteSection from "@/components/quote";
import ServicesSection from "@/components/services";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <WorksSection />
      <QuoteSection />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
