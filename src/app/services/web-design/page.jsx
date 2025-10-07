import BreadcrumbSection from '@/components/breadcrumb'
import FeaturesSection from '@/components/services/web-design/featuers';
import TopSection from '@/components/services/web-design/top-section';
import Image from 'next/image';
import React from 'react'

function Web() {
  return (
    <>
      <BreadcrumbSection
        title="تصميم المواقع"
        description="نقدم مواقع عصرية وسريعة تلبي احتياجاتك"
        links={[
          { label: "الخدمات", href: "/services" },
          { label: "تصميم المواقع" },
        ]}
      />
      <TopSection />
      <FeaturesSection />
    </>
  );
}

export default Web