import BreadcrumbSection from "@/components/breadcrumb";
import ServicesSection from "@/components/services/services";
import React from "react";

const Services = () => {
  return (
    <>
      <BreadcrumbSection
        title="الخدمات"
        description="سنساعدك في تحقيق أهدافك الرقمية من خلال مجموعة شاملة من الخدمات المصممة لتلبية احتياجاتك الفريدة"
          />
          <ServicesSection />
    </>
  );
};

export default Services;
