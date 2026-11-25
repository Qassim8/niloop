import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

// Compact dark page header with the page title and breadcrumb trail.
export default function BreadcrumbSection({ title, links }) {
  const t = useTranslations("Header");
  const locale = useLocale();
  const Sep = locale === "ar" ? ChevronLeft : ChevronRight;

  return (
    <section className="surface-nile relative overflow-hidden rounded-b-[2rem] pb-16 pt-36 md:rounded-b-[3rem] md:pb-20 md:pt-44">
      <div aria-hidden="true" className="logo-pattern absolute inset-0" />
      <div className="container relative">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-nile-200">
          <Link href={`/${locale}`} className="transition hover:text-gold-300">
            {t("home")}
          </Link>
          {links?.map((link, index) => (
            <span key={index} className="flex items-center gap-2">
              <Sep size={14} className="text-nile-400" />
              {link.href ? (
                <Link href={`/${locale}${link.href}`} className="transition hover:text-gold-300">
                  {link.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-gold-300">
                  {link.label}
                </span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.25] text-white md:text-6xl md:leading-[1.15]">
          {title}
        </h1>
      </div>
    </section>
  );
}
