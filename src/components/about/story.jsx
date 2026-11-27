"use client";

import { useTranslations } from "next-intl";
import Editorial from "../ui/editorial";
import ImageSlot from "../ui/image-slot";
import Reveal from "../ui/reveal";
import ScrollWords from "../ui/scroll-words";

// "About us" statement whose words light up while scrolling, two supporting paragraphs,
// and a wide picture below.
export default function Story() {
  const s = useTranslations("Statement");
  const t = useTranslations("About");

  return (
    <section className="section bg-white">
      <div className="container">
        <Editorial label={s("label")}>
          <ScrollWords
            text={s("text")}
            className="text-2xl font-semibold leading-[1.6] text-nile-950 md:text-4xl md:leading-[1.5]"
          />
          <div className="mt-10 grid gap-8 text-slate-600 md:grid-cols-2">
            <Reveal>
              <p className="leading-loose">{t("expert_desc", { years: new Date().getFullYear() - 2021 })}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="leading-loose">{t("excellence_desc")}</p>
            </Reveal>
          </div>
        </Editorial>
      </div>
    </section>
  );
}

export function WideImage() {
  const t = useTranslations("About");
  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="container">
        <Reveal y={30}>
          <ImageSlot
            id="about-wide"
            alt={t("image_alt")}
            fallback="/images/about.webp"
            sizes="(min-width: 1280px) 1200px, 100vw"
            quality={85}
            className="rounded-[var(--radius-media)] shadow-[var(--shadow-card)]"
          />
        </Reveal>
      </div>
    </section>
  );
}
