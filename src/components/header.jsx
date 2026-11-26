"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

// Full-width bar fixed to the top of the page. It is transparent over the dark hero and turns
// into a frosted white bar once the visitor scrolls.
export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Header");
  const s = useTranslations("Services");
  const locale = useLocale();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Thin reading-progress line along the bottom edge of the bar
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  const solid = scrolled && !mobileOpen;

  const switchTo = (next) => {
    if (next === locale) return;
    window.dispatchEvent(new Event("niloop:navigate"));
    router.push(pathname.replace(`/${locale}`, `/${next}`));
  };

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/services`, label: t("services"), dropdown: true },
    { href: `/${locale}/projects`, label: t("projects") },
    { href: `/${locale}/pricing`, label: t("pricing") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const serviceLinks = [
    {
      href: `/${locale}/services/web-design`,
      label: t("web"),
      desc: s("web_desc"),
    },
    { href: `/${locale}/services/erp`, label: t("erp"), desc: s("erp_desc") },
    {
      href: `/${locale}/services/graphic-design`,
      label: t("graphic"),
      desc: s("graphic_desc"),
    },
    {
      href: `/${locale}/services/marketing`,
      label: t("marketing"),
      desc: s("marketing_desc"),
    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus after navigating; lock page scroll while the mobile sheet is open.
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (link) =>
    link.dropdown
      ? pathname.startsWith(`/${locale}/services`)
      : link.href === `/${locale}`
        ? pathname === link.href
        : pathname.startsWith(link.href);

  const linkTone = (active) =>
    solid
      ? active
        ? "bg-nile-50 text-nile-600"
        : "text-ink hover:bg-nile-50"
      : active
        ? "bg-white/15 text-white"
        : "text-white/85 hover:bg-white/10 hover:text-white";

  const LangSwitch = ({ dark = false }) => (
    <div
      role="group"
      aria-label={t("switch_language")}
      className={`flex items-center rounded-full p-1 text-xs font-bold ${
        dark || !solid ? "bg-white/10" : "bg-nile-50"
      }`}
    >
      {["ar", "en"].map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchTo(l)}
          aria-pressed={locale === l}
          className={`cursor-pointer rounded-full px-3 py-1.5 transition ${
            locale === l
              ? "bg-gold-400 text-nile-950"
              : dark || !solid
                ? "text-nile-100 hover:text-white"
                : "text-nile-700 hover:text-nile-950"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ease-[var(--ease-out-expo)] ${
          solid
            ? "border-line bg-white/85 shadow-[0_8px_30px_-18px_rgba(15,42,77,0.4)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Main"
          className={`container flex items-center justify-between transition-all duration-500 ${
            solid ? "h-16 md:h-[4.5rem]" : "h-[4.5rem] md:h-24"
          }`}
        >
          <Link
            href={`/${locale}`}
            className="relative block h-10 w-[8.5rem] shrink-0 md:h-11 md:w-[9.5rem]"
            aria-label={t("logo_alt")}
          >
            {/* Simplified mark (on a white chip so it reads on the dark hero) while at the top... */}
            <span
              className={`absolute start-0 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-xl bg-white px-2 py-1.5 shadow-lg transition-all duration-500 ease-[var(--ease-out-expo)] ${
                solid ? "scale-90 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              <img
                src="/images/Logo_mark.svg"
                alt={t("logo_alt")}
                width="56"
                height="36"
                className="h-8 w-auto md:h-9"
              />
            </span>
            {/* ...and the full wordmark once the visitor scrolls */}
            <img
              src="/images/Niloop_mark.svg"
              alt=""
              aria-hidden="true"
              width="136"
              height="36"
              className={`absolute start-0 top-1/2 h-8 w-auto -translate-y-1/2 transition-all duration-500 ease-[var(--ease-out-expo)] md:h-9 ${
                solid ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            />
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-1 whitespace-nowrap font-medium lg:flex">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((o) => !o)}
                    className={`flex cursor-pointer items-center gap-1 rounded-full px-4 py-2 transition ${linkTone(isActive(link))}`}
                  >
                    {link.label}
                    <ChevronDown
                      size={15}
                      className={`transition ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {servicesOpen && (
                    <div className="animate-slideDownSoft absolute start-0 top-full w-[24rem] max-w-[90vw] whitespace-normal pt-3">
                      <div className="rounded-3xl border border-line bg-white p-3 shadow-[var(--shadow-lift)]">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="group flex items-start justify-between gap-3 rounded-2xl p-3 transition hover:bg-nile-50"
                          >
                            <span className="min-w-0 flex-1">
                              <span className="block font-semibold text-nile-950">
                                {service.label}
                              </span>
                              <span className="mt-0.5 line-clamp-2 block text-sm leading-snug text-slate-500">
                                {service.desc}
                              </span>
                            </span>
                            <ArrowUpRight
                              size={16}
                              className="mt-1 shrink-0 text-gold-500 opacity-0 transition group-hover:opacity-100 rtl:-scale-x-100"
                            />
                          </Link>
                        ))}
                        <Link
                          href={`/${locale}/services`}
                          className="mt-1 block rounded-2xl bg-nile-50 p-3 text-center text-sm font-semibold text-nile-600 transition hover:bg-nile-100"
                        >
                          {t("all")}
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link) ? "page" : undefined}
                    className={`block rounded-full px-4 py-2 transition ${linkTone(isActive(link))}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <LangSwitch />
            <Link
              href={`/${locale}/contact`}
              className={`${solid ? "btn-blue" : "btn-gold"} !min-h-10 !px-5 !py-2 text-sm whitespace-nowrap`}
            >
              {t("cta")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={t("menu")}
            aria-expanded={mobileOpen}
            className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition lg:hidden ${
              solid ? "bg-nile-50 text-nile-700" : "bg-white/15 text-white"
            }`}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Reading progress */}
        <motion.span
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="absolute inset-x-0 bottom-[-1px] h-[2px] origin-[0%_50%] bg-gold-400 rtl:origin-[100%_50%]"
        />
      </header>
      {/* Mobile sheet */}
      {mobileOpen && (
        <div className="surface-nile animate-slideDownSoft fixed inset-0 z-40 overflow-y-auto px-6 pb-8 pt-24 lg:hidden">
          <div aria-hidden="true" className="logo-pattern absolute inset-0" />
          <ul className="relative space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-2xl px-4 py-3 text-xl font-semibold transition ${
                    isActive(link)
                      ? "bg-white/10 text-gold-300"
                      : "text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <ul className="mb-2 ms-4 border-s border-white/15 ps-2">
                    {serviceLinks.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="block rounded-xl px-4 py-2 text-nile-100 hover:text-white"
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="relative mt-6 flex items-center justify-between gap-4">
            <LangSwitch dark />
            <Link href={`/${locale}/contact`} className="btn-gold flex-1">
              {t("cta")}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
