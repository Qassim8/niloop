import BreadcrumbSection from '@/components/breadcrumb'
import Contact from '@/components/contact/contact';
import FAQ from '@/components/home/faq';
import React from 'react'

function ContactUs() {
  return (
    <>
      <BreadcrumbSection
              title="اتصل بنا"
              links={[
                { label: "التواصل" },
              ]}
            />
      <FAQ />
      <Contact />
    </>
  );
}

export default ContactUs