import { getSingleServicesOfferQuery } from '@/app/queries/getSingleUslugeQuery';
import PageContent from './PageContent';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';

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

  return (
    <main>
      <PageContent
        textContent={prepareIntroText}
        introImages={prepareIntroImages}
        gallery={prepareGallery}
        tags={prepareTags}
        attributes={prepareAttributes}
      />
    </main>
  );
}
