import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-clr': '#4E4848',
        'almost-black': '#181816',
        'almost-white': '#F8F7F2',
        'primary-light': '#C3C6B6',
        'secondary-light': '#DDDFD6',
        'primary-dark': '#192E29',
        'secondary-dark': '#11201D',
        accent: '#8B9554',
        error: '#FF7A00',
        success: '#C6FF00',
        info: '#8C946F',
        sutraCardDivider: '#D9D9D9',
        sutraButtonTextColor: '#2E363E',
        sutraContactUsTempBg: '#FBFBFB',
        sutraPlaceholderClr: '#8D8D8D',
        sutraRadioBgUnchecked: '#E0E0E0',
      },

      fontSize: {
        h1: '3.4375rem',
        h2: '2.5rem',
        h3: '1.875rem',
        h4: '1.3125rem',
        body: '1.125rem',
        default: '1rem',
        small: '0.875rem',
        tag: '0.75rem',
        contactFormSidebarHeading: '1.75rem',
      },

      borderRadius: {
        sutraCardBorderRadius: '4px',
        sutraCardTagBorderRadius: '6px',
        sutraContactCardBorderRadius: '10px',
        sutraContactFormButton: '5px',
        sutraObavijestTrakaRadius: '12px',
        // sutraCardBorderRadiusBlog: '200px',
      },

      lineHeight: {
        sutraCardTitleLineHeight: '32px',
      },
      maxWidth: {
        sutraBlogTestMaxWidth: '750px',
        sutraContactUsTempFormWidth: '1200px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar'), require('@tailwindcss/forms')],
};
export default config;
