/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i3.ytimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'p16-sign-va.tiktokcdn.com',
        pathname: '/obj/tos-useast2a-p-0037-aiso/**',
      },
        {
        protocol: "https",
        hostname: "p16-sign-va.tiktokcdn.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

