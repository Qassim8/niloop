"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Wave from "../ui/wave";
import { Ripples } from "../ui/shapes";

export default function CallToAction() {

  const t = useTranslations("Services");
  const locale = useLocale();

  return (
    <section className="gradient-pan relative overflow-hidden bg-gradient-to-r from-[#0b2a57] via-[#1e549f] to-[#c58f3c] py-32 text-center text-white">
      <Wave position="top" className="text-white" />
      <Ripples className="start-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2" />
      <div className="relative z-20 mx-auto max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("waiting")}</h2>
        <p className="text-lg md:text-xl mb-8">{t("customers")}</p>
        <Link
          href={`/${locale}/contact`}
          className="btn-gold text-lg"
        >
          {t("get")}
        </Link>
      </div>
      <Wave className="text-water" />
    </section>
  );
}
