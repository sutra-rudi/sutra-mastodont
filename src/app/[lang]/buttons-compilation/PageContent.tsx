'use client';

import { SutraButtonBase } from '@/app/components/SutraButton';
import React from 'react';

const PageContent = () => {
  return (
    <div>
      <h2 className='w-full text-h0_2xl font-medium text-center'>BOTUNI</h2>

      <div className='w-full flex items-center gap-4 flex-col'>
        <h3 className='text-h3_md'>Bazni botun</h3>
        <div className='flex items-center justify-start gap-2'>
          <SutraButtonBase innerText='Small Button' size='small' />
          <SutraButtonBase innerText='Base Button' size='normal' />
          <SutraButtonBase innerText='Large Button' size='large' />
        </div>
      </div>
    </div>
  );
};

export default PageContent;
