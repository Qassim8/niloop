"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "عن نايلوب" },
    { href: "/services", label: "الخدمات" },
    { href: "/contact", label: "تواصل معنا" },
  ];

  // مراقبة السكرول
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md text-[#1a237e]"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          href="/"
          className={`text-2xl font-bold transition-colors ${
            scrolled ? "text-[#1a237e]" : "text-[#d4b483]"
          }`}
        >
          نايلوب
        </Link>

        {/* Desktop Nav */}
        <div className="hidden flex-1 md:flex items-center space-x-6 space-x-reverse">
          <ul className="flex-1 flex gap-6 justify-center items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors pb-3 ${
                  pathname === link.href
                    ? "text-[#d4b483] font-semibold border-b-2 border-[#d4b483]"
                    : scrolled
                    ? "hover:text-[#d4b483]"
                    : "hover:text-[#d4b483]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </ul>

          {/* Language Switch */}
          <button
            className={`flex items-center gap-1 transition me-4 ${
              scrolled
                ? "text-[#1a237e] hover:text-[#d4b483]"
                : "hover:text-[#d4b483]"
            }`}
          >
            <Globe size={16} />
            <span>EN</span>
          </button>

          {/* Call to Action */}
          <button className="bg-[#d4b483] text-[#1a237e] px-4 py-2 rounded-xl font-semibold hover:opacity-90 transition">
            احصل على خدمتك
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition ${
            scrolled ? "text-[#1a237e]" : "text-white"
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
            scrolled ? "bg-white text-[#1a237e]" : "bg-[#1a237e] text-white"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 transition-colors ${
                pathname === link.href
                  ? "text-[#d4b483] font-semibold border-b border-[#d4b483]"
                  : "hover:text-[#d4b483]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <button className="flex items-center gap-2 hover:text-[#d4b483] transition w-full">
            <Globe size={18} />
            <span>EN</span>
          </button>

          <button className="bg-[#d4b483] text-[#1a237e] w-full py-2 rounded-xl font-semibold hover:opacity-90 transition">
            احصل على خدمتك
          </button>
        </div>
      )}
    </nav>
  );
}
