"use client";

import { Code, Palette, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import Chip from "../ui/chip";
import ScrollWords from "../ui/scroll-words";
import Reveal from "../ui/reveal";

// Big statement whose words light up while scrolling, with small icon pills set inside the text.
export default function Statement() {
  const t = useTranslations("Statement");

  return (
    <section className="section bg-sand">
      <div className="container max-w-5xl">
        <Reveal className="mb-8">
          <span className="eyebrow">{t("label")}</span>
        </Reveal>
        <ScrollWords
          text={t("text")}
          className="text-3xl font-semibold leading-[1.6] text-nile-950 sm:text-4xl md:text-6xl md:leading-[1.5]"
          chips={{
            2: <Chip icon={Code} tone="blue" />,
            7: <Chip icon={Palette} tone="gold" />,
            14: <Chip icon={Sparkles} tone="dark" />,
          }}
        />
      </div>
    </section>
  );
}
