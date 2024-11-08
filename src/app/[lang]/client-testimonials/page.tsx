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
      <h2 className='w-full text-center xl:text-h2-xl lg:text-h2-desktop md:text-h2-tablet text-h2-mobile font-semibold pt-8 text-primarna-tamna dark:text-primarna-svijetla py-8'>
        Verzija jedan
      </h2>
      <div className='w-ful flex justify-center gap-8'>
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
      </div>

      <h2 className='w-full text-center xl:text-h2-xl lg:text-h2-desktop md:text-h2-tablet text-h2-mobile font-semibold pt-8 text-primarna-tamna dark:text-primarna-svijetla py-8'>
        Verzija dva
      </h2>
      <div className='w-full grid grid-cols-1 gap-8'>
        {prepareDataForClient &&
          prepareDataForClient.map((singleExp: any) => {
            const introContShort = singleExp.introContent;
            return (
              <article key={singleExp.id} className='shrink-0 max-w-[1180px] flex items-center  mx-auto '>
                <div className='xl:-pl--xl---3xl lg:-pl--desktop---3xl md:-pl--tablet---3xl -pl--mobile---3xl xl:-pr--xl---xl lg:-pr--desktop---xl md:-pr--tablet---xl -pr--mobile---xl'>
                  <Image
                    src={QUOTE_ICON}
                    alt='quote icon'
                    width={38}
                    height={38}
                    className='xl:-my--xl---xs lg:-my--desktop---xs md:-my--tablet---xs -my--mobile---xs'
                  />
                  <div
                    className={`lg:text-text-base-l-desktop text-text-base-l-mobiletablet text-almost-black max-w-[488px]`}
                  >
                    {parse(singleExp.mainContent.clientContent)}
                  </div>
                  <div className='flex w-full items-center justify-between mt-5'>
                    <div className='w-full max-w-[263px] h-[3px] bg-divider-lightmode dark:bg-divider-darkmode'></div>
                    <div className='w-full max-w-[172px]'>
                      <p className='lg:text-all-caps-large md:text-all-caps-medium text-all-caps-small uppercase'>
                        {introContShort.imeKlijentaTestimonials}
                      </p>
                      <p className='md:text-text-base-small-desktop text-text-base-small-mobiletablet'>
                        {singleExp.mainContent.clientPosition}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='h-full w-full relative max-w-[535px]'>
                  <Image
                    src={introContShort.logotipIliSlikaOsobe.node.sourceUrl}
                    alt='Logo ili slika osobe'
                    width={535}
                    height={604}
                    className='object-cover object-center block w-full h-full'
                  />
                </div>
              </article>
            );
          })}
      </div>

      <h2 className='w-full text-center xl:text-h2-xl lg:text-h2-desktop md:text-h2-tablet text-h2-mobile font-semibold pt-8 text-primarna-tamna dark:text-primarna-svijetla py-8'>
        Verzija tri
      </h2>
      <div className='w-full flex flex-wrap items-center justify-center gap-8'>
        {prepareDataForClient &&
          prepareDataForClient.map((singleExp: any) => {
            const introContShort = singleExp.introContent;
            return (
              <article key={singleExp.id} className='shrink-0 max-w-[492px] w-full'>
                <div className='w-full relative max-w-[492px] h-[286px]'>
                  <Image
                    src={introContShort.logotipIliSlikaOsobe.node.sourceUrl}
                    alt='Logo ili slika osobe'
                    fill
                    className='object-cover object-center block w-full h-full'
                  />
                </div>

                <div className='flex justify-between items-center xl:-py--xl---m lg:-py--desktop---m md:-py--tablet---m -py--mobile---m'>
                  <p className='xl:text-all-caps-xl lg:text-all-caps-large md:text-all-caps-medium text-all-caps-small uppercase'>
                    {introContShort.imeKlijentaTestimonials}
                  </p>
                  <p className='xl:text-text-base-small-xl lg:text-text-base-small-desktop text-text-base-small-mobiletablet text-gray-light'>
                    {singleExp.mainContent.clientPosition}
                  </p>
                </div>

                <div className='lg:text-text-base-l-desktop text-text-base-l-mobiletablet xl:-pb--xl---m lg:-pb--desktop---m md:-pb--tablet---m -pb--mobile---m'>
                  {parse(singleExp.mainContent.clientContent)}
                </div>

                <div className='text-text-base-small-mobiletablet flex items-start justify-start flex-col xl:-gap--xl---micro lg:-gap--desktop---micro md:-gap--tablet---micro -gap--mobile---micro'>
                  <span>{introContShort.ocijenaIliBrojZvjezdicaTestimonials}</span>
                  <span>{introContShort.izvorRecenzije}</span>
                </div>
              </article>
            );
          })}
      </div>

      <h2 className='w-full text-center xl:text-h2-xl lg:text-h2-desktop md:text-h2-tablet text-h2-mobile font-semibold pt-8 text-primarna-tamna dark:text-primarna-svijetla py-8'>
        Verzija četiri
      </h2>

      <div className='w-full flex flex-wrap items-center justify-center gap-8'>
        {prepareDataForClient &&
          prepareDataForClient.map((singleExp: any) => {
            const introContShort = singleExp.introContent;
            return (
              <article
                key={singleExp.id}
                className='shrink-0  flex xl:-gap--xl---xl lg:-gap--desktop---xl md:-gap--tablet---xl -gap--mobile---xl bg-almost-white xl:-px--xl---s lg:-px--desktop---s md:-px--tablet---s -px--mobile---s'
              >
                <Image
                  src={introContShort.logotipIliSlikaOsobe.node.sourceUrl}
                  alt='Logo ili slika osobe'
                  width={185}
                  height={185}
                  className='object-cover object-center block rounded-full w-[185px] h-[185px] shrink-0 my-4'
                />

                <div className='max-w-[420px]'>
                  <Image
                    src={QUOTE_ICON}
                    alt='Quote icon'
                    width={24}
                    height={24}
                    className='object-cover object-center block shrink-0 w-6 h-6'
                  />
                  <div className='xl:-py--xl---xs lg:-py--desktop---xs md:-py--tablet---xs -py--mobile---xs'>
                    <div className='lg:text-text-base-l-desktop text-text-base-l-mobiletablet '>
                      {parse(singleExp.mainContent.clientContent)}
                    </div>

                    <div className='flex items-center justify-between'>
                      <div className='w-full max-w-[230px] h-[3px] bg-divider-lightmode dark:bg-divider-darkmode'></div>

                      <div className='flex flex-col justify-start items-start'>
                        <p className='lg:text-all-caps-large md:text-all-caps-medium text-all-caps-small  uppercase'>
                          {introContShort.imeKlijentaTestimonials}
                        </p>
                        <p className='lg:text-text-base-small-desktop text-text-base-small-mobiletablet'>
                          {singleExp.mainContent.clientPosition}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
      </div>
    </main>
  );
}
