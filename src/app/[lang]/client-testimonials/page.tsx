import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { getAllIskustvaKlijenataQuery } from '@/app/queries/getAllIskustvaKlijenataQuery';
import { fetchData } from '@/app/utils/callApi';
import parse from 'html-react-parser';
import { Poltawski_Nowy } from 'next/font/google';
import Image from 'next/image';
import QUOTE_ICON from '../../imageMaterials/quote-icon.svg';

const POT = Poltawski_Nowy({ subsets: ['latin'], weight: '700' });

export default async function ClientTestimonials({ params: { lang } }: { params: { lang: string } }) {
  const testimonialsData = await fetchData(getAllIskustvaKlijenataQuery(lang));

  const prepareTestimonialsData = testimonialsData.error ? null : testimonialsData?.data?.allIskustvaKlijenata?.edges;

  const l = getSuffixFromLang(lang);

  const prepareDataForClient = prepareTestimonialsData
    ? prepareTestimonialsData.map((cont: any) => {
        return {
          id: cont.node.id,
          introContent: { ...cont.node.iskustvaklijenataUvod },
          mainContent: {
            clientPosition: cont.node[`testimonials${l}`]?.[`pozicijaUkolikoPostoji${l}`],
            clientContent: cont.node[`testimonials${l}`]?.[`tekstTestimoniala${l}`],
          },
        };
      })
    : null;

  console.log('TESTIMONIALS BASE', prepareDataForClient);

  return (
    <main>
      {prepareDataForClient &&
        prepareDataForClient.map((singleExp: any) => {
          const introContShort = singleExp.introContent;
          return (
            <article key={singleExp.id} className='w-full max-w-[534px] shrink-0'>
              <div className='xl:-pb--xl---m lg:-pb--desktop---m md:-pb--tablet---m -pb--mobile---m w-full flex items-center justify-center'>
                <div className=''>
                  <Image alt='quote icon' src={QUOTE_ICON} width={50} height={50} />
                </div>
              </div>

              <div
                className={`${POT.className} xl:text-h4-xl lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-almost-black text-center max-w-[534px] xl:-pt--xl---m lg:-pt--desktop---m md:-pt--tablet---m -pt--mobile---m xl:-pb--xl---s lg:-pb--desktop---s md:-pb--tablet---s -pb--mobile---s`}
              >
                {parse(singleExp.mainContent.clientContent)}
              </div>

              <div className='w-full flex items-center justify-center'>
                <div className='xl:-mt--xl---s lg:-mt--desktop---s md:-mt--tablet---s -mt--mobile---s flex items-center justify-start xl:-gap--xl---s lg:-gap--desktop---s md:-gap--tablet---s -gap--mobile---s'>
                  <div className='xl:w-[50px] lg:w-11 md:w-9 w-7 xl:h-[50px] lg:h-11 md:h-9 h-7 relative'>
                    <Image
                      src={introContShort.logotipIliSlikaOsobe.node.sourceUrl}
                      alt='Logo ili slika osobe'
                      fill
                      className='object-cover object-center rounded-full block'
                    />
                  </div>

                  <div className=''>
                    <p className='xl:text-all-caps-xl lg:text-all-caps-large md:text-all-caps-medium text-all-caps-small uppercase'>
                      {introContShort.imeKlijentaTestimonials}
                    </p>
                    <p className='xl:text-text-base-small-xl lg:text-text-base-small-desktop text-text-base-small-mobiletablet text-almost-black'>
                      {singleExp.mainContent.clientPosition}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
    </main>
  );
}
