/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
        // port: "",
        // pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "i.seadn.io",
        // port: "",
        // pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "openseauserdata.com",
      },
    ],
  },
};

module.exports = nextConfig;
