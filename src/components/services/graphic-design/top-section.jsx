import Image from 'next/image';
import React from 'react'

function TopSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* النص */}
        <div>
          <h2 className="text-3xl font-bold text-main mb-6">
            تصميم جرافيكي احترافي
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            في نايلوب نُقدّم خدمات تصميم جرافيكي مميزة تعكس هوية علامتك التجارية
            وتترك انطباعًا قويًا لدى جمهورك. نصمم بأفكار مبتكرة واهتمام بأدق
            التفاصيل لنساعدك على الظهور بشكل احترافي وجذاب.
          </p>

          <ul className="space-y-4 text-slate-500">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-alt text-main font-bold">
                ✓
              </span>
              تصميمات عصرية تعكس هوية علامتك التجارية
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-alt text-main font-bold">
                ✓
              </span>
              اهتمام كبير بالتفاصيل وجودة عالية
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-alt text-main font-bold">
                ✓
              </span>
              أفكار مبتكرة تجعل علامتك مميزة
            </li>
          </ul>
        </div>

        {/* الصورة */}
        <div className="relative w-full h-[500px]">
          <Image
            src="/images/vecteezy_graphic-designer-with-creative-inspiration-at-work-space_6031624.webp"
            alt="تصميم جرافيكي"
            fill
            className=""
          />
        </div>
      </div>
    </section>
  );
}

export default TopSection