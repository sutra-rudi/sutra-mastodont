import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import dataset from '../../staticData/staticQueryData.json';
import parse from 'html-react-parser';
// import PhotoGalleryComponent from '../global/PhotoGallery';
const findAboutData = dataset.data.allONama.edges[0].node;
interface AboutUsSection {
  currentLang: string;
}

export default function AboutUsSection({ currentLang }: AboutUsSection) {
  const l = getSuffixFromLang(currentLang);
  const abd = //@ts-ignore
    findAboutData[`oNamaSadrzaj${l}`]?.[`skraceneVerzijeTekstaTekstaONama${l}`]
      ?.oNamaSkraceniTekstZaNaslovnicuIliFooter;

  // const galImg = Object.values(findAboutData.photoGallery.fotogalerija).filter((val) => val);
  const imgThumb = findAboutData.naslovnaSlika.sekundarnaGlavnaSlikaThumbnailHover;
  return (
    <section className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl w-full h-full'>
      <div className='mx-auto max-w-[1440px] w-full px-4 flex items-start justify-center gap-8 lg:flex-nowrap flex-wrap'>
        <div className='lg:max-w-prose'>
          <h2 className='text-left lg:text-h2-desktop md:text-h2-tablet text-h2-mobile lg:-mb--desktop-h1-2---naslov-tekst md:-mb--tablet-h1-2---naslov-tekst -mb--mobile-h1-2---naslov-tekst'>
            {/* @ts-ignore */}
            {findAboutData[`oNamaSadrzaj${l}`]?.[`tekstoviPodstraniceONama${l}`].oNamaNaslovHeroSekcija}
          </h2>

          <p className='italic lg:mt-desktop-naslov-nadnaslov md:mt-tablet-naslov-nadnaslov mt-mobile-naslov-nadnaslov lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile'>
            {/* @ts-ignore */}
            {findAboutData[`oNamaSadrzaj${l}`]?.[`tekstoviPodstraniceONama${l}`].oNamaHeroSekcijaTekstIspodNaslova}
          </p>
          <div className='lg:mt-desktop-tekst-naslov md:mt-tablet-tekst-naslov mt-mobile-tekst-naslov lg:prose-lg prose w-full'>
            {parse(abd)}
          </div>
        </div>

        <div className='max-w-[85ch] relative'>
          {/* <PhotoGalleryComponent gallery={galImg} currentLang={currentLang} /> */}
          <picture>
            <img
              src={imgThumb.node.sourceUrl}
              alt={`About us image - ${imgThumb.node.sourceUrl}`}
              className='object-cover object-center block aspect-auto w-full h-full'
              decoding='async'
              loading='lazy'
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
