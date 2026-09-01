import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/industries", destination: "/#industries", permanent: true },
      { source: "/service-areas", destination: "/#areas", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/testimonials", destination: "/#testimonials", permanent: true },
    ];
  },
};

export default nextConfig;
