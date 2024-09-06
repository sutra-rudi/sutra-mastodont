import dayjs from 'dayjs';
import Image from 'next/image';
import parse from 'html-react-parser';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { SutraButtonBase } from '@/app/components/SutraButton';

interface ObavijestiNaStraniciInterface {
  pageContent: any;
  lang: any;
}
const PageContent = ({ pageContent, lang }: ObavijestiNaStraniciInterface) => {
  const l = getSuffixFromLang(lang);

  return (
    <section>
      <div className='max-w-[1225px] mx-auto my-8'>
        <h2 className='w-full text-center text-7xl font-semibold pt-8'>Obavijesti</h2>

        <div className='py-4'>
          {pageContent.map((cont: any) => {
            const sh = cont.node.obavijestiInterventne;

            const sht = cont.node[`text${l}`];

            return (
              <div
                key={cont.node.id}
                id='default-modal'
                tabIndex={-1}
                // aria-hidden='true'
                className='overflow-y-auto overflow-x-hidden  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'
              >
                <div className='relative p-4 w-full max-w-2xl max-h-full'>
                  <div className='relative bg-almost-white rounded-lg shadow dark:bg-almost-black'>
                    <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
                      <h3 className='text-xl font-semibold text-almost-black dark:text-almost-white'>
                        {sht[`naslov${l}`] ?? 'Nema naslova'}
                      </h3>
                      <span className='text-almost-black dark:text-almost-white'>
                        {dayjs(sh.datumIVrijemeObjave).format('DD.MM.YYYY') +
                          '-' +
                          dayjs(sh.datumIVrijemeKrajaObjave).format('DD.MM.YYYY')}
                      </span>
                      <button
                        type='button'
                        className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8  inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                        data-modal-hide='default-modal'
                      >
                        <svg
                          className='w-3 h-3'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 14 14'
                        >
                          <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                          />
                        </svg>
                        <span className='sr-only'>Close modal</span>
                      </button>
                    </div>

                    <div className='prose p-6 text-almost-black dark:text-almost-white'>
                      {sht[`sadrzajText${l}`] ? parse(sht[`sadrzajText${l}`]) : 'Nema sadržaja'}
                      <p
                        className={``}
                        style={{
                          color: sh.odabirAkcijskeBoje,
                        }}
                      >
                        BOJA
                      </p>

                      <Image
                        src={
                          sh.obavijestiPngSlikaIliIkona
                            ? sh.obavijestiPngSlikaIliIkona.node.sourceUrl
                            : 'https://placehold.co/400.png'
                        }
                        width={300}
                        height={300}
                        alt='some imag'
                      />

                      <a href={sh.linkNaKojiVodiObavijestOpcionalno ?? '/'}>
                        {sh.linkNaKojiVodiObavijestOpcionalno ?? 'Nema linka'}
                      </a>
                    </div>

                    <div className='flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600'>
                      <SutraButtonBase innerText='Okay' size='normal' />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PageContent;
