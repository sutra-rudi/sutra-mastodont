'use client';

import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import React from 'react';
import parse from 'html-react-parser';
import dayjs from 'dayjs';
import { FaPhoneSquareAlt as Telefon } from 'react-icons/fa';

import { FaRegClock as Ura } from 'react-icons/fa';
import { FaLocationDot as Misto } from 'react-icons/fa6';
import { BsPersonSquare as Osoba } from 'react-icons/bs';

import { FaMoneyBillAlt as Pinez } from 'react-icons/fa';
import { MdEmail as Posta } from 'react-icons/md';

interface Client {
  data: any;
  currentLang: any;
}

export default function Client({ data, currentLang }: Client) {
  console.log('DATASET', data);

  const l = getSuffixFromLang(currentLang);

  return (
    <section className='-mt--desktop---xl'>
      <picture>
        <img
          src={data.naslovnaSlika.glavnaSlikaNaslovnaSlika.node.sourceUrl}
          alt={data.naslovnaSlika.glavnaSlikaNaslovnaSlika.node.altText}
          aria-description={data.naslovnaSlika.glavnaSlikaNaslovnaSlika.node.description}
          className='object-cover object-top block aspect-auto lg:h-[500px] md:h-[400px] h-[250px] w-full -motion-translate-y-in-25 motion-ease-spring-smooth max-w-[1920px] mx-auto'
        />
      </picture>

      <div className='max-w-screen-xl mx-auto px-4 flex items-start xl:gap-24 lg:gap-20 md:gap-16 gap-12 justify-center w-full md:flex-nowrap flex-wrap'>
        <div className='max-w-prose w-full'>
          <h1 className='lg:text-h1-desktop md:text-h1-tablet text-h1-mobile35 text-heading-color-light-mode dark:text-hero-heading-color-dark-mode max-w-prose text-balance lg:mt-desktop-slika-sadrzaj md:mt-tablet-slika-sadrzaj mt-mobile-slika-sadrzaj motion-ease-spring-bouncy motion-preset-slide-up'>
            {data[`event${l}`]?.[`event${l}`].nazivEventa}
          </h1>

          <h4 className='flex items-center justify-start gap-2 lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-nadnaslov-color-light-mode dark:text-nadnaslov-color-light-mode relative lg:-mt--desktop-h1-2---naslov-nadnaslov md:-mt--tablet-h1-2---naslov-nadnaslov -mt--mobile-h1-2---naslov-nadnaslov'>
            <span>
              <span>Od: </span>
              <time dateTime={data.eventUvod.pocetakEventaVrijemeDarumGrupa.datumEventaPocetak}>
                {dayjs(data.eventUvod.pocetakEventaVrijemeDarumGrupa.datumEventaPocetak).format('DD/MM/YYYY')}
              </time>
            </span>

            <span>
              <span>Do: </span>
              <time dateTime={data.eventUvod.krajEventaGrupa.datumEventaKraj}>
                {dayjs(data.eventUvod.krajEventaGrupa.datumEventaKraj).format('DD/MM/YYYY')}
              </time>
            </span>
          </h4>
          <div className='lg:prose-lg prose prose-headings:text-heading-color-light-mode dark:prose-headings:bg-heading-color-dark-mode text-text-light-mode dark:text-text-dark-mode prose-strong:text-text-light-mode dark:prose-strong:text-text-dark-mode lg:-mt--desktop-h1-2---naslov-tekst md:-mt--tablet-h1-2---naslov-tekst -mt--mobile-h1-2---naslov-tekst'>
            {parse(data[`event${l}`]?.[`event${l}`].program)}
          </div>
        </div>

        <div className='md:sticky md:-top--desktop---5xl outline md:outline-primarna-tamna/25 outline-primarna-tamna/15 outline-2 rounded-lg md:px-16 px-4 py-12 w-full md:max-w-max max-w-[unset] lg:mt-desktop-slika-sadrzaj md:mt-tablet-slika-sadrzaj mt-mobile-slika-sadrzaj md:shadow-lg shadow-sm motion-preset-slide-left motion-ease-spring-smooth'>
          <h3 className='lg:text-h3-desktop md:text-h3-tablet text-h3-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode lg:mb-16 md:mb-12 mb-8'>
            Dodatne informacije
          </h3>
          <ul className='flex flex-col items-start justify-start lg:-gap--desktop-liste-udaljenost-u-listama-big md:-gap--tablet-liste-udaljenost-u-listama-big -gap--mobile-liste-udaljenost-u-listama-big md:text-text-base-l-desktop text-text-base-l-mobiletablet text-text-light-mode dark:text-text-dark-mode'>
            <li className='flex items-start justify-start lg:gap-8 md:gap-6 gap-2 motion-preset-slide-down motion-ease-spring-smooth'>
              <Pinez className='lg:text-4xl md:text-3xl text-2xl text-primarna-tamna shrink-0' />
              <div className=''>
                <p className='md:text-text-base-l-desktop text-text-base-l-mobiletablet !font-bold mb-2'>Cijena</p>
                <p className='md:text-text-base-base-desktop text-text-base-base-mobiletablet'>
                  {data.eventUvod.cijenaEvent}
                </p>
              </div>
            </li>
            <li className='flex items-start justify-start lg:gap-8 md:gap-6 gap-2 motion-preset-slide-down motion-ease-spring-smooth'>
              <Posta className='lg:text-4xl md:text-3xl text-2xl text-primarna-tamna shrink-0' />
              <div className=''>
                <p className='md:text-text-base-l-desktop text-text-base-l-mobiletablet !font-bold mb-2'>
                  Email kontakt
                </p>
                <a
                  href={`mailto:${data.eventUvod.emailKontaktEvent}`}
                  className='md:text-text-base-base-desktop text-text-base-base-mobiletablet'
                >
                  {data.eventUvod.emailKontaktEvent}
                </a>
              </div>
            </li>
            <li className='flex items-start justify-start lg:gap-8 md:gap-6 gap-2 motion-preset-slide-down motion-ease-spring-smooth'>
              <Telefon className='lg:text-4xl md:text-3xl text-2xl text-primarna-tamna shrink-0' />
              <div className=''>
                <p className='md:text-text-base-l-desktop text-text-base-l-mobiletablet !font-bold mb-2'>
                  Telefon kontakt
                </p>
                <a
                  href={`tel:${data.eventUvod.kontaktTelefonZaEvent}`}
                  className='md:text-text-base-base-desktop text-text-base-base-mobiletablet'
                >
                  {data.eventUvod.kontaktTelefonZaEvent}
                </a>
              </div>
            </li>
            <li className='flex items-start justify-start lg:gap-8 md:gap-6 gap-2 motion-preset-slide-down motion-ease-spring-smooth'>
              <Misto className='lg:text-4xl md:text-3xl text-2xl text-primarna-tamna shrink-0' />
              <div className=''>
                <p className='md:text-text-base-l-desktop text-text-base-l-mobiletablet !font-bold mb-2'>
                  Lokacija eventa
                </p>
                <a
                  href={data.eventUvod.lokacijaEvent}
                  className='md:text-text-base-base-desktop text-text-base-base-mobiletablet'
                >
                  {data[`event${l}`]?.[`event${l}`].mjestoOdrzavanja}
                </a>
              </div>
            </li>
            <li className='flex items-start justify-start lg:gap-8 md:gap-6 gap-2 motion-preset-slide-down motion-ease-spring-smooth'>
              <Osoba className='lg:text-4xl md:text-3xl text-2xl text-primarna-tamna shrink-0' />
              <div className=''>
                <p className='md:text-text-base-l-desktop text-text-base-l-mobiletablet !font-bold mb-2'>Organizator</p>
                <p className='md:text-text-base-base-desktop text-text-base-base-mobiletablet'>
                  {data.eventUvod.organizatorEventa}
                </p>
              </div>
            </li>
            <li className='flex items-start justify-start lg:gap-8 md:gap-6 gap-2 motion-preset-slide-down motion-ease-spring-smooth'>
              <Ura className='lg:text-4xl md:text-3xl text-2xl text-primarna-tamna shrink-0' />

              <div className=''>
                <p className='md:text-text-base-l-desktop text-text-base-l-mobiletablet !font-bold mb-2'>
                  Početak eventa
                </p>
                <time>{data.eventUvod.krajEventaGrupa.vrijemeEventaKraj}</time>
              </div>
            </li>
          </ul>

          <button className='w-max  lg:-mt--desktop-h1-2---sadrzaj-cta md:-mt--tablet-h1-2---sadrzaj-cta -mt--mobile-h1-2---sadrzaj-cta  flex items-center justify-start bg-primarna-tamna text-almost-white lg:text-button-desktop md:text-button-tablet text-button-mobile md:px-7 md:py-3 px-6 py-[15px] md:rounded-[7px] rounded-[5px] md:gap-[13.3px] gap-[11.6px] transition-all ease-in-out duration-300 group hover:bg-sekundarna-tamna active:bg-almost-black'>
            <span className='motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>Kupi ulaznicu</span>

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
    </section>
  );
}
