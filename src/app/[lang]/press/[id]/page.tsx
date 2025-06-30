import Breadcrumbs from '@/app/globalComponents/Breadcrumbs';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { getSinglePressMedia } from '@/app/queries/dynamicQueries/getAllPressMedia';
import { fetchData } from '@/app/utils/callApi';
import parse from 'html-react-parser';
export default async function PressMediaArticlePage({
  params: { lang, id },
}: {
  params: { lang: string; id: string };
}) {
  const l = getSuffixFromLang(lang);

  const call = await fetchData(getSinglePressMedia(id));
  const dataset = !call.error && typeof call.data !== 'undefined' ? call.data.pressMediaSekcija : null;

  const tt = dataset[`modulBazeTekstova${l}`]?.[`naslovBazaTekstova${l}`];
  const dsc = dataset[`modulBazeTekstova${l}`]?.[`tekstBazaTekstova${l}`];
  const stt = dataset[`modulBazeTekstova${l}`]?.[`nadnaslovPodnaslovBazaTekstova${l}`];
  const img = dataset.pressMediaSekcijaUvod.slikaPressObjave
    ? dataset.node.pressMediaSekcijaUvod.slikaPressObjave
    : 'https://mastodont-2.sutra-cms.com/Sutra-ftp/other/CMS_Image_Placeholder.jpg';

  return (
    <main className='w-full h-full relative block min-h-screen -mt--desktop---4xl'>
      <picture>
        <img
          src={img}
          alt='Press media article image'
          className='w-full  object-cover object-center block aspect-auto lg:h-[500px] md:h-[400px] h-[250px]'
        />
      </picture>

      <div className='container px-4 mx-auto flex items-center justify-start -mt--desktop---3xl'>
        <Breadcrumbs />
      </div>
      <div className='container mx-auto px-4'>
        <p className='lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-nadnaslov-color-light-mode dark:text-nadnaslov-color-light-mode mt-3 block relative motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>
          {stt}
        </p>
        <h1 className='lg:mt-desktop-naslov-nadnaslov md:mt-tablet-naslov-nadnaslov mt-mobile-naslov-nadnaslov lg:text-h1-desktop md:text-h1-tablet text-h1-mobile35 lg:mb-desktop-tekst-naslov md:mb-tablet-tekst-naslov mb-mobile-tekst-naslov w-full relative'>
          {tt}
        </h1>

        <section className='lg:prose-lg prose w-full lg:-mt--desktop-h1-2---naslov-tekst md:-mt--tablet-h1-2---naslov-tekst -mt--mobile-h1-2---naslov-tekst text-text-light-mode dark:text-text-dark-mode'>
          {parse(dsc)}
        </section>
      </div>
    </main>
  );
}
