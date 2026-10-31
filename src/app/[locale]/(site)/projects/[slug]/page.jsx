import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight, Check } from "lucide-react";
import BreadcrumbSection from "@/components/breadcrumb";
import JsonLd from "@/components/json-ld";
import PageSchema from "@/components/page-schema";
import SectionHeader from "@/components/sections-header";
import WorkCard from "@/components/projects/work-card";
import Wave from "@/components/ui/wave";
import { Ripples } from "@/components/ui/shapes";
import { createMetadata, truncate } from "@/lib/seo";
import { projectSchema } from "@/lib/schema";
import { projects, getProject } from "@/data/projects";
import { routing } from "@/i18n/routing";

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map(({ slug }) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const t = await getTranslations({ locale, namespace: "Projects" });
  return createMetadata({
    locale,
    path: `/projects/${slug}`,
    title: t(`${project.key}_title`),
    description: truncate(t(`${project.key}_desc`)),
  });
}

export default async function ProjectPage({ params }) {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Projects" });
  const path = `/projects/${slug}`;
  const title = t(`${project.key}_title`);
  const description = t(`${project.key}_desc`);
  const features = Array.from({ length: project.features ?? 0 }, (_, i) =>
    t(`${project.key}_f${i + 1}`)
  );
  const related = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <PageSchema
        locale={locale}
        path={path}
        name={title}
        description={description}
        crumbs={[
          { name: t("title"), path: "/projects" },
          { name: title, path },
        ]}
      />
      <JsonLd
        data={projectSchema(locale, {
          path,
          name: title,
          description,
          images: project.images,
          link: project.link,
        })}
      />

      <BreadcrumbSection
        title={title}
        links={[{ label: t("title"), href: "/projects" }, { label: title }]}
      />

      <article className="bg-white py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <p className="text-slate-600 leading-loose text-lg">{description}</p>

              {features.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold text-main mt-10 mb-4">
                    {t("features")}
                  </h2>
                  <ul className="space-y-3 text-slate-600">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-0.5 w-6 h-6 shrink-0 flex items-center justify-center rounded-full bg-alt text-main">
                          <Check size={14} strokeWidth={3} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <aside className="card-soft md:col-span-1 h-fit space-y-4 border-t-4 border-t-[#dda853] p-6">
              <div>
                <p className="text-sm text-slate-400">{t("category")}</p>
                <p className="font-semibold text-main">
                  {t(`type_${project.type}`)}
                </p>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-blue !py-2"
                >
                  {t("visit")}
                  <ArrowUpRight size={18} />
                </a>
              )}
            </aside>
          </div>

          <h2 className="sr-only">{t("gallery")}</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {project.images.map((image, i) => (
              <div
                key={image}
                className={`relative overflow-hidden rounded-[2rem] shadow-[0_15px_40px_-15px_rgba(30,84,159,0.4)] aspect-[16/9] ${
                  i === 0 && project.images.length > 1 ? "sm:col-span-2" : ""
                }`}
              >
                <Image
                  src={image}
                  alt={`${title} – ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </article>

      <section className="gradient-pan relative overflow-hidden bg-gradient-to-r from-[#0b2a57] via-[#1e549f] to-[#c58f3c] py-32 text-center text-white">
        <Wave position="top" className="text-white" />
        <Ripples className="start-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-20 mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold mb-4">{t("cta_title")}</h2>
          <p className="text-lg mb-8">{t("cta_desc")}</p>
          <Link
            href={`/${locale}/contact`}
            className="btn-gold text-lg"
          >
            {t("cta_button")}
          </Link>
        </div>
        <Wave className="text-water" />
      </section>

      <section className="relative overflow-hidden bg-water pb-28 pt-20">
        <div className="container">
          <SectionHeader title={t("related")} subtitle={t("subtitle")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((p) => (
              <WorkCard
                key={p.slug}
                href={`/${locale}/projects/${p.slug}`}
                image={p.image}
                title={t(`${p.key}_title`)}
                label={t("show")}
              />
            ))}
          </div>
        </div>
        <Wave className="text-white" />
      </section>
    </>
  );
}
