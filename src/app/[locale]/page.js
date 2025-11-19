import AboutSection from "@/components/about/about";
import Contact from "@/components/contact/contact";
import FAQ from "@/components/home/faq";
import Hero from "@/components/home/hero";
import WorksSection from "@/components/projects/portfolio";
import QuoteSection from "@/components/home/quote";
import ServicesSection from "@/components/services/services";
import Testimonials from "@/components/home/testimonials";
import "../globals.css";

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
