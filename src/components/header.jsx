"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "عن نايلوب" },
    { href: "/services", label: "الخدمات", dropdown: true },
    { href: "/projects", label: "اعمالنا" },
    { href: "/contact", label: "تواصل معنا" },
  ];

  const serviceLinks = [
    { href: "/services/web-design", label: "تصميم المواقع" },
    { href: "/services/graphic-design", label: "التصميم الجرافيكي" },
    { href: "/services/marketing", label: "التسويق الرقمي" },
    { href: "/services", label: "جميع الخدمات" },
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
            src="/images/logo_Mark.svg"
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
                        ? "text-alt font-semibold border-b-3 border-[#dda853]"
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
            className={`flex items-center gap-1 transition me-4 ${
              scrolled
                ? "text-main hover:!text-[#dda853]"
                : "hover:!text-[#dda853]"
            }`}
          >
            <Globe size={16} />
            <span>EN</span>
          </button>

          {/* Call to Action */}
          <Link href="/services" className="bg-alt text-main px-4 py-2 rounded-xl font-semibold hover:opacity-90 transition cursor-pointer">
            احصل على خدمتك
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
            scrolled ? "bg-alt text-main" : "bg-alt text-main"
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

          <button className="flex items-center gap-2 hover:!text-[#dda853] transition w-full">
            <Globe size={18} />
            <span>EN</span>
          </button>

          <Link href="/services" className="bg-alt text-main w-full py-2 rounded-xl font-semibold hover:opacity-90 transition">
            احصل على خدمتك
          </Link>
        </div>
      )}
    </nav>
  );
}
