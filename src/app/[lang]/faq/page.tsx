import { getAllFaqOnePagerQuery } from '@/app/queries/getAllFaqOnePagerQuery';
import { getAllFaqSinglesQuery } from '@/app/queries/getAllFaqSingles';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import Script from 'next/script';
import dynamic from 'next/dynamic';
const LazyContent = dynamic(() => import('./PageContent'));
// generateMetadata za meta tagove
export async function generateMetadata({ params: { lang } }: { params: { lang: string } }) {
  return {
    title: `FAQ - ${lang.toUpperCase()}`,
    description: 'Frequently Asked Questions',
  };
}

export default async function FaqPage({ params: { lang } }: { params: { lang: string } }) {
  // Fetch podaci za FAQ OnePager
  const getAllFaqOnePager = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllFaqOnePagerQuery(lang),
    }),
  });

  const parseDataFaqOnePager = await getAllFaqOnePager.json();
  const faqOnePagerDataArrayShorthand = parseDataFaqOnePager.data.allfaqOnePager.edges;

  // Fetch podaci za FAQ pojedinačne
  const getAllFaqSingles = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllFaqSinglesQuery(lang),
    }),
  });

  const getAllFaqSingle = await getAllFaqSingles.json();
  const faqSingleDataArrayShorthand = getAllFaqSingle?.data?.allFAQPojedinacno?.edges || [];

  const l = getSuffixFromLang(lang);

  const faqItems = faqSingleDataArrayShorthand.map((faq: any) => ({
    '@type': 'Question',
    name: faq.node[`faqPojedinacnoDodavanje${l}`]?.[`pitanjeFaq${l}`],
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.node[`faqPojedinacnoDodavanje${l}`]?.[`odgovorFaq${l}`],
    },
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems,
  };

  return (
    <main className='min-h-screen w-full'>
      <LazyContent
        pageContent={faqOnePagerDataArrayShorthand}
        lang={lang}
        singlePageCont={faqSingleDataArrayShorthand}
      />

      <Script id='faq-schema' type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
