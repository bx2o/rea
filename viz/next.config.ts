import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Large data payloads from API routes / snapshots
  experimental: {
    serverActions: { bodySizeLimit: "4mb" },
  },
  // cobe / three / reveal are client-only
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false, path: false, child_process: false };
    }
    return config;
  },
};

export default nextConfig;
