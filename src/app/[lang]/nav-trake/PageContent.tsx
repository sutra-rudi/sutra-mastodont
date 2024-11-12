'use client';

import Image from 'next/image';
import React from 'react';

interface NavbarResources {
  logoPaths: Record<string, string>;
}

const PageContent = ({ logoPaths }: NavbarResources) => {
  return (
    <div>
      <h2>Prvi nav</h2>
      <nav className='w-full flex items-center bg-divider-lightmode h-navbar-xl'>
        <Image src={logoPaths.logoLight} alt='site logo' width={156} height={40} />
      </nav>
    </div>
  );
};

export default PageContent;
