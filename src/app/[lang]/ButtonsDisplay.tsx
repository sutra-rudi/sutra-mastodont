'use client';

import React from 'react';
import { AppButtonClean, AppButtonDefault, AppButtonGradient } from '../components/AppButton';
import toast from 'react-hot-toast';

const ButtonsDisplay = () => {
  const customToast = () =>
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-primary-light dark:bg-primary-dark shadow-lg rounded-lg pointer-events-auto justify-between items-center flex ring-1 ring-accent ring-opacity-5 p-4`}
      >
        <div className='flex-1 w-0 '>
          <div className='flex items-start'>
            <div className='flex-shrink-0 pt-0.5'>
              <picture>
                <img
                  className='h-10 w-10 rounded-full'
                  src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                  alt=''
                />
              </picture>
            </div>
            <div className='ml-3 flex-1'>
              <p className='text-sm font-medium text-gray-900'>Emilia Gates</p>
              <p className='mt-1 text-sm text-gray-500'>Sure! 8:30pm works great!</p>
            </div>
          </div>
        </div>

        <AppButtonDefault action={() => toast.dismiss(t.id)} buttonText='Zatvori' />
      </div>
    ));

  return (
    <section>
      <h2 className='w-full text-center text-7xl font-semibold pt-8'>Buttons display</h2>
      <div className='max-w-[1225px] mx-auto my-8 flex place-items-center gap-6'>
        <AppButtonDefault buttonText='Prvi sa ikonom' action={customToast} />
        <AppButtonClean buttonText='Prvi bez ikone' action={customToast} />
        <AppButtonGradient buttonText='Gradient botun' action={() => {}} />
      </div>
    </section>
  );
};

export default ButtonsDisplay;
