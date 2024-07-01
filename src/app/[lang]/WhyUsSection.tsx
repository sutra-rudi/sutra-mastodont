import React from 'react';

import Image from 'next/image';

interface WhyUsSectionInterface {
  pageContent: any;
  lang: any;
}

const WhyUsSection = ({ pageContent, lang }: WhyUsSectionInterface) => {
  return (
    <section>
      <div className='max-w-[1225px] mx-auto my-8'>
        <h2 className='w-full text-center text-7xl font-semibold pt-8'>Why us</h2>

        <div className=''>
          {pageContent.map((cont: any) => {
            const shorthandTitle = cont.node[`text${lang}`];
            const shorthandArguments = cont.node[`uvodArgumentiWhyChooseUsKeys`];

            return (
              <article key={cont.node.id}>
                <h2>{typeof shorthandTitle !== 'undefined' ? shorthandTitle[`naslov${lang}`] : 'Nema naslova'}</h2>

                <p>{typeof shorthandTitle !== 'undefined' ? shorthandTitle[`sadrzajTekst${lang}`] : 'Nema teksta'}</p>

                <div className='relative w-full max-w-[200px] h-[200px]'>
                  <Image
                    src={
                      shorthandArguments.ikonaSlikaKeys.sourceUrl
                        ? shorthandArguments.ikonaSlikaKeys.sourceUrl
                        : 'https://placehold.co/400.png'
                    }
                    alt='some img'
                    fill
                  />
                </div>

                <div className=''>
                  <span>broj: {shorthandArguments.brojKeys}</span>
                  <span>odabir boje: {shorthandArguments.odabirBojeKeysArgumenti}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
