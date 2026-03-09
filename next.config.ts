import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "locomotive.ca" },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
