"use client";


import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const router = useRouter();
  const t = useTranslations("Header");
  const locale = useLocale();

  const toggleLanguage = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/services`, label: t("services"), dropdown: true },
    { href: `/${locale}/projects`, label: t("projects") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const serviceLinks = [
    { href: `/${locale}/services/web-design`, label: t("web") },
    { href: `/${locale}/services/graphic-design`, label: t("graphic") },
    { href: `/${locale}/services/marketing`, label: t("marketing") },
    { href: `/${locale}/services`, label: t("all") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 w-full bg-white text-main z-50 transition-all duration-300 shadow-md`}
    >
      <div className="max-w-7xl mx-auto md:px-0 px-4 flex items-center justify-between h-full">
        {/* Logo */}
        <Link
          href="/"
          className={`text-2xl font-bold transition-colors py-2 md:py-0 ${
            scrolled ? "text-main" : "text-alt"
          }`}
        >
          <Image
            src="/images/Logo_mark.svg"
            alt="Niloop Logo"
            width={90}
            height={90}
            className="!w-[80px] md:w-[130px]"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden flex-1 md:flex items-center space-x-6 space-x-reverse">
          <ul className="flex-1 flex gap-8 justify-center items-center relative font-bold">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={`flex items-center gap-2 transition-colors py-5 ${
                      pathname.startsWith("/services")
                        ? "text-alt font-semibold border-b-3 !border-[#dda853]"
                        : "hover:!text-[#dda853]"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={16} />
                  </button>

                  {/* Dropdown Menu */}
                  {servicesOpen && (
                    <div className="absolute top-full right-0 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-2 text-main hover:bg-[#f5f5f5] hover:text-[#dda853] transition"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-5 ${
                    pathname === link.href
                      ? "text-alt font-semibold border-b-3 border-[#dda853]"
                      : "hover:!text-[#dda853]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </ul>

          {/* Language Switch */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1 transition me-4 cursor-pointer ${
              scrolled
                ? "text-main hover:!text-[#dda853]"
                : "hover:!text-[#dda853]"
            }`}
          >
            <Globe size={16} />
            <span>{locale === "ar" ? "EN" : "AR"}</span>
          </button>

          {/* Call to Action */}
          <Link
            href={`${locale}/services`}
            className="bg-alt text-main px-4 py-2 rounded-xl font-semibold hover:opacity-90 transition cursor-pointer"
          >
            {t("get")}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition ${
            scrolled ? "text-main" : "text-alt"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div
          className={`md:hidden px-4 pb-4 space-y-4 transition ${
            scrolled ? "bg-white/20 text-main" : "bg-white/20 text-main"
          }`}
        >
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.href} className="space-y-2">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-2 w-full py-2 hover:!text-[#dda853]"
                >
                  {link.label}
                  <ChevronDown size={16} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 space-y-2">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 hover:!text-[#dda853]"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2 transition-colors ${
                  pathname === link.href
                    ? "text-alt font-semibold border-b border-[#dda853]"
                    : "hover:!text-[#dda853]"
                }`}
              >
                {link.label}
              </Link>
            )
          )}

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 hover:!text-[#dda853] transition w-full cursor-pointer"
          >
            <Globe size={18} />
            <span>{locale === "ar" ? "EN" : "AR"}</span>
          </button>

          <Link
            href={`${locale}/services`}
            className="bg-alt text-main w-full p-2 rounded-xl font-semibold hover:opacity-90 transition"
          >
            {t("get")}
          </Link>
        </div>
      )}
    </nav>
  );
}
