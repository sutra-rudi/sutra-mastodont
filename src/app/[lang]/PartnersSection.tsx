'use client';

import Link from 'next/link';
import React from 'react';
interface PartnersSectionInterface {
  pageContent: any;
}
const PartnersSection = ({ pageContent }: PartnersSectionInterface) => {
  console.log('PAGI CONT', pageContent);
  return (
    <section>
      <h2 className='w-full text-center text-7xl font-semibold pt-8'>Partneri</h2>
      <div className='max-w-[1225px] mx-auto my-8 '>
        <div className='flex items-center justify-center gap-6'>
          {pageContent.map((cont: any) => {
            const imageSourcesShorthand = cont.node.logotipiPartnera.logoPNG.node;
            return (
              cont.node.logotipiPartnera.prikaziNaNaslovnici && (
                <Link
                  key={cont.node.id}
                  className='block'
                  href={cont.node.logotipiPartnera.linkNaStranicuKlijentapartnera}
                >
                  <picture>
                    <source srcSet={imageSourcesShorthand.srcSet} sizes={imageSourcesShorthand.sizes} />
                    <img src={imageSourcesShorthand.sourceUrl} alt='partner logo image' />
                  </picture>
                </Link>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
