import AboutSection from "@/components/about/about";
import GoalsSection from "@/components/about/goals";
import StatsSection from "@/components/about/statistic";
import BreadcrumbSection from "@/components/breadcrumb";
import Testimonials from "@/components/home/testimonials";

const About = () => {
  return (
    <>
      <BreadcrumbSection
        title="عن نايلوب"
        description="
          فريق من المبتكرين والمحترفين الذين يستخدمون خبرتهم وإبداعهم لتحويل
          أفكارك إلى حقيقة في الفضاء الرقمي"
      />
          <AboutSection />
          <GoalsSection />
          <StatsSection />
          <Testimonials />
    </>
  );
};

export default About;
