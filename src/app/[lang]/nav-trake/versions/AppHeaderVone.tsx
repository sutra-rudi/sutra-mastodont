'use client';

import Image from 'next/image';
import fbIcon from '../../../imageMaterials/facebook-icon.svg';
import instaIcon from '../../../imageMaterials/instagram-icon.svg';
import ytIcon from '../../../imageMaterials/youtube-icon.svg';
import { ButtonOutlinePrimaryLight, PrimaryDarkButton } from '@/app/components/SutraButton';
import { FaArrowRight as RightIcon } from 'react-icons/fa6';
import { Twirl as Hamburger } from 'hamburger-react';
import React from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { UserLanguage } from '@/app/enums/LangEnum';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface NavbarResources {
  logoPaths: Record<string, string>;
  iconPaths: Record<string, any>;
}

const StaticDemoLinks = ['O nama', 'Proizvodi', 'Kontakt', 'Usluge', 'Projekti'];
export default function AppHeaderVone({ logoPaths, iconPaths }: NavbarResources) {
  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const splitPath = currentPath.split('/');
  const currentLang = splitPath[1];

  const containerRef = React.useRef(null);
  const countryDropdownRef = React.useRef(null);

  const [isDropdown, setIsDropdown] = React.useState<boolean>(false);
  const [isCountryDropdown, setIsCountryDropdown] = React.useState<boolean>(false);
  const [isCountryDropdownMobile, setIsCountryDropdownMobile] = React.useState<boolean>(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);

  const handleClickOutsideOfContainer = () => setIsDropdown(false);

  const handleClickOutsideOfCountryContainer = () => setIsCountryDropdown(false);

  useOnClickOutside(containerRef, handleClickOutsideOfContainer);
  useOnClickOutside(countryDropdownRef, handleClickOutsideOfCountryContainer);

  const handleLangSwitch = (lang: string) => {
    // Postavi kolačić na odabrani jezik
    document.cookie = `@sutra-mastodont-user-lang=${lang}; path=/; max-age=31536000`; // 1 godina

    // Preusmjeri na novu putanju
    router.push(
      `/${lang}${currentPath.replace(`/${currentLang}`, '')}${
        searchParams.toString() ? '?' + searchParams.toString() : ''
      }`
    );
  };

  const countries = Object.entries(iconPaths.countryIcons).map(([kl, val]) => ({
    [kl]: val,
  }));

  const selectedCountries = countries
    .filter((item) => Object.keys(UserLanguage).some((lang) => lang in item))
    .map((item) => {
      const key = Object.keys(item).find((lang) => lang in UserLanguage);
      return { [key as any]: item[key as any] };
    });

  React.useEffect(() => {
    isMobileMenuOpen
      ? document.documentElement.classList.add('overflow-hidden')
      : document.documentElement.classList.remove('overflow-hidden');
  }, [isMobileMenuOpen]);

  return (
    <nav className='w-full bg-divider-lightmode '>
      {/* MOBILE */}
      <div
        title='mobile nav'
        className={`absolute z-40 w-full h-screen bg-primarna-svijetla inset-0 transition-all duration-300   ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto select-auto' : 'opacity-0 select-none pointer-events-none'
        }`}
      >
        <div className='relative w-[130px] h-[130px] -mt--mobile---4xl -mb--mobile---5xl mx-auto'>
          <Image src={logoPaths.horizontalLight} alt='site logo' fill className='object-center block aspect-auto' />
        </div>

        <div
          title='container inner mobile nav'
          className='flex items-center lg:justify-center justify-center flex-col gap-6'
        >
          {StaticDemoLinks.map((lnk) => (
            <span key={lnk} className='text-menu-tabs-desktop font-semibold'>
              {lnk}
            </span>
          ))}
        </div>

        <div className='flex items-center justify-center -gap--mobile---l -mt--mobile---3xl -mb--mobile---5xl mx-auto'>
          <ButtonOutlinePrimaryLight innerText='Button text' frontIcon={RightIcon} />
          <PrimaryDarkButton innerText='Button text' frontIcon={RightIcon} />
        </div>

        <div className='flex items-center justify-center gap-1 relative cursor-pointer'>
          {selectedCountries
            .filter((country) => {
              const [key] = Object.entries(country)[0];
              return key === currentLang;
            })
            .map((country, index) => {
              const [key, flagUrls]: any = Object.entries(country)[0];
              return (
                <button
                  key={index}
                  className='cursor-pointer shrink-0 flex items-center gap-[6px]'
                  onClick={() => setIsCountryDropdownMobile(!isCountryDropdownMobile)}
                >
                  <Image src={flagUrls.krug} alt={`${key} flag`} width={20} height={20} className='rounded-full' />

                  <span>
                    {key === 'hr' ? 'Hrvatski' : key === 'eng' ? 'English' : key === 'ita' ? 'Italiano' : 'Deutsch'}
                  </span>
                </button>
              );
            })}

          <Image
            alt='Arrow icon'
            src={iconPaths.dropdownArrows.downPraznaDark}
            width={14}
            height={14}
            className={`dark:block hidden text-xs shrink-0  transition-all ease-in-out duration-300 origin-center ${
              isCountryDropdownMobile && 'rotate-180'
            }`}
          />
          <Image
            alt='Arrow icon'
            src={iconPaths.dropdownArrows.downPraznaLight}
            width={14}
            height={14}
            className={`dark:hidden block text-xs shrink-0  transition-all ease-in-out duration-300 origin-center ${
              isCountryDropdownMobile && 'rotate-180'
            }`}
          />

          <div
            className={`absolute py-4 transition-all w-full lg:min-w-48 md:min-w-36 min-w-20  duration-300 ease-custom-ease-in-out bg-primarna-svijetla flex items-center justify-center gap-4  top-[2rem] z-30 left-0 px-4 ${
              isCountryDropdownMobile
                ? 'opacity-1 translate-y-0'
                : 'opacity-0 translate-y-10 pointer-events-none select-none'
            }`}
          >
            {selectedCountries.map((country, index) => {
              const [key, flagUrls]: any = Object.entries(country)[0];
              return (
                <button
                  disabled={currentLang === key}
                  key={index}
                  onClick={() => handleLangSwitch(key)}
                  className='cursor-pointer shrink-0'
                >
                  <Image
                    src={flagUrls.krug}
                    alt={`${key} flag`}
                    width={20}
                    height={20}
                    className='rounded-full shrink-0'
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {/* MOBILE */}

      <div
        title='nad nav'
        className='w-full flex items-center justify-between bg-primarna-tamna h-nad-navbar-xl -px--xl---m'
      >
        <div className='flex items-center justify-start -gap--xl---xl'>
          <div className='md:flex hidden items-center justify-start gap-4'>
            <div className='w-4 h-4 relative'>
              <Image src={fbIcon} alt='Facebook icon' fill />
            </div>

            <div className='w-4 h-4 relative'>
              <Image src={instaIcon} alt='Instagram icon' fill />
            </div>
            <div className='w-4 h-4 relative'>
              <Image src={ytIcon} alt='Youtube icon' fill />
            </div>
          </div>

          <div className='flex items-center gap-9'>
            <div className='flex items-center justify-start gap-3 text-primarna-svijetla'>
              <Image
                alt='Message icon'
                src={iconPaths.nadNavbar.mailLight}
                width={14}
                height={14}
                className='block dark:hidden'
              />
              <Image
                alt='Message icon'
                src={iconPaths.nadNavbar.mailDark}
                width={14}
                height={14}
                className='dark:block hidden'
              />

              <span className='md:text-tag-tablet text-tag-mobile'>info@sutra.hr</span>
            </div>

            <div className='flex items-center justify-start gap-3 text-primarna-svijetla'>
              <Image
                alt='Message icon'
                src={iconPaths.nadNavbar.phoneLight}
                width={14}
                height={14}
                className='block dark:hidden'
              />
              <Image
                alt='Message icon'
                src={iconPaths.nadNavbar.phoneDark}
                width={14}
                height={14}
                className='dark:block hidden'
              />
              <span className='md:text-tag-tablet text-tag-mobile'>01 3213 354</span>
            </div>
          </div>
        </div>
      </div>
      <div title='glavni nav' className='w-full flex items-center justify-between  h-navbar-xl -px--xl---m'>
        <Image src={logoPaths.horizontalLight} alt='site logo' width={156} height={40} />

        <div className='flex items-center xl:-gap--xl---l lg:-gap--desktop---l md:-gap--tablet---l -gap--mobile---l relative'>
          <div ref={containerRef} className='lg:flex hidden items-center gap-7'>
            {StaticDemoLinks.map((lnk, i) => {
              if (i === 3) {
                return (
                  <div
                    key={lnk}
                    onMouseOver={() => setIsDropdown(true)}
                    onMouseEnter={() => setIsDropdown(true)}
                    onClick={() => setIsDropdown(true)}
                    className='transition-all ease-custom-ease-in-out duration-300 group flex items-center gap-[6px]  cursor-pointer lg:text-menu-tabs-desktop md:text-menu-tabs-tablet text-menu-tabs-mobile relative'
                  >
                    <span className='transition-all ease-custom-ease-in-out duration-300'>{lnk}</span>
                    <Image
                      alt='Arrow icon'
                      src={iconPaths.dropdownArrows.downPraznaLight}
                      width={14}
                      height={14}
                      className={`dark:hidden block text-xs shrink-0  transition-all ease-in-out duration-300 origin-center ${
                        isDropdown && 'rotate-180'
                      }`}
                    />
                    <Image
                      alt='Arrow icon'
                      src={iconPaths.dropdownArrows.downPraznaDark}
                      width={14}
                      height={14}
                      className={`dark:block hidden text-xs shrink-0  transition-all ease-in-out duration-300 origin-center ${
                        isDropdown && 'rotate-180'
                      }`}
                    />

                    <div
                      className={`absolute py-4 transition-all w-full min-w-48  duration-300 ease-custom-ease-in-out bg-primarna-svijetla grid grid-cols-1 items-start gap-2  top-[2rem] z-30 -left-4 px-4 ${
                        isDropdown
                          ? 'opacity-1 translate-y-0'
                          : 'opacity-0 translate-y-10 pointer-events-none select-none'
                      }`}
                    >
                      {StaticDemoLinks.map((l) => (
                        <span key={l}>{l}</span>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <span key={lnk} className='lg:text-menu-tabs-desktop md:text-menu-tabs-tablet text-menu-tabs-mobile'>
                  {lnk}
                </span>
              );
            })}
          </div>
          <div className='md:block hidden'>
            <PrimaryDarkButton innerText='Button text' frontIcon={RightIcon} />
          </div>
          <div
            onMouseOver={() => setIsCountryDropdown(true)}
            onMouseEnter={() => setIsCountryDropdown(true)}
            onClick={() => setIsCountryDropdown(true)}
            ref={countryDropdownRef}
            className='flex items-center justify-start gap-1 relative cursor-pointer'
          >
            <Image
              alt='Globe icon'
              src={iconPaths.langSwitcherLight}
              width={14}
              height={14}
              className='block dark:hidden'
            />
            <Image
              alt='Globe icon'
              src={iconPaths.langSwitcherDark}
              width={14}
              height={14}
              className='dark:block hidden'
            />
            <Image
              alt='Arrow icon'
              src={iconPaths.dropdownArrows.downPraznaDark}
              width={14}
              height={14}
              className={`dark:block hidden text-xs shrink-0  transition-all ease-in-out duration-300 origin-center ${
                isCountryDropdown && 'rotate-180'
              }`}
            />
            <Image
              alt='Arrow icon'
              src={iconPaths.dropdownArrows.downPraznaLight}
              width={14}
              height={14}
              className={`dark:hidden block text-xs shrink-0  transition-all ease-in-out duration-300 origin-center ${
                isCountryDropdown && 'rotate-180'
              }`}
            />

            <div
              onMouseLeave={() => setIsCountryDropdown(false)}
              className={`absolute py-4 transition-all w-full lg:min-w-48 md:min-w-36 min-w-20  duration-300 ease-custom-ease-in-out bg-primarna-svijetla grid grid-cols-1 items-start gap-4  top-[2rem] z-30 -left-4 px-4 ${
                isCountryDropdown
                  ? 'opacity-1 translate-y-0'
                  : 'opacity-0 translate-y-10 pointer-events-none select-none'
              }`}
            >
              {selectedCountries.map((country, index) => {
                const [key, flagUrls]: any = Object.entries(country)[0];
                return (
                  <button
                    disabled={currentLang === key}
                    key={index}
                    onClick={() => handleLangSwitch(key)}
                    className='cursor-pointer shrink-0 w-full'
                  >
                    <Image
                      src={flagUrls.krug}
                      alt={`${key} flag`}
                      width={20}
                      height={20}
                      className='rounded-full shrink-0'
                    />
                  </button>
                );
              })}
            </div>
          </div>
          <div className='lg:hidden block w-min z-40'>
            <Hamburger onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </div>
        </div>
      </div>
    </nav>
  );
}
