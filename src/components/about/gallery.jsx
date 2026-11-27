"use client";

import { useTranslations } from "next-intl";
import SectionHeader from "../sections-header";
import Reveal from "../ui/reveal";
import ImageSlot, { hasSlotImage, slotHintsVisible } from "../ui/image-slot";

const slots = ["about-gallery-1", "about-gallery-2", "about-gallery-3"];

// "Inside Niloop" photo strip. It only appears once at least one photo has been added
// (or while developing, to show where the photos go).
export default function AboutGallery() {
  const t = useTranslations("About");
  const anyPhoto = slots.some(hasSlotImage);
  if (!anyPhoto && !slotHintsVisible) return null;

  return (
    <section className="section bg-sand">
      <div className="container">
        <SectionHeader variant="editorial" title={t("gallery_title")} subtitle={t("gallery_subtitle")} />
        <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
          {slots.map((id, i) => (
            <Reveal key={id} delay={i * 0.1}>
              <ImageSlot
                id={id}
                alt={t("gallery_title")}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="rounded-[var(--radius-media)] shadow-[var(--shadow-card)]"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
