'use client';

import { Twirl as Hamburger } from 'hamburger-react';
import Image from 'next/image';

interface NavbarResources {
  logoPaths: Record<string, string>;
  iconPaths: Record<string, any>;
}

const StaticDemoLinks = ['O nama', 'Proizvodi', 'Kontakt', 'Usluge', 'Projekti'];

export default function AppHeaderVthree({ logoPaths, iconPaths }: NavbarResources) {
  return (
    <nav className='w-full bg-divider-lightmode'>
      <div
        title='glavni nav'
        className='w-full flex lg:flex-col items-center justify-center -px--xl---m md:py-5 py-2 xl:-gap--xl---m lg:-gap--desktop---m md:-gap--tablet---m -gap--mobile---m'
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
              width={14}
              height={14}
              className='dark:hidden block'
            />
          </div>
          <div className='lg:hidden block'>
            <Hamburger />
          </div>
        </div>
      </div>
    </nav>
  );
}
