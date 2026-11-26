import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import BreadcrumbSection from "@/components/breadcrumb";
import JsonLd from "@/components/json-ld";
import PageSchema from "@/components/page-schema";
import Editorial from "@/components/ui/editorial";
import Reveal from "@/components/ui/reveal";
import { slotHintsVisible } from "@/components/ui/image-slot";
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

// Which service groups (see Pricing.groups) a project type covers
const typeServices = {
  website: ["web"],
  system: ["erp"],
  graphic: ["graphic"],
  collection: ["web", "graphic"],
};

export default async function ProjectPage({ params }) {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Projects" });
  const p = await getTranslations({ locale, namespace: "Pricing" });
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  const path = `/projects/${slug}`;
  const title = t(`${project.key}_title`);
  const description = t(`${project.key}_desc`);
  const sector = t(`${project.key}_sector`);
  const services = typeServices[project.type].map((g) => p(`groups.${g}`));
  const features = Array.from({ length: project.features ?? 0 }, (_, i) =>
    t(`${project.key}_f${i + 1}`)
  );

  const index = projects.findIndex((x) => x.slug === slug);
  const next = projects[(index + 1) % projects.length];

  const tag = "rounded-full border border-line px-3 py-1 text-sm text-nile-950";

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

      {/* Cover + short description */}
      <section className="section bg-white !pb-10 md:!pb-14">
        <div className="container grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="rounded-[var(--radius-media)] bg-nile-950 p-3 shadow-[var(--shadow-lift)] md:p-5">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-nile-900">
                <Image
                  src={project.image}
                  alt={title}
                  fill
                  priority
                  quality={90}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-lg leading-loose text-slate-700">{description}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className={`${tag} bg-sand`}>{sector}</span>
              {services.map((s) => (
                <span key={s} className={tag}>{s}</span>
              ))}
            </div>
            {slotHintsVisible && <p className="mt-4 text-xs text-gold-700">{t("draft_note")}</p>}
          </Reveal>
        </div>
      </section>

      {/* About the project */}
      <section className="section bg-white !pt-10 md:!pt-14">
        <div className="container">
          <Editorial label={t("about_project")}>
            <dl className="grid gap-8 sm:grid-cols-3">
              <div>
                <dt className="text-sm text-slate-500">{t("sector")}</dt>
                <dd className="mt-1 font-semibold text-nile-950">{sector}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm text-slate-500">{t("services_label")}</dt>
                <dd className="mt-1 font-semibold text-nile-950">{services.join(" · ")}</dd>
              </div>
            </dl>

            {features.length > 0 && (
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400 text-nile-950">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href={`/${locale}/contact`} className="btn-blue">
                {t("lets_chat")}
              </Link>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  {t("visit")}
                  <ArrowUpRight size={18} />
                </a>
              )}
            </div>
          </Editorial>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-sand py-4 md:py-6">
        <div className="container grid gap-4 py-10 sm:grid-cols-2 lg:gap-5">
          <h2 className="sr-only">{t("gallery")}</h2>
          {project.images.map((image, i) => (
            <Reveal
              key={image}
              delay={(i % 2) * 0.08}
              className={i === 0 && project.images.length > 1 ? "sm:col-span-2" : ""}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-media)] border border-line bg-white shadow-[var(--shadow-card)]">
                <Image
                  src={image}
                  alt={`${title} – ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Challenge → solution → takeaway */}
      <section className="section bg-white">
        <div className="container space-y-12 md:space-y-16">
          <Editorial label={t("challenge")}>
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-sm text-slate-500">{t("problem")}</h3>
                <p className="mt-3 text-lg leading-loose text-slate-800">{t(`${project.key}_problem`)}</p>
              </div>
              <div>
                <h3 className="text-sm text-slate-500">{t("solution")}</h3>
                <p className="mt-3 text-lg leading-loose text-slate-800">{t(`${project.key}_solution`)}</p>
              </div>
            </div>
          </Editorial>
          <Editorial label={t("takeaway")}>
            <p className="max-w-3xl text-2xl font-semibold leading-[1.5] text-nile-950 md:text-4xl md:leading-[1.4]">
              {t(`${project.key}_takeaway`)}
            </p>
          </Editorial>
        </div>
      </section>

      {/* Next project */}
      <section className="section bg-sand">
        <div className="container">
          <Editorial label={t("next")}>
            <Link
              href={`/${locale}/projects/${next.slug}`}
              className="group grid items-center gap-6 rounded-[var(--radius-media)] bg-white p-4 shadow-[var(--shadow-card)] transition duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] md:grid-cols-12 md:p-6"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-nile-50 md:col-span-5">
                <Image
                  src={next.image}
                  alt={t(`${next.key}_title`)}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="md:col-span-7">
                <p className="text-sm text-slate-500">{t(`${next.key}_sector`)}</p>
                <h3 className="mt-2 text-2xl font-semibold text-nile-950 md:text-4xl">{t(`${next.key}_title`)}</h3>
                <span className="mt-6 inline-flex items-center gap-2 font-medium text-nile-600">
                  {t("view_project")}
                  <Arrow size={16} className="transition rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Editorial>
        </div>
      </section>
    </>
  );
}
