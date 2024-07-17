import React from 'react';

export const AppButtonDefault = ({
  buttonText,
  action,
  icon = null,
}: {
  buttonText: string;
  action: () => any;
  icon?: any;
}) => {
  return (
    <button
      onClick={action}
      type='button'
      className='transition-all ease-in-out text-sutraButtonTextColor bg-primary-light hover:bg-secondary-dark hover:text-primary-light focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center gap-2 dark:bg-transparent dark:text-accent dark:hover:bg-secondary-light dark:focus:ring-accent group dark:hover:text-secondary-dark'
    >
      {buttonText}
      <div className='dark:block hidden text-inherit text-sm'>{icon && icon}</div>
    </button>
  );
};

export const AppButtonClean = ({
  buttonText,
  action,
  icon = null,
}: {
  buttonText: string;
  action: () => any;
  icon?: any;
}) => {
  return (
    <button
      onClick={action}
      type='button'
      className='text-white bg-primary-dark hover:bg-secondary-dark focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center gap-2 dark:bg-primary-light dark:hover:bg-secondary-light dark:focus:ring-accent group'
    >
      {buttonText}
    </button>
  );
};

export const AppButtonGradient = ({
  buttonText,
  action,
  icon = null,
}: {
  buttonText: string;
  action: () => any;
  icon?: any;
}) => {
  return (
    <button
      onClick={action}
      className='relative inline-flex items-center gap-2 justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800'
    >
      <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
        {buttonText}
      </span>
    </button>
  );
};

export const AppButtonOutline = ({
  buttonText,
  action,
  icon = null,
}: {
  buttonText: string;
  action: () => any;
  icon?: any;
}) => {
  return (
    <button
      onClick={action}
      type='button'
      className='text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 inline-flex items-center gap-2'
    >
      {buttonText}

      {icon && icon}
    </button>
  );
};
