import BreadcrumbSection from "@/components/breadcrumb";
import FeaturesSection from "@/components/services/marketing/features";
import TopSection from "@/components/services/marketing/top-section";

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
      <TopSection />
      <FeaturesSection />
     
    </>
  );
}

export default Marketing;
