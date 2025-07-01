import React from 'react';
import dataset from '../../staticData/staticQueryData.json';
import { FaPhoneSquareAlt as Telefon } from 'react-icons/fa';
import { FaLocationDot as Misto } from 'react-icons/fa6';
import { BsPersonSquare as Osoba } from 'react-icons/bs';
import { FaEnvelope as Mejl } from 'react-icons/fa';
import slugify from 'slugify';
import { slugifyOptions } from '@/app/pathsUtils/slugifyOptions';
const locationsData = dataset.data.allKontaktiLokacije.edges;
import parse from 'html-react-parser';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import Marquee from 'react-fast-marquee';
export default function ContactLocationsPage({
  params: { lang },
  searchParams,
}: {
  params: { lang: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  //   const hasP = searchParams!.loc ?? null;

  const l = getSuffixFromLang(lang);
  return (
    <main className='lg:-mt--desktop---4xl md:-mt--tablet---4xl -mt--mobile---4xl relative w-full dark:bg-primarna-tamna min-h-screen bg-white z-40'>
      <div className='w-full lg:-mt--desktop---2xl md:-mt--tablet---2xl -mt--mobile---2xl scroll-mt-56 grid grid-cols-1 lg:gap-24 md:gap-20 gap-16'>
        {locationsData.map((ld) => {
          return (
            <article key={ld.node.id} id={slugify(ld.node.title, { ...slugifyOptions })} className=''>
              <div className='overflow-hidden relative block  w-full lg:h-[500px] md:h-[400px] h-[325px] -motion-translate-y-in-25 motion-ease-spring-smooth max-w-[1920px] mx-auto'>
                <picture>
                  <img
                    src={ld.node.naslovnaSlika.glavnaSlikaNaslovnaSlika.node.sourceUrl}
                    alt={`Contact location image - ${ld.node.title}`}
                    decoding='async'
                    loading='lazy'
                    className='object-cover object-center block aspect-auto w-full h-full transition-all ease-out duration-[3000ms] absolute inset-0'
                  />
                </picture>
              </div>
              <div className='px-4 mx-auto container lg:mt-desktop-slika-sadrzaj md:mt-tablet-slika-sadrzaj mt-mobile-slika-sadrzaj motion-ease-spring-bouncy motion-preset-slide-up '>
                <h1 className='lg:text-h1-xl md:text-h1-desktop text-h1-tablet text-heading-color-light-mode dark:text-heading-color-dark-mode motion-ease-spring-bouncy group-hover:motion-preset-slide-up '>
                  {ld.node.radnaVremenaLokacijaOsnovneInformacije.nazivLokacije}
                </h1>

                <div className='flex items-start justify-start lg:gap-8 md:gap-7 gap-6 lg:flex-nowrap flex-wrap'>
                  <p className='max-w-prose lg:-mt--desktop-h1-2---sadrzaj-cta md:-mt--tablet-h1-2---sadrzaj-cta -mt--mobile-h1-2---sadrzaj-cta md:text-text-base-l-desktop text-text-base-l-mobiletablet motion-ease-spring-bouncy group-hover:motion-preset-slide-up motion-delay-[600ms] text-text-light-mode dark:text-text-dark-mode'>
                    {
                      //@ts-ignore
                      ld.node[`radnoVrijeme${l}`]?.[`textBox${l}`] ?? 'Nema unosa na odabranom jeziku'
                    }
                  </p>

                  <ul className='flex flex-col lg:-gap--desktop-liste-udaljenost-u-listama-big md:-gap--tablet-liste-udaljenost-u-listama-big -gap--mobile-liste-udaljenost-u-listama-big lg:-mt--desktop-h1-2---naslov-tekst md:-mt--tablet-h1-2---naslov-tekst -mt--mobile-h1-2---naslov-tekst text-text-light-mode dark:text-text-dark-mode'>
                    <li className='flex items-start justify-start flex-col lg:gap-4 md:gap-3 gap-2 transition-all ease-in-out hover:text-accent-boja'>
                      <div className='flex items-center justify-start gap-1 md:text-text-base-l-desktop text-text-base-l-mobiletablet '>
                        <Misto />
                        <p>Adresa</p>
                      </div>
                      <a
                        href={
                          ld.node.radnaVremenaLokacijaOsnovneInformacije.googleMapsLinkPojedineLokacije
                            ? ld.node.radnaVremenaLokacijaOsnovneInformacije.googleMapsLinkPojedineLokacije
                            : '/'
                        }
                        target='_blank'
                        rel='noopener noreferrer'
                        className='lg:prose-lg prose text-text-light-mode dark:text-text-dark-mode'
                      >
                        {parse(ld.node.radnaVremenaLokacijaOsnovneInformacije.adresaLokacije)}
                      </a>
                    </li>
                    <li className=' md:text-text-base-l-desktop text-text-base-l-mobiletablet transition-all ease-in-out hover:text-accent-boja'>
                      <a
                        href={`mailto:${ld.node.radnaVremenaLokacijaOsnovneInformacije.emailLokacije}`}
                        className='flex items-center justify-start lg:gap-4 md:gap-3 gap-2'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Mejl /> <p>{ld.node.radnaVremenaLokacijaOsnovneInformacije.emailLokacije}</p>
                      </a>
                    </li>
                    <li className='flex items-center justify-start lg:gap-4 md:gap-3 gap-2 md:text-text-base-l-desktop text-text-base-l-mobiletablet motion-ease-spring-bouncy group-hover:motion-preset-slide-up motion-delay-[400ms]'>
                      <Osoba /> {ld.node.radnaVremenaLokacijaOsnovneInformacije.imeOdgovorneOsobe}
                    </li>
                    <li className=' md:text-text-base-l-desktop text-text-base-l-mobiletablet transition-all ease-in-out hover:text-accent-boja'>
                      <a
                        href={`tel:${ld.node.radnaVremenaLokacijaOsnovneInformacije.kontaktTelefonLokacije}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center justify-start lg:gap-4 md:gap-3 gap-2'
                      >
                        <Telefon /> {ld.node.radnaVremenaLokacijaOsnovneInformacije.kontaktTelefonLokacije}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {Object.values(ld.node.photoGallery.fotogalerija).filter((v) => v).length >= 4 && (
                <Marquee className='lg:-mt--desktop---3xl md:-mt--tablet---3xl -mt--mobile---3xl'>
                  {Object.values(ld.node.photoGallery.fotogalerija)
                    .filter((v) => v)
                    .map((pg) => (
                      <picture key={pg?.node.id}>
                        <img
                          src={pg?.node.sourceUrl}
                          alt={`Contact location image - ${ld.node.title}`}
                          aria-details={`Contact location image - ${ld.node.title}`}
                          className='block aspect-auto object-center object-cover z-0 pointer-events-none select-none w-full max-w-[600px] lg:h-[390px] md:h-[323px] h-full'
                          decoding='async'
                          width={300}
                          height={290}
                          loading='lazy'
                        />
                      </picture>
                    ))}
                </Marquee>
              )}
            </article>
          );
        })}
      </div>
    </main>
  );
}
