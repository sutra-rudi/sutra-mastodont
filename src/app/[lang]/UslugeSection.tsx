import React from 'react';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import slugify from 'slugify';
import { slugifyOptions } from '../pathsUtils/slugifyOptions';
import ServiceCard from '../components/ServiceCard';
interface UslugeSectionInterface {
  pageContent: any;
  lang: any;
}

const UslugeSection = ({ pageContent, lang }: UslugeSectionInterface) => {
  return (
    <section>
      <h2 className='w-full text-center text-7xl font-semibold pt-8'>Usluge</h2>

      <div className='max-w-[1225px] mx-auto my-8 flex flex-wrap gap-4 place-items-center justify-center'>
        {pageContent.map((content: any) => {
          const contentShorthand = content.node;

          const thumbImageShorthandObj = contentShorthand.modulBazeTekstovaUvod.slika1.node;

          const titleShorthandObj =
            contentShorthand[`modulBazeTekstova2Kolumne${getSuffixFromLang(lang)}`]?.[
              `naslovNadnaslov2KolumneTeksta${getSuffixFromLang(lang)}`
            ].naslovIPodnaslovDvaPolja;

          return (
            <ServiceCard
              url={`/${lang}/services-offers/${
                slugify(`${titleShorthandObj.naslovBazaTekstova ?? ''}`, slugifyOptions) + `-${contentShorthand.id}`
              }`}
              title={titleShorthandObj.naslovBazaTekstova}
              subtitle={titleShorthandObj.nadnaslovPodnaslovBazaTekstova}
              imgSource={thumbImageShorthandObj.sourceUrl}
              key={contentShorthand.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default UslugeSection;
