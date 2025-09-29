import BreadcrumbSection from '@/components/breadcrumb'
import WorksSection from '@/components/projects/portfolio';
import HowWeWork from '@/components/projects/steps';
import React from 'react'

const Projects = () => {
    return (
      <>
        <BreadcrumbSection
          title="اعمالنا"
          description="
        اعمالنا تعكس التزامنا بالتميز والابتكار في كل مشروع نقوم به.نحن نفخر بمجموعة
         متنوعة من المشاريع التي تعكس مهاراتنا وخبراتنا في تقديم حلول تقنية متقدمة تلبي احتياجات"
            />
            <WorksSection />
            <HowWeWork />
      </>
    );
}

export default Projects