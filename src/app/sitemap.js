import { SITE_URL, locales, staticRoutes } from "@/lib/site";
import { projects } from "@/data/projects";

export default function sitemap() {
  const routes = [
    ...staticRoutes,
    ...projects.map((p) => ({
      path: `/projects/${p.slug}`,
      priority: 0.6,
      changeFrequency: "monthly",
    })),
  ];

  return routes.flatMap(({ path, priority, changeFrequency }) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${path}`])),
          "x-default": `${SITE_URL}/ar${path}`,
        },
      },
    }))
  );
}
