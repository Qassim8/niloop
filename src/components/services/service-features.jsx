"use client";

import { useTranslations } from "next-intl";
import SectionHeader from "../sections-header";
import Reveal from "../ui/reveal";

// Generic feature cards for a service page. Text keys: features_title, features_subtitle,
// feature_<n>, feature_<n>_desc inside the given namespace.
export default function ServiceFeatures({ namespace, features }) {
  const t = useTranslations(namespace);

  return (
    <section className="section bg-sand">
      <div className="container">
        <SectionHeader title={t("features_title")} subtitle={t("features_subtitle")} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {features.map(({ key, Icon }, index) => (
            <Reveal key={key} delay={index * 0.07}>
              <div data-spotlight className="card card-hover h-full p-8">
                <Icon className="mb-5 h-12 w-12 rounded-2xl bg-nile-50 p-3 text-nile-600" strokeWidth={1.75} />
                <h3 className="mb-2 text-xl font-semibold text-nile-950">{t(key)}</h3>
                <p className="leading-relaxed text-slate-600">{t(`${key}_desc`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
