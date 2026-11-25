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

      <article className="section bg-white">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-8">
              <p className="text-lg leading-loose text-slate-600">{description}</p>

              {features.length > 0 && (
                <>
                  <h2 className="mb-5 mt-12 text-2xl font-semibold text-nile-950">
                    {t("features")}
                  </h2>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 rounded-2xl border border-line bg-sand p-4 text-slate-700"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400 text-nile-950">
                          <Check size={14} strokeWidth={3} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <aside className="card h-fit space-y-5 p-6 lg:col-span-4">
              <div>
                <p className="text-sm text-slate-500">{t("category")}</p>
                <p className="mt-1 font-semibold text-nile-950">{t(`type_${project.type}`)}</p>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-blue w-full"
                >
                  {t("visit")}
                  <ArrowUpRight size={18} />
                </a>
              )}
              <Link href={`/${locale}/contact`} className="btn-outline w-full">
                {t("cta_button")}
              </Link>
            </aside>
          </div>

          <h2 className="sr-only">{t("gallery")}</h2>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:gap-5">
            {project.images.map((image, i) => (
              <div
                key={image}
                className={`relative aspect-[16/10] overflow-hidden rounded-[var(--radius-media)] border border-line bg-nile-50 shadow-[var(--shadow-card)] ${
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

      <section className="section bg-sand">
        <div className="container">
          <SectionHeader title={t("related")} subtitle={t("subtitle")} />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {related.map((p) => (
              <WorkCard
                key={p.slug}
                href={`/${locale}/projects/${p.slug}`}
                image={p.image}
                title={t(`${p.key}_title`)}
                label={t("show")}
                tag={t(`type_${p.type}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
