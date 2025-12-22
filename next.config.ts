import type { NextConfig } from "next";

// Only use basePath/assetPrefix when building for GitHub Pages
const isGithubPages = process.env.GH_PAGES_BUILD === 'true';
const repoName = "carbonyx_landing_page";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
