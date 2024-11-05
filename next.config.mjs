/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/[lang]/legal-info',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
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
};

export default nextConfig;
