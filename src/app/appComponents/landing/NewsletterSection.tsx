'use client';
import React from 'react';
import dataset from '../../staticData/staticQueryData.json';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { PuniTamni } from '../global/Buttons';
import toast from 'react-hot-toast';

const findAdminData = dataset.data.allAdminTekstoviCookies404Footer.edges[0].node;

interface BannerEmail {
  currentLang: any;
}
export default function EmailBannerSection({ currentLang }: BannerEmail) {
  const l = getSuffixFromLang(currentLang);
  return (
    <section className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl relative w-full py-12'>
      <div className='absolute inset-0 bg-almost-black bg-opacity-5'></div>

      <div className='relative z-10 mx-auto max-w-xl px-4 text-center text-white'>
        {/* Naslov */}
        <h2 className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode lg:-mb--desktop-h1-2---naslov-tekst md:-mb--tablet-h1-2---naslov-tekst -mb--mobile-h1-2---naslov-tekst block relative'>
          {
            //@ts-ignore
            findAdminData[`adminCookiesFooterNewsletter${l}`]?.[`osnovniTekstoviWeba${l}`].newsletterBazaTekstova
              .naslovNewslettera
          }
        </h2>

        <p className='md:text-text-base-base-desktop text-text-base-base-mobiletablet text-text-light-mode dark:text-text-dark-mode lg:-mb--desktop-h1-2---sadrzaj-cta md:-mb--tablet-h1-2---sadrzaj-cta -mb--mobile-h1-2---sadrzaj-cta'>
          {
            //@ts-ignore
            findAdminData[`adminCookiesFooterNewsletter${l}`]?.[`osnovniTekstoviWeba${l}`].newsletterBazaTekstova
              .newsletterUvodnaPoruka
          }
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast(
              //@ts-ignore
              findAdminData[`adminCookiesFooterNewsletter${l}`]?.[`osnovniTekstoviWeba${l}`].newsletterBazaTekstova
                .newsletterZahvalaNaPretplati
            );
          }}
          className='flex flex-col sm:flex-row items-center justify-center gap-4'
        >
          <input
            type='email'
            placeholder='Unesite svoju email adresu'
            className='w-full flex-1 rounded-md border border-transparent px-4 py-2 text-gray-900 focus:border-yellow-400 focus:outline-none'
          />
          <button className='w-max max-w-[180px]  flex items-center justify-start bg-primarna-tamna text-almost-white lg:text-button-desktop md:text-button-tablet text-button-mobile md:px-7 md:py-3 px-6 py-[15px] md:rounded-[7px] rounded-[5px] md:gap-[13.3px] gap-[11.6px] transition-all ease-in-out duration-300 group hover:bg-sekundarna-tamna active:bg-almost-black'>
            <span className='motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>Prijavi se</span>

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
        </form>
      </div>
    </section>
  );
}
