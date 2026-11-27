"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import Reveal from "./reveal";

// Numbered list with hairline dividers (01, 02, ...). Rows with `href` are links with an arrow.
// tone="dark" is for dark sections.
export default function NumberedRows({ items, size = "lg", tone = "light" }) {
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const dark = tone === "dark";

  return (
    <ol className={`border-b ${dark ? "border-white/15" : "border-line"}`}>
      {items.map((item, i) => {
        const inner = (
          <div className="grid items-start gap-3 py-6 md:grid-cols-12 md:gap-8 md:py-8">
            <span
              dir="ltr"
              className={`text-sm font-medium transition-colors md:col-span-1 md:pt-2 ${
                dark ? "text-nile-300 group-hover:text-gold-400" : "text-slate-500 group-hover:text-gold-700"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3
              className={`font-semibold transition-colors md:col-span-5 ${
                dark ? "text-white group-hover:text-gold-300" : "text-nile-950 group-hover:text-nile-600"
              } ${size === "lg" ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"}`}
            >
              {item.title}
            </h3>
            <p className={`leading-relaxed md:col-span-5 md:pt-1 ${dark ? "text-nile-200" : "text-slate-600"}`}>
              {item.desc}
            </p>
            <span className="hidden justify-end md:col-span-1 md:flex">
              {item.href && (
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 ${
                    dark
                      ? "border-white/25 text-white group-hover:border-gold-400 group-hover:bg-gold-400 group-hover:text-nile-950"
                      : "border-line text-nile-950 group-hover:border-nile-950 group-hover:bg-nile-950 group-hover:text-white"
                  }`}
                >
                  <Arrow size={16} />
                </span>
              )}
            </span>
          </div>
        );

        return (
          <Reveal
            as="li"
            key={item.title}
            delay={i * 0.05}
            y={14}
            className={`group border-t ${dark ? "border-white/15" : "border-line"}`}
          >
            {item.href ? <Link href={item.href} className="block">{inner}</Link> : inner}
          </Reveal>
        );
      })}
    </ol>
  );
}
