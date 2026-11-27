"use client";

import { useLocale, useTranslations } from "next-intl";
import Editorial from "../ui/editorial";
import NumberedRows from "../ui/numbered-rows";
import SplitReveal from "../ui/split-reveal";

const services = [
  { key: "web", href: "/services/web-design" },
  { key: "erp", href: "/services/erp" },
  { key: "graphic", href: "/services/graphic-design" },
  { key: "ads", href: "/services/ads" },
  { key: "content", href: "/services/content-writing" },
];

// Core services as numbered rows linking to each service page.
export default function ServiceRows() {
  const t = useTranslations("Services");
  const locale = useLocale();

  return (
    <section className="section bg-white">
      <div className="container">
        <Editorial label={t("list_label")}>
          <h2 className="mb-10 max-w-3xl text-3xl font-semibold leading-[1.3] text-nile-950 md:mb-14 md:text-5xl md:leading-[1.2]">
            <SplitReveal text={t("list_title")} />
          </h2>
          <NumberedRows
            items={services.map(({ key, href }) => ({
              title: t(key),
              desc: key === "content" ? t("content_desc") : t(`${key}_desc`),
              href: `/${locale}${href}`,
            }))}
          />
        </Editorial>
      </div>
    </section>
  );
}
