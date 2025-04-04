'use client';

import SpeedDial from '@/app/components/SpeedDial';
import React from 'react';

interface SocialContent {
  layout: 'ver' | 'hor';
}

const SocialContent = ({ layout }: SocialContent) => {
  const handlePrint = () => null;
  return (
    <div className='h-full w-full  block relative'>
      <SpeedDial layout={layout} handlePrint={handlePrint} />
    </div>
  );
};

export default SocialContent;
