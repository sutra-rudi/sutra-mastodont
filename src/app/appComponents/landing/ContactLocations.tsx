'use client';

import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import React from 'react';
import dataset from '../../staticData/staticQueryData.json';
import parse from 'html-react-parser';
import { FaPhoneSquareAlt as Telefon } from 'react-icons/fa';
import { FaLocationDot as Misto } from 'react-icons/fa6';
import { BsPersonSquare as Osoba } from 'react-icons/bs';
import { FaEnvelope as Mejl } from 'react-icons/fa';
import slugify from 'slugify';
import { slugifyOptions } from '@/app/pathsUtils/slugifyOptions';
const locationsData = dataset.data.allKontaktiLokacije.edges;
interface ContactLocations {
  currentLang: any;
}

export default function ContactLocations({ currentLang }: ContactLocations) {
  const l = getSuffixFromLang(currentLang);
  return (
    <section className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl'>
      <div className='container mx-auto px-4'>
        <h2 className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode'>
          Kontakt lokacije
        </h2>

        <div className='w-full lg:-mt--desktop---2xl md:-mt--tablet---2xl -mt--mobile---2xl grid grid-cols-1 lg:gap-16 md:gap-12 gap-8'>
          {locationsData.map((ld) => {
            return (
              <a key={ld.node.id} href={`/${currentLang}/locations#${slugify(ld.node.title, { ...slugifyOptions })}`}>
                <article className='flex items-stretch bg-almost-white shadow lg:flex-nowrap flex-wrap group cursor-pointer lg:pb-0 pb-4'>
                  <div className='overflow-hidden relative block  w-full lg:h-[460px] h-[300px] lg:max-w-[600px]'>
                    <picture>
                      <img
                        src={ld.node.naslovnaSlika.sekundarnaGlavnaSlikaThumbnailHover.node.sourceUrl}
                        alt={`Contact location image - ${ld.node.title}`}
                        decoding='async'
                        loading='lazy'
                        className='object-cover object-center block aspect-auto w-full h-full transition-all ease-out duration-[3000ms] group-hover:scale-125 group-hover:opacity-0 absolute inset-0'
                      />

                      <img
                        src={ld.node.naslovnaSlika.glavnaSlikaNaslovnaSlika.node.sourceUrl}
                        alt={`Contact location image - ${ld.node.title}`}
                        decoding='async'
                        loading='lazy'
                        className='object-cover object-center block aspect-auto w-full h-full transition-all ease-out duration-[3000ms] group-hover:scale-125 opacity-0 group-hover:opacity-100 absolute inset-0'
                      />
                    </picture>
                  </div>
                  <div className='max-w-prose md:pt-6 lg:px-8 md:px-6 px-4'>
                    <h1 className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode motion-ease-spring-bouncy group-hover:motion-preset-slide-up lg:mt-0 mt-mobile-slika-sadrzaj'>
                      {ld.node.radnaVremenaLokacijaOsnovneInformacije.nazivLokacije}
                    </h1>

                    <ul className='flex flex-col lg:-gap--desktop-liste-udaljenost-u-listama-big md:-gap--tablet-liste-udaljenost-u-listama-big -gap--mobile-liste-udaljenost-u-listama-big lg:-mt--desktop-h1-2---naslov-tekst md:-mt--tablet-h1-2---naslov-tekst -mt--mobile-h1-2---naslov-tekst text-text-light-mode dark:text-text-dark-mode'>
                      <li className='flex items-start justify-start flex-col lg:gap-4 md:gap-3 gap-2 motion-ease-spring-bouncy group-hover:motion-preset-slide-up motion-delay-200'>
                        <div className='flex items-center justify-start gap-1 md:text-text-base-l-desktop text-text-base-l-mobiletablet'>
                          <Misto />
                          <p>Adresa</p>
                        </div>
                        <div className='lg:prose-lg prose text-text-light-mode dark:text-text-dark-mode'>
                          {parse(ld.node.radnaVremenaLokacijaOsnovneInformacije.adresaLokacije)}
                        </div>
                      </li>
                      <li className='flex items-center justify-start lg:gap-4 md:gap-3 gap-2 md:text-text-base-l-desktop text-text-base-l-mobiletablet motion-ease-spring-bouncy group-hover:motion-preset-slide-up motion-delay-300'>
                        <Mejl /> <p>{ld.node.radnaVremenaLokacijaOsnovneInformacije.emailLokacije}</p>
                      </li>
                      <li className='flex items-center justify-start lg:gap-4 md:gap-3 gap-2 md:text-text-base-l-desktop text-text-base-l-mobiletablet motion-ease-spring-bouncy group-hover:motion-preset-slide-up motion-delay-[400ms]'>
                        <Osoba /> {ld.node.radnaVremenaLokacijaOsnovneInformacije.imeOdgovorneOsobe}
                      </li>
                      <li className='flex items-center justify-start lg:gap-4 md:gap-3 gap-2 md:text-text-base-l-desktop text-text-base-l-mobiletablet motion-ease-spring-bouncy group-hover:motion-preset-slide-up motion-delay-500'>
                        <Telefon /> {ld.node.radnaVremenaLokacijaOsnovneInformacije.kontaktTelefonLokacije}
                      </li>
                    </ul>

                    <p className='max-w-prose lg:-mt--desktop-h1-2---sadrzaj-cta md:-mt--tablet-h1-2---sadrzaj-cta -mt--mobile-h1-2---sadrzaj-cta md:text-text-base-l-desktop text-text-base-l-mobiletablet motion-ease-spring-bouncy group-hover:motion-preset-slide-up motion-delay-[600ms] hidden'>
                      {
                        //@ts-ignore
                        ld.node[`radnoVrijeme${l}`]?.[`textBox${l}`] ?? 'Nema unosa na odabranom jeziku'
                      }
                    </p>
                  </div>
                </article>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
