"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../sections-header";
import { useTranslations } from "next-intl";

export default function WorksSection() {
  let t = useTranslations("Projects");

  const works = [
    { id: 1, image: "/images/villance.jpg", link: "/works/1" },
    { id: 2, image: "/images/villance.jpg", link: "/works/2" },
    { id: 3, image: "/images/villance.jpg", link: "/works/3" },
    { id: 4, image: "/images/villance.jpg", link: "/works/4" },
    { id: 5, image: "/images/villance.jpg", link: "/works/5" },
    { id: 6, image: "/images/villance.jpg", link: "/works/6" },
    { id: 7, image: "/images/villance.jpg", link: "/works/7" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-0">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        {/* Grid pattern */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* العمود الأول */}
          <div className="grid gap-6 mt-10">
            {works.slice(0, 2).map((work) => (
              <WorkCard key={work.id} image={work.image} link={work.link} t={t} />
            ))}
          </div>

          {/* العمود الثاني */}
          <div className="grid gap-6">
            {works.slice(2, 5).map((work) => (
              <WorkCard key={work.id} image={work.image} link={work.link} t={t} />
            ))}
          </div>

          {/* العمود الثالث */}
          <div className="grid gap-6 mt-10">
            {works.slice(5, 7).map((work) => (
              <WorkCard key={work.id} image={work.image} link={work.link} t={t} />
            ))}
          </div>
        </div>

        {/* زر المزيد */}
        <div className="text-center mt-12">
          <Link
            href="/works"
            className="px-6 py-3 bg-alt text-main font-bold rounded-2xl hover:opacity-80 transition duration-300"
          >
            {t("more")}
          </Link>
        </div>
      </div>
    </section>
  );
}

// Component WorkCard
function WorkCard({ image, link, t }) {
  return (
    <Link
      href={link}
      className="relative block group rounded-xl overflow-hidden"
    >
      <Image
        src={image}
        alt="Work"
        width={500}
        height={500}
        className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-900/0 opacity-0 group-hover:opacity-100 transition duration-500 flex items-start justify-center p-4">
        <p className="text-white font-semibold hover:!text-blue-700 duration-300">{t("show")}</p>
      </div>
    </Link>
  );
}
