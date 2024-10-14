import Image from 'next/image';
import React from 'react';
import TR_shadow from '../../../imageMaterials/t-r-shadow.svg';
import TL_shadow from '../../../imageMaterials/t-l-shadow.svg';
import BR_shadow from '../../../imageMaterials/b-r-shadow.svg';
import BL_shadow from '../../../imageMaterials/b-l-shadow.svg';

interface BackgroundShadow {
  topRight: boolean;
  topLeft: boolean;
  bottomRight: boolean;
  bottomLeft: boolean;
}
const BackgroundShadow = ({ topRight, topLeft, bottomLeft, bottomRight }: BackgroundShadow) => {
  return (
    <div className='absolute w-full h-full inset-0 pointer-events-none select-none z-10 bg-overlay-dark/45 overflow-hidden'>
      {topRight && <Image alt='shadow' src={TR_shadow} fill className='w-full h-full object-cover' />}
      {topLeft && <Image alt='shadow' src={TL_shadow} fill className='w-full h-full object-cover' />}
      {bottomRight && <Image alt='shadow' src={BR_shadow} fill className='w-full h-full object-cover' />}
      {bottomLeft && <Image alt='shadow' src={BL_shadow} fill className='w-full h-full object-cover' />}
    </div>
  );
};

export default BackgroundShadow;
