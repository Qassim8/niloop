import Image from 'next/image'
import React from 'react'

function TopSection() {
  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* النص */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a237e] mb-6">
              تصميم مواقع احترافية
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              في نايلوب نعمل على تصميم وتطوير مواقع عصرية وسهلة الاستخدام تعكس
              هوية أعمال عملائنا وتساعدهم على تحقيق أهدافهم التجارية.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#d4b483] text-white font-bold">
                  ✓
                </span>
                موقع متجاوب مع جميع الأجهزة
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#d4b483] text-white font-bold">
                  ✓
                </span>
                تصميم عصري يعكس هويتك
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#d4b483] text-white font-bold">
                  ✓
                </span>
                أداء وسرعة عالية
              </li>
            </ul>
          </div>

          {/* الصورة */}
          <div className="relative w-full h-[400px]">
            <Image
              src="/images/website.webp"
              alt="تصميم مواقع"
              fill
              className=""
            />
          </div>
        </div>
      </section>
  )
}

export default TopSection