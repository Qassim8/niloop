import { SITE_URL, siteConfig } from "@/lib/site";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

// llms.txt: a concise, machine-readable summary of the site for AI assistants and answer engines.
export function GET() {
  const lines = [
    "# Niloop (نايلوب)",
    "",
    "> Niloop is a tech company founded in 2021 offering website and e-commerce development, ERP / accounting / inventory systems, graphic design and visual identity, brand building, content writing and social media management. Main market: the whole Arab world (Saudi Arabia and the Gulf, Egypt, Sudan, the Levant, North Africa), with a focus on stores that need an online store or a management (ERP) system; remote clients in Europe, the US, Canada and Australia.",
    "> نايلوب شركة تقنية تأسست عام 2021 تقدم تطوير المواقع والمتاجر الإلكترونية، وأنظمة ERP والمحاسبة وإدارة المخزون، والتصميم الجرافيكي والهوية البصرية، وبناء العلامات التجارية، وكتابة المحتوى. نخدم الوطن العربي كله، ونركز على المتاجر التي تحتاج متجرًا إلكترونيًا أو نظامًا لإدارتها.",
    "",
    "## Services",
    `- [Web development / تطوير المواقع](${SITE_URL}/en/services/web-design): responsive, SEO-friendly websites and online stores`,
    `- [ERP systems / أنظمة ERP](${SITE_URL}/en/services/erp): accounting, inventory, financial reports, employee statistics, customer management`,
    `- [Graphic design & identity / الجرافيك والهوية](${SITE_URL}/en/services/graphic-design): logos, brand identities, social media designs`,
    `- [Digital marketing / التسويق الرقمي](${SITE_URL}/en/services/marketing): campaigns, social media management`,
    "",
    `- [Store solutions / حلول المتاجر](${SITE_URL}/en/solutions): online stores and ERP systems for store owners`,
    `- [Content writing / كتابة المحتوى](${SITE_URL}/en/services/content-writing): website, store and social media copy`,
    `- [Monthly plan / الاشتراك الشهري](${SITE_URL}/en/subscription): designs, content and account management on a monthly plan`,
    `- [Pricing & offers / الأسعار والعروض](${SITE_URL}/en/pricing): approximate prices in SAR and bundled packages`,
    "",
    "## Projects",
    ...projects.map((p) => `- [${p.slug}](${SITE_URL}/en/projects/${p.slug})`),
    "",
    "## Contact",
    `- Email: ${siteConfig.email}`,
    `- WhatsApp: ${siteConfig.whatsapp}`,
    `- Contact page: ${SITE_URL}/en/contact`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
