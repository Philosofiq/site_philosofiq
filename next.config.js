/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: false,
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
