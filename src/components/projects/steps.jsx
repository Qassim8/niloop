"use client";
import { motion } from "framer-motion";

export default function HowWeWork() {
  const steps = [
    {
      id: 1,
      title: "التواصل معنا",
      desc: "تواصل معنا عبر الموقع أو الهاتف لطلب الخدمة.",
    },
    {
      id: 2,
      title: "تحديد الاحتياجات",
      desc: "نستمع لك ونحدد متطلبات مشروعك بشكل دقيق.",
    },
    {
      id: 3,
      title: "تنفيذ الخدمة",
      desc: "يقوم فريقنا بتنفيذ المطلوب بكفاءة عالية.",
    },
    {
      id: 4,
      title: "تسليم ومتابعة",
      desc: "نقوم بتسليم العمل ومتابعة رضاك بعد التنفيذ.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-14">كيف نعمل؟</h2>

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
                className="relative overflow-hidden bg-white shadow-lg rounded-md p-8 text-center 
                transition-transform duration-500 hover:scale-105 group"
              >
                {/* Hover background effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 
                  translate-x-[-100%] group-hover:translate-x-0 
                  transition-transform duration-700 ease-in-out z-0"
                ></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold shadow">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>

              {/* Curved Arrow SVG except last */}
              {index !== steps.length - 1 && (
                <div className="flex justify-center my-3">
                  <svg
                    className=" hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-6"
                    width="80"
                    height="100"
                    viewBox="0 0 80 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40,0 C0,40 80,80 40,120"
                      stroke="#1a237e"
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
                        <polygon points="0 0, 10 5, 0 10" fill="#1a237e" />
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
