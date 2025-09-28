"use client";
import { motion } from "framer-motion";
import { Code, PenTool, FileText } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "تصميم المواقع",
    desc: "بناء مواقع احترافية متجاوبة",
    icon: <Code size={48} className="mx-auto text-white" />,
    bg: "/images/web.jpg",
  },
  {
    id: 2,
    title: "الجرافيك ديزاين",
    desc: "تصميمات عصرية وجذابة",
    icon: <PenTool size={48} className="mx-auto text-white" />,
    bg: "/images/design.jpg",
  },
  {
    id: 3,
    title: "كتابة المحتوى",
    desc: "محتوى تسويقي مؤثر",
    icon: <FileText size={48} className="mx-auto text-white" />,
    bg: "/images/content.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">خدماتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              className="relative h-80 rounded-2xl overflow-hidden shadow-lg group"
              initial={{ opacity: 0, y: 100, rotateX: 90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* الخلفية */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.bg})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all" />

              {/* المحتوى */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                <p className="text-center text-gray-200">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
