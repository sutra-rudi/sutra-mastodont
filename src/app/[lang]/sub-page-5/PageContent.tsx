import React from 'react';
import parse from 'html-react-parser';
interface SubPageFiveInterface {
  content: any;
}

const PageContent = ({ content }: SubPageFiveInterface) => {
  const prepContent = Object.values(content);

  return (
    <article className='mx-auto my-0 max-w-[1024px] py-8'>
      <div className=''>
        {prepContent.map((cont: any, index: number) => {
          return (
            <div className='' key={index}>
              <h2 className='text-6xl font-bold'>{cont.naslovHeroSekcija}</h2>
              <h3 className='text-2xl font-semibold'>{cont.heroSekcijaTekstIspodNaslova}</h3>
            </div>
          );
        })}
      </div>

      {prepContent.map((cont: any, index: number) => {
        const indAppend = index + 1;

        const contentToMap = `sadrzaj${indAppend}`;

        return (
          index !== 5 && (
            <div className='' key={index}>
              <div className='py-3'>
                <h2 className='font-bold'>{cont[`naslov${indAppend}`]}</h2>
                <h3 className='font-semibold'>{cont[`nadnaslovPodnaslov${indAppend}`]}</h3>
              </div>
              <div className=''>{parse(cont[contentToMap])}</div>
            </div>
          )
        );
      })}
    </article>
  );
};

export default PageContent;
