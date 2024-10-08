import { getSingleServicesOfferQuery } from '@/app/queries/getSingleUslugeQuery';

import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import Script from 'next/script';
import dynamic from 'next/dynamic';
const LazyContent = dynamic(() => import('./PageContent'));
function generateServiceSchemaOrg(serviceData: any, lang: string) {
  const l = getSuffixFromLang(lang);

  const name =
    serviceData[`modulBazeTekstova2Kolumne${l}`]?.[`naslovNadnaslov2KolumneTeksta${l}`]?.naslovIPodnaslovDvaPolja
      ?.title ?? 'Nema naziva';
  const description =
    serviceData[`modulBazeTekstova2Kolumne${l}`]?.[`naslovNadnaslov2KolumneTeksta${l}`]?.naslovIPodnaslovDvaPolja
      ?.description ?? 'Nema opisa';
  const imageUrl = serviceData.modulBazeTekstovaUvod.slika1.node.sourceUrl ?? '';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: name,
    description: description,
    image: imageUrl, // Ako koristite samo URL, ovo je ispravno
    additionalType: 'https://schema.org/Service',
    serviceType: serviceData[`tags${l}`]?.[`tagText${l}`] ?? 'Nema vrste usluge',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'HRK',
      price: '0.00',
    },
  };
}

export default async function SingleServiceOfferPage({
  params: { lang, id },
}: {
  params: { lang: string; id: string };
}) {
  const getIdFromSlug = (slug: string): string => {
    const parts = slug.split('-');
    return parts.pop() || '';
  };

  const slugId = getIdFromSlug(id);

  const getSingleService = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getSingleServicesOfferQuery(slugId, lang),
    }),
    // cache: 'no-cache',
  });

  const parseData = await getSingleService.json();

  const prepareDataForClient = parseData.data.usluge;

  const prepareIntroText =
    prepareDataForClient[`modulBazeTekstova2Kolumne${getSuffixFromLang(lang)}`]?.[
      `naslovNadnaslov2KolumneTeksta${getSuffixFromLang(lang)}`
    ].naslovIPodnaslovDvaPolja;

  const prepareIntroImages = {
    imageOne: prepareDataForClient.modulBazeTekstovaUvod.slika1,
    imageTwo: prepareDataForClient.modulBazeTekstovaUvod.slika2,
  };

  const prepareGallery = Object.values(prepareDataForClient.photoGallery.fotogalerija);

  const prepareTags = prepareDataForClient[`tags${getSuffixFromLang(lang)}`]?.[`tagText${getSuffixFromLang(lang)}`];

  const prepareAttributes =
    prepareDataForClient[`skupinaAtributa${getSuffixFromLang(lang)}`]?.[`atributiSkupina${getSuffixFromLang(lang)}`];

  const schemaOrgData = generateServiceSchemaOrg(prepareDataForClient, lang);

  return (
    <main>
      <LazyContent
        textContent={prepareIntroText}
        introImages={prepareIntroImages}
        gallery={prepareGallery}
        tags={prepareTags}
        attributes={prepareAttributes}
      />
      <Script
        id='schema-org-single-service'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
      />
      ;
    </main>
  );
}
