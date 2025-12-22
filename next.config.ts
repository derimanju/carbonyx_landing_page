import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = "carbonyx_landing_page"; // 깃허브 리포지토리 이름

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
