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
    <section className="surface-nile flex min-h-[80vh] items-center rounded-b-[3rem] pb-20 pt-40 text-center">
      <div className="container">
        <p className="accent text-8xl font-bold md:text-9xl">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-white md:text-5xl">{t("title")}</h1>
        <p className="mt-3 text-nile-100">{t("desc")}</p>
        <Link href={`/${defaultLocale}`} className="btn-gold mt-8">
          {t("home")}
        </Link>
      </div>
    </section>
  );
}
