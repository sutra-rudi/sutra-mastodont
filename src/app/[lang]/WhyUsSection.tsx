import Image from 'next/image';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import parse from 'html-react-parser';

interface WhyUsSectionInterface {
  pageContent: any;
  lang: any;
}

const WhyUsSection = ({ pageContent, lang }: WhyUsSectionInterface) => {
  const l = getSuffixFromLang(lang);

  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='max-w-screen-md mb-8 lg:mb-16'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>Why us</h2>
          <p className='text-gray-500 sm:text-xl dark:text-gray-400'>
            Here at Sutra we focus on markets where technology, innovation, and capital can unlock long-term value and
            drive economic growth.
          </p>
        </div>
        <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
          {pageContent.map((cont: any) => {
            const shorthandTitle = cont.node[`text${l}`];

            const shorthandArguments = cont.node[`uvodArgumentiWhyChooseUsKeys`];

            return (
              <div key={cont.node.id}>
                <div className='relative w-full max-w-[200px] h-[200px]'>
                  <Image
                    src={
                      shorthandArguments.ikonaSlikaKeys.node.sourceUrl
                        ? shorthandArguments.ikonaSlikaKeys.node.sourceUrl
                        : 'https://placehold.co/400.png'
                    }
                    alt='some img'
                    fill
                  />
                </div>

                <h3 className='mb-2 text-xl font-bold dark:text-white'>
                  {typeof shorthandTitle !== 'undefined' ? shorthandTitle[`naslov${l}`] : 'Nema naslova'}
                </h3>

                {typeof shorthandTitle !== 'undefined' ? (
                  <div className='text-gray-500 dark:text-gray-400 prose'>
                    {parse(shorthandTitle[`sadrzajText${l}`])}
                  </div>
                ) : (
                  'Nema teksta'
                )}

                <div className='text-gray-500 dark:text-gray-400 flex justify-between gap-4'>
                  <span>broj: {shorthandArguments.brojKeys}</span>
                  <span>odabir boje: {shorthandArguments.odabirBojeKeysArgumenti}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className='-mx-4 flex flex-wrap p-8'>
          {pageContent.map((cont: any) => {
            const shorthandTitle = cont.node[`text${l}`];

            const shorthandArguments = cont.node[`uvodArgumentiWhyChooseUsKeys`];

            return (
              <div key={cont.node.id} className='w-full px-4 md:w-1/2 lg:w-1/3'>
                <div className='mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9'>
                  <div className='relative w-full max-w-[200px] h-[200px]'>
                    <Image
                      src={
                        shorthandArguments.ikonaSlikaKeys.node.sourceUrl
                          ? shorthandArguments.ikonaSlikaKeys.node.sourceUrl
                          : 'https://placehold.co/400.png'
                      }
                      alt='some img'
                      fill
                    />
                  </div>

                  <h3 className='mb-2 text-xl font-bold dark:text-white'>
                    {typeof shorthandTitle !== 'undefined' ? shorthandTitle[`naslov${l}`] : 'Nema naslova'}
                  </h3>

                  {typeof shorthandTitle !== 'undefined' ? (
                    <div className='text-gray-500 dark:text-gray-400 prose'>
                      {parse(shorthandTitle[`sadrzajText${l}`])}
                    </div>
                  ) : (
                    'Nema teksta'
                  )}

                  <div className='text-gray-500 dark:text-gray-400 flex justify-between gap-4'>
                    <span>broj: {shorthandArguments.brojKeys}</span>
                    <span>odabir boje: {shorthandArguments.odabirBojeKeysArgumenti}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className='max-w-4xl mx-auto px-5 mt-16'>
          <div className='text-center'>
            <h2 className='font-semibold text-3xl'>
              Here at Sutra we focus on markets where technology, innovation, and capital can unlock long-term value and
              drive economic growth.
            </h2>
          </div>

          <div className='grid md:grid-cols-2 gap-10 mt-10'>
            {pageContent.map((cont: any, index: number) => {
              const shorthandTitle = cont.node[`text${l}`];

              const shorthandArguments = cont.node[`uvodArgumentiWhyChooseUsKeys`];
              return (
                <div key={index} className='flex gap-4 items-start'>
                  <span className='text-violet-600 bg-violet-500/10 p-3 w-4 h-4 relative rounded-full'>
                    <Image
                      src={
                        shorthandArguments.ikonaSlikaKeys.node.sourceUrl
                          ? shorthandArguments.ikonaSlikaKeys.node.sourceUrl
                          : 'https://placehold.co/400.png'
                      }
                      alt='some img'
                      fill
                    />
                  </span>
                  <div>
                    <h3 className='font-semibold text-xl'>
                      {typeof shorthandTitle !== 'undefined' ? shorthandTitle[`naslov${l}`] : 'Nema naslova'}
                    </h3>
                    {typeof shorthandTitle !== 'undefined' ? (
                      <div className='text-gray-500 dark:text-gray-400 prose mt-1'>
                        {parse(shorthandTitle[`sadrzajText${l}`])}
                      </div>
                    ) : (
                      'Nema teksta'
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
