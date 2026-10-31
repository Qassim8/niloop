import { SITE_URL, siteConfig } from "@/lib/site";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

// llms.txt: a concise, machine-readable summary of the site for AI assistants and answer engines.
export function GET() {
  const lines = [
    "# Niloop (نايلوب)",
    "",
    "> Niloop is a tech company founded in 2021 offering website and e-commerce development, ERP / accounting / inventory systems, graphic design and visual identity, brand building, content writing and social media management. Main markets: Saudi Arabia and the Gulf, then Sudan, Egypt and the Levant; remote clients in Europe, the US, Canada and Australia.",
    "> نايلوب شركة تقنية تأسست عام 2021 تقدم تطوير المواقع والمتاجر الإلكترونية، وأنظمة ERP والمحاسبة وإدارة المخزون، والتصميم الجرافيكي والهوية البصرية، وبناء العلامات التجارية، وكتابة المحتوى. أسواقنا الرئيسية: السعودية والخليج ثم السودان ومصر والشام.",
    "",
    "## Services",
    `- [Web development / تطوير المواقع](${SITE_URL}/en/services/web-design): responsive, SEO-friendly websites and online stores`,
    `- [ERP systems / أنظمة ERP](${SITE_URL}/en/services/erp): accounting, inventory, financial reports, employee statistics, customer management`,
    `- [Graphic design & identity / الجرافيك والهوية](${SITE_URL}/en/services/graphic-design): logos, brand identities, social media designs`,
    `- [Digital marketing / التسويق الرقمي](${SITE_URL}/en/services/marketing): campaigns, social media management`,
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
