"use client"

import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  let t = useTranslations("Footer");

  return (
    <footer className="bg-blue-950 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* العمود الأول */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            <img
              src="/images/Niloop_mark.svg"
              alt="logo"
              className="w-[120px]"
            />
          </h2>
          <p className="text-sm leading-relaxed">{t("company_desc")}</p>
        </div>

        {/* العمود الثاني */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            {t("quick_links")}
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                {t("home")}
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                {t("services")}
              </Link>
            </li>
            <li>
              <Link href="/works" className="hover:text-white">
                {t("projects")}
              </Link>
            </li>
          </ul>
        </div>

        {/* العمود الثالث */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            {t("contact")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>📍 {t("location")}</li>
            <li>📞 +249 912 345 678</li>
            <li>📧 info@techcompany.com</li>
          </ul>
        </div>

        {/* العمود الرابع */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            {t("follow")}
          </h3>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white">
              <Facebook />
            </Link>
            <Link href="#" className="hover:text-white">
              <Twitter />
            </Link>
            <Link href="#" className="hover:text-white">
              <Linkedin />
            </Link>
            <Link href="#" className="hover:text-white">
              <Instagram />
            </Link>
          </div>
        </div>
      </div>

      {/* الحقوق */}
      <div className="mt-12 border-t border-slate-500 pt-6 text-center text-sm text-slate-400">
        {t("copyright")}<span className="text-alt">{t("niloop")}</span> © 2025
      </div>
    </footer>
  );
}
