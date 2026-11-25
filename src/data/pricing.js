// Approximate prices in Saudi riyals (SAR). These are starting points: each project is quoted
// after its requirements are studied. Edit the numbers here; texts live in messages/*.json
// under "Pricing" (items.<id>, offers.<id>).
//
// unit: "once" | "month" | "module" | "article"
export const items = {
  web_starter: { group: "web", price: 2000, unit: "once" },
  web_business: { group: "web", price: 4500, unit: "once" },
  web_store: { group: "web", price: 6500, unit: "once" },

  erp_mini: { group: "erp", price: 6000, unit: "once" },
  erp_module: { group: "erp", price: 1500, unit: "module" },
  erp_full: { group: "erp", price: 12000, unit: "once" },

  logo: { group: "graphic", price: 600, unit: "once" },
  identity: { group: "graphic", price: 2000, unit: "once" },
  brand: { group: "graphic", price: 3500, unit: "once" },
  social_designs: { group: "graphic", price: 800, unit: "month" },

  social_mgmt: { group: "marketing", price: 1500, unit: "month" },
  ads: { group: "marketing", price: 1000, unit: "month" },

  content_article: { group: "content", price: 80, unit: "article" },
  content_pack: { group: "content", price: 900, unit: "month" },
  content_site: { group: "content", price: 700, unit: "once" },
};

// Which items are shown as tiers on each service page / pricing group.
export const groups = {
  web: ["web_starter", "web_business", "web_store"],
  erp: ["erp_mini", "erp_module", "erp_full"],
  graphic: ["logo", "identity", "brand", "social_designs"],
  marketing: ["social_mgmt", "ads", "social_designs"],
  content: ["content_article", "content_pack", "content_site"],
};

// Bundles. `includes` lists items (qty defaults to 1); the separate value is summed from `items`,
// so the saving shown on the site always matches the prices above.
export const offers = [
  {
    id: "launch",
    price: 3500,
    includes: [{ id: "web_starter" }, { id: "identity" }],
  },
  {
    id: "growth",
    price: 7500,
    popular: true,
    includes: [{ id: "web_business" }, { id: "brand" }, { id: "content_site" }],
  },
  {
    id: "erp_custom",
    price: 8200,
    includes: [{ id: "erp_mini" }, { id: "erp_module", qty: 2 }],
  },
  {
    id: "erp_plus",
    price: 11500,
    includes: [{ id: "erp_mini" }, { id: "erp_module", qty: 2 }, { id: "web_business" }],
  },
  {
    id: "store",
    price: 8900,
    includes: [{ id: "web_store" }, { id: "identity" }, { id: "social_mgmt" }],
  },
];

export const offerValue = (offer) =>
  offer.includes.reduce((sum, { id, qty = 1 }) => sum + items[id].price * qty, 0);

export const formatSar = (amount, locale) => {
  const n = new Intl.NumberFormat("en-US").format(amount);
  return locale === "ar" ? `${n} ر.س` : `SAR ${n}`;
};

export const isPlanId = (id) => id in items || offers.some((o) => o.id === id);
