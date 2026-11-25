import BreadcrumbSection from "@/components/breadcrumb";
import PageSchema from "@/components/page-schema";
import OffersSection from "@/components/pricing/offers";
import { TierGrid } from "@/components/pricing/tiers";
import SectionHeader from "@/components/sections-header";
import { groups } from "@/data/pricing";
import { createMetadata } from "@/lib/seo";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return createMetadata({ locale, path: "/pricing", key: "pricing" });
}

export default async function PricingPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Pricing" });

  return (
    <>
      <PageSchema
        locale={locale}
        path="/pricing"
        seoKey="pricing"
        crumbs={[{ name: t("title"), path: "/pricing" }]}
      />
      <BreadcrumbSection title={t("title")} links={[{ label: t("title") }]} />

      <section className="bg-white pt-16">
        <p className="container mx-auto max-w-3xl text-center text-lg leading-relaxed text-slate-600">
          {t("intro")}
        </p>
      </section>

      <OffersSection background="bg-white" />

      {Object.keys(groups).map((group, i) => (
        <section
          key={group}
          id={group}
          className={`section ${i % 2 === 0 ? "bg-sand" : "bg-white"}`}
        >
          <div className="container">
            <SectionHeader
              title={t(`groups.${group}`)}
              subtitle={t("tiers_title")}
            />
            <TierGrid group={group} />
          </div>
        </section>
      ))}

      <section className="bg-sand pb-4 pt-4 text-center">
        <div className="container">
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-500">
            {t("note")}
          </p>
          <Link href={`/${locale}/contact`} className="btn-blue mt-8">
            {t("cta")}
          </Link>
        </div>
      </section>
    </>
  );
}
