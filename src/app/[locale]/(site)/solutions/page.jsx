import { getTranslations, setRequestLocale } from "next-intl/server";
import BreadcrumbSection from "@/components/breadcrumb";
import PageSchema from "@/components/page-schema";
import { TierGrid } from "@/components/pricing/tiers";
import SectionHeader from "@/components/sections-header";
import Editorial from "@/components/ui/editorial";
import NumberedRows from "@/components/ui/numbered-rows";
import SplitReveal from "@/components/ui/split-reveal";
import { solutions } from "@/data/solutions";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return createMetadata({ locale, path: "/solutions", key: "solutions" });
}

export default async function SolutionsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Solutions" });
  const p = await getTranslations({ locale, namespace: "Pricing" });

  return (
    <>
      <PageSchema
        locale={locale}
        path="/solutions"
        seoKey="solutions"
        crumbs={[{ name: t("title"), path: "/solutions" }]}
      />
      <BreadcrumbSection title={t("title")} lead={t("lead")} links={[{ label: t("title") }]} />

      <section className="section bg-white">
        <div className="container">
          <Editorial label={t("title")}>
            <h2 className="mb-10 max-w-3xl text-3xl font-semibold leading-[1.3] text-nile-950 md:mb-14 md:text-5xl md:leading-[1.2]">
              <SplitReveal text={t("subtitle")} />
            </h2>
            <NumberedRows
              items={solutions.map(({ slug }) => ({
                title: t(`items.${slug}.title`),
                desc: t(`items.${slug}.desc`),
                href: `/${locale}/solutions/${slug}`,
              }))}
            />
          </Editorial>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <SectionHeader variant="editorial" title={p("tiers_title")} subtitle={p("tiers_subtitle")} />
          <TierGrid ids={["web_store", "erp_mini", "erp_full"]} />
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-slate-500">
            {p("note")}
          </p>
        </div>
      </section>
    </>
  );
}
