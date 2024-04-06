/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "consultas4-72.online",
      },
    ],
  },
};

module.exports = nextConfig;
