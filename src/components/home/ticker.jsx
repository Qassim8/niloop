"use client";

import { useTranslations } from "next-intl";

// Slow scrolling band of service names. Pauses on hover.
export default function ServicesTicker() {
  const t = useTranslations("Services");
  const words = [
    t("web"),
    t("erp"),
    t("graphic"),
    t("content"),
    t("branding"),
    t("ads"),
    t("montage"),
  ];
  const loop = [...words, ...words];

  return (
    <div
      dir="ltr"
      aria-hidden="true"
      className="marquee surface-nile overflow-hidden py-6 md:py-8 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
    >
      <ul className="marquee-track items-center [animation-duration:55s] [animation-direction:reverse]">
        {loop.map((word, i) => (
          <li
            key={i}
            className="flex shrink-0 items-center gap-8 pe-8 font-[family-name:var(--font-display)] text-3xl font-semibold text-white/90 md:text-5xl"
          >
            {word}
            <span className="h-2.5 w-2.5 rounded-full bg-gold-400" />
          </li>
        ))}
      </ul>
    </div>
  );
}
