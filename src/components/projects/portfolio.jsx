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
        "/images/villance-book1.webp",
        "/images/villance-book2.webp",
      ],
      link: "/works/1",
      title: "",
      desc: "نبذة عن المشروع 1",
      type: "website",
    },
    {
      id: 2,
      image: "/images/zus.webp",
      images: [
        "/images/zus1.webp",
        "/images/zus2.webp",
        "/images/zus3.webp",
        "/images/zus4.webp",
        "/images/zus5.webp",
      ],
      link: "/works/2",
      title: "",
      desc: "نبذة عن المشروع 1",
      type: "website",
    },
    {
      id: 3,
      image: "/images/abda.webp",
      images: [
        "/images/abda1.webp",
        "/images/abda2.webp",
        "/images/abda3.webp",
        "/images/abda4.webp",
      ],
      link: "/works/3",
      title: "",
      desc: "نبذة عن المشروع 1",
      type: "collection",
    },
    {
      id: 4,
      image: "/images/badr.webp",
      images: [
        "/images/badr1.webp",
        "/images/badr2.webp",
        "/images/badr3.webp",
      ],
      link: "/works/3",
      title: "",
      desc: "نبذة عن المشروع 1",
      type: "graphic",
    },
    {
      id: 5,
      image: "/images/bareq.webp",
      images: [
        "/images/bareq1.webp",
        "/images/bareq2.webp",
        "/images/bareq3.webp",
        "/images/bareq4.webp",
      ],
      link: "/works/3",
      title: "",
      desc: "نبذة عن المشروع 1",
      type: "website",
    },
    {
      id: 6,
      image: "/images/abwab.webp",
      images: [
        "/images/abwab0.webp",
        "/images/abwab1.webp",
        "/images/abwab2.webp",
        "/images/abwab3.webp",
        "/images/abwab4.webp",
        "/images/abwab5.webp",
        "/images/abwab6.webp",
        "/images/abwab7.webp",
        "/images/abwab8.webp",
        "/images/abwab9.webp",
      ],
      link: "/works/3",
      title: "",
      desc: "نبذة عن المشروع 1",
      type: "graphic",
    },
    {
      id: 7,
      image: "/images/madghut.webp",
      images: [
        "/images/madghut1.webp",
        "/images/madghut2.webp",
        "/images/madghut3.webp",
        "/images/madghut4.webp",
        "/images/madghut5.webp",
        "/images/madghut6.webp",
        "/images/madghut7.webp",
        "/images/madghut8.webp",
      ],
      link: "/works/3",
      title: "",
      desc: "نبذة عن المشروع 1",
      type: "graphic",
    },
  ];

  const [selectedWork, setSelectedWork] = useState(null);
  const [allWorks, setAllWorks] = useState(works);
  const [activeFilter, setActiveFilter] = useState("all");

  const filterProjects = (type) => {
    setActiveFilter(type);
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
              <button
                className={`px-6 py-2 font-bold rounded-md cursor-pointer 
      ${activeFilter === "all" ? "bg-main text-white" : "bg-alt text-main"}
    `}
                onClick={() => filterProjects("all")}
              >
                {t("all")}
              </button>

              <button
                className={`px-6 py-2 font-bold rounded-md cursor-pointer 
      ${activeFilter === "website" ? "bg-main text-white" : "bg-alt text-main"}
    `}
                onClick={() => filterProjects("website")}
              >
                {t("website")}
              </button>

              <button
                className={`px-6 py-2 font-bold rounded-md cursor-pointer 
      ${activeFilter === "graphic" ? "bg-main text-white" : "bg-alt text-main"}
    `}
                onClick={() => filterProjects("graphic")}
              >
                {t("graphic")}
              </button>

              <button
                className={`px-6 py-2 font-bold rounded-md cursor-pointer 
      ${
        activeFilter === "collection"
          ? "bg-main text-white"
          : "bg-alt text-main"
      }
    `}
                onClick={() => filterProjects("collection")}
              >
                {`${t("website")} & ${t("graphic")}`}
              </button>
            </ul>
          )}
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(home ? allWorks.slice(0, 6) : allWorks).map((work) => (
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
