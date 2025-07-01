import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import dataset from '../../staticData/staticQueryData.json';
import parse from 'html-react-parser';
import { fetchMediaPaths } from '@/app/utils/callMediaPaths';
import PhotoGalleryComponent from '@/app/appComponents/global/PhotoGallery';
import Client from './Client';
import { Suspense } from 'react';

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
  //   const hasP2 = contentField[`pasus2Tekst${l}`];
  //   const hasP3 = contentField[`pasus3Tekst${l}`];

  return (
    <main className='relative w-full dark:bg-primarna-tamna min-h-screen bg-white z-40'>
      <Suspense>
        <div className='relative -mt--desktop---4xl max-w-[1920px]'>
          <Client
            lang={lang}
            title={title}
            subTitle={subTitle}
            imgSrc={heroImg ? heroImg.node.sourceUrl : heroImagesDefault.desktop}
          />
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
      </Suspense>
    </main>
  );
}
