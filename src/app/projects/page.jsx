import BreadcrumbSection from '@/components/breadcrumb'
import WorksSection from '@/components/projects/portfolio';
import HowWeWork from '@/components/projects/steps';
import React from 'react'

const Projects = () => {
    return (
      <>
        <BreadcrumbSection
                title="ابرز الاعمال"
                links={[
                  { label: "اعمالنا" },
                ]}
              />
            <WorksSection />
            <HowWeWork />
      </>
    );
}

export default Projects