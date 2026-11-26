"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Briefcase } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SectionHeader from "../sections-header";
import Chip from "../ui/chip";
import WorkCard from "../projects/work-card";
import { projects } from "@/data/projects";

const featured = projects.slice(0, 8);

// Selected work: on desktop the section is pinned and the cards slide sideways while the page
// scrolls down; on phones it is an ordinary swipeable row.
export default function WorksScroll() {
  const t = useTranslations("Projects");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const rtl = locale === "ar";

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const [active, setActive] = useState(0);
  const [desktop, setDesktop] = useState(false);

  // The sideways movement only applies from the md breakpoint up
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const update = () => setDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // How far the row has to travel so that its last card reaches the end of the screen
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, rtl ? distance : -distance]);
  const bar = useTransform(scrollYProgress, [0, 1], [0.04, 1]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(featured.length - 1, Math.floor(v * featured.length)));
  });

  const pad = "ps-5 md:ps-[max(2rem,calc((100vw-1280px)/2+2rem))] pe-5 md:pe-16";

  return (
    <section ref={sectionRef} className="relative bg-sand md:h-[320vh]">
      <div className="py-20 md:sticky md:top-0 md:flex md:h-screen md:flex-col md:justify-center md:overflow-hidden md:pb-6 md:pt-24">
        <div className="container">
          <SectionHeader
            title={t("title")}
            subtitle={t("subtitle")}
            chip={<Chip icon={Briefcase} tone="blue" />}
            className="mb-8 md:mb-10"
          />
          <div className="mb-6 flex items-center justify-between gap-6">
            <p dir="ltr" className="hidden text-5xl font-semibold text-nile-950 md:block">
              {String(active + 1).padStart(2, "0")}
              <span className="text-2xl text-slate-400"> / {String(featured.length).padStart(2, "0")}</span>
            </p>
            <div className="hidden h-0.5 flex-1 overflow-hidden rounded-full bg-nile-200 md:block">
              <motion.div
                style={{ scaleX: bar }}
                className={`h-full bg-gold-400 ${rtl ? "origin-right" : "origin-left"}`}
              />
            </div>
            <Link href={`/${locale}/projects`} className="btn-outline whitespace-nowrap">
              {t("more")}
              <Arrow size={16} />
            </Link>
          </div>
        </div>

        {/* Phones: native horizontal swipe. Desktop: the track is moved by the scroll position. */}
        <div className="overflow-x-auto md:overflow-visible [scrollbar-width:none] snap-x snap-mandatory md:snap-none">
          <motion.ul
            ref={trackRef}
            style={desktop ? { x } : undefined}
            className={`flex w-max gap-5 ${pad} md:will-change-transform`}
          >
            {featured.map((project, i) => (
              <li
                key={project.slug}
                className={`w-[78vw] shrink-0 snap-center md:w-[26rem] md:transition-opacity md:duration-500 ${
                  i === active ? "md:opacity-100" : "md:opacity-60"
                }`}
              >
                <WorkCard
                  href={`/${locale}/projects/${project.slug}`}
                  image={project.image}
                  title={t(`${project.key}_title`)}
                  label={t("show")}
                  tag={t(`type_${project.type}`)}
                />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
