const fs = require("fs");
const path = require("path");
const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

// Images dropped into public/images/slots/ (see its README) are detected at build time so that
// <ImageSlot> can swap its placeholder for the real picture automatically.
const slotsDir = path.join(__dirname, "public/images/slots");
const slotFiles = fs.existsSync(slotsDir)
  ? fs.readdirSync(slotsDir).filter((f) => /\.(webp|jpe?g|png|avif)$/i.test(f))
  : [];

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { NEXT_PUBLIC_IMAGE_SLOTS: JSON.stringify(slotFiles) },
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // 90 is used for large showcase images (e.g. the hero), 75 for everything else.
    qualities: [75, 90],
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        // Static images in /public rarely change; let browsers and CDNs cache them.
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
