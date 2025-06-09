'use client';

import Marquee from 'react-fast-marquee';

interface CaruselInterface {
  dataset: any[];
}

export default function BaseCaruselSection({ dataset }: CaruselInterface) {
  return (
    <section className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl'>
      <Marquee>
        {dataset.map((im) => (
          <picture key={im?.node.id}>
            <img
              src={im?.node.sourceUrl}
              alt={`Image - ${im?.node.id}`}
              width={300}
              height={290}
              loading='lazy'
              decoding='async'
              className='object-cover object-center block m-0 p-0 aspect-square w-full max-w-[300px] lg:max-h-[290px] max-h-[223px]'
            />
          </picture>
        ))}
      </Marquee>
    </section>
  );
}
