import React from 'react';
interface SingleFaqSectionInterface {
  pageContent: any;
  lang: any;
}
const SingleFaqSection = ({ pageContent, lang }: SingleFaqSectionInterface) => {
  //   console.log('PAGE CONTENT', pageContent);
  const l = `${lang[0].toUpperCase() + lang.slice(1).toLowerCase()}`;
  return (
    <section>
      <h2 className='w-full text-center text-7xl font-semibold pt-8'>FAQ Pojedinacno</h2>
      <div className='max-w-[1225px] mx-auto my-8 flex flex-wrap gap-4 place-items-center justify-center'>
        {pageContent.map((pageCont: any) => {
          const contentShorthand = pageCont.node[`faqPojedinacnoDodavanje${l}`];

          return (
            <div key={pageCont.id} className=''>
              <h3>
                Pitanje: <span>{contentShorthand[`pitanjeFaq${l}`] ?? 'Nema pitanja'}</span>
              </h3>
              <h3>
                Odgovor: <span>{contentShorthand[`odgovorFaq${l}`] ?? 'Nema odgovora'}</span>
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SingleFaqSection;
