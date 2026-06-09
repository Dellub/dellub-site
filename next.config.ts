import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Static HTML export for FTP/shared hosting (no Node runtime).
  output: "export",
  trailingSlash: true,
  images: {
    // The export has no image optimization server.
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
