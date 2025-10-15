"use client";

import { ShieldCheck, Users, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "../sections-header";

export default function WhyUs() {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-alt" />,
      title: "الجودة والالتزام",
      desc: "نضمن لك تنفيذ المشاريع بأعلى معايير الجودة والالتزام بالمواعيد.",
    },
    {
      icon: <Users className="w-10 h-10 text-alt" />,
      title: "فريق محترف",
      desc: "فريقنا يضم خبراء في مجالات التصميم، البرمجة، والتسويق.",
    },
    {
      icon: <Zap className="w-10 h-10 text-alt" />,
      title: "حلول مبتكرة",
      desc: "نقدم أفكار وحلول مبتكرة تناسب احتياجات شركتك.",
    },
    {
      icon: <Award className="w-10 h-10 text-alt" />,
      title: "ثقة عملائنا",
      desc: "نفتخر برضا عملائنا واستمرارهم معنا في مشاريع متعددة.",
    },
  ];

  return (
    <section className="py-20 bg-slate-100" id="why-us">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <SectionHeader title="لماذا نايلوب؟" subtitle="هنا اهم ميزاتنا" />

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg hover:shadow-lg transition ease-linear group"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-main group-hover:!text-[#dda853] transition duration-300">
                {item.title}
              </h3>
              <p className="text-slate-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
