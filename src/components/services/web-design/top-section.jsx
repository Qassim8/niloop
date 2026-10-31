import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

function TopSection() {
  const t = useTranslations("Web");

  return (
    <section className="bg-white py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        {/* النص */}
        <div>
          <h2 className="text-3xl font-bold text-main mb-6">
            {t("advantages_title")}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {t("advantages_desc")}
          </p>

          <ul className="space-y-4 text-slate-500">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-alt text-main font-bold">
                ✓
              </span>
              {t("ad_one")}
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-alt text-main font-bold">
                ✓
              </span>
              {t("ad_two")}
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-alt text-main font-bold">
                ✓
              </span>
              {t("ad_three")}
            </li>
          </ul>
        </div>

        {/* الصورة */}
        <div className="relative h-[300px] w-full md:h-[480px]">
          <div className="blob absolute -bottom-4 -end-4 h-full w-full bg-gradient-to-br from-[#dda853] to-[#f1d49a] opacity-80" />
          <div className="blob relative h-full w-full overflow-hidden shadow-2xl">
            <Image
            src="/images/vecteezy_programmer-developer-engineer-with-laptop-sitting-at-the_8826724.webp"
            alt="تصميم مواقع"
            fill
            className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopSection;
