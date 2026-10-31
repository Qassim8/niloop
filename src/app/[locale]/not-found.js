import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { defaultLocale } from "@/lib/site";

export async function generateMetadata() {
  const t = await getTranslations("SEO");
  return { title: t("not_found_title"), robots: { index: false, follow: false } };
}

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <section className="py-32 text-center">
      <div className="container">
        <p className="text-7xl font-extrabold text-alt">404</p>
        <h1 className="mt-4 text-3xl font-bold text-main">{t("title")}</h1>
        <p className="mt-3 text-slate-500">{t("desc")}</p>
        <Link
          href={`/${defaultLocale}`}
          className="mt-8 inline-block bg-alt text-main font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition"
        >
          {t("home")}
        </Link>
      </div>
    </section>
  );
}
