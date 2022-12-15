/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: '**.placeholder.com',
        hostname: "**.unsplash.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
