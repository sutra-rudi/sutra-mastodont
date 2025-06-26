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
      <h2 className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode text-center'>
        {findGeneralTranslation('Naši partneri', currentLang, generalTranslations)}
      </h2>
      <Marquee
        pauseOnHover
        pauseOnClick
        gradient
        className='lg:-mt--desktop---2xl md:-mt--tablet---2xl -mt--mobile---2xl'
      >
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
                  className='block aspect-auto object-center object-cover z-0 pointer-events-none select-none w-full max-w-[300px] lg:h-[145px] h-[110px]'
                  decoding='async'
                  width={300}
                  height={145}
                />
              </picture>
            </a>
          );
        })}
      </Marquee>
    </section>
  );
}
