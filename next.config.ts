import type { NextConfig } from "next";

// Static export so the site can be hosted anywhere (GitHub Pages, Netlify, S3, Vercel).
// Set NEXT_PUBLIC_BASE_PATH when hosting under a sub-path, e.g. /Personal-Website on GitHub Pages.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  reactStrictMode: true,
  // Directory-style URLs (work/index.html) so static hosts like GitHub Pages resolve every route.
  trailingSlash: true,
  poweredByHeader: false,
  images: { unoptimized: true },
  transpilePackages: ["three"],
};

export default nextConfig;
