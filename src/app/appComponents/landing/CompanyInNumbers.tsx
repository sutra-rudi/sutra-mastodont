'use client';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import CountUp from 'react-countup';

interface CompanyInNumbers {
  dataset: any;
  currentLang: string;
}

export default function CompanyInNumbers({ dataset, currentLang }: CompanyInNumbers) {
  const l = getSuffixFromLang(currentLang);

  return (
    <section className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl bg-accent-boja/5 w-full h-full py-16 px-4'>
      <div className='w-full mx-auto max-w-[1440px] flex items-start justify-center gap-16 flex-wrap'>
        {dataset.map((dataPoint: any) => {
          const num = dataPoint.node.brojcanikCompanyInNumbersUvod.brojcaniciUvod.broj;
          const sign = dataPoint.node.brojcanikCompanyInNumbersUvod.brojcaniciUvod.znakIliNatpisUzBroj;
          const txt = dataPoint.node[`metrics${l}`]?.[`companyInNumbers${l}`].tekstBrojcanikaGlavni;
          return (
            <div key={dataPoint.node.id} className='flex items-center justify-center gap-1 flex-col'>
              <div className='flex items-center justify-start gap-0 lg:text-h2-desktop md:text-h2-tablet text-h2-mobile'>
                <CountUp start={0} end={num} enableScrollSpy scrollSpyDelay={0} duration={4} />
                <p>{sign}</p>
              </div>

              <h4 className='max-w-[250px] text-center lg:text-h4-desktop md:text-h4-tablet text-h4-mobile'>{txt}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
}
