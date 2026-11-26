// Store solutions: landing pages for store owners who need an online store or a management system.
// Texts live in messages/*.json under "Solutions.items.<slug>".
export const solutions = [
  {
    slug: "online-store",
    icon: "ShoppingBag",
    example: "zus",
    priceItem: "web_store",
  },
  {
    slug: "store-erp",
    icon: "Calculator",
    example: "matajri",
    priceItem: "erp_mini",
  },
  {
    slug: "tailoring-shops",
    icon: "Scissors",
    example: "matajri",
    priceItem: "erp_mini",
  },
];

export const getSolution = (slug) => solutions.find((s) => s.slug === slug);
