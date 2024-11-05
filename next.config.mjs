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
    ],
  },
  experimental: {
    revalidate: 31536000,
  },
};

export default nextConfig;
