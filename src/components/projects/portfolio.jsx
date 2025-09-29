"use client";

import Image from "next/image";
import Link from "next/link";

export default function WorksSection() {
  const works = [
    { id: 1, image: "/images/work1.jpg", link: "/works/1" },
    { id: 2, image: "/images/work2.jpg", link: "/works/2" },
    { id: 3, image: "/images/work3.jpg", link: "/works/3" },
    { id: 4, image: "/images/work4.jpg", link: "/works/4" },
    { id: 5, image: "/images/work5.jpg", link: "/works/5" },
    { id: 6, image: "/images/work6.jpg", link: "/works/6" },
    { id: 7, image: "/images/work7.jpg", link: "/works/7" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          أعمالنا
        </h2>

        {/* Grid pattern */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* العمود الأول */}
          <div className="grid gap-6 mt-10">
            {works.slice(0, 2).map((work) => (
              <WorkCard key={work.id} image={work.image} link={work.link} />
            ))}
          </div>

          {/* العمود الثاني */}
          <div className="grid gap-6">
            {works.slice(2, 5).map((work) => (
              <WorkCard key={work.id} image={work.image} link={work.link} />
            ))}
          </div>

          {/* العمود الثالث */}
          <div className="grid gap-6 mt-10">
            {works.slice(5, 7).map((work) => (
              <WorkCard key={work.id} image={work.image} link={work.link} />
            ))}
          </div>
        </div>

        {/* زر المزيد */}
        <div className="text-center mt-12">
          <Link
            href="/works"
            className="px-6 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition"
          >
            المزيد
          </Link>
        </div>
      </div>
    </section>
  );
}

// Component WorkCard
function WorkCard({ image, link }) {
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
        className="object-cover w-full h-64 group-hover:scale-105 transition duration-500"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-900/0 opacity-0 group-hover:opacity-100 transition duration-500 flex items-start justify-center p-4">
        <p className="text-white font-semibold">عرض العمل</p>
      </div>
    </Link>
  );
}
