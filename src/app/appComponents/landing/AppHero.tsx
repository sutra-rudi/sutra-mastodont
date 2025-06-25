'use client';

import React from 'react';
import dataset from '../../staticData/staticQueryData.json';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { UserLanguage } from '@/app/enums/LangEnum';
import { ParallaxBanner } from 'react-scroll-parallax';

interface AppHero {
  currentLang: string;
  imgs: any;
  abGroup: 'A' | 'B';
}

export default function AppHero({ currentLang, imgs, abGroup }: AppHero) {
  const l = getSuffixFromLang(currentLang);

  const gtmEvent = `hero-cta-click-${abGroup.toLowerCase()}`;

  const findDataset =
    abGroup === 'A'
      ? dataset.data.allHeroSekcija.edges.find((it) => it.node.title === 'NASLOVNICA – hero tekstovi – A')
      : dataset.data.allHeroSekcija.edges.find((it) => it.node.title === 'NASLOVNICA – hero tekstovi – B');

  return (
    <section className='relative w-full -mt--desktop---4xl overflow-hidden'>
      <ParallaxBanner
        className='aspect-auto w-full lg:h-[80vh] h-[70vh]'
        layers={[
          {
            image: imgs.desktop,
            translateY: [0, 50],
            opacity: [1, 0.8],
            scale: [1.05, 1, 'easeOutCubic'],
            shouldAlwaysCompleteAnimation: true,
            className:
              'md:block hidden brightness-75 motion-preset-shrink motion-ease-spring-smooth motion-duration-2000',
          },
          {
            image: imgs.mobile,
            translateY: [0, 50],
            opacity: [1, 0.8],
            scale: [1.05, 1, 'easeOutCubic'],
            shouldAlwaysCompleteAnimation: true,
            className:
              'md:hidden block brightness-75 motion-preset-shrink motion-ease-spring-smooth motion-duration-2000',
          },
          {
            translateY: [0, 30],
            scale: [1, 1.15, 'easeOutCubic'],
            shouldAlwaysCompleteAnimation: true,
            expanded: false,
            children: (
              <div className='text-center origin-center z-20 px-4   absolute inset-0 flex items-center justify-center flex-col'>
                <p className='lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-nadnaslov-color-dark-mode dark:text-nadnaslov-color-light-mode uppercase lg:mb-desktop-naslov-nadnaslov md:mb-tablet-naslov-nadnaslov mb-mobile-naslov-nadnaslov flex items-center justify-center gap-1 text-balance'>
                  {currentLang === UserLanguage.hr
                    ? //@ts-ignore
                      findDataset?.node[`tekstHero${l}`].slide1Hero.nadnaslov.split(' ').map((t, i) => (
                        <span
                          key={i}
                          className='inline-block opacity-0 animate-fallAnima'
                          style={{
                            animationDelay: `${i * 0.3}s`,
                          }}
                        >
                          {t}
                        </span>
                      ))
                    : //@ts-ignore
                      findDataset?.node[`tekstHero${l}`]?.[`slide1Hero${l}`].nadnaslov.split(' ').map((t, i) => (
                        <span
                          key={i}
                          className='inline-block opacity-0 animate-fallAnima'
                          style={{
                            animationDelay: `${i * 0.3}s`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                </p>

                <h1 className='xl:text-h1-xl lg:text-h1-desktop md:text-h1-tablet text-h1-mobile35 text-heading-color-dark-mode flex gap-2 !max-w-[30ch] flex-wrap text-balance items-center justify-center'>
                  {currentLang === UserLanguage.hr
                    ? //@ts-ignore
                      findDataset?.node[`tekstHero${l}`].slide1Hero.naslov.split(' ').map((l, i) => (
                        <span
                          key={i}
                          className='inline-block opacity-0 animate-riseAnima'
                          style={{
                            animationDelay: `${i * 0.3}s`,
                          }}
                        >
                          {l}
                        </span>
                      ))
                    : //@ts-ignore
                      findDataset?.node[`tekstHero${l}`]?.[`slide1Hero${l}`].naslov.split(' ').map((l, i) => (
                        <span
                          key={i}
                          className='inline-block opacity-0'
                          style={{
                            animation: `rise 1s ease-out forwards`,
                            animationDelay: `${i * 0.3}s`,
                          }}
                        >
                          {l}
                        </span>
                      ))}
                </h1>

                <button
                  data-gtm={gtmEvent}
                  onClick={() => {
                    window.dataLayer?.push({
                      event: gtmEvent,
                      ab_group: abGroup,
                    });
                  }}
                  className='w-max max-w-[180px] lg:-mt--desktop-h1-2---sadrzaj-cta md:-mt--tablet-h1-2---sadrzaj-cta -mt--mobile-h1-2---sadrzaj-cta  flex items-center justify-start bg-primarna-tamna text-almost-white lg:text-button-desktop md:text-button-tablet text-button-mobile md:px-7 md:py-3 px-6 py-[15px] md:rounded-[7px] rounded-[5px] md:gap-[13.3px] gap-[11.6px] transition-all ease-in-out duration-300 group hover:bg-sekundarna-tamna active:bg-almost-black'
                >
                  <span className='motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>
                    {abGroup === 'A' ? 'Grupa A CTA' : 'Grupa B CTA'}
                  </span>

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
            ),
          },
        ]}
      />
    </section>
  );
}
