"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Editorial from "../ui/editorial";
import Reveal from "../ui/reveal";
import SplitReveal from "../ui/split-reveal";

const clients = [
  { name: "first_name", logo: "/images/bareq-logo.webp" },
  { name: "second_name", logo: "/images/sanaa.png" },
  { name: "third_name", logo: "/images/badr-logo.png" },
  { name: "fourth_name", logo: "/images/zadi-logo.png" },
  { name: "seventh_name", logo: "/images/abda_bswal.png" },
  { name: "eigth_name", logo: "/images/eatc-logo.png" },
];

// Client logos in a ruled grid.
export default function ClientsGrid() {
  const t = useTranslations("Testimonials");
  const c = useTranslations("Clients");

  return (
    <section className="section bg-white">
      <div className="container">
        <Editorial label={c("title")}>
          <h2 className="mb-10 max-w-3xl text-3xl font-semibold leading-[1.3] text-nile-950 md:mb-14 md:text-5xl md:leading-[1.2]">
            <SplitReveal text={c("headline")} />
          </h2>
          <ul className="grid grid-cols-2 border-s border-t border-line md:grid-cols-3">
            {clients.map(({ name, logo }, i) => (
              <Reveal as="li" key={name} delay={(i % 3) * 0.08} y={12} className="border-b border-e border-line">
                <div className="group flex h-36 items-center justify-center p-6 transition-colors duration-300 hover:bg-sand md:h-44">
                  <Image
                    src={logo}
                    alt={t(name)}
                    width={180}
                    height={80}
                    className="max-h-16 w-auto max-w-[9rem] object-contain opacity-60 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 md:max-h-20"
                  />
                </div>
              </Reveal>
            ))}
          </ul>
        </Editorial>
      </div>
    </section>
  );
}
