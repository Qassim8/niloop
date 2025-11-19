"use client";
import { motion } from "framer-motion";
import SectionHeader from "../sections-header";
import { useTranslations } from "next-intl";

export default function HowWeWork() {

  const t = useTranslations("Projects");

  const steps = [
    {
      id: 1,
      title: t("step_one"),
      desc: t("step_one_desc"),
    },
    {
      id: 2,
      title: t("step_two"),
      desc: t("step_two_desc"),
    },
    {
      id: 3,
      title: t("step_three"),
      desc: t("step_three_desc"),
    },
    {
      id: 4,
      title: t("step_four"),
      desc: t("step_four_desc"),
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeader title={t("how_it_work")} subtitle={t("how_it_work_desc")} />

        <div className="flex flex-col items-center gap-5 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative w-full max-w-lg"
            >
              {/* Card */}
              <div
                className="relative bg-white rounded-md p-8 text-center 
                transition-all duration-500 hover:scale-105 hover:!bg-[#1e549f] group border border-[#dda85375]"
              >
                <div className="relative z-10 rounded-lg">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-alt text-main font-bold shadow">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-700 group-hover:text-[#dda853] transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 group-hover:text-[#dda853] transition-colors duration-500">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Curved Arrow SVG except last */}
              {index !== steps.length - 1 && (
                <div className="flex justify-center my-4">
                  <svg
                    className="md:block absolute left-1/2 top-[75%] transform -translate-x-1/2 translate-y-6"
                    width="40"
                    height="50"
                    viewBox="0 0 80 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40,0 C0,40 80,80 40,120"
                      stroke="#dda853"
                      strokeWidth="3"
                      fill="transparent"
                      markerEnd="url(#arrowhead-vertical)"
                    />
                    <defs>
                      <marker
                        id="arrowhead-vertical"
                        markerWidth="10"
                        markerHeight="10"
                        refX="5"
                        refY="5"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 5, 0 10" fill="#1e549f" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
