"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Briefcase, Award, UserCheck } from "lucide-react";

const stats = [
  { id: 1, icon: <Users size={32} />, label: "عملاء سعداء", value: 25 },
  { id: 2, icon: <Briefcase size={32} />, label: "مشاريع منجزة", value: 20 },
  { id: 3, icon: <Award size={32} />, label: "سنوات خبرة", value: 2 },
  { id: 4, icon: <UserCheck size={32} />, label: "أعضاء الفريق", value: 5 },
];

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
      className="relative bg-gradient-to-r from-[#1a237e] to-[#d4b483] py-16 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-3 transform hover:-translate-y-2 transition duration-500"
          >
            <div className="bg-white/20 p-4 rounded-full">{item.icon}</div>
            <h3 className="text-4xl font-bold">
              <Counter value={item.value} start={inView} />+
            </h3>
            <p className="text-lg">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
