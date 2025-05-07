/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cms.sutra.hr',
      },

      {
        hostname: 'placehold.co',
      },
    ],
  },
  // experimental: {
  //   optimizePackageImports: ['framer-motion'],
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/hr/blog/:slug',
  //       destination: '/',
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
