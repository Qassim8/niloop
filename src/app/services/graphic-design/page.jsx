import BreadcrumbSection from '@/components/breadcrumb'
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
    </>
  );
}

export default Graphic