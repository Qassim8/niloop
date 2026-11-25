import { useTranslations } from "next-intl";
import ImageSlot from "../ui/image-slot";
import { Check } from "lucide-react";
import Reveal from "../ui/reveal";

// Intro block of a service page: pitch + three advantages next to a framed image.
export default function ServiceIntro({ namespace, image, slot }) {
  const t = useTranslations(namespace);

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
            id={slot}
            alt={t("title")}
            fallback={image}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="rounded-[var(--radius-media)] shadow-[var(--shadow-lift)]"
          />
        </Reveal>
      </div>
    </section>
  );
}
