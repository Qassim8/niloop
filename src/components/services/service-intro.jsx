import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import Editorial from "../ui/editorial";
import ImageSlot from "../ui/image-slot";
import Reveal from "../ui/reveal";
import SplitReveal from "../ui/split-reveal";

// Intro block of a service page: pitch + three advantages next to a framed image.
// `empty` is what shows in place of the image when no picture has been supplied yet.
export default function ServiceIntro({ namespace, image, slot, empty, imageClassName = "" }) {
  const t = useTranslations(namespace);

  return (
    <section className="section bg-white">
      <div className="container">
        <Editorial label={t("title")}>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="mb-6 text-3xl font-semibold leading-[1.3] text-nile-950 md:text-4xl">
                <SplitReveal text={t("advantages_title")} />
              </h2>
              <Reveal>
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
            </div>

            <Reveal delay={0.1}>
              <ImageSlot
                id={slot}
                alt={t("title")}
                fallback={image}
                empty={empty}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className={`rounded-[var(--radius-media)] shadow-[var(--shadow-lift)] ${imageClassName}`}
              />
            </Reveal>
          </div>
        </Editorial>
      </div>
    </section>
  );
}
