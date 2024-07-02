/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "m.media-amazon.com",
      "lh3.googleusercontent.com",
      "localhost",
      "202.51.82.22",
    ],
  },
  distDir: "build",
};

module.exports = nextConfig;
