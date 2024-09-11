import { getAllFaqOnePagerQuery } from '@/app/queries/getAllFaqOnePagerQuery';
import PageContent from './PageContent';
import { getAllFaqSinglesQuery } from '@/app/queries/getAllFaqSingles';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';

export async function generateMetadata({ params: { lang } }: { params: { lang: string } }) {
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
  console.log('FAQ', faqSingleDataArrayShorthand);
  // Kreiranje JSON-LD (schema.org) podataka
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

  return {
    title: `FAQ - ${lang.toUpperCase()}`,
    description: 'Frequently Asked Questions',
    // Kreiranje JSON-LD unutar meta tagova
    other: {
      'application/ld+json': JSON.stringify(jsonLd),
    },
  };
}

export default async function FaqPage({ params: { lang } }: { params: { lang: string } }) {
  const getAllFaqOnePager = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllFaqOnePagerQuery(lang),
    }),
    // cache: 'no-cache',
  });

  const parseDataFaqOnePager = await getAllFaqOnePager.json();

  const faqOnePagerDataArrayShorthand = parseDataFaqOnePager.data.allfaqOnePager.edges;

  const getAllFaqSingles = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllFaqSinglesQuery(lang),
    }),
    // cache: 'no-cache',
  });

  const getAllFaqSingle = await getAllFaqSingles.json();

  const faqSingleDataArrayShorthand = getAllFaqSingle?.data?.allFAQPojedinacno?.edges || null;

  return (
    <main>
      <PageContent
        pageContent={faqOnePagerDataArrayShorthand}
        lang={lang}
        singlePageCont={faqSingleDataArrayShorthand}
      />
    </main>
  );
}
