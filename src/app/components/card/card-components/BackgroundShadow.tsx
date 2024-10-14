import React from 'react';

const BackgroundShadow = () => {
  return (
    <div className='absolute w-full h-full inset-0 pointer-events-none select-none z-10 bg-overlay-dark/45 overflow-hidden'></div>
  );
};

export default BackgroundShadow;
