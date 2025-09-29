import BreadcrumbSection from "@/components/breadcrumb";
import CallToAction from "@/components/services/getservice";
import ServicesSection from "@/components/services/services";
import WhyUs from "@/components/services/whyus";
import React from "react";

const Services = () => {
  return (
    <>
      <BreadcrumbSection
        title="الخدمات"
        description="سنساعدك في تحقيق أهدافك الرقمية من خلال مجموعة شاملة من الخدمات المصممة لتلبية احتياجاتك الفريدة"
      />
      <ServicesSection />
      <CallToAction />
      <WhyUs />
    </>
  );
};

export default Services;
