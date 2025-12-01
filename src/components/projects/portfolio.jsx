"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../sections-header";
import { useLocale, useTranslations } from "next-intl";
import Modal from "./modal";
import WorkCard from "./work-card";

export default function WorksSection({ home }) {
  let t = useTranslations("Projects");
  const locale = useLocale();

  const [selectedWork, setSelectedWork] = useState(null);

  const works = [
    {
      id: 1,
      image: "/images/villance.jpg",
      images: [
        "/images/villance-auth.webp",
        "/images/villance-home.webp",
        "/images/villance-hotels.webp",
        "/images/villance-hotel.webp",
        "/images/villance-room.webp",
        "/images/villance-books.webp",
      ],
      link: "/works/1",
      title: "",
      desc: "نبذة عن المشروع 1",
      type: "website",
    },
    {
      id: 2,
      image: "/images/zus.jpeg",
      images: [],
      link: "/works/2",
      title: "",
      desc: "نبذة عن المشروع 1",
      type: "website",
    },
    {
      id: 3,
      image: "/images/villance.jpg",
      images: [],
      link: "/works/3",
      title: "",
      desc: "نبذة عن المشروع 1",
      type: "graphic",
    },
  ];

  const [allWorks, setAllWorks] = useState(works);

  const filterProjects = (type) => {
    if (type === "all") {
      setAllWorks(works);
    } else {
      setAllWorks(works.filter((el) => el.type === type));
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-0">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        <section>
          {!home && (
            <ul className="my-8 flex justify-center items-center gap-5">
              <button className="px-6 py-2 bg-alt text-main font-bold rounded-md cursor-pointer">
                {t("all")}
              </button>
              <button
                className="px-6 py-2 bg-alt text-main font-bold rounded-md cursor-pointer"
                onClick={() => filterProjects("website")}
              >
                {t("website")}
              </button>
              <button
                className="px-6 py-2 bg-alt text-main font-bold rounded-md cursor-pointer"
                onClick={() => filterProjects("graphic")}
              >
                {t("graphic")}
              </button>
            </ul>
          )}
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allWorks.map((work) => (
              <WorkCard
                key={work.id}
                work={work}
                onOpen={() => setSelectedWork(work)}
                t={t}
              />
            ))}
          </div>
        </section>

        {/* زر المزيد */}
        {home && (
          <div className="text-center mt-12">
            <Link
              href={`${locale}/projects`}
              className="px-6 py-3 bg-alt text-main font-bold rounded-2xl hover:opacity-80 transition duration-300"
            >
              {t("more")}
            </Link>
          </div>
        )}
      </div>

      {/* مودال */}
      {selectedWork && (
        <Modal work={selectedWork} onClose={() => setSelectedWork(null)} />
      )}
    </section>
  );
}
