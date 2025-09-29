import BreadcrumbSection from "@/components/breadcrumb";

function Marketing() {
  return (
    <>
      <BreadcrumbSection
        title="التسويق الرقمي"
        links={[
          { label: "الخدمات", href: "/services" },
          { label: "التسويق الرقمي" },
        ]}
      />

     
    </>
  );
}

export default Marketing;
