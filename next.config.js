const nextConfig = {
  distDir: ".next",
  env: {},
  experimental: {},
  future: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.storyblok.com",
        port: ""
      }
    ],
    domains: ["https://www.publishersweekly.com"]
  },
  trailingSlash: true
};

module.exports = nextConfig;
