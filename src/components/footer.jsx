import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import CtaBand from "./cta-band";
import FooterSubscribe from "./footer-subscribe";
import Reveal from "./ui/reveal";

export default function Footer() {
  const t = useTranslations("Footer");
  const header = useTranslations("Header");
  const brand = useTranslations("Brand");
  const locale = useLocale();

  const columns = [
    {
      title: t("company"),
      links: [
        { href: `/${locale}`, label: t("home") },
        { href: `/${locale}/about`, label: t("about") },
        { href: `/${locale}/projects`, label: t("projects") },
        { href: `/${locale}/pricing`, label: t("pricing") },
        { href: `/${locale}/contact`, label: t("contact") },
      ],
    },
    {
      title: t("our_services"),
      links: [
        { href: `/${locale}/services/web-design`, label: t("web") },
        { href: `/${locale}/services/erp`, label: t("erp") },
        { href: `/${locale}/services/graphic-design`, label: t("graphic") },
        { href: `/${locale}/services/ads`, label: t("ads") },
        { href: `/${locale}/services/content-writing`, label: t("content") },
      ],
    },
    {
      title: t("solutions"),
      links: [
        { href: `/${locale}/solutions/online-store`, label: header("store_online") },
        { href: `/${locale}/solutions/store-erp`, label: header("store_erp") },
        { href: `/${locale}/solutions/tailoring-shops`, label: header("store_tailoring") },
        { href: `/${locale}/subscription`, label: t("subscription") },
      ],
    },
  ];

  const socials = [
    { href: siteConfig.social.facebook, label: "Facebook", Icon: Facebook },
    { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: siteConfig.social.instagram, label: "Instagram", Icon: Instagram },
  ].filter((s) => s.href);

  const linkClass = "text-nile-200 transition hover:text-gold-300";

  return (
    <>
      <CtaBand />
      <footer className="surface-nile relative mx-3 mb-3 overflow-hidden rounded-[2rem] px-6 pb-0 pt-16 md:mx-4 md:mb-4 md:rounded-[3rem] md:pt-20">
        <div className="container relative z-10 grid grid-cols-2 gap-10 !px-0 md:grid-cols-12 md:!px-4">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="md:col-span-2">
              <h2 className="mb-4 text-base font-semibold text-white">{col.title}</h2>
              <ul className="space-y-3 text-sm">
                {col.links.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className={linkClass}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="col-span-2 md:col-span-6 lg:col-span-6">
            <FooterSubscribe />
            <ul className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
              <li className="flex items-center gap-2 text-nile-200">
                <MapPin size={16} className="shrink-0 text-gold-400" />
                {t("location")}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-gold-400" />
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  <span dir="ltr">{siteConfig.phoneDisplay}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 sm:col-span-2">
                <Mail size={16} className="shrink-0 text-gold-400" />
                <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            {socials.length > 0 && (
              <div className="mt-6 flex gap-3">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-gold-400 hover:text-nile-950"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="container relative z-10 mt-12 !px-0 border-t border-white/10 py-6 text-center text-sm text-nile-300 md:!px-4">
          {t("copyright")}
          <span className="text-gold-300">{t("niloop")}</span> © {new Date().getFullYear()}
        </div>

        {/* Oversized wordmark */}
        <Reveal y={80} className="pointer-events-none relative z-0 mt-4 md:mt-6">
          <p
            aria-hidden="true"
            className="-mb-[5vw] select-none text-center font-[family-name:var(--font-display)] text-[30vw] font-bold leading-[0.82] text-white/[0.09] md:-mb-14 md:text-[22rem]"
          >
            {locale === "ar" ? brand("name") : brand("name").toUpperCase()}
          </p>
        </Reveal>
      </footer>
    </>
  );
}
