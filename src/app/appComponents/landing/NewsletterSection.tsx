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
          <PuniTamni />
        </form>
      </div>
    </section>
  );
}
