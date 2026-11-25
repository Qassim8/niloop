"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

// Logos of real clients (the same ones that appear in the testimonials).
const clients = [
  { name: "first_name", logo: "/images/bareq-logo.webp" },
  { name: "second_name", logo: "/images/sanaa.png" },
  { name: "third_name", logo: "/images/badr-logo.png" },
  { name: "fourth_name", logo: "/images/zadi-logo.png" },
  { name: "seventh_name", logo: "/images/abda_bswal.png" },
  { name: "eigth_name", logo: "/images/eatc-logo.png" },
];

export default function ClientsStrip() {
  const t = useTranslations("Testimonials");
  const c = useTranslations("Clients");
  const loop = [...clients, ...clients];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container">
        <p className="mb-8 text-center text-sm font-semibold text-slate-500">{c("title")}</p>
      </div>
      <div
        dir="ltr"
        className="marquee overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
      >
        <ul className="marquee-track items-center">
          {loop.map((client, i) => (
            <li key={i} aria-hidden={i >= clients.length} className="shrink-0 pe-16">
              <Image
                src={client.logo}
                alt={t(client.name)}
                width={160}
                height={64}
                className="h-12 w-auto max-w-[9rem] object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
