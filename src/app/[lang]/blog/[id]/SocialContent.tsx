'use client';

import SpeedDial from '@/app/components/SpeedDial';
import React from 'react';

const SocialContent = () => {
  const handlePrint = () => null;
  return (
    <div className='h-full w-full  block relative'>
      <SpeedDial handlePrint={handlePrint} />
    </div>
  );
};

export default SocialContent;
