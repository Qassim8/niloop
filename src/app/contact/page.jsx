import BreadcrumbSection from '@/components/breadcrumb'
import Contact from '@/components/contact/contact';
import React from 'react'

function ContactUs() {
  return (
    <>
      <BreadcrumbSection
        title="تواصل معنا"
        description="
      كن على تواصل معنا لأي استفسارات أو طلبات خاصة. نحن هنا لمساعدتك في تحقيق أهدافك الرقمية وتقديم الدعم الذي تحتاجه."
      />
      <Contact />
    </>
  );
}

export default ContactUs