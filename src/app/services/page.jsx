import BreadcrumbSection from "@/components/breadcrumb";
import CallToAction from "@/components/services/getservice";
import ServicesSection from "@/components/services/services";
import WhyUs from "@/components/services/whyus";
import React from "react";

const Services = () => {
  return (
    <>
      <BreadcrumbSection
        title="تعرف على خدماتنا"
        links={[
          { label: "الخدمات" },
        ]}
      />
      <ServicesSection />
      <CallToAction />
      <WhyUs />
    </>
  );
};

export default Services;
