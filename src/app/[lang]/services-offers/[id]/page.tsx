import { getSingleServicesOfferQuery } from '@/app/queries/getSingleUslugeQuery';
import PageContent from './PageContent';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import Script from 'next/script';

function generateServiceSchemaOrg(serviceData: any, lang: string) {
  const l = getSuffixFromLang(lang);

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name:
      serviceData[`modulBazeTekstova2Kolumne${l}`]?.[`naslovNadnaslov2KolumneTeksta${l}`]?.naslovIPodnaslovDvaPolja
        ?.title ?? 'Nema naziva',
    description:
      serviceData[`modulBazeTekstova2Kolumne${l}`]?.[`naslovNadnaslov2KolumneTeksta${l}`]?.naslovIPodnaslovDvaPolja
        ?.description ?? 'Nema opisa',
    image: serviceData.modulBazeTekstovaUvod.slika1 ?? '',
    additionalType: 'https://schema.org/Service',
    serviceType: serviceData[`tags${l}`]?.[`tagText${l}`] ?? 'Nema vrste usluge',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'HRK', // Zamijeni s valutom ako je potrebno
      price: '0.00', // Zamijeni s cijenom ako je dostupna
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
      <PageContent
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
