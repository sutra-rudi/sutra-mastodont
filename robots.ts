import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap:
      'https://sutra-mastodont.vercel.app/hr/sitemap.xml' ||
      'https://sutra-mastodont.vercel.app/eng/sitemap.xml' ||
      'https://sutra-mastodont.vercel.app/ger/sitemap.xml' ||
      'https://sutra-mastodont.vercel.app/ita/sitemap.xml',
  };
}
