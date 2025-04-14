import { getAllONamaQuery } from '@/app/queries/getAllONamaQuery';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import dynamic from 'next/dynamic';
import dataset from '../../staticData/staticQueryData.json';
import parse from 'html-react-parser';
import { fetchMediaPaths } from '@/app/utils/callMediaPaths';
import PhotoGalleryComponent from '@/app/appComponents/global/PhotoGallery';

// export async function generateMetadata({ params: { lang } }: { params: { lang: string } }) {
//   const getAboutUs = await fetch(`${process.env.CMS_BASE_URL}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: getAllONamaQuery(lang),
//     }),
//   });

//   const parseData = await getAboutUs.json();

//   const prepareDataForClient = parseData.data.allONama.edges[0].node;

//   const l = getSuffixFromLang(lang);

//   const seoField = prepareDataForClient[`seo${l}`];

//   return {
//     title: prepareDataForClient[`oNamaSadrzaj${l}`]?.[`tekstoviPodstraniceONama${l}`].oNamaNaslovHeroSekcija,
//     description: seoField[`seoTekst${l}`],
//     keywords: seoField[`seoTagovi${l}`].split(', ').map((keyw: string) => keyw),
//   };
// }

//HERO IMAGES ABOUT US NA FPT NIJE ISPUNJEN PA KORISTIN DEFAULT HERO
export default async function AboutUsPage({ params: { lang } }: { params: { lang: string } }) {
  const l = getSuffixFromLang(lang);

  const MP = await fetchMediaPaths();

  const { heroImagesDefault } = MP;

  const aboutDataset = dataset.data.allONama.edges[0].node;

  const heroImg = aboutDataset.naslovnaSlika.glavnaSlikaNaslovnaSlika;
  //@ts-ignore
  const title = aboutDataset[`oNamaSadrzaj${l}`]?.[`tekstoviPodstraniceONama${l}`].oNamaNaslovHeroSekcija;
  //@ts-ignore
  const subTitle = aboutDataset[`oNamaSadrzaj${l}`]?.[`tekstoviPodstraniceONama${l}`].oNamaHeroSekcijaTekstIspodNaslova;

  //@ts-ignore
  const contentField = aboutDataset[`oNamaSadrzaj${l}`];

  const contentFieldText = contentField[`pasus1GrupaTekstova${l}`];

  const gallery = Object.values(aboutDataset.photoGallery.fotogalerija).filter((v) => v);
  const hasP2 = contentField[`pasus2Tekst${l}`];
  const hasP3 = contentField[`pasus3Tekst${l}`];

  return (
    <main className='w-full h-full min-h-screen relative'>
      <div className='relative'>
        <picture>
          <img
            src={heroImg ? heroImg.node.sourceUrl : heroImagesDefault.desktop}
            alt='Hero image for section "about us"'
            className='object-cover object-center block w-full h-auto aspect-auto max-h-[500px] brightness-75'
          />
        </picture>

        <div className='absolute inset-0 w-full h-full flex flex-col items-center justify-center text-almost-white'>
          <h2 className='mx-auto text-balance max-w-prose lg:text-h2-desktop md:text-h2-tablet text-h2-mobile lg:-mt--desktop---3xl md:-mt--tablet---3xl -mt--mobile---3xl text-center px-4'>
            {title}
          </h2>

          <h4 className='mx-auto text-balance max-w-prose lg:text-h4-desktop md:text-h4-tablet text-h4-mobile lg:mt-desktop-naslov-nadnaslov md:mt-tablet-naslov-nadnaslov mt-mobile-naslov-nadnaslov text-center px-4'>
            {subTitle}
          </h4>
        </div>
      </div>

      <article className='max-w-prose mx-auto px-4 lg:mt-desktop-slika-sadrzaj md:mt-tablet-slika-sadrzaj mt-mobile-slika-sadrzaj'>
        <p className='lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile'>
          {contentFieldText.oNamaNadnaslovPodnaslov1}
        </p>
        <h3 className='lg:text-h3-desktop md:text-h3-tablet text-h3-mobile lg:mb-desktop-naslov-nadnaslov md:mb-tablet-naslov-nadnaslov mb-mobile-naslov-nadnaslov'>
          {contentFieldText.oNamaNaslov1Pasus}
        </h3>

        <section className='lg:prose-lg prose'>{parse(contentFieldText.sadrzaj1)}</section>
      </article>

      <div className='w-full mx-auto max-w-[1440px] px-4 lg:-mt--desktop---3xl md:-mt--tablet---3xl -mt--mobile---3xl'>
        <PhotoGalleryComponent gallery={gallery} currentLang={lang} />
      </div>
    </main>
  );
}
