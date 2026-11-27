import { notFound } from "next/navigation";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Check } from "lucide-react";
import BreadcrumbSection from "@/components/breadcrumb";
import PageSchema from "@/components/page-schema";
import { FromPrice } from "@/components/pricing/price";
import WorkCard from "@/components/projects/work-card";
import SectionHeader from "@/components/sections-header";
import Editorial from "@/components/ui/editorial";
import NumberedRows from "@/components/ui/numbered-rows";
import { getProject } from "@/data/projects";
import { solutions, getSolution } from "@/data/solutions";
import { routing } from "@/i18n/routing";
import { createMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => solutions.map(({ slug }) => ({ locale, slug })));
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  if (!getSolution(slug)) return {};
  const t = await getTranslations({ locale, namespace: "Solutions" });
  return createMetadata({
    locale,
    path: `/solutions/${slug}`,
    title: `${t(`items.${slug}.title`)} | ${locale === "ar" ? "نايلوب" : "Niloop"}`,
    description: t(`items.${slug}.desc`),
  });
}

export default async function SolutionPage({ params }) {
  const { locale, slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Solutions" });
  const pr = await getTranslations({ locale, namespace: "Projects" });
  const path = `/solutions/${slug}`;
  const title = t(`items.${slug}.title`);
  const desc = t(`items.${slug}.desc`);
  const benefits = t.raw(`items.${slug}.benefits`);
  const example = getProject(solution.example);
  const others = solutions.filter((s) => s.slug !== slug);

  return (
    <>
      <PageSchema
        locale={locale}
        path={path}
        name={title}
        description={desc}
        service
        crumbs={[
          { name: t("title"), path: "/solutions" },
          { name: title, path },
        ]}
      />
      <BreadcrumbSection
        title={title}
        lead={desc}
        links={[{ label: t("title"), href: "/solutions" }, { label: title }]}
      />

      <section className="section bg-white">
        <div className="container space-y-14 md:space-y-20">
          <Editorial label={t("benefits_title")}>
            <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-lg text-slate-800">
                  <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400 text-nile-950">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </Editorial>

          <Editorial label={t("for_title")}>
            <p className="max-w-3xl text-2xl font-semibold leading-[1.5] text-nile-950 md:text-3xl md:leading-[1.5]">
              {t(`items.${slug}.who`)}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link href={`/${locale}/contact?plan=${solution.priceItem}`} className="btn-blue">
                {t("price_cta")}
              </Link>
              <FromPrice id={solution.priceItem} className="text-gold-700" />
            </div>
          </Editorial>

          {example && (
            <Editorial label={t("example")}>
              <div className="max-w-md">
                <WorkCard
                  href={`/${locale}/projects/${example.slug}`}
                  image={example.image}
                  title={pr(`${example.key}_title`)}
                  label={t("see_project")}
                  tag={pr(`type_${example.type}`)}
                />
              </div>
            </Editorial>
          )}
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <SectionHeader variant="editorial" title={t("all")} subtitle={t("title")} />
          <NumberedRows
            size="md"
            items={others.map((s) => ({
              title: t(`items.${s.slug}.title`),
              desc: t(`items.${s.slug}.desc`),
              href: `/${locale}/solutions/${s.slug}`,
            }))}
          />
        </div>
      </section>
    </>
  );
}
