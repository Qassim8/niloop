"use client";

import { useTranslations } from "next-intl";
import Editorial from "../ui/editorial";
import NumberedRows from "../ui/numbered-rows";
import SplitReveal from "../ui/split-reveal";

// "From first contact to delivery": the four working steps as numbered rows.
export default function ApproachSection() {
  const t = useTranslations("About");
  const p = useTranslations("Projects");

  const steps = ["one", "two", "three", "four"].map((k) => ({
    title: p(`step_${k}`),
    desc: p(`step_${k}_desc`),
  }));

  return (
    <section className="section bg-white">
      <div className="container">
        <Editorial label={t("approach_label")}>
          <h2 className="mb-10 max-w-3xl text-3xl font-semibold leading-[1.3] text-nile-950 md:mb-14 md:text-5xl md:leading-[1.2]">
            <SplitReveal text={t("approach_title")} />
          </h2>
          <NumberedRows items={steps} size="md" />
        </Editorial>
      </div>
    </section>
  );
}
