import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

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
    <footer className="bg-blue-950 text-gray-300 py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img
            src="/images/Niloop_mark.svg"
            alt={header("logo_alt")}
            width="120"
            height="32"
            className="w-[120px] mb-4"
          />
          <p className="text-sm leading-relaxed">{t("company_desc")}</p>
        </div>

        <nav aria-label={t("quick_links")}>
          <h2 className="text-lg font-semibold text-white mb-4">
            {t("quick_links")}
          </h2>
          <ul className="space-y-2">
            {quickLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t("our_services")}>
          <h2 className="text-lg font-semibold text-white mb-4">
            {t("our_services")}
          </h2>
          <ul className="space-y-2">
            {serviceLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
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
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
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

      <div className="mt-12 border-t border-slate-500 pt-6 text-center text-sm text-slate-400">
        {t("copyright")}
        <span className="text-alt">{t("niloop")}</span> ©{" "}
        {new Date().getFullYear()}
      </div>
    </footer>
  );
}
