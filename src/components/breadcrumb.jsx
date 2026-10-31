import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Wave from "./ui/wave";
import { Ripples } from "./ui/shapes";

export default function BreadcrumbSection({ title, links }) {
  const t = useTranslations("Header");
  const locale = useLocale();

  return (
    <section className="relative flex min-h-[46vh] items-center justify-center overflow-hidden text-center text-white">
      {/* Background Image */}
      <Image
        src="/images/breadcrumb-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Overlay */}
      <div className="gradient-pan absolute inset-0 bg-gradient-to-br from-[#0b2a57]/95 via-[#1e549f]/90 to-[#1e549f]/80" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob float-y absolute -start-16 top-4 h-64 w-64 bg-[#dda853]/25 blur-2xl" />
        <Ripples className="-end-20 -top-24 h-[26rem] w-[26rem]" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl px-4 pb-24 pt-16">
        <h1 className="mb-4 text-3xl font-bold leading-snug md:text-5xl">
          {title}
        </h1>

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mx-auto flex w-fit flex-wrap items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-gray-200 backdrop-blur-md"
        >
          <Link
            href={`/${locale}`}
            className="flex items-center gap-1 hover:text-[#d4b483] transition"
          >
            <Home size={16} />
            {t("home")}
          </Link>
          {links?.map((link, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-gray-400">/</span>
              {link.href ? (
                <Link
                  href={`/${locale}${link.href}`}
                  className="hover:text-[#d4b483] transition"
                >
                  {link.label}
                </Link>
              ) : (
                <span
                  aria-current="page"
                  className="font-medium text-[#d4b483]"
                >
                  {link.label}
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>
      <Wave className="text-white" height="h-14 md:h-24" />
    </section>
  );
}
