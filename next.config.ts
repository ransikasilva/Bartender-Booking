import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has TypeScript errors.
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizeCss: false, // Disable CSS optimization to prevent purging issues
  },
  compiler: {
    removeConsole: false, // Keep console logs for debugging
  },
};

export default nextConfig;
