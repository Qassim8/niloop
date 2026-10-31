import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import Wave from "./ui/wave";
import { Ripples } from "./ui/shapes";

export default function Footer() {
  const t = useTranslations("Footer");
  const header = useTranslations("Header");
  const locale = useLocale();

  const quickLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/projects`, label: t("projects") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const serviceLinks = [
    { href: `/${locale}/services/web-design`, label: t("web") },
    { href: `/${locale}/services/erp`, label: t("erp") },
    { href: `/${locale}/services/graphic-design`, label: t("graphic") },
    { href: `/${locale}/services/marketing`, label: t("marketing") },
    { href: `/${locale}/services`, label: header("all") },
  ];

  const socials = [
    { href: siteConfig.social.facebook, label: "Facebook", Icon: Facebook },
    { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: siteConfig.social.instagram, label: "Instagram", Icon: Instagram },
  ].filter((s) => s.href);

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-blue-950 to-[#061a3a] pb-12 pt-28 text-gray-300">
      <Wave position="top" className="text-white" height="h-14 md:h-24" />
      <Ripples className="-end-24 bottom-0 h-80 w-80 [&>span]:!border-white/10" />
      <div className="container relative z-20 grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <span className="mb-4 inline-block rounded-2xl bg-white px-4 py-2 shadow-lg">
            <img
              src="/images/Niloop_mark.svg"
              alt={header("logo_alt")}
              width="120"
              height="32"
              className="w-[110px]"
            />
          </span>
          <p className="text-sm leading-relaxed">{t("company_desc")}</p>
        </div>

        <nav aria-label={t("quick_links")}>
          <h2 className="mb-4 text-lg font-semibold text-white">
            {t("quick_links")}
          </h2>
          <ul className="space-y-2">
            {quickLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="transition hover:text-[#dda853] hover:ps-1">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t("our_services")}>
          <h2 className="mb-4 text-lg font-semibold text-white">
            {t("our_services")}
          </h2>
          <ul className="space-y-2">
            {serviceLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="transition hover:text-[#dda853] hover:ps-1">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">
            {t("contact")}
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="shrink-0 text-alt" />
              {t("location")}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-alt" />
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <span dir="ltr" className="unicode-bidi plaintext">
                  {siteConfig.phoneDisplay}
                </span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-alt" />
              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-[#dda853] hover:ps-1">
                {siteConfig.email}
              </a>
            </li>
          </ul>

          {socials.length > 0 && (
            <>
              <h2 className="text-lg font-semibold text-white mt-6 mb-3">
                {t("follow")}
              </h2>
              <div className="flex gap-4">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label={label}
                    className="hover:text-white"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="container relative z-20 mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
        {t("copyright")}
        <span className="text-alt">{t("niloop")}</span> ©{" "}
        {new Date().getFullYear()}
      </div>
    </footer>
  );
}
