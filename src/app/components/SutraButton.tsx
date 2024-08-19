'use client';

import React from 'react';

interface SutraButtonBaseInterface {
  size: 'small' | 'normal' | 'large';
  innerText: string;
  isAccentButton: boolean;
}

export const SutraButtonBase = ({ innerText, size, isAccentButton }: SutraButtonBaseInterface) => {
  return (
    <button
      role='button'
      className={`${
        size === 'small'
          ? 'text-sm rounded-sutraButtonBorderRadiusSmall'
          : size === 'normal'
          ? 'text-base rounded-sutraButtonBorderRadiusBase'
          : size === 'large'
          ? 'text-lg rounded-sutraButtonBorderRadiusLarge'
          : ''
      } transition-all ease-in-out py-[0.75rem] px-[1.125rem]  hover:scale-105 active:outline active:outline-sutraButtonOutline ${
        isAccentButton
          ? 'bg-accent text-sutraButtonText hover:text-accent hover:bg-primary-dark active:outline-accent'
          : 'bg-primary-dark text-sutraButtonText  dark:bg-primary-light dark:text-primary-dark hover:bg-primary-light hover:text-primary-dark active:outline-accent dark:hover:bg-primary-dark dark:hover:text-secondary-light'
      }  `}
    >
      {innerText}
    </button>
  );
};
