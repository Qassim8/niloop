"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Briefcase, Award, UserCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site";

function Counter({ value, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startVal = 0;
    const duration = 1800;
    const step = Math.max(1, Math.ceil(value / (duration / 16)));

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
    { id: 1, Icon: Users, label: t("clients"), value: 25 },
    { id: 2, Icon: Briefcase, label: t("projects"), value: 20 },
    { id: 3, Icon: Award, label: t("expert"), value: new Date().getFullYear() - siteConfig.foundingYear },
    { id: 4, Icon: UserCheck, label: t("members"), value: 5 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white pb-16 pt-4 md:pb-24">
      <div className="container">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line md:grid-cols-4">
          {stats.map(({ id, Icon, label, value }) => (
            <div key={id} className="flex flex-col gap-3 bg-white p-6 md:p-8">
              <Icon size={22} className="text-gold-500" />
              <dd className="order-2 text-4xl font-semibold text-nile-950 md:text-5xl">
                <span dir="ltr" className="inline-block">
                  <Counter value={value} start={inView} />+
                </span>
              </dd>
              <dt className="order-3 text-sm text-slate-500">{label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
