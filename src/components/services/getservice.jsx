"use client";

import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-[#1e549f] to-[#dda853] text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">ماذا تنتظر؟</h2>
        <p className="text-lg md:text-xl mb-8">
          انضم إلى عملائنا المميزين وابدأ رحلتك معنا اليوم.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-alt text-main font-semibold px-6 py-3 rounded-xl shadow-lg hover:!text-[#dda853] hover:!bg-[#1e549f] transition duration-300"
        >
          احصل على خدمتك الآن
        </Link>
      </div>
    </section>
  );
}
