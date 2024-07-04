import React from 'react';

export const AppButtonDefault = ({ buttonText, action }: { buttonText: string; action: () => any }) => {
  return (
    <button
      onClick={action}
      type='button'
      className='text-white bg-primary-dark hover:bg-secondary-dark focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-primary-light dark:hover:bg-secondary-light dark:focus:ring-accent group'
    >
      {buttonText}
      <svg
        className='rtl:rotate-180 w-3.5 h-3.5 ms-2 group-hover:translate-x-2 transition-transform duration-300'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 14 10'
      >
        <path
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M1 5h12m0 0L9 1m4 4L9 9'
        />
      </svg>
    </button>
  );
};

export const AppButtonClean = ({ buttonText, action }: { buttonText: string; action: () => any }) => {
  return (
    <button
      onClick={action}
      type='button'
      className='text-white bg-primary-dark hover:bg-secondary-dark focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-primary-light dark:hover:bg-secondary-light dark:focus:ring-accent group'
    >
      {buttonText}
    </button>
  );
};

export const AppButtonGradient = ({ buttonText, action }: { buttonText: string; action: () => any }) => {
  return (
    <button
      onClick={action}
      className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800'
    >
      <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
        {buttonText}
      </span>
    </button>
  );
};
