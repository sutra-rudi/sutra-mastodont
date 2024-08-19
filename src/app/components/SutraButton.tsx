'use client';

import React from 'react';

interface SutraButtonBaseInterface {
  size: 'small' | 'normal' | 'large';
  innerText: string;
}

export const SutraButtonBase = ({ innerText, size }: SutraButtonBaseInterface) => {
  return (
    <button
      role='button'
      className={`${
        size === 'small' ? 'text-sm' : size === 'normal' ? 'text-base' : size === 'large' ? 'text-lg' : ''
      } transition-all ease-in-out py-[0.75rem] px-[1.125rem] bg-primary-dark text-sutraButtonText rounded-sutraButtonBorderRadius dark:bg-primary-light dark:text-primary-dark hover:bg-primary-light hover:text-primary-dark hover:scale-105 active:outline active:outline-sutraButtonOutline active:outline-accent dark:hover:bg-primary-dark dark:hover:text-secondary-light`}
    >
      {innerText}
    </button>
  );
};
