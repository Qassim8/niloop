import Image from "next/image";
import React from "react";

function TopSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* النص */}
        <div>
          <h2 className="text-3xl font-bold text-main mb-6">
            تسويق رقمي ذكي وفعّال
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            في نايلوب نساعدك على الوصول إلى جمهورك المستهدف من خلال حملات
            تسويقية رقمية مدروسة، نستخدم فيها أحدث الأدوات والاستراتيجيات لزيادة
            الوعي بعلامتك التجارية وتعزيز المبيعات.
          </p>

          <ul className="space-y-4 text-slate-500">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-alt text-main font-bold">
                ✓
              </span>
              استراتيجيات تسويق مخصصة لاحتياجاتك
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-alt text-main font-bold">
                ✓
              </span>
              حملات إعلانية دقيقة وفعالة
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-alt text-main font-bold">
                ✓
              </span>
              بناء جمهور حقيقي وزيادة التفاعل
            </li>
          </ul>
        </div>

        {/* الصورة */}
        <div className="relative w-full h-[500px] max-w-full">
          <Image
            src="/images/vecteezy_businesswoman-with-business-plan-data-analytic-start-up_.webp"
            alt="تسويق رقمي"
            fill
            className=""
          />
        </div>
      </div>
    </section>
  );
}

export default TopSection;
