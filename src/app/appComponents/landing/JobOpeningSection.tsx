import { findGeneralTranslation } from '@/app/langUtils/findGeneralTranslation';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { generalTranslations } from '@/app/lib/generalTranslations';
import { slugifyOptions } from '@/app/pathsUtils/slugifyOptions';
import slugify from 'slugify';

interface JobOpeningSection {
  currentLang: string;
  dataset: any[];
}

export default function JobOpeningSection({ currentLang, dataset }: JobOpeningSection) {
  const l = getSuffixFromLang(currentLang);

  return (
    <section className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl px-4'>
      <h2 className='text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px] w-full text-center lg:mb-20 mb-[60px]'>
        {findGeneralTranslation('Oglasi za posao', currentLang, generalTranslations)}
      </h2>

      <div className='flex items-center justify-center gap-4 flex-wrap'>
        {dataset.map((og: any) => {
          const jTitle = og.node[`oglasiZaPosaoSadrzaj${l}`]?.naslov;
          const jDesc = og.node[`oglasiZaPosaoSadrzaj${l}`]?.kratkiUvod;
          const jPlace = og.node.oglasiUvod.mjestoRada;

          return (
            <a
              key={og.node.databaseId}
              href={`${currentLang}/job-listings/${slugify(jTitle + `-${og.node.databaseId}`, { ...slugifyOptions })}`}
            >
              <article className='bg-accent-boja/5 max-w-[350px] p-4 cursor-pointer'>
                <span className='block lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile lg:mb-desktop-naslov-nadnaslov md:mb-tablet-naslov-nadnaslov mb-mobile-naslov-nadnaslov'>{`${findGeneralTranslation(
                  'Mjesto rada',
                  currentLang,
                  generalTranslations
                )}: ${jPlace}`}</span>
                <h4 className='lg:text-h4-desktop md:text-h4-tablet text-h4-mobile lg:mb-desktop-tekst-naslov md:mb-tablet-tekst-naslov mb-mobile-tekst-naslov'>
                  {jTitle}
                </h4>
                <p className='md:text-text-base-base-desktop text-text-base-base-mobiletablet'>{jDesc}</p>

                <button
                  role='button'
                  className='rounded border border-almost-black lg:-mt--desktop---xl md:-mt--tablet---xl -mt--mobile---xl py-2 px-4'
                >
                  {findGeneralTranslation('Pogledaj oglas', currentLang, generalTranslations)}
                </button>
              </article>
            </a>
          );
        })}
      </div>

      <div className='w-full mx-auto max-w-[1440px] flex items-center justify-center lg:-mt--desktop---2xl md:-mt--tablet---2xl -mt--mobile---2xl'>
        <a
          href={`/${currentLang}/job-listings`}
          hrefLang={currentLang}
          className='block border border-accent-boja rounded px-4 py-2'
        >
          {findGeneralTranslation('Pogledaj sve oglase', currentLang, generalTranslations)}
        </a>
      </div>
    </section>
  );
}
