"use client";

import { useTranslations } from "next-intl";
import Editorial from "../ui/editorial";
import NumberedRows from "../ui/numbered-rows";
import SplitReveal from "../ui/split-reveal";

// Vision, mission and strategy as numbered rows on a dark panel.
export default function ValuesSection() {
  const t = useTranslations("About");

  const items = [
    { title: t("vision"), desc: t("vision_desc") },
    { title: t("mission"), desc: t("mission_desc") },
    { title: t("strategy"), desc: t("strategy_desc") },
  ];

  return (
    <section className="px-3 py-3 md:px-4">
      <div className="surface-nile relative mx-auto max-w-[1280px] overflow-hidden rounded-[2rem] md:rounded-[3rem]">
        <div aria-hidden="true" className="logo-pattern absolute inset-0" />
        <div className="container relative py-16 md:py-24">
          <Editorial label={t("values_label")} tone="dark">
            <h2 className="mb-10 max-w-3xl text-3xl font-semibold leading-[1.3] text-white md:mb-14 md:text-5xl md:leading-[1.2]">
              <SplitReveal text={t("values_title")} />
            </h2>
            <NumberedRows items={items} size="md" tone="dark" />
          </Editorial>
        </div>
      </div>
    </section>
  );
}
