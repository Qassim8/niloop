"use client";

import { useTranslations } from "next-intl";
import Editorial from "../ui/editorial";
import NumberedRows from "../ui/numbered-rows";
import SplitReveal from "../ui/split-reveal";

// Vision, mission and strategy as numbered rows.
export default function ValuesSection() {
  const t = useTranslations("About");

  const items = [
    { title: t("vision"), desc: t("vision_desc") },
    { title: t("mission"), desc: t("mission_desc") },
    { title: t("strategy"), desc: t("strategy_desc") },
  ];

  return (
    <section className="section bg-sand">
      <div className="container">
        <Editorial label={t("values_label")}>
          <h2 className="mb-10 max-w-3xl text-3xl font-semibold leading-[1.3] text-nile-950 md:mb-14 md:text-5xl md:leading-[1.2]">
            <SplitReveal text={t("values_title")} />
          </h2>
          <NumberedRows items={items} size="md" />
        </Editorial>
      </div>
    </section>
  );
}
