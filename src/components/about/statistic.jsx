"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Briefcase, Award, UserCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import Wave from "../ui/wave";
import { Ripples } from "../ui/shapes";
import { siteConfig } from "@/lib/site";

function Counter({ value, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startVal = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));

    const interval = setInterval(() => {
      startVal += step;
      if (startVal >= value) {
        startVal = value;
        clearInterval(interval);
      }
      setCount(startVal);
    }, 16);

    return () => clearInterval(interval);
  }, [value, start]);

  return <span>{count}</span>;
}

export default function StatsSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const t = useTranslations("Stats");

  const stats = [
    { id: 1, icon: <Users size={32} />, label: t("clients"), value: 25 },
    { id: 2, icon: <Briefcase size={32} />, label: t("projects"), value: 20 },
    { id: 3, icon: <Award size={32} />, label: t("expert"), value: new Date().getFullYear() - siteConfig.foundingYear },
    { id: 4, icon: <UserCheck size={32} />, label: t("members"), value: 5 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect(); // يوقف بعد التشغيل مرة واحدة
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="gradient-pan relative overflow-hidden bg-gradient-to-r from-[#0b2a57] via-[#1e549f] to-[#c58f3c] py-28 text-white"
    >
      <Wave position="top" className="text-white" />
      <Ripples className="start-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2" />
      <div className="container relative z-20 grid grid-cols-2 gap-6 text-center md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-3 rounded-3xl border border-white/15 bg-white/10 px-4 py-8 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:bg-white/20"
          >
            <div className="rounded-full bg-[#dda853] p-4 text-[#0b2a57] shadow-lg">{item.icon}</div>
            <h3 className="text-4xl font-bold">
              <Counter value={item.value} start={inView} />+
            </h3>
            <p className="text-lg">{item.label}</p>
          </div>
        ))}
      </div>
      <Wave className="text-water" />
    </section>
  );
}
