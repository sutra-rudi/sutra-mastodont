'use client';

import { PrimaryDarkButton } from '@/app/components/SutraButton';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight as RightIcon } from 'react-icons/fa6';
import fbIcon from '../../imageMaterials/facebook-icon.svg';
import instaIcon from '../../imageMaterials/instagram-icon.svg';
import ytIcon from '../../imageMaterials/youtube-icon.svg';
import { Twirl as Hamburger } from 'hamburger-react';

interface NavbarResources {
  logoPaths: Record<string, string>;
  iconPaths: Record<string, any>;
}

const StaticDemoLinks = ['O nama', 'Proizvodi', 'Kontakt', 'Usluge', 'Projekti'];

const PageContent = ({ logoPaths, iconPaths }: NavbarResources) => {
  return (
    <div>
      <h2 className='w-full text-center xl:text-h2-xl lg:text-h2-desktop md:text-h2-tablet text-h2-mobile font-semibold pt-8 text-primarna-tamna dark:text-primarna-svijetla my-4'>
        Verzija jedan
      </h2>
      <nav className='w-full bg-divider-lightmode'>
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

          <div className='flex items-center xl:-gap--xl---l lg:-gap--desktop---l md:-gap--tablet---l -gap--mobile---l'>
            <div className='lg:flex hidden items-center gap-7'>
              {StaticDemoLinks.map((lnk) => (
                <span key={lnk} className='lg:text-menu-tabs-desktop md:text-menu-tabs-tablet text-menu-tabs-mobile'>
                  {lnk}
                </span>
              ))}
            </div>
            <div className='md:block hidden'>
              <PrimaryDarkButton innerText='Button text' size='base' frontIcon={RightIcon} />
            </div>
            <div className='flex items-center justify-start gap-1'>
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
                className='dark:block hidden'
              />
              <Image
                alt='Arrow icon'
                src={iconPaths.dropdownArrows.downPraznaLight}
                width={7}
                height={7}
                className='dark:hidden block'
              />
            </div>
            <div className='lg:hidden block'>
              <Hamburger />
            </div>
          </div>
        </div>
      </nav>

      <h2 className='w-full text-center xl:text-h2-xl lg:text-h2-desktop md:text-h2-tablet text-h2-mobile font-semibold pt-8 text-primarna-tamna dark:text-primarna-svijetla my-4'>
        Verzija dva
      </h2>

      <nav className='w-full bg-divider-lightmode'>
        <div title='glavni nav' className='w-full flex items-center justify-between  h-navbar-xl -px--xl---m'>
          <Image src={logoPaths.horizontalLight} alt='site logo' width={156} height={40} />

          <div className='flex items-center xl:-gap--xl---l lg:-gap--desktop---l md:-gap--tablet---l -gap--mobile---l'>
            <div className='lg:flex hidden items-center gap-7'>
              {StaticDemoLinks.map((lnk) => (
                <span key={lnk} className='lg:text-menu-tabs-desktop md:text-menu-tabs-tablet text-menu-tabs-mobile'>
                  {lnk}
                </span>
              ))}
            </div>
            <div className='md:block hidden'>
              <PrimaryDarkButton innerText='Button text' size='base' frontIcon={RightIcon} />
            </div>
            <div className='flex items-center justify-start gap-1'>
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
                className='dark:block hidden'
              />
              <Image
                alt='Arrow icon'
                src={iconPaths.dropdownArrows.downPraznaLight}
                width={7}
                height={7}
                className='dark:hidden block'
              />
            </div>
            <div className='lg:hidden block'>
              <Hamburger />
            </div>
          </div>
        </div>
      </nav>

      <h2 className='w-full text-center xl:text-h2-xl lg:text-h2-desktop md:text-h2-tablet text-h2-mobile font-semibold pt-8 text-primarna-tamna dark:text-primarna-svijetla my-4'>
        Verzija tri
      </h2>

      <nav className='w-full bg-divider-lightmode'>
        <div
          title='glavni nav'
          className='w-full flex lg:flex-col items-center justify-center -px--xl---m py-5 xl:-gap--xl---m lg:-gap--desktop---m md:-gap--tablet---m -gap--mobile---m'
        >
          <Image
            src={logoPaths.horizontalLight}
            alt='site logo'
            width={156}
            height={40}
            className='max-h-10 object-cover object-center'
          />

          <div className='flex items-center xl:-gap--xl---l lg:-gap--desktop---l md:-gap--tablet---l -gap--mobile---l  lg:justify-between justify-end w-full'>
            <div title='div za layout' className='lg:block hidden opacity-0 select-none pointer-events-none'></div>
            <div className='lg:flex hidden items-center gap-7'>
              {StaticDemoLinks.map((lnk) => (
                <span key={lnk} className='lg:text-menu-tabs-desktop md:text-menu-tabs-tablet text-menu-tabs-mobile'>
                  {lnk}
                </span>
              ))}
            </div>

            <div className='flex items-center justify-start gap-1'>
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
                className='dark:block hidden'
              />
              <Image
                alt='Arrow icon'
                src={iconPaths.dropdownArrows.downPraznaLight}
                width={7}
                height={7}
                className='dark:hidden block'
              />
            </div>
            <div className='lg:hidden block'>
              <Hamburger />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default PageContent;
