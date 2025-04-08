'use client';

// import BaseSVG from '@/app/components/generalMisc/BaseSVG';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import parse from 'html-react-parser';
interface ContentSectionSecond {
  reverse?: boolean;
  content: any;
  isList: boolean;
  currentLang: string;
  placeholderGallery: any[];
}

export default function ContentSectionFirst({
  reverse,
  content,
  isList,
  currentLang,
  placeholderGallery,
}: ContentSectionSecond) {
  const l = getSuffixFromLang(currentLang);
  const naslov = isList
    ? content[`lista${l}`]?.[`listaUvod${l}`].naslov
    : content[`modulBazeTekstova${l}`]?.[`naslovBazaTekstova${l}`];

  const nadNaslov = isList
    ? content[`lista${l}`]?.[`listaUvod${l}`].nadnaslovpodnaslovOpcionalno
    : content[`modulBazeTekstova${l}`]?.[`nadnaslovPodnaslovBazaTekstova${l}`];

  const sadrzaj = isList
    ? content[`lista${l}`]?.[`listaSadrzaj${l}`].split('\r\n')
    : content[`modulBazeTekstova${l}`]?.[`tekstBazaTekstova${l}`];

  const handleImages = () => {
    if (isList) {
      return Object.values(placeholderGallery);
    } else {
      const gal = Object.values(content.photoGallery.fotogalerija);
      if (gal.every((item) => item === null)) {
        return Object.values(placeholderGallery);
      } else return gal;
    }
  };
  // console.log('FOTOGALERIJA', handleImages());

  // const optionalIntroField = isList ? content[`lista${l}`]?.[`listaUvod${l}`].uvodnaRecenica : null;
  return (
    <section className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl overflow-hidden'>
      <div className='container mx-auto p-4'>
        <div className='flex flex-wrap items-center justify-between -mx-4'>
          <div className={`${reverse ? 'order-2' : 'order-1'} w-full px-4 lg:w-6/12`}>
            <div className='flex items-center -mx-3 sm:-mx-4'>
              <div className='w-full px-3 sm:px-4 xl:w-1/2'>
                <div className='py-3 sm:py-4'>
                  <picture>
                    <img src={handleImages()[0]} alt='' className='w-full rounded-2xl' />
                  </picture>
                </div>
                <div className='py-3 sm:py-4'>
                  <picture>
                    <img src={handleImages()[1]} alt='' className='w-full rounded-2xl' />
                  </picture>
                </div>
              </div>
              <div className='w-full px-3 sm:px-4 xl:w-1/2'>
                <div className='relative z-10 my-4'>
                  <picture>
                    <img src={handleImages()[2]} alt='' className='w-full rounded-2xl' />
                  </picture>
                  <span className='absolute -right-7 -bottom-7 z-[-1]'>{/* <BaseSVG /> */}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${reverse ? 'order-1' : 'order-2'} w-full px-4 lg:w-1/2 xl:w-5/12`}>
            <div className='mt-10 lg:mt-0'>
              {nadNaslov && <span className='block mb-4 text-lg font-semibold text-primary'>{nadNaslov}</span>}
              <h2 className='mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]'>{naslov}</h2>

              {!isList && <div className='lg:prose-lg prose'>{parse(sadrzaj)}</div>}
              {isList && (
                <div className='flex flex-col lg:-gap--desktop-liste-udaljenost-u-listama-small md:-gap--tablet-liste-udaljenost-u-listama-small -gap--mobile-liste-udaljenost-u-listama-small w-full max-w-[535px]'>
                  {sadrzaj.map((ld: any) => {
                    return (
                      <div
                        key={ld}
                        className='flex items-start justify-start lg:-gap--desktop---m md:-gap--tablet---m -gap--mobile---m'
                      >
                        <svg
                          width='18'
                          height='20'
                          viewBox='0 0 18 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='shrink-0'
                        >
                          <g filter='url(#filter0_d_9008_14772)'>
                            <g clipPath='url(#clip0_9008_14772)'>
                              <circle
                                cx='7.65574'
                                cy='8.66746'
                                r='6.33152'
                                fill='#22C55E'
                                stroke='#16A34A'
                                strokeWidth='1.25'
                              />
                            </g>
                          </g>
                          <path
                            d='M11.5465 5.89023C11.4926 5.83589 11.4285 5.79276 11.3578 5.76333C11.2872 5.7339 11.2114 5.71875 11.1349 5.71875C11.0583 5.71875 10.9826 5.7339 10.9119 5.76333C10.8413 5.79276 10.7772 5.83589 10.7233 5.89023L6.40444 10.2149L4.58995 8.39457C4.534 8.34052 4.46794 8.29802 4.39556 8.2695C4.32318 8.24097 4.24589 8.22699 4.16811 8.22833C4.09032 8.22968 4.01356 8.24633 3.94221 8.27734C3.87086 8.30835 3.80632 8.35311 3.75227 8.40907C3.69822 8.46502 3.65572 8.53108 3.62719 8.60345C3.59867 8.67583 3.58468 8.75312 3.58603 8.83091C3.58737 8.9087 3.60403 8.98545 3.63504 9.0568C3.66605 9.12815 3.71081 9.1927 3.76676 9.24675L5.99285 11.4728C6.04674 11.5272 6.11086 11.5703 6.1815 11.5997C6.25214 11.6292 6.32791 11.6443 6.40444 11.6443C6.48097 11.6443 6.55674 11.6292 6.62739 11.5997C6.69803 11.5703 6.76215 11.5272 6.81604 11.4728L11.5465 6.7424C11.6053 6.68812 11.6523 6.62223 11.6844 6.5489C11.7165 6.47556 11.7331 6.39637 11.7331 6.31631C11.7331 6.23626 11.7165 6.15706 11.6844 6.08373C11.6523 6.0104 11.6053 5.94451 11.5465 5.89023Z'
                            fill='white'
                          />
                          <defs>
                            <filter
                              id='filter0_d_9008_14772'
                              x='-1.80078'
                              y='0.460938'
                              width='18.9141'
                              height='18.9141'
                              filterUnits='userSpaceOnUse'
                              colorInterpolationFilters='sRGB'
                            >
                              <feFlood flood-opacity='0' result='BackgroundImageFix' />
                              <feColorMatrix
                                in='SourceAlpha'
                                type='matrix'
                                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                result='hardAlpha'
                              />
                              <feOffset dy='1.25' />
                              <feGaussianBlur stdDeviation='1.25' />
                              <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0' />
                              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_9008_14772' />
                              <feBlend
                                mode='normal'
                                in='SourceGraphic'
                                in2='effect1_dropShadow_9008_14772'
                                result='shape'
                              />
                            </filter>
                            <clipPath id='clip0_9008_14772'>
                              <rect x='0.699219' y='1.71094' width='13.913' height='13.913' rx='6.95652' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>

                        <p>{ld}</p>
                      </div>
                    );
                  })}
                </div>
              )}
              <a
                href='javascript:void(0)'
                className='lg:-mt--desktop---xl md:-mt--tablet---xl -mt--mobile---xl inline-flex items-center justify-center py-3 text-base font-medium text-center text-almost-black border border-accent-boja rounded-md px-7 bg-primary hover:bg-opacity-90'
              >
                NEKI CTA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
