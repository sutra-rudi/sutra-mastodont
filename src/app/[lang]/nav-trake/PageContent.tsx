'use client';

import { PrimaryDarkButton } from '@/app/components/SutraButton';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight as RightIcon } from 'react-icons/fa6';

interface NavbarResources {
  logoPaths: Record<string, string>;
}

const StaticDemoLinks = ['O nama', 'Proizvodi', 'Kontakt', 'Usluge', 'Projekti'];

const PageContent = ({ logoPaths }: NavbarResources) => {
  return (
    <div>
      <h2>Prvi nav</h2>
      <nav className='w-full bg-divider-lightmode'>
        <div
          title='nad nav'
          className='w-full flex items-center justify-between bg-primarna-tamna h-nad-navbar-xl -px--xl---m'
        >
          <div className='flex items-center justify-start -gap--xl---xl'>
            <div className='flex items-center justify-start gap-4'>
              <div className='w-4 h-4 bg-accent-boja'></div>
              <div className='w-4 h-4 bg-accent-boja'></div>
              <div className='w-4 h-4 bg-accent-boja'></div>
            </div>

            <div className='flex items-center gap-9'>
              <div className='flex items-center justify-start gap-3 text-primarna-svijetla'>
                <div className='w-4 h-4 bg-accent-boja'></div>
                <span>info@sutra.hr</span>
              </div>

              <div className='flex items-center justify-start gap-3 text-primarna-svijetla'>
                <div className='w-4 h-4 bg-accent-boja'></div>
                <span>01 3213 354</span>
              </div>
            </div>
          </div>
        </div>
        <div title='glavni nav' className='w-full flex items-center justify-between  h-navbar-xl -px--xl---m'>
          <Image src={logoPaths.horizontalLight} alt='site logo' width={156} height={40} />

          <div className='flex items-center -gap--xl---l'>
            <div className='flex items-center gap-7'>
              {StaticDemoLinks.map((lnk) => (
                <span key={lnk}>{lnk}</span>
              ))}
            </div>

            <PrimaryDarkButton innerText='Button text' size='base' frontIcon={RightIcon} />

            <div className='w-6 h-6 bg-accent-boja flex items-center justify-center'>LS</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default PageContent;
