"use client";

import { useState } from "react";
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
        "/images/villance.jpg",
        "/images/villance-auth.webp",
        "/images/villance-home.webp",
        "/images/villance-hotels.webp",
        "/images/villance-hotel.webp",
        "/images/villance-room.webp",
        "/images/villance-books.webp",
        "/images/villance-book1.webp",
        "/images/villance-book2.webp",
      ],
      link: "https://villans.vercel.app/villans",
      title: t("villance_title"),
      desc: t("villance_desc"),
      type: "website",
    },
    {
      id: 9,
      image: "/images/eco.webp",
      images: [
        "/images/eco.webp",
        "/images/eco-1.webp",
        "/images/eco-2.webp",
        "/images/eco-3.webp",
        "/images/eco-4.webp",
      ],
      title: t("economics_title"),
      desc: t("economics_desc"),
      type: "graphic",
    },
    {
      id: 2,
      image: "/images/zus.webp",
      images: [
        "/images/zus.webp",
        "/images/zus1.webp",
        "/images/zus2.webp",
        "/images/zus3.webp",
        "/images/zus4.webp",
        "/images/zus5.webp",
      ],
      link: "https://zus.vercel.app/",
      title: t("zus_title"),
      desc: t("zus_desc"),
      type: "website",
    },
    {
      id: 3,
      image: "/images/abda.webp",
      images: [
        "/images/abda.webp",
        "/images/abda1.webp",
        "/images/abda2.webp",
        "/images/abda3.webp",
        "/images/abda4.webp",
      ],
      link: "https://ebda-bswual.vercel.app/",
      title: t("abda_title"),
      desc: t("abda_desc"),
      type: "collection",
    },
    {
      id: 4,
      image: "/images/badr.webp",
      images: [
        "/images/badr.webp",
        "/images/badr1.webp",
        "/images/badr2.webp",
        "/images/badr3.webp",
      ],
      title: t("badr_title"),
      desc: t("badr_desc"),
      type: "graphic",
    },
    {
      id: 5,
      image: "/images/bareq.webp",
      images: [
        "/images/bareq.webp",
        "/images/bareq1.webp",
        "/images/bareq2.webp",
        "/images/bareq3.webp",
        "/images/bareq4.webp",
      ],
      link: "https://bareqrt.com/",
      title: t("bareq_title"),
      desc: t("bareq_desc"),
      type: "website",
    },
    {
      id: 6,
      image: "/images/abwab.webp",
      images: [
        "/images/abwab.webp",
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
      title: t("abwab_title"),
      desc: t("abwab_desc"),
      type: "graphic",
    },
    {
      id: 7,
      image: "/images/madghut.webp",
      images: [
        "/images/madghut.webp",
        "/images/madghut1.webp",
        "/images/madghut2.webp",
        "/images/madghut3.webp",
        "/images/madghut4.webp",
        "/images/madghut5.webp",
        "/images/madghut6.webp",
        "/images/madghut7.webp",
        "/images/madghut8.webp",
      ],
      title: t("madaghut_title"),
      desc: t("madaghut_desc"),
      type: "graphic",
    },
    {
      id: 8,
      image: "/images/eatc-0.webp",
      images: [
        "/images/eatc-0.webp",
        "/images/eatc.webp",
        "/images/eatc-1.webp",
        "/images/eatc-2.webp",
        "/images/eatc-3.webp",
        "/images/eatc-4.webp",
      ],
      title: t("eatc_title"),
      desc: t("eatc_desc"),
      type: "graphic",
    },
    {
      id: 10,
      image: "/images/speed.webp",
      images: [
        "/images/speed.webp",
        "/images/speed-1.webp",
        "/images/speed-2.webp",
        "/images/speed-3.webp",
      ],
      title: t("speed_title"),
      desc: t("speed_desc"),
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

  const filterBtns = [
    { type: "all", title: t("all") },
    { type: "website", title: t("website") },
    { type: "graphic", title: t("graphic") },
    { type: "collection", title: `${t("website")} & ${t("graphic")}` },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        <section>
          {!home && (
            <ul className="my-8 grid grid-cols-2 md:grid-cols-4 gap-3 overflow-x-auto max-w-full">
              {filterBtns.map(({ title, type }, idx) => (
                <button
                  className={`text-[10px] md:text-[16px] px-3 md:px-6 py-2 font-bold rounded-md outline-0 cursor-pointer 
      ${activeFilter === type ? "bg-main text-white" : "bg-alt text-main"}
    `}
                  onClick={() => filterProjects(type)}
                >
                  {title}
                </button>
              ))}
            </ul>
          )}
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
