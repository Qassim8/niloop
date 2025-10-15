import AboutSection from "@/components/about/about";
import GoalsSection from "@/components/about/goals";
import StatsSection from "@/components/about/statistic";
import BreadcrumbSection from "@/components/breadcrumb";
import Testimonials from "@/components/home/testimonials";

const About = () => {
  return (
    <>
      <BreadcrumbSection
              title="من نحن"
              links={[
                { label: "من نحن" },
              ]}
            />
          <AboutSection />
          <GoalsSection />
          <StatsSection />
          <Testimonials />
    </>
  );
};

export default About;
