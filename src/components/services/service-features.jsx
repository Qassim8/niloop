"use client";

import { useTranslations } from "next-intl";
import Editorial from "../ui/editorial";
import NumberedRows from "../ui/numbered-rows";
import SplitReveal from "../ui/split-reveal";

// Feature list of a service page as numbered rows on a dark panel.
// `keys` are the message keys (feature_<n>) inside `namespace`; `children` is an optional extra block
// shown under the rows.
export default function ServiceFeatures({ namespace, keys, children }) {
  const t = useTranslations(namespace);
  const items = keys.map((key) => ({ title: t(key), desc: t(`${key}_desc`) }));

  return (
    <section className="px-3 py-3 md:px-4">
      <div className="surface-nile relative mx-auto max-w-[1280px] overflow-hidden rounded-[2rem] md:rounded-[3rem]">
        <div aria-hidden="true" className="logo-pattern absolute inset-0" />
        <div className="container relative py-16 md:py-24">
          <Editorial label={t("features_subtitle")} tone="dark">
            <h2 className="mb-10 max-w-3xl text-3xl font-semibold leading-[1.3] text-white md:mb-14 md:text-5xl md:leading-[1.2]">
              <SplitReveal text={t("features_title")} />
            </h2>
            <NumberedRows items={items} size="md" tone="dark" />
            {children}
          </Editorial>
        </div>
      </div>
    </section>
  );
}
