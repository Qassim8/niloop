"use client"
import BreadcrumbSection from '@/components/breadcrumb'
import Contact from '@/components/contact/contact';
import FAQ from '@/components/home/faq';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react'

function ContactUs() {

    const t = useTranslations("Contact");

    const [title, setTitle] = useState(t("title"));

    useEffect(() => {
      setTitle(title);
    }, [title]);

  return (
    <>
      <BreadcrumbSection title={title} links={[{label : title}]}/>
      <FAQ />
      <Contact />
    </>
  );
}

export default ContactUs