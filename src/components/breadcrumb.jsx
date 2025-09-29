"use client";

import Link from "next/link";
import { Home } from "lucide-react";

export default function BreadcrumbSection({ title, description }) {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-fixed"
        style={{
          backgroundImage:
            "url('../images/MacBook-Pro-and-iPhone-X-Mockup-1500x1125.jpg')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1a237e]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl font-bold mb-3">{title}</h1>
        <p className="text-lg text-gray-200 mb-6">{description}</p>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#d4b483] transition"
          >
            <Home size={16} />
            الرئيسية
          </Link>
          <span className="text-gray-400">/</span>
          <span className="font-medium text-[#d4b483]">{title}</span>
        </div>
      </div>
    </section>
  );
}
