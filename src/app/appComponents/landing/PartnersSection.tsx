import { findGeneralTranslation } from '@/app/langUtils/findGeneralTranslation';
import { generalTranslations } from '@/app/lib/generalTranslations';
import dataset from '../../staticData/staticQueryData.json';
import Marquee from 'react-fast-marquee';

const fP = dataset.data.allBazaLogotipaKlijenata.edges;
interface PartnersSection {
  currentLang: string;
}

export default function PartnersSection({ currentLang }: PartnersSection) {
  return (
    <section className='max-w-[1140px] mx-auto overflow-hidden w-full h-full lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl'>
      <h2 className='text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px] w-full text-center lg:mb-20 mb-[60px]'>
        {findGeneralTranslation('Naši partneri', currentLang, generalTranslations)}
      </h2>
      <Marquee pauseOnHover pauseOnClick gradient>
        {fP.concat(fP).map((p, i) => {
          return (
            <a
              key={`${p.node.id} - ${i}`}
              target='_blank'
              rel='noopener noreferrer'
              href={p.node.logotipiPartnera.linkNaStranicuKlijentapartnera}
              className='block mx-4 relative group '
            >
              <span className='absolute inset-0 w-full h-full lg:text-h4-desktop md:text-h4-tablet text-h4-mobile font-medium z-10 bg-almost-black/25 hidden group-hover:flex items-center justify-center text-almost-white uppercase text-center  group-hover:motion-preset-fade motion-ease-spring-smooth'>
                {p.node.logotipiPartnera.naziv}
              </span>
              <picture>
                <img
                  src={p.node.logotipiPartnera.logoPNG.node.sourceUrl}
                  alt={`Company logo - ${p.node.logotipiPartnera.naziv}`}
                  className='block aspect-auto object-center object-cover z-0 pointer-events-none select-none w-full max-w-[300px] lg:max-h-[290px] max-h-[223px]'
                  decoding='async'
                  width={300}
                  height={290}
                  loading='lazy'
                />
              </picture>
            </a>
          );
        })}
      </Marquee>
    </section>
  );
}
