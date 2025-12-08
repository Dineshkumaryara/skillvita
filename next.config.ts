import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "coursevita-storate.s3.ap-south-1.amazonaws.com",
      "coursevita-main-site.s3.eu-north-1.amazonaws.com",
      "res.cloudinary.com",
      "coursevita.com"
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // Enable compression
  compress: true,
  // Headers for caching and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
        ],
      },
    ];
  },
};

export default nextConfig;
