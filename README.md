# Niloop (نايلوب)

Company website for Niloop built with Next.js (App Router), `next-intl` (Arabic default + English) and Tailwind CSS 4.

```bash
npm install
npm run dev      # http://localhost:3000  (redirects to /ar)
npm run build && npm start
```

## Before going live (domain + Google Search Console)

1. Set the production domain as an environment variable in the hosting platform
   (canonical URLs, hreflang, sitemap, robots and structured data are all derived from it):

   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

2. In Google Search Console add the property and either verify through DNS, or set the HTML-tag token:

   ```
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<token>
   NEXT_PUBLIC_BING_SITE_VERIFICATION=<token>   # optional
   ```

3. Submit `https://your-domain.com/sitemap.xml` in Search Console.
4. Add the real social profile URLs in `src/lib/site.js` (`siteConfig.social`); they show up in the footer and structured data.

## Where things live

| What | Where |
| --- | --- |
| Site URL, contact info, social links, indexable routes | `src/lib/site.js` |
| Page metadata (canonical, hreflang, Open Graph) | `src/lib/seo.js` |
| JSON-LD builders (Organization, Service, FAQ, Breadcrumb, Project) | `src/lib/schema.js`, `src/components/page-schema.jsx` |
| Portfolio projects | `src/data/projects.js` (texts in `src/messages/*.json` → `Projects`) |
| Translations | `src/messages/ar.json`, `src/messages/en.json` |
| Sitemap / robots / llms.txt | `src/app/sitemap.js`, `src/app/robots.js`, `src/app/llms.txt/route.js` |
| Locale routing proxy | `src/proxy.js` |

## Adding a project

1. Add an entry to `src/data/projects.js` (slug, `key`, type, images, optional `link`).
2. Add `<key>_title` and `<key>_desc` (and optionally `<key>_f1…`) under `Projects` in both message files.
3. Put images in `public/images/` (WebP, ≤ 1600px wide). The project page, listing card, sitemap entry and structured data are generated automatically.

The covers for Matajri, Al Zamil Clean and Sudatech in `public/images/projects/` are temporary; replace them with real screenshots using the same file names.
