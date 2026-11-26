"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import Reveal from "./reveal";

// Numbered list with hairline dividers (01, 02, ...). Rows with `href` are links with an arrow.
export default function NumberedRows({ items, size = "lg" }) {
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <ol className="border-b border-line">
      {items.map((item, i) => {
        const inner = (
          <div className="grid items-start gap-3 py-6 md:grid-cols-12 md:gap-8 md:py-8">
            <span dir="ltr" className="text-sm font-medium text-slate-500 transition-colors group-hover:text-gold-700 md:col-span-1 md:pt-2">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3
              className={`font-semibold text-nile-950 transition-colors group-hover:text-nile-600 md:col-span-5 ${
                size === "lg" ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
              }`}
            >
              {item.title}
            </h3>
            <p className="leading-relaxed text-slate-600 md:col-span-5 md:pt-1">{item.desc}</p>
            <span className="hidden justify-end md:col-span-1 md:flex">
              {item.href && (
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-nile-950 transition duration-300 group-hover:border-nile-950 group-hover:bg-nile-950 group-hover:text-white">
                  <Arrow size={16} />
                </span>
              )}
            </span>
          </div>
        );

        return (
          <Reveal as="li" key={item.title} delay={i * 0.05} y={14} className="group border-t border-line">
            {item.href ? <Link href={item.href} className="block">{inner}</Link> : inner}
          </Reveal>
        );
      })}
    </ol>
  );
}
