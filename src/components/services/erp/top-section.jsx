import { useTranslations } from "next-intl";
import { Calculator, Boxes, BarChart3, Users, Check } from "lucide-react";
import Reveal from "../../ui/reveal";
import ImageSlot from "../../ui/image-slot";

const tiles = [Calculator, Boxes, BarChart3, Users];

export default function ErpTopSection() {
  const t = useTranslations("ERP");

  return (
    <section className="section bg-white">
      <div className="container grid items-center gap-12 md:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="mb-6 text-3xl font-semibold leading-[1.3] text-nile-950 md:text-4xl">
            {t("advantages_title")}
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-600">{t("advantages_desc")}</p>

          <ul className="space-y-4 text-slate-700">
            {["ad_one", "ad_two", "ad_three"].map((key) => (
              <li key={key} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400 text-nile-950">
                  <Check size={14} strokeWidth={3} />
                </span>
                {t(key)}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <ImageSlot
            id="erp-dashboard"
            alt={t("example_title")}
            className="rounded-[var(--radius-media)] border border-line shadow-[var(--shadow-lift)]"
            empty={
              <div aria-hidden="true" className="surface-nile grid grid-cols-2 gap-3 rounded-[var(--radius-media)] p-6 md:p-8">
                {tiles.map((Icon, i) => (
                  <div key={i} className="flex aspect-square items-center justify-center rounded-2xl bg-white/[0.07]">
                    <Icon className="h-14 w-14 text-gold-400" strokeWidth={1.5} />
                  </div>
                ))}
              </div>
            }
          />
        </Reveal>
      </div>
    </section>
  );
}
