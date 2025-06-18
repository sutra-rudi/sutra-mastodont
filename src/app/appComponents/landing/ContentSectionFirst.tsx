'use client';

import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import parse from 'html-react-parser';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import slugify from 'slugify';
import { slugifyOptions } from '@/app/pathsUtils/slugifyOptions';
import React from 'react';
import { usePathname } from 'next/navigation';

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
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: '0px',
  });

  const currentPath = usePathname();

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

  function handleImages() {
    return Object.values(placeholderGallery).filter((g) => g);
  }

  const parseTitle = slugify(naslov, { ...slugifyOptions });

  React.useEffect(() => {
    const hash = `#${parseTitle}`;

    if (entry?.isIntersecting) {
      window.history.replaceState(null, '', `${currentPath}${hash}`);
    } else if (window.location.hash === hash) {
      window.history.replaceState(null, '', currentPath);
    }
  }, [entry, currentPath, parseTitle]);

  return (
    <section id={parseTitle} className='lg:-mt--desktop---section-l md:-mt--tablet---section-l -mt--mobile---section-l'>
      <div className='container mx-auto' ref={ref}>
        <div className='flex lg:flex-nowrap flex-wrap items-center justify-between lg:gap-8 md:gap-6 gap-8 w-full h-full'>
          <div className={`${reverse ? 'order-2' : 'order-1'} w-full h-full px-4 lg:w-6/12`}>
            <div className='flex items-center'>
              <div className='w-full xl:w-1/2'>
                <div className='py-2 sm:py-3'>
                  <picture>
                    <img
                      src={handleImages()[0]}
                      onError={() =>
                        "this.src = 'https://mastodont-2.sutra-cms.com/Sutra-ftp/other/CMS_Image_Placeholder.jpg'"
                      }
                      alt={`Article img - ${handleImages()[0]}`}
                      className='w-full rounded-2xl object-cover object-center block aspect-auto'
                    />
                  </picture>
                </div>
                <div className='py-2 sm:py-3'>
                  <picture>
                    <img
                      src={handleImages()[1]}
                      onError={() =>
                        "this.src = 'https://mastodont-2.sutra-cms.com/Sutra-ftp/other/CMS_Image_Placeholder.jpg'"
                      }
                      alt={`Article img - ${handleImages()[1]}`}
                      className='w-full rounded-2xl  object-cover object-center block aspect-auto'
                    />
                  </picture>
                </div>
              </div>
              <div className='w-full px-3 sm:px-4 xl:w-1/2'>
                <div className='relative z-10 my-4'>
                  <picture>
                    <img
                      src={handleImages()[2]}
                      onError={() =>
                        "this.src = 'https://mastodont-2.sutra-cms.com/Sutra-ftp/other/CMS_Image_Placeholder.jpg'"
                      }
                      alt={`Article img - ${handleImages()[2]}`}
                      className='w-full rounded-2xl  object-cover object-center block aspect-auto'
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${
              reverse ? 'order-1' : 'order-2'
            } w-full px-4 lg:w-1/2 xl:w-5/12 h-full flex flex-col relative`}
          >
            {nadNaslov && (
              <span className='block mb-4 lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-balance text-nadnaslov-color-light-mode dark:text-nadnaslov-color-dark-mode'>
                {nadNaslov}
              </span>
            )}
            <h2 className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile text-heading-color-light-mode dark:text-heading-color-light-mode lg:-mb--desktop-h1-2---naslov-tekst md:-mb--tablet-h1-2---naslov-tekst -mb--mobile-h1-2---naslov-tekst lg:-mt--desktop-h1-2---naslov-nadnaslov md:-mt--tablet-h1-2---naslov-nadnaslov -mt--mobile-h1-2---naslov-nadnaslov block relative'>
              {naslov}
            </h2>

            {!isList && sadrzaj && <div className='lg:prose-lg prose'>{parse(sadrzaj)}</div>}
            {isList && sadrzaj && (
              <ul className='flex flex-col lg:-gap--desktop-liste-udaljenost-u-listama-big md:-gap--tablet-liste-udaljenost-u-listama-big -gap--mobile-liste-udaljenost-u-listama-big w-full max-w-prose h-full text-text-light-mode dark:text-text-dark-mode md:text-text-base-base-desktop text-text-base-base-mobiletablet'>
                {sadrzaj.map((ld: any, i: number) => {
                  return (
                    <li
                      key={ld}
                      className={`flex items-start justify-start lg:-gap--desktop---m md:-gap--tablet---m -gap--mobile---m ${
                        entry?.isIntersecting && 'motion-preset-slide-down motion-ease-spring-smooth'
                      }`}
                      style={{
                        animationDelay: `${i * 0.25}s`,
                      }}
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
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
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

                      <span className='block -mt-1'>{ld}</span>
                    </li>
                  );
                })}
              </ul>
            )}
            <div
              className='lg:-mt--desktop-h1-2---sadrzaj-cta md:-mt--tablet-h1-2---sadrzaj-cta -mt--mobile-h1-2---sadrzaj-cta'
              // data-gtm='kornati-click'
            >
              {/* <PuniTamni /> */}

              <button
                data-gtm={`section-button-click-${parseTitle}`}
                className='w-max max-w-[180px] lg:-mt--desktop-h1-2---sadrzaj-cta md:-mt--tablet-h1-2---sadrzaj-cta -mt--mobile-h1-2---sadrzaj-cta  flex items-center justify-start bg-primarna-tamna text-almost-white lg:text-button-desktop md:text-button-tablet text-button-mobile md:px-7 md:py-3 px-6 py-[15px] md:rounded-[7px] rounded-[5px] md:gap-[13.3px] gap-[11.6px] transition-all ease-in-out duration-300 group hover:bg-sekundarna-tamna active:bg-almost-black'
              >
                <span className='motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>Button text</span>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='10'
                  height='12'
                  viewBox='0 0 10 12'
                  fill='none'
                  className='transition-all ease-in-out group-hover:translate-x-1'
                >
                  <path
                    d='M0.333336 0.747747L0.333335 11.248C0.333685 11.3544 0.364457 11.4586 0.422337 11.5494C0.480216 11.6403 0.563013 11.7145 0.661814 11.7638C0.760617 11.8132 0.871683 11.836 0.983057 11.8297C1.09443 11.8234 1.20189 11.7883 1.29388 11.7281L9.25252 6.47799C9.58249 6.26041 9.58249 5.73656 9.25252 5.51838L1.29388 0.268233C1.20209 0.207463 1.09457 0.171825 0.983008 0.165193C0.871449 0.158561 0.760117 0.181188 0.661105 0.230615C0.562094 0.280042 0.479191 0.35438 0.421405 0.445551C0.36362 0.536721 0.33316 0.641239 0.333336 0.747747Z'
                    fill='currentColor'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
