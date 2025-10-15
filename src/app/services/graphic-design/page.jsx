import BreadcrumbSection from '@/components/breadcrumb'
import FeaturesSection from '@/components/services/graphic-design/features';
import TopSection from '@/components/services/graphic-design/top-section';
import React from 'react'

function Graphic() {
  return (
    <>
      <BreadcrumbSection
        title="التصميم الجرافيكي"
        links={[
          { label: "الخدمات", href: "/services" },
          { label: "التصميم الجرافيكي" },
        ]}
      />
      <TopSection />
      <FeaturesSection />
    </>
  );
}

export default Graphic