import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import BreadcrumbSection from "@/components/breadcrumb";
import PageSchema from "@/components/page-schema";
import { TierGrid } from "@/components/pricing/tiers";
import SectionHeader from "@/components/sections-header";
import Editorial from "@/components/ui/editorial";
import NumberedRows from "@/components/ui/numbered-rows";
import SplitReveal from "@/components/ui/split-reveal";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return createMetadata({ locale, path: "/subscription", key: "subscription" });
}

export default async function SubscriptionPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Subscription" });

  return (
    <>
      <PageSchema
        locale={locale}
        path="/subscription"
        seoKey="subscription"
        service
        crumbs={[{ name: t("title"), path: "/subscription" }]}
      />
      <BreadcrumbSection title={t("title")} lead={t("lead")} links={[{ label: t("title") }]} />

      <section className="section bg-white">
        <div className="container">
          <Editorial label={t("steps_label")}>
            <h2 className="mb-10 max-w-3xl text-3xl font-semibold leading-[1.3] text-nile-950 md:mb-14 md:text-5xl md:leading-[1.2]">
              <SplitReveal text={t("steps_title")} />
            </h2>
            <NumberedRows items={t.raw("steps")} />
          </Editorial>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <SectionHeader variant="editorial" title={t("plans_title")} subtitle={t("plans_label")} />
          <TierGrid ids={["social_designs", "content_pack", "ads"]} />
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-slate-500">
            {t("note")}
          </p>
          <div className="mt-8 text-center">
            <Link href={`/${locale}/contact?plan=content_pack`} className="btn-blue">
              {t("cta")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
