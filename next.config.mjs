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
      {
        hostname: 'lavender-loris-843955.hostingersite.com',
      },
      {
        hostname: 'dodgerblue-elephant-122364.hostingersite.com',
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
