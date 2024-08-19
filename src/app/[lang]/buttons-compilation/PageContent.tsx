'use client';

import { SutraButtonBase } from '@/app/components/SutraButton';
import React from 'react';

const PageContent = () => {
  return (
    <div>
      <h2 className='w-full text-h0_2xl font-medium text-center'>BOTUNI</h2>

      <div className='w-full flex items-center gap-4 flex-col'>
        <h3 className='text-h3_md'>Bazni botun + accent botun</h3>
        <div className='flex items-center justify-start gap-2'>
          <SutraButtonBase innerText='Small Button' size='small' isAccentButton={false} />
          <SutraButtonBase innerText='Base Button' size='normal' isAccentButton={false} />
          <SutraButtonBase innerText='Large Button' size='large' isAccentButton={false} />
          <SutraButtonBase innerText='Accent Button' size='normal' isAccentButton={true} />
        </div>
      </div>
    </div>
  );
};

export default PageContent;
