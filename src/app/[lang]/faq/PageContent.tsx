import React from 'react';
interface OnePageFaqSectionInterface {
  pageContent: any;
  lang: any;
}
import parse from 'html-react-parser';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
const PageContent = ({ pageContent, lang }: OnePageFaqSectionInterface) => {
  const l = getSuffixFromLang(lang);
  return (
    <section>
      <h2 className='w-full text-center text-7xl font-semibold pt-8'>FAQ One pager</h2>

      <div className='max-w-[1225px] mx-auto my-8 flex flex-wrap gap-4 place-items-center justify-center'>
        {pageContent.map((pagContent: any) => {
          const pageContentShorthand = pagContent.node[`text${l}`];

          return (
            <div className='prose' key={pagContent.id}>
              <h3 className='text-center text-4xl font-semibold'>{pageContentShorthand[`naslov${l}`]}</h3>
              {parse(pageContentShorthand?.[`sadrzajText${l}`])}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PageContent;
