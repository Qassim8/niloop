"use client";

import { ShieldCheck, Users, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyUs() {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#d4b483]" />,
      title: "الجودة والالتزام",
      desc: "نضمن لك تنفيذ المشاريع بأعلى معايير الجودة والالتزام بالمواعيد.",
    },
    {
      icon: <Users className="w-10 h-10 text-[#d4b483]" />,
      title: "فريق محترف",
      desc: "فريقنا يضم خبراء في مجالات التصميم، البرمجة، والتسويق.",
    },
    {
      icon: <Zap className="w-10 h-10 text-[#d4b483]" />,
      title: "حلول مبتكرة",
      desc: "نقدم أفكار وحلول مبتكرة تناسب احتياجات شركتك.",
    },
    {
      icon: <Award className="w-10 h-10 text-[#d4b483]" />,
      title: "ثقة عملائنا",
      desc: "نفتخر برضا عملائنا واستمرارهم معنا في مشاريع متعددة.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="why-us">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-4"
        >
          لماذا تختار <span className="text-[#d4b483]">نايلوب</span>؟
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          في نايلوب، نؤمن أن نجاحك هو نجاحنا. لذلك نسعى دومًا لتقديم أفضل الحلول
          التقنية والإبداعية التي تساعدك على التميز في مجالك.
        </motion.p>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition ease-linear group"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#1a237e] group-hover:text-[#d4b483] transition">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
