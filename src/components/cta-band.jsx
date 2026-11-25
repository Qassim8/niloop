"use client";

import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Reveal from "./ui/reveal";
import { siteConfig } from "@/lib/site";

// Closing conversion block shown above the footer on every page except the contact page itself.
export default function CtaBand() {
  const t = useTranslations("CtaBand");
  const hero = useTranslations("Hero");
  const c = useTranslations("Contact");
  const locale = useLocale();
  const pathname = usePathname();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  if (pathname.endsWith("/contact")) return null;

  return (
    <section className="px-3 pb-3 pt-20 md:px-4 md:pt-28">
      <Reveal>
        <div className="surface-nile relative mx-auto max-w-[1280px] overflow-hidden rounded-[2rem] px-6 py-16 text-center md:rounded-[3rem] md:py-24">
          <div aria-hidden="true" className="logo-pattern absolute inset-0" />
          <div aria-hidden="true" className="float-soft absolute -start-20 -top-20 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl" />
          <div aria-hidden="true" className="float-soft absolute -bottom-24 -end-16 h-80 w-80 rounded-full bg-nile-400/25 blur-3xl [animation-delay:-3s]" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold leading-[1.3] text-white md:text-5xl md:leading-[1.2]">
              {t.rich("title", { accent: (chunks) => <span className="accent">{chunks}</span> })}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-nile-100">{t("desc")}</p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link href={`/${locale}/contact`} className="btn-gold group text-lg">
                {hero("cta_primary")}
                <Arrow size={18} className="transition rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1" />
              </Link>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-lg"
              >
                <MessageCircle size={18} />
                {c("whatsapp")}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
