"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Editorial from "../ui/editorial";
import NumberedRows from "../ui/numbered-rows";
import SplitReveal from "../ui/split-reveal";
import { solutions } from "@/data/solutions";

// Store solutions as numbered rows (online store, store ERP, tailoring shops).
export default function StoresBand() {
  const t = useTranslations("Solutions");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="section bg-white">
      <div className="container">
        <Editorial label={t("title")}>
          <h2 className="mb-10 max-w-3xl text-3xl font-semibold leading-[1.3] text-nile-950 md:mb-14 md:text-5xl md:leading-[1.2]">
            <SplitReveal text={t("subtitle")} />
          </h2>
          <NumberedRows
            size="md"
            items={solutions.map(({ slug }) => ({
              title: t(`items.${slug}.title`),
              desc: t(`items.${slug}.desc`),
              href: `/${locale}/solutions/${slug}`,
            }))}
          />
          <div className="mt-8">
            <Link href={`/${locale}/solutions`} className="btn-outline">
              {t("all")}
              <Arrow size={16} />
            </Link>
          </div>
        </Editorial>
      </div>
    </section>
  );
}
