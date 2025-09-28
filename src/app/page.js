import AboutSection from "@/components/about";
import Hero from "@/components/hero";
import WorksSection from "@/components/portfolio";
import ServicesSection from "@/components/services";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <WorksSection />
    </>
  );
}
