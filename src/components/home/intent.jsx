"use client";

import { ArrowLeft, ArrowRight, Globe, ShoppingBag, Calculator, PenTool, FileText, Megaphone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import SectionHeader from "../sections-header";
import Reveal from "../ui/reveal";

// "What do you need?" — one tap sends the visitor to the contact form with the service pre-selected.
const options = [
  { key: "website", plan: "web_starter", Icon: Globe },
  { key: "store", plan: "web_store", Icon: ShoppingBag },
  { key: "erp", plan: "erp_mini", Icon: Calculator },
  { key: "identity", plan: "identity", Icon: PenTool },
  { key: "content", plan: "content_pack", Icon: FileText },
  { key: "ads", plan: "ads", Icon: Megaphone },
];

export default function Intent() {
  const t = useTranslations("Intent");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="bg-sand section">
      <div className="container">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} description={t("hint")} />

        <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {options.map(({ key, plan, Icon }, i) => (
            <Reveal as="li" key={key} delay={i * 0.06} y={14}>
              <Link
                href={`/${locale}/contact?plan=${plan}`}
                data-spotlight
                className="card card-hover group flex h-full items-center gap-3 p-4 md:gap-4 md:p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-nile-50 text-nile-600 transition duration-300 group-hover:bg-nile-600 group-hover:text-white md:h-12 md:w-12">
                  <Icon size={22} />
                </span>
                <span className="flex-1 text-sm font-semibold text-nile-950 md:text-base">{t(key)}</span>
                <Arrow
                  size={16}
                  className="hidden shrink-0 text-gold-500 opacity-0 transition duration-300 group-hover:opacity-100 md:block"
                />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
