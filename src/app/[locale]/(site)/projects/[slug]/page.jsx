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

      <article className="py-20 bg-white">
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

            <aside className="md:col-span-1 h-fit rounded-xl bg-slate-50 p-6 space-y-4">
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
                  className="inline-flex items-center gap-2 bg-main text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
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
                className={`relative overflow-hidden rounded-lg shadow-md aspect-[16/9] ${
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

      <section className="py-16 bg-gradient-to-r from-[#1e549f] to-[#dda853] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">{t("cta_title")}</h2>
          <p className="text-lg mb-8">{t("cta_desc")}</p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-alt text-main font-semibold px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition"
          >
            {t("cta_button")}
          </Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
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
      </section>
    </>
  );
}
