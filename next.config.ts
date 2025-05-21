import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // Allow images from all domains
      },
    ],
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/games/images",
        destination: "https://frontend-retrobox.vercel.app/api/v1/games/images",
      },
      {
        source: "/api/games/vignette",
        destination:
          "https://frontend-retrobox.vercel.app/api/v1/games/vignette",
      },
    ];
  },
};

export default nextConfig;
