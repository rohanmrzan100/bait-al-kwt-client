/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "ns3.actnepal.com.np",
      "localhost",
      "202.51.82.22",
    ],
  },
  distDir: "build",
};

module.exports = nextConfig;
