import { UserLanguage } from '@/app/enums/LangEnum';
import Breadcrumbs from '@/app/globalComponents/Breadcrumbs';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { getSinglePortfolio } from '@/app/queries/dynamicQueries/getAllPortfolioCaseStudy';
import { fetchData } from '@/app/utils/callApi';
// import { fetchMediaPaths } from '@/app/utils/callMediaPaths';
import React from 'react';
import parse from 'html-react-parser';
import ClientGallery from './ClientGallery';

export default async function PortfolioPageSingle({
  params: { lang, slug },
}: {
  params: { lang: string; slug: string };
}) {
  const l = getSuffixFromLang(lang);

  const callApi = await fetchData(getSinglePortfolio(slug));

  console.log('CALL', callApi);

  // const MP = await fetchMediaPaths();

  // const { heroImagesCaseStudy } = MP;

  const dShort = callApi.data.portfolioCaseStudyAgency;

  return (
    <main className='relative w-full dark:bg-primarna-tamna min-h-screen bg-white z-40  block lg:-pb--desktop---5xl md:-pb--tablet---5xl -pb--mobile---5xl '>
      <picture className='-mt--desktop---4xl relative block'>
        <img
          src={dShort.caseStudyUvod.glavnaSlikaCaseStudy.node.sourceUrl}
          alt=''
          // alt={data.naslovnaSlika.glavnaSlikaNaslovnaSlika.node.altText}
          // aria-details={data.naslovnaSlika.glavnaSlikaNaslovnaSlika.node.description}
          className='object-cover object-center block lg:h-[500px] md:h-[400px] h-[250px] w-full -motion-translate-y-in-25 motion-ease-spring-smooth max-w-[1920px] mx-auto '
        />
      </picture>
      <div className='container px-4 mx-auto flex items-center justify-start -mt--desktop---2xl'>
        <Breadcrumbs />
      </div>

      <section className='container px-4 mx-auto'>
        <div className='flex items-start justify-start gap-1 '>
          <p className='font-bold text-heading-color-light-mode'>Godina:</p>
          <span className='text-text-light-mode'>{dShort.caseStudyUvod.godinaCaseStudy}</span>
        </div>
        <div className='flex items-start justify-start gap-1 '>
          <p className='font-bold text-heading-color-light-mode'>Kategorija/e:</p>
          <div className='flex items-start justify-start gap-1 text-text-light-mode'>
            {dShort.caseStudyUvod.izbornikKategorijeCheckbox.edges.map((c: any) => {
              return (
                <span
                  key={
                    //@ts-ignore
                    c.node.informacijeKategorije.prijevodi[`imeKategorije${l}`]
                  }
                >
                  {
                    //@ts-ignore
                    c.node.informacijeKategorije.prijevodi[`imeKategorije${l}`]
                  }
                </span>
              );
            })}
          </div>
        </div>
        <div className='flex items-start justify-start gap-1 flex-wrap '>
          <p className='font-bold text-heading-color-light-mode'>Oznaka/e:</p>
          <div className='flex items-start justify-start gap-1 flex-wrap text-text-light-mode'>
            {dShort.caseStudyUvod.izbornikOznakaCheckbox.edges.map((o: any) => {
              return (
                <span
                  key={
                    lang === UserLanguage.hr
                      ? o.node.tags.prijevodiTagova.hrvatskiPrijevod
                      : lang === UserLanguage.eng
                      ? o.node.tags.prijevodiTagova.engleskiPrijevod
                      : lang === UserLanguage.ger
                      ? o.node.tags.prijevodiTagova.njemackiPrijevod
                      : lang === UserLanguage.ita
                      ? o.node.tags.prijevodiTagova.talijanskiPrijevod
                      : lang === UserLanguage.fra
                      ? o.node.tags.prijevodiTagova.francuskiPrijevod
                      : o.node.name
                  }
                >
                  #
                  {lang === UserLanguage.hr
                    ? o.node.tags.prijevodiTagova.hrvatskiPrijevod
                    : lang === UserLanguage.eng
                    ? o.node.tags.prijevodiTagova.engleskiPrijevod
                    : lang === UserLanguage.ger
                    ? o.node.tags.prijevodiTagova.njemackiPrijevod
                    : lang === UserLanguage.ita
                    ? o.node.tags.prijevodiTagova.talijanskiPrijevod
                    : lang === UserLanguage.fra
                    ? o.node.tags.prijevodiTagova.francuskiPrijevod
                    : o.node.name}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className='container mx-auto px-4 '>
        <h2 className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode  block relative w-full motion-ease-spring-bouncy group-hover:motion-preset-slide-up motion-delay-200 xl:mt-xl-slika-sadrzaj lg:mt-desktop-slika-sadrzaj md:mt-tablet-slika-sadrzaj mt-mobile-slika-sadrzaj'>
          {dShort.caseStudyUvod.imeKlijentaCaseStudy}
        </h2>

        <section
          id='project_description'
          className='xl:mt-xl-slika-sadrzaj lg:mt-desktop-slika-sadrzaj md:mt-tablet-slika-sadrzaj mt-mobile-slika-sadrzaj'
        >
          <h4 className='lg:text-h4-desktop md:text-h4-tablet text-h4-mobile lg:mb-desktop-tekst-naslov md:mb-tablet-tekst-naslov mb-mobile-tekst-naslov text-heading-color-light-mode'>
            {dShort[`agencijaSadrzaj${l}`]?.[`sadrzaj${l}`].opisProjekta.opisProjektaIIzazoviNaslov}
          </h4>

          <div className='lg:prose-lg prose text-text-light-mode'>
            {
              //@ts-ignore
              parse(dShort[`agencijaSadrzaj${l}`]?.[`sadrzaj${l}`].opisProjekta.opisProjektaIIzazoviSadrzaj)
            }
          </div>
        </section>

        <section id='solution' className='lg:-mt--desktop---2xl md:-mt--tablet---2xl -mt--mobile---2xl'>
          <h4 className='lg:text-h4-desktop md:text-h4-tablet text-h4-mobile lg:mb-desktop-tekst-naslov md:mb-tablet-tekst-naslov mb-mobile-tekst-naslov text-heading-color-light-mode'>
            {dShort[`agencijaSadrzaj${l}`]?.[`sadrzaj${l}`].rjesenje.rjesenjeNaslov}
          </h4>

          <div className='lg:prose-lg prose text-text-light-mode'>
            {
              //@ts-ignore
              parse(dShort[`agencijaSadrzaj${l}`]?.[`sadrzaj${l}`].rjesenje.rjesenjeSadrzaj)
            }
          </div>
        </section>

        <section id='gallery' className='lg:-mt--desktop---3xl md:-mt--tablet---3xl -mt--mobile---3xl'>
          <ClientGallery
            gallery={Object.values(dShort.photoGallery.fotogalerija).filter((val) => val)}
            currentLang={lang}
          />
        </section>

        <div
          id='section-break'
          className='w-full max-w-prose bg-primarna-tamna h-px block relative -my--desktop---2xl'
        ></div>

        <section id='client_info' className='w-full'>
          <h4 className='lg:text-h4-desktop md:text-h4-tablet text-h4-mobile lg:mb-desktop-tekst-naslov md:mb-tablet-tekst-naslov mb-mobile-tekst-naslov text-heading-color-light-mode'>
            {
              //@ts-ignore
              dShort[`agencijaSadrzaj${l}`]?.[`sadrzaj${l}`].oKlijentu.oKlijentuNaslov
            }
          </h4>
          <div className='lg:prose-lg prose text-text-light-mode'>
            {
              //@ts-ignore
              parse(dShort[`agencijaSadrzaj${l}`]?.[`sadrzaj${l}`].oKlijentu.oKlijentuSadrzaj)
            }
          </div>
        </section>
      </section>
    </main>
  );
}
