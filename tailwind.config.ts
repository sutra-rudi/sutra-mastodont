import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        md: '640px',
        lg: '1000px',
        xl: '1440px',
      },
      colors: {
        'almost-black': '#171715',
        'sekundarna-tamna': '#11201D',
        'primarna-tamna': '#192E29',
        'accent-boja': '#8B9554',
        'primarna-svijetla': '#C3C6B6',
        'sekundarna-svijetla': '#DDDFD6',
        'almost-white': '#F8F7F2',
        'dark-mode-bg': '#11201D',
        'light-mode-bg': '#DDDFD6',
        'dark-mode-proziran-bg': '#11201D3D',
        'light-mode-proziran-bg': '#DDDFD68C',
        'heading-color-light-mode': '#192E29',
        'nadnaslov-color-light-mode': '#8B9554',
        'text-light-mode': '#11201D',
        'heading-color-dark-mode': '#C3C6B6',
        'nadnaslov-color-dark-mode': '#8B9554',
        'text-dark-mode': '#DDDFD6',
        'hero-heading-color-light-mode': '#192E29',
        'hero-nadnaslov-color-light-mode': '#8B9554',
        'hero-text-light-mode': '#11201D',
        'hero-heading-color-dark-mode': '#C3C6B6',
        'hero-nadnaslov-color-dark-mode': '#8B9554',
        'hero-text-dark-mode': '#DDDFD6',
        'kartice-autor-datum-light-mode': '#827D7D',
        'kartice-autor-datum-dark-mode': '#C1BABA',
        'dark-mode-obrub': '#8B9554',
        'light-mode-obrub': '#C3C6B6',
        'cta-znaka-dark-mode': '#8B9554',
        'cta-znaka-light-mode': '#8B9554',
        'kartice-divider-light-mode': '#C1BABA',
        'kartice-divider-dark-mode': '#3F3B3B',
        'overlay-dark': '#11201D75',
        'overlay-light': '#FFFFFF7A',
        'gray-dark': '#3F3B3B',
        'error-boja': '#FF7A00',
        'good-boja': '#C6FF00',
        'info-boja': '#8C946F',
        'gray-base': '#827D7D',
        'gray-light': '#C1BABA',
        black: '#000000',
        'brand-color-main': '#FF0000',
        'brand-color-secondary': '#F5D76F',
        white: '#FFFFFF',
        'divider-lightmode': 'var(--setup_glavnih_boja-primarna-svijetla)',
        'divider-darkmode': 'var(--setup_glavnih_boja-primarna-tamna)',
        'blog-pozadina-light-mode': '#F8F7F2',
        'blog-pozadina-dark-mode': '#11201D',
        'blog-datum': '#696A75',
        '--gridcolors-gridbg': '#FCA8E354',
        '--gridcolors-borderspacing': '#FA5ACAA8',
        '--gridcolors-textspacingcolor': '#CD2E9DA8',
      },

      //BG-COLORS-BUTTON
      backgroundImage: {
        sutraGradientButton: 'linear-gradient(180deg, rgba(90,93,82,1) 0%, rgba(36,41,40,1) 100%)',
        sutraGradientButtonDark: 'linear-gradient(180deg, rgba(188,192,175,1) 0%, rgba(178,182,137,1) 100%)',
        'gradient-light': 'linear-gradient(#fffbf6ff 0%, #dcc39dff 100%)',
        'gradient-dark': 'linear-gradient(#5a5d52ff 0%, #242928ff 100%)',
        'gradient-ferlauftamni': 'linear-gradient(#000000ff 0%, #00000000 100%)',
        'gradient-ferlaufbijeli': 'linear-gradient(#ffffffff 0%, #ffffffff 100%)',
        'gradient-light-radial': 'radial-gradient(circle, #fffbf6ff, #dcc39dff)', // Pretpostavljeni radijalni gradijent
        'gradient-dark-radial': 'radial-gradient(circle, #5a5d52ff, #242928ff)', // Pretpostavljeni radijalni gradijent
        'gradient-dark-card': 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
      },
      //OUTLINE
      outlineWidth: {
        sutraButtonOutline: '2px',
        sutraButtonOutlineAsPrim: '1px',
        sutraButtonOutlineAsPrimHover: '2.5px',
      },
      //OPACITY
      opacity: {
        ghostButtonOpacity: '0.5',
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
        //////// FIGMA ///////
        h0_2xl: '4.5rem',
        h1_xl: '3.75rem',
        h2_lg: '3rem',
        h3_md: '2.25rem',
        h4_sm: '1,875rem',
        h5_xs: '1.5rem',
        xl: '1.25rem',
        lg: '1.125rem',
        md: '1rem',
        sm: '0.875rem',
        xs: '0.75rem',
        base: '1rem',

        /// MASTODONT UPDATE

        'h1-xl': ['3.5rem', { lineHeight: '70px', letterSpacing: '-0.03em', fontWeight: '700' }],
        'h1-desktop': ['3rem', { lineHeight: '60px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1-tablet': ['2.25rem', { lineHeight: '43px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1-mobile35': ['1.75rem', { lineHeight: '35px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h2-xl': ['3rem', { lineHeight: '58px', letterSpacing: '-0.03em', fontWeight: '700' }],
        'h2-desktop': ['2.5rem', { lineHeight: '50px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2-tablet': ['2.25rem', { lineHeight: '44px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2-mobile': ['2rem', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h3-xl': ['2.25rem', { lineHeight: '46px', fontWeight: '700' }],
        'h3-desktop': ['2rem', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h3-tablet': ['1.75rem', { lineHeight: '34px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h3-mobile': ['1.5rem', { lineHeight: '32px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h4-xl': ['1.875rem', { fontWeight: '700' }],
        'h4-desktop': ['1.625rem', { lineHeight: '34px', fontWeight: '700' }],
        'h4-tablet': ['1.375rem', { lineHeight: '28px', fontWeight: '700' }],
        'h4-mobile': ['1.25rem', { lineHeight: '26px', fontWeight: '700' }],
        'text-base-l-xl': ['1.25rem', { lineHeight: '28px', fontWeight: '400' }],
        'text-base-l-desktop': ['1.25rem', { lineHeight: '28px', fontWeight: '400' }],
        'text-base-l-mobiletablet': ['1.125rem', { lineHeight: '26px', fontWeight: '400' }],
        'text-base-base-xl': ['1.0625rem', { fontWeight: '400' }],
        'text-base-base-desktop': ['1rem', { lineHeight: '24px', fontWeight: '400' }],
        'text-base-base-mobiletablet': ['1rem', { fontWeight: '400' }],
        'text-base-small-xl': ['0.875rem', { lineHeight: '20px', fontWeight: '400' }],
        'text-base-small-desktop': ['0.75rem', { lineHeight: '18px', fontWeight: '400' }],
        'text-base-small-mobiletablet': ['0.625rem', { fontWeight: '400' }],
        'nadnaslov-xl': ['1.125rem', { fontWeight: '300' }],
        'nadnaslov-desktop': ['1rem', { lineHeight: '24px', fontWeight: '300' }],
        'nadnaslov-tablet': ['0.875rem', { lineHeight: '20px', fontWeight: '300' }],
        'nadnaslov-mobile': ['0.75rem', { lineHeight: '18px', fontWeight: '300' }],
        'button-xl': ['1.375rem', { letterSpacing: '0.01em', fontWeight: '400' }],
        'button-l': ['1.25rem', { letterSpacing: '0.02em', fontWeight: '400' }],
        'button-base': ['1rem', { letterSpacing: '0.02em', fontWeight: '400' }],
        'button-small': ['0.875rem', { letterSpacing: '0.03em', fontWeight: '400' }],
        'button-xs': ['0.875rem', { letterSpacing: '0.04em', fontWeight: '400' }],
        'quote-xl': ['1.375rem', { fontWeight: '700' }],
        'quote-desktop': ['1.25rem', { lineHeight: '30px', fontWeight: '700' }],
        'quote-tablet': ['1.125rem', { lineHeight: '28px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'quote-mobile': ['1rem', { lineHeight: '24px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'captions-xl': ['1rem', { fontWeight: '300' }],
        'captions-desktop': ['1rem', { lineHeight: '24px', fontWeight: '300' }],
        'captions-tablet': ['0.875rem', { lineHeight: '20px', fontWeight: '300' }],
        'captions-mobile': ['0.75rem', { lineHeight: '18px', fontWeight: '300' }],
        'all-caps-xl': ['1.25rem', { fontWeight: '400' }],
        'all-caps-large': ['1.25rem', { lineHeight: '30px', fontWeight: '400' }],
        'all-caps-medium': ['0.875rem', { letterSpacing: '0.01em', fontWeight: '600' }],
        'all-caps-small': ['0.625rem', { letterSpacing: '0.03em', fontWeight: '400' }],
        'menu-tabs-xl': ['1.125rem', { fontWeight: '400' }],
        'menu-tabs-desktop': ['1.125rem', { lineHeight: '28px', letterSpacing: '0.01em', fontWeight: '400' }],
        'menu-tabs-tablet': ['1rem', { letterSpacing: '0.02em', fontWeight: '400' }],
        'menu-tabs-mobile': ['1rem', { letterSpacing: '0.03em', fontWeight: '400' }],
        'tag-xl': ['1rem', { fontWeight: '400' }],
        'tag-desktop': ['0.875rem', { fontWeight: '400' }],
        'tag-tablet': ['0.75rem', { fontWeight: '400' }],
        'tag-mobile': ['0.625rem', { fontWeight: '400' }],
        'brojcanik-xl': ['1.875rem', { fontWeight: '900' }],
        'brojcanik-desktop': ['1.5rem', { fontWeight: '900' }],
        'brojcanik-tablet': ['1.25rem', { fontWeight: '900' }],
        'brojcanik-mobile': ['1.125rem', { fontWeight: '900' }],
      },

      spacing: {
        'element-inside-btn-l': '10px',
        'element-inside-btn-m': '7px',
        'element-inside-btn-s': '5px',

        'tag-element-inside-xl': '10px',
        'tag-element-inside-desktop': '8px',
        'tag-element-inside-tablet': '6px',
        'tag-element-inside-mobile': '5px',

        'xl-slika-sadržaj': '30px',
        'xl-naslov-nadnaslov': '7px',
        'xl-tekst-naslov': '12px',
        'xl-sadržaj-bocna-ikona': '33px',
        'xl-blok-teksta-donjidio': '22px',
        'xl-teksta-unutar-slike-tb': '30px',
        'xl-teksta-unutar-slike-lr': '39px',
        'xl-unutarnji-elementi-slike': '22px',

        'desktop-slika-sadržaj': '20px',
        'desktop-naslov-nadnaslov': '6px',
        'desktop-tekst-naslov': '10px',
        'desktop-sadržaj-bocna-ikona': '22px',
        'desktop-blok-teksta-donjidio': '22px',
        'desktop-teksta-unutar-slike-tb': '30px',
        'desktop-teksta-unutar-slike-lr': '39px',
        'desktop-unutarnji-elementi-slike': '18px',

        'tablet-slika-sadržaj': '20px',
        'tablet-naslov-nadnaslov': '5px',
        'tablet-tekst-naslov': '10px',
        'tablet-sadržaj-bocna-ikona': '15px',
        'tablet-blok-teksta-donjidio': '20px',
        'tablet-teksta-unutar-slike-tb': '30px',
        'tablet-teksta-unutar-slike-lr': '39px',
        'tablet-unutarnji-elementi-slike': '14px',

        'mobile-slika-sadržaj': '20px',
        'mobile-naslov-nadnaslov': '9px',
        'mobile-tekst-naslov': '4px',
        'mobile-sadržaj-bocna-ikona': '11px',
        'mobile-blok-teksta-donjidio': '22px',
        'mobile-teksta-unutar-slike-tb': '18px',
        'mobile-teksta-unutar-slike-lr': '18px',
        'mobile-unutarnji-elementi-slike': '10px',

        '--xl-h1-2---naslov-nadnaslov': '18px',
        '--xl-h1-2---naslov-tekst': '40px',
        '--xl-h1-2---sadrzaj-cta': '56px',
        '--xl-h1-2---cta-udaljenost': '28px',
        '--xl-h3-4---naslov-nadnaslov': '12px',
        '--xl-h3-4---naslov-tekst': '28px',
        '--xl-h3-4---sadrzaj-cta': '104px',
        '--gridcolors-gridbg': '#FCA8E354',
        '--gridcolors-borderspacing': '#FA5ACAA8',
        '--gridcolors-textspacingcolor': '#CD2E9DA8',
        '--xl-h3-4---cta-udaljenost': '12px',
        '--xl---micro': '6px',
        '--xl---xs': '12px',
        '--xl---s': '18px',
        '--xl---m': '28px',
        '--xl---l': '40px',
        '--xl---xl': '56px',
        '--xl---2xl': '72px',
        '--xl---3xl': '104px',
        '--xl---4xl': '140px',
        '--xl---5xl': '180px',
        '--xl---section-l': '320px',
        '--xl---section-xl': '384px',
        '--xl---section-2xl': '448px',
        '--xl---section-3xl': '512px',
        '--xl-liste-udaljenost-u-listama-big': '40px',
        '--xl-liste-udaljenost-u-listama-small': '18px',
        '--xl-maxwidth-naslov': '1200px',
        '--xl-maxwidth-blokispodnaslova': '1000px',

        '--desktop-h1-2---naslov-nadnaslov': '12px',
        '--desktop-h1-2---naslov-tekst': '40px',
        '--desktop-h1-2---sadrzaj-cta': '56px',
        '--desktop-h1-2---cta-udaljenost': '16px',
        '--desktop-h3-4---naslov-nadnaslov': '8px',
        '--desktop-h3-4---naslov-tekst': '28px',
        '--desktop-h3-4---sadrzaj-cta': '104px',
        '--desktop---micro': '4px',
        '--desktop-h3-4---cta-udaljenost': '12px',
        '--desktop---xs': '8px',
        '--desktop---s': '12px',
        '--desktop---m': '16px',
        '--desktop---l': '24px',
        '--desktop---xl': '32px',
        '--desktop---2xl': '48px',
        '--desktop---3xl': '64px',
        '--desktop---4xl': '96px',
        '--desktop---5xl': '128px',
        '--desktop---section-l': '196px',
        '--desktop---section-xl': '256px',
        '--desktop---section-2xl': '320px',
        '--desktop---section-3xl': '384px',
        '--desktop-liste-udaljenost-u-listama-big': '24px',
        '--desktop-liste-udaljenost-u-listama-small': '24px',
        '--desktop-maxwidth-naslov': '999px',
        '--desktop-maxwidth-blokispodnaslova': '900px',

        '--tablet-h1-2---naslov-nadnaslov': '12px',
        '--tablet-h1-2---naslov-tekst': '40px',
        '--tablet-h1-2---sadrzaj-cta': '28px',
        '--tablet-h1-2---cta-udaljenost': '28px',
        '--tablet-h3-4---naslov-nadnaslov': '6px',
        '--tablet-h3-4---naslov-tekst': '28px',
        '--tablet-h3-4---sadrzaj-cta': '104px',
        '--tablet---micro': '3px',
        '--tablet-h3-4---cta-udaljenost': '12px',
        '--tablet---xs': '6px',
        '--tablet---s': '9px',
        '--tablet---m': '12px',
        '--tablet---l': '18px',
        '--tablet---xl': '24px',
        '--tablet---2xl': '36px',
        '--tablet---3xl': '48px',
        '--tablet---4xl': '72px',
        '--tablet---5xl': '96px',
        '--tablet---section-l': '148px',
        '--tablet---section-xl': '192px',
        '--tablet---section-2xl': '240px',
        '--tablet---section-3xl': '288px',
        '--tablet-liste-udaljenost-u-listama-big': '24px',
        '--tablet-liste-udaljenost-u-listama-small': '9px',
        '--tablet-maxwidth-naslov': '1200px',
        '--tablet-maxwidth-blokispodnaslova': '1000px',

        '--mobile-h1-2---naslov-nadnaslov': '12px',
        '--mobile-h1-2---naslov-tekst': '40px',
        '--mobile-h1-2---sadrzaj-cta': '28px',
        '--mobile-h1-2---cta-udaljenost': '28px',
        '--mobile-h3-4---naslov-nadnaslov': '4px',
        '--mobile-h3-4---naslov-tekst': '28px',
        '--mobile-h3-4---sadrzaj-cta': '104px',
        '--mobile---micro': '2px',
        '--mobile-h3-4---cta-udaljenost': '12px',
        '--mobile---xs': '4px',
        '--mobile---s': '6px',
        '--mobile---m': '8px',
        '--mobile---l': '12px',
        '--mobile---xl': '16px',
        '--mobile---2xl': '24px',
        '--mobile---3xl': '32px',
        '--mobile---4xl': '48px',
        '--mobile---5xl': '64px',
        '--mobile---section-l': '96px',
        '--mobile---section-xl': '128px',
        '--mobile---section-2xl': '160px',
        '--mobile---section-3xl': '192px',
        '--mobile-liste-udaljenost-u-listama-big': '12px',
        '--mobile-liste-udaljenost-u-listama-small': '6px',

        '--xl-cta-group': '28px',
        '--desktop-cta-group': '18px',
        '--tablet-cta-group': '12px',
        '--mobile-cta-group': '10px',

        'mobile-maxwidth-naslov': '580px',
        'mobile-maxwidth-blokispodnaslova': '600px',
      },

      padding: {
        'botun-xl-td': '10px',
        'botun-xl-lr': '15px',
        'botun-l-td': '8px',
        'botun-l-lr': '11px',
        'botun-base-td': '8px',
        'botun-base-lr': '10px',
        'botun-s-td': '6px',
        'botun-s-lr': '10px',
        'botun-xs-td': '6px',
        'botun-xs-lr': '10px',
        'tag-xl-td': '8px',
        'tag-xl-lr': '11px',
        'tag-desktop-td': '8px',
        'tag-desktop-lr': '10px',
        'tag-tablet-td': '7px',
        'tag-tablet-lr': '10px',
        'tag-mobile-td': '3px',
        'tag-mobile-lr': '6px',
        'xl-horizontal-teksta': '24px',
        'xl-vertical-teksta': '24px',
        'xl-opticki': '8px',
        'xl-sadržaj-kartice': '25px',
        'desktop-horizontal-teksta': '24px',
        'desktop-vertical-teksta': '24px',
        'desktop-opticki': '8px',
        'desktop-sadržaj-kartice': '25px',
        'tablet-horizontal-teksta': '24px',
        'tablet-vertical-teksta': '24px',
        'tablet-opticki': '8px',
        'tablet-sadržaj-kartice': '25px',
        'mobile-horizontal-teksta': '11px',
        'mobile-vertical-teksta': '11px',
        'mobile-opticki': '8px',
        'mobile-sadržaj-kartice': '11px',
      },

      borderRadius: {
        'botun-xl': '1px',
        'botun-l': '1px',
        'botun-base': '7px',
        'botun-s': '6px',
        'botun-xs': '8px',
        'single-icon-xl': '22px',
        'single-icon-l': '22px',
        'single-icon-base': '22px',
        'single-icon-s': '22px',
        'single-icon-xs': '22px',
        'tag-xl': '33px',
        'tag-desktop': '22px',
        'tag-tablet': '17px',
        'tag-mobile': '55px',
        'xl-vanjski-okvir-total': '25px',
        'xl-vanjski-okvir-top': '30px',
        'xl-vanjski-okvir-bottom': '10px',
        'xl-unutarnja-slika-tl': '15px',
        'xl-unutarnja-slika-tr': '0px',
        'xl-unutarnja-slika-bl': '15px',
        'xl-unutarnja-slika-br': '0px',
        'xl-unutarnja-slika-total': '15px',
        'desktop-vanjski-okvir-total': '25px',
        'desktop-vanjski-okvir-top': '30px',
        'desktop-vanjski-okvir-bottom': '10px',
        'desktop-unutarnja-slika-tl': '15px',
        'desktop-unutarnja-slika-tr': '0px',
        'desktop-unutarnja-slika-bl': '15px',
        'desktop-unutarnja-slika-br': '0px',
        'desktop-unutarnja-slika-total': '15px',
        'tablet-vanjski-okvir-total': '25px',
        'tablet-vanjski-okvir-top': '30px',
        'tablet-vanjski-okvir-bottom': '10px',
        'tablet-unutarnja-slika-tl': '15px',
        'tablet-unutarnja-slika-tr': '0px',
        'tablet-unutarnja-slika-bl': '15px',
        'tablet-unutarnja-slika-br': '0px',
        'tablet-unutarnja-slika-total': '15px',
        'mobile-vanjski-okvir-total': '25px',
        'mobile-vanjski-okvir-top': '30px',
        'mobile-vanjski-okvir-bottom': '10px',
        'mobile-unutarnja-slika-tl': '15px',
        'mobile-unutarnja-slika-tr': '0px',
        'mobile-unutarnja-slika-bl': '15px',
        'mobile-unutarnja-slika-br': '0px',
        'mobile-unutarnja-slika-total': '15px',
      },

      width: {
        'veličina-kruga-avatar-xl': '26px',
        'veličina-kruga-avatar-desktop': '24px',
        'veličina-kruga-avatar-tablet': '22px',
        'veličina-kruga-avatar-mobile': '18px',
        'divider-xl': '4px',
        'divider-desktop': '2px',
        'divider-tablet': '2px',
        'divider-mobile': '1px',
      },
      height: {
        'veličina-kruga-avatar-xl': '26px',
        'veličina-kruga-avatar-desktop': '24px',
        'veličina-kruga-avatar-tablet': '22px',
        'veličina-kruga-avatar-mobile': '18px',
        'divider-xl': '4px',
        'divider-desktop': '2px',
        'divider-tablet': '2px',
        'divider-mobile': '1px',
      },
      content: {
        'datum-divider': '" "',
        'datum-divider-kosacrta': '"/"',
        'divider-između-stavki': '" • "',
      },

      lineHeight: {
        sutraCardTitleLineHeight: '32px',
      },
      maxWidth: {
        sutraBlogTestMaxWidth: '750px',
        sutraContactUsTempFormWidth: '1200px',
        '--xl-maxwidth-naslov': '1200px',
        '--xl-maxwidth-blokispodnaslova': '1000px',
        '--desktop-maxwidth-naslov': '999px',
        '--desktop-maxwidth-blokispodnaslova': '900px',
        '--tablet-maxwidth-naslov': '1200px',
        '--tablet-maxwidth-blokispodnaslova': '1000px',
        '--mobile-maxwidth-naslov': '580px',
        '--mobile-maxwidth-blokispodnaslova': '600px',
      },
      fontFamily: {
        SERIF: ['Poltawski Nowy', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar'), require('@tailwindcss/forms')],
};
export default config;
