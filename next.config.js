/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "ns3.actnepal.com.np",
      "localhost",
      "202.51.82.22",
      "lh3.googleusercontent.com"
    ],
  },
  distDir: "build",
};

module.exports = nextConfig;
