import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pin the workspace root — an unrelated lockfile in the user's home
  // directory otherwise gets inferred as the project root.
  turbopack: { root: __dirname },
};

export default nextConfig;
