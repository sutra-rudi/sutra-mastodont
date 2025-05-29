import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // # Screens
      screens: {
        md: '640px',
        lg: '1000px',
        xl: '1550px',
      },

      container: {
        screens: {
          xl: '1350px',
          lg: '1000px',
          md: '640px',
        },
      },

      // # Colors
      colors: {
        // ## Primary and Secondary Colors
        'almost-black': '#131518', // --setup_glavnih_boja-almost-black (izmijenjeno iz #161818)
        'sekundarna-tamna': '#174173', // --setup_glavnih_boja-sekundarna-tamna (izmijenjeno iz #001D29)
        'primarna-tamna': '#175FB4', // --setup_glavnih_boja-primarna-tamna (izmijenjeno iz #6A6A6A)
        'accent-boja': '#E3B507', // --setup_glavnih_boja-accent-boja (izmijenjeno iz #FFE70E)
        'primarna-svijetla': '#1583C7', // --setup_glavnih_boja-primarna-svijetla (izmijenjeno iz #87DCDB)
        'sekundarna-svijetla': '#5EC0E6', // --setup_glavnih_boja-sekundarna-svijetla (izmijenjeno iz #D1FFFE)
        'almost-white': '#EEF8FF', // --setup_glavnih_boja-almost-white (izmijenjeno iz #EEFEFF)

        // --------------------------------------------------

        // ## Gray Colors
        'gray-dark': '#3F3B3B', // --gray-brand-gray-dark
        'gray-light': '#C1BABA', // --gray-brand-gray-light
        'gray-base': '#827D7D', // --gray-brand-gray-base

        // --------------------------------------------------

        // ## Text and Heading Colors
        'text-dark-mode': '#EEF8FF', // --text_and_headings_colors-text-dark-mode (izmijenjeno)
        'text-light-mode': '#174173', // --text_and_headings_colors-text-light-mode (izmijenjeno)
        'heading-color-light-mode': '#174173', // --text_and_headings_colors-heading-color-light-mode (izmijenjeno)
        'heading-color-dark-mode': '#EEF8FF', // --text_and_headings_colors-heading-color-dark-mode (izmijenjeno)
        'nadnaslov-color-light-mode': '#5EC0E6', // --text_and_headings_colors-nadnaslov-color-light-mode (izmijenjeno)
        'nadnaslov-color-dark-mode': '#E3B507', // --text_and_headings_colors-nadnaslov-color-dark-mode (izmijenjeno)

        'hero-heading-color-light-mode': '#175FB4', // --text_and_headings_colors-hero-heading-color-light-mode2 (izmijenjeno)
        'hero-nadnaslov-color-light-mode': '#5EC0E6', // --text_and_headings_colors-hero-nadnaslov-color-light-mode (izmijenjeno)
        'hero-text-light-mode': '#174173', // --text_and_headings_colors-hero-text-light-mode (izmijenjeno)

        'hero-heading-color-dark-mode': '#EEF8FF', // --text_and_headings_colors-hero-heading-color-dark-mode (izmijenjeno)
        'hero-nadnaslov-color-dark-mode': '#E3B507', // --text_and_headings_colors-hero-nadnaslov-color-dark-mode (izmijenjeno)
        'hero-text-dark-mode': '#5EC0E6', // --text_and_headings_colors-hero-text-dark-mode (izmijenjeno)

        'kartice-heading-light-mode': '#175FB4', // --text_and_headings_colors-kartice-heading-light-mode (izmijenjeno)
        'kartice-heading-dark-mode': '#1583C7', // --text_and_headings_colors-kartice-heading-dark-mode (izmijenjeno)
        'kartice-tekst-light-mode': '#174173', // --text_and_headings_colors-kartice-tekst-light-mode (izmijenjeno)
        'kartice-tekst-dark-mode': '#5EC0E6', // --text_and_headings_colors-kartice-tekst-dark-mode (izmijenjeno)
        'kartice-autor-datum-light-mode': '#827D7D', // --text_and_headings_colors-kartice-autor-datum-6min-read-light-mode
        'kartice-autor-datum-dark-mode': '#C1BABA', // --text_and_headings_colors-kartice-autor-datum-6min-read-dark-mode
        'text-quote-light-mode': '#174173', // --text_and_headings_colors-text-quote-light-mode (izmijenjeno)
        'text-quote-dark-mode': '#5EC0E6', // --text_and_headings_colors-text-quote-dark-mode (izmijenjeno)

        // --------------------------------------------------

        // ## Card Background and Borders
        'dark-mode-bg': '#174173', // --pozadina_obrub_kartica-dark-mode-bg (izmijenjeno)
        'light-mode-bg': '#5EC0E6', // --pozadina_obrub_kartica-light-mode-bg (izmijenjeno)
        'dark-mode-obrub': '#E3B507', // --pozadina_obrub_kartica-dark-mode-obrub (izmijenjeno)
        'light-mode-obrub': '#1583C7', // --pozadina_obrub_kartica-light-mode-obrub (izmijenjeno)

        // --------------------------------------------------

        // ## CTA Colors
        'cta-znaka-dark-mode': '#E3B507', // --pozadina_obrub_kartica-boja-cta-znaka__dark-mode (izmijenjeno)
        'cta-znaka-light-mode': '#E3B507', // --pozadina_obrub_kartica-boja-cta-znaka__light-mode (izmijenjeno)

        // --------------------------------------------------

        // ## Overlay Colors
        'overlay-dark': '#11201D75', // --overlays-overlay-dark
        'overlay-light': '#F0FEFF7A', // --overlays-overlay-light

        // --------------------------------------------------

        // ## Error and Info Colors
        'error-boja': '#A4E6FF', // --new_info_error_boje-error-boja (izmijenjeno iz #00FFC7)
        'good-boja': '#0090C0', // --new_info_error_boje-good-boja
        'info-boja': '#6F9491', // --new_info_error_boje-info-boja

        // --------------------------------------------------

        // ## Black and White
        black: '#000000', // --black_&_white-black
        white: '#FFFFFF', // --black_&_white-white

        // --------------------------------------------------

        // ## Blog Background
        'blog-pozadina-light-mode': '#EEF8FF', // --blog-pozadina-light-mode (izmijenjeno)
        'blog-pozadina-dark-mode': '#174173', // --blog-pozadina-dark-mode (izmijenjeno)

        // --------------------------------------------------

        // ## Grid Colors
        '--gridcolors-gridbg': '#FCA8E307', // --gridcolors-gridbg (izmijenjeno)
        '--gridcolors-borderspacing': '#FA5ACA8C', // --gridcolors-borderspacing (izmijenjeno)
        '--gridcolors-textspacingcolor': '#CD2E9DC4', // --gridcolors-textspacingcolor
      },

      // --------------------------------------------------

      // # Background Images
      backgroundImage: {
        'gradient-light': 'linear-gradient(#f6fffeff 0%, #9ddcd1ff 100%)', // --gradient-gradientlight
        'gradient-dark': 'linear-gradient(#003749ff 0%, #031213ff 100%)', // --gradient-gradientdark
        'gradient-ferlauftamni': 'linear-gradient(#000000ff 0%, #00000000 100%)', // --gradient-ferlauftamni
        'gradient-ferlaufbijeli': 'linear-gradient(#ffffff00 0%, #ffffffff 100%)', // --gradient-ferlaufbijeli
        photogalleryBg: "url('./imageMaterials/photogal-bg.png')",
        footerBg: "url('./imageMaterials/footer-bg.png')",
      },

      // --------------------------------------------------

      // # Outline Width
      outlineWidth: {
        sutraButtonOutline: '2px', // --sutraButtonOutlineWidth
        sutraButtonOutlineAsPrim: '1px', // --sutraButtonOutlineAsPrimWidth
        sutraButtonOutlineAsPrimHover: '2.5px', // --sutraButtonOutlineAsPrimHoverWidth
      },

      // --------------------------------------------------

      // # Opacity
      opacity: {
        ghostButtonOpacity: '0.5', // --ghostButtonOpacity
      },

      // --------------------------------------------------

      // # Font Sizes
      fontSize: {
        // ## Headings
        'h1-xl': ['3.5rem', { lineHeight: '70px', letterSpacing: '-0.03em', fontWeight: '700' }], // --font-size-h1-xl
        'h1-desktop': ['3rem', { lineHeight: '60px', letterSpacing: '-0.04em', fontWeight: '700' }], // --font-size-h1-desktop
        'h1-tablet': ['2.625rem', { lineHeight: '48px', letterSpacing: '-0.02em', fontWeight: '700' }], // --font-size-h1-tablet
        'h1-mobile35': ['2.25rem', { lineHeight: '41px', letterSpacing: '-0.01em', fontWeight: '700' }], // --font-size-h1-mobile35

        'h2-xl': ['3rem', { lineHeight: '58px', letterSpacing: '-0.03em', fontWeight: '700' }], // --font-size-h2-xl
        'h2-desktop': ['3rem', { lineHeight: '50px', letterSpacing: '-0.02em', fontWeight: '700' }], // --font-size-h2-desktop
        'h2-tablet': ['2.25rem', { lineHeight: '44px', letterSpacing: '-0.02em', fontWeight: '700' }], // --font-size-h2-tablet
        'h2-mobile': ['2rem', { lineHeight: '42px', letterSpacing: '-0.02em', fontWeight: '700' }], // --font-size-h2-mobile

        'h3-xl': ['2.125rem', { lineHeight: '46px', letterSpacing: '0em', fontWeight: '700' }], // --font-size-h3-xl
        'h3-desktop': ['2rem', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '700' }], // --font-size-h3-desktop
        'h3-tablet': ['1.75rem', { lineHeight: '34px', letterSpacing: '-0.02em', fontWeight: '700' }], // --font-size-h3-tablet
        'h3-mobile': ['1.5rem', { lineHeight: '32px', letterSpacing: '-0.02em', fontWeight: '700' }], // --font-size-h3-mobile

        'h4-xl': ['1.75rem', { lineHeight: '34px', fontWeight: '500' }], // --font-size-h4-xl
        'h4-desktop': ['1.625rem', { lineHeight: '36px', fontWeight: '500' }], // --font-size-h4-desktop
        'h4-tablet': ['1.375rem', { lineHeight: '28px', fontWeight: '500' }], // --font-size-h4-tablet
        'h4-mobile': ['1.25rem', { lineHeight: '28px', fontWeight: '500' }], // --font-size-h4-mobile

        // --------------------------------------------------

        // ## Text Sizes
        'text-base-l-xl': ['1.25rem', { lineHeight: '29px', fontWeight: '500' }], // --font-size-text-base-l-xl
        'text-base-l-desktop': ['1.25rem', { lineHeight: '28px', fontWeight: '500' }], // --font-size-text-base-l-desktop
        'text-base-l-mobiletablet': ['1.125rem', { lineHeight: '24px', fontWeight: '500' }], // --font-size-text-base-l-mobiletablet

        'text-base-base-xl': ['1.0625rem', { lineHeight: '148%', fontWeight: '500' }], // --font-size-text-base-base-xl
        'text-base-base-desktop': ['1rem', { lineHeight: '26px', fontWeight: '500' }], // --font-size-text-base-base-desktop
        'text-base-base-mobiletablet': ['1rem', { lineHeight: '135%', fontWeight: '500' }], // --font-size-text-base-base-mobiletablet

        'text-base-small-xl': ['0.875rem', { lineHeight: '20px', fontWeight: '500' }], // --font-size-text-base-small-xl
        'text-base-small-desktop': ['0.75rem', { lineHeight: '18px', fontWeight: '500' }], // --font-size-text-base-small-desktop
        'text-base-small-mobiletablet': ['0.625rem', { lineHeight: '15px', fontWeight: '500' }], // --font-size-text-base-small-mobiletablet

        // --------------------------------------------------

        // ## Additional Typography
        'nadnaslov-xl': ['1.125rem', { fontWeight: '300' }], // --font-size-nadnaslov-xl
        'nadnaslov-desktop': ['1rem', { lineHeight: '24px', fontWeight: '300' }], // --font-size-nadnaslov-desktop
        'nadnaslov-tablet': ['0.875rem', { lineHeight: '20px', fontWeight: '300' }], // --font-size-nadnaslov-tablet
        'nadnaslov-mobile': ['0.75rem', { lineHeight: '18px', fontWeight: '300' }], // --font-size-nadnaslov-mobile

        // ## Button Typography
        'button-JUMBO': ['1.125rem', { letterSpacing: '0.01em', fontWeight: '500' }], // --font-size-button-jumbo
        'button-xl': ['1.25rem', { letterSpacing: '0.02em', fontWeight: '500' }], // --font-size-button-xl
        'button-desktop': ['1rem', { letterSpacing: '0.02em', fontWeight: '500', lineHeight: '1.28' }], // --font-size-button-desktop (dodali smo lineHeight iz Figma)
        'button-tablet': ['0.875rem', { letterSpacing: '0.03em', fontWeight: '500' }], // --font-size-button-tablet
        'button-mobile': ['0.875rem', { letterSpacing: '0.04em', fontWeight: '500' }], // --font-size-button-mobile

        'quote-xl': ['1.375rem', { fontWeight: '200', lineHeight: '138%' }], // --font-size-quote-xl
        'quote-desktop': ['1.25rem', { lineHeight: '30px', fontWeight: '200' }], // --font-size-quote-desktop
        'quote-tablet': ['1.125rem', { lineHeight: '28px', letterSpacing: '-0.02em', fontWeight: '200' }], // --font-size-quote-tablet
        'quote-mobile': ['1rem', { lineHeight: '24px', letterSpacing: '-0.02em', fontWeight: '200' }], // --font-size-quote-mobile

        'captions-xl': ['1rem', { lineHeight: '23px', fontWeight: '300' }], // --font-size-captions-xl
        'captions-desktop': ['1rem', { lineHeight: '24px', fontWeight: '300' }], // --font-size-captions-desktop
        'captions-tablet': ['0.875rem', { lineHeight: '22px', fontWeight: '300' }], // --font-size-captions-tablet
        'captions-mobile': ['0.75rem', { lineHeight: '18px', fontWeight: '300' }], // --font-size-captions-mobile

        'all-caps-xl': ['1.25rem', { lineHeight: '122%', fontWeight: '400' }], // --font-size-all-caps-xl
        'all-caps-large': ['1.25rem', { lineHeight: '25px', fontWeight: '400' }], // --font-size-all-caps-large
        'all-caps-medium': ['0.875rem', { letterSpacing: '0.01em', lineHeight: '18px', fontWeight: '400' }], // --font-size-all-caps-medium
        'all-caps-small': ['0.625rem', { letterSpacing: '0.03em', lineHeight: '144%', fontWeight: '400' }], // --font-size-all-caps-small

        'menu-tabs-xl': ['1.125rem', { fontWeight: '500' }], // --font-size-menu-tabs-xl
        'menu-tabs-xlhover': ['1.125rem', { fontWeight: '500' }], // --font-size-menu-tabs-xlhover
        'menu-tabs-desktop': ['1rem', { lineHeight: '28px', letterSpacing: '0.01em', fontWeight: '500' }], // --font-size-menu-tabs-desktop
        'menu-tabs-desktophover': ['1.125rem', { fontWeight: '500' }], // --font-size-menu-tabs-desktophover
        'menu-tabs-tablet': ['1.5rem', { letterSpacing: '0.02em', fontWeight: '500' }], // --font-size-menu-tabs-tablet
        'menu-tabs-tablethover': ['1rem', { fontWeight: '500' }], // --font-size-menu-tabs-tablethover
        'menu-tabs-mobile': ['1.375rem', { letterSpacing: '0.03em', fontWeight: '500' }], // --font-size-menu-tabs-mobile
        'menu-tabs-mobilehover': ['1rem', { fontWeight: '500' }], // --font-size-menu-tabs-mobilehover

        'tag-xl': ['1rem', { fontWeight: '400' }], // --font-size-tag-xl
        'tag-desktop': ['0.875rem', { fontWeight: '400' }], // --font-size-tag-desktop
        'tag-tablet': ['0.75rem', { fontWeight: '400' }], // --font-size-tag-tablet
        'tag-mobile': ['0.625rem', { fontWeight: '400' }], // --font-size-tag-mobile

        'brojcanik-xl': ['3.625rem', { fontWeight: '500' }], // --font-size-brojcanik-xl
        'brojcanik-desktop': ['3.75rem', { fontWeight: '500' }], // --font-size-brojcanik-desktop (izmijenjeno – 60px)
        'brojcanik-tablet': ['2.5rem', { fontWeight: '500' }], // --font-size-brojcanik-tablet
        'brojcanik-mobile': ['2.25rem', { fontWeight: '500' }], // --font-size-brojcanik-mobile
      },

      // --------------------------------------------------

      // # Spacing Variables
      spacing: {
        // ## Element Inside Button
        'element-inside-btn-l': '10px', // --botun-options-udaljenost_elemenata_unutar_botuna-size-l
        'element-inside-btn-m': '7px', // --botun-options-udaljenost_elemenata_unutar_botuna-size-m
        'element-inside-btn-s': '5px', // --botun-options-udaljenost_elemenata_unutar_botuna-size-s

        // --------------------------------------------------

        // ## Tag Element Inside
        'tag-element-inside-xl': '10px', // --tag-udaljenost_elemenata_unutar_botuna-xl
        'tag-element-inside-desktop': '8px', // --tag-udaljenost_elemenata_unutar_botuna-desktop
        'tag-element-inside-tablet': '6px', // --tag-udaljenost_elemenata_unutar_botuna-tablet
        'tag-element-inside-mobile': '5px', // --tag-udaljenost_elemenata_unutar_botuna-mobile

        // --------------------------------------------------

        // ## XL Size Spacing
        'xl-slika-sadrzaj': '30px', // --xl-udaljenosti-slika-sadržaj
        'xl-naslov-nadnaslov': '7px', // --xl-udaljenosti-naslova-nadnaslova
        'xl-tekst-naslov': '12px', // --xl-udaljenosti-tekst-naslov
        'xl-sadrzaj-bocna-ikona': '33px', // --xl-udaljenosti-sadržaja-od-bocne-ikone
        'xl-blok-teksta-donjidio': '22px', // --xl-udaljenosti-blok-teksta-donjidio
        'xl-unutarnji-elementi-slike': '22px', // --xl-udaljenosttekstaunutarslike-udaljenost-unutarnjih-elemenata

        // Additional XL Spacing Variables
        '--xl-h1-2---naslov-nadnaslov': '18px', // --xl-h1-2---naslov-nadnaslov
        '--xl-h1-2---naslov-tekst': '40px', // --xl-h1-2---naslov-tekst
        '--xl-h1-2---sadrzaj-cta': '56px', // --xl-h1-2---sadrzaj-cta
        '--xl-h1-2---cta-udaljenost': '28px', // --xl-h1-2---cta-udaljenost
        '--xl-h3-4---naslov-nadnaslov': '12px', // --xl-h3-4---naslov-nadnaslov
        '--xl-h3-4---naslov-tekst': '28px', // --xl-h3-4---naslov-tekst
        '--xl-h3-4---sadrzaj-cta': '72px', // --xl-h3-4---sadrzaj-cta
        '--xl-h3-4---cta-udaljenost': '18px', // --xl-h3-4---cta-udaljenost

        // XL Base Spacing Variables
        '--xl---micro': '6px', // --xl---micro
        '--xl---xs': '12px', // --xl---xs
        '--xl---s': '18px', // --xl---s
        '--xl---m': '28px', // --xl---m
        '--xl---l': '40px', // --xl---l
        '--xl---xl': '56px', // --xl---xl
        '--xl---2xl': '72px', // --xl---2xl
        '--xl---3xl': '104px', // --xl---3xl
        '--xl---4xl': '140px', // --xl---4xl
        '--xl---5xl': '180px', // --xl---5xl
        '--xl---section-l': '320px', // --xl---section-l
        '--xl---section-xl': '384px', // --xl---section-xl
        '--xl---section-2xl': '448px', // --xl---section-2xl
        '--xl---section-3xl': '512px', // --xl---section-3xl

        '--xl-liste-udaljenost-u-listama-big': '40px', // --xl-liste-udaljenost-u-listama-big
        '--xl-liste-udaljenost-u-listama-small': '18px', // --xl-liste-udaljenost-u-listama-small

        // --------------------------------------------------

        // ## Desktop Size Spacing
        'desktop-slika-sadrzaj': '20px', // --desktop-udaljenosti-slika-sadržaj
        'desktop-naslov-nadnaslov': '6px', // --desktop-udaljenosti-naslova-nadnaslova
        'desktop-tekst-naslov': '10px', // --desktop-udaljenosti-tekst-naslov
        'desktop-sadrzaj-bocna-ikona': '22px', // --desktop-udaljenosti-sadržaja-od-bocne-ikone
        'desktop-blok-teksta-donjidio': '22px', // --desktop-udaljenosti-blok-teksta-donjidio
        'desktop-unutarnji-elementi-slike': '18px', // --desktop-udaljenosttekstaunutarslike-udaljenost-unutarnjih-elemenata

        // Additional Desktop Spacing Variables
        '--desktop-h1-2---naslov-nadnaslov': '12px', // --desktop-h1-2---naslov-nadnaslov
        '--desktop-h1-2---naslov-tekst': '24px', // --desktop-h1-2---naslov-tekst
        '--desktop-h1-2---sadrzaj-cta': '32px', // --desktop-h1-2---naslov-tekst
        '--desktop-h1-2---cta-udaljenost': '16px', // --desktop-h1-2---cta-udaljenost
        '--desktop-h3-4---naslov-nadnaslov': '8px', // --desktop-h3-4---naslov-nadnaslov
        '--desktop-h3-4---naslov-tekst': '16px', // --desktop-h3-4---naslov-tekst
        '--desktop-h3-4---sadrzaj-cta': '48px', // --desktop-h3-4---sadrzaj-cta
        '--desktop-h3-4---cta-udaljenost': '12px', // --desktop-h3-4---cta-udaljenost

        // Desktop Base Spacing Variables
        '--desktop---micro': '4px', // --desktop---micro
        '--desktop---xs': '8px', // --desktop---xs
        '--desktop---s': '12px', // --desktop---s
        '--desktop---m': '16px', // --desktop---m
        '--desktop---l': '24px', // --desktop---l
        '--desktop---xl': '32px', // --desktop---xl
        '--desktop---2xl': '48px', // --desktop---2xl
        '--desktop---3xl': '64px', // --desktop---3xl
        '--desktop---4xl': '96px', // --desktop---4xl
        '--desktop---5xl': '128px', // --desktop---5xl
        '--desktop---section-l': '196px', // --desktop---section-l
        '--desktop---section-xl': '256px', // --desktop---section-xl
        '--desktop---section-2xl': '320px', // --desktop---section-2xl
        '--desktop---section-3xl': '384px', // --desktop---section-3xl

        '--desktop-liste-udaljenost-u-listama-big': '24px', // --desktop-liste-udaljenost-u-listama-big
        '--desktop-liste-udaljenost-u-listama-small': '12px', // --desktop-liste-udaljenost-u-listama-small

        // --------------------------------------------------

        // ## Tablet Size Spacing
        'tablet-slika-sadrzaj': '20px', // --tablet-udaljenosti-slika-sadržaj
        'tablet-naslov-nadnaslov': '5px', // --tablet-udaljenosti-naslova-nadnaslova
        'tablet-tekst-naslov': '10px', // --tablet-udaljenosti-tekst-naslov
        'tablet-sadrzaj-bocna-ikona': '15px', // --tablet-udaljenosti-sadržaja-od-bocne-ikone
        'tablet-blok-teksta-donjidio': '20px', // --tablet-udaljenosti-blok-teksta-donjidio
        'tablet-unutarnji-elementi-slike': '14px', // --tablet-udaljenosttekstaunutarslike-udaljenost-unutarnjih-elemenata

        // Additional Tablet Spacing Variables
        '--tablet-h1-2---naslov-nadnaslov': '9px', // --tablet-h1-2---naslov-nadnaslov
        '--tablet-h1-2---naslov-tekst': '18px', // --tablet-h1-2---naslov-tekst
        '--tablet-h1-2---sadrzaj-cta': '36px', // --tablet-h1-2---naslov-tekst
        '--tablet-h1-2---cta-udaljenost': '12px', // --tablet-h1-2---cta-udaljenost
        '--tablet-h3-4---naslov-nadnaslov': '6px', // --tablet-h3-4---naslov-nadnaslov
        '--tablet-h3-4---naslov-tekst': '12px', // --tablet-h3-4---naslov-tekst
        '--tablet-h3-4---sadrzaj-cta': '36px', // --tablet-h3-4---sadrzaj-cta
        '--tablet-h3-4---cta-udaljenost': '9px', // --tablet-h3-4---cta-udaljenost

        // Tablet Base Spacing Variables
        '--tablet---micro': '3px', // --tablet---micro
        '--tablet---xs': '6px', // --tablet---xs
        '--tablet---s': '9px', // --tablet---s
        '--tablet---m': '12px', // --tablet---m
        '--tablet---l': '18px', // --tablet---l
        '--tablet---xl': '24px', // --tablet---xl
        '--tablet---2xl': '36px', // --tablet---2xl
        '--tablet---3xl': '48px', // --tablet---3xl
        '--tablet---4xl': '72px', // --tablet---4xl
        '--tablet---5xl': '96px', // --tablet---5xl
        '--tablet---section-l': '148px', // --tablet---section-l
        '--tablet---section-xl': '192px', // --tablet---section-xl
        '--tablet---section-2xl': '240px', // --tablet---section-2xl
        '--tablet---section-3xl': '288px', // --tablet---section-3xl

        '--tablet-liste-udaljenost-u-listama-big': '18px', // --tablet-liste-udaljenost-u-listama-big
        '--tablet-liste-udaljenost-u-listama-small': '9px', // --tablet-liste-udaljenost-u-listama-small

        // --------------------------------------------------

        // ## Mobile Size Spacing
        'mobile-slika-sadrzaj': '20px', // --mobile-udaljenosti-slika-sadržaj
        'mobile-naslov-nadnaslov': '9px', // --mobile-udaljenosti-naslova-nadnaslova
        'mobile-tekst-naslov': '4px', // --mobile-udaljenosti-tekst-naslov
        'mobile-sadrzaj-bocna-ikona': '11px', // --mobile-udaljenosti-sadržaja-od-bocne-ikone
        'mobile-blok-teksta-donjidio': '22px', // --mobile-udaljenosti-blok-teksta-donjidio
        'mobile-unutarnji-elementi-slike': '10px', // --mobile-udaljenosttekstaunutarslike-udaljenost-unutarnjih-elemenata

        // Additional Mobile Spacing Variables
        '--mobile-h1-2---naslov-nadnaslov': '6px', // --mobile-h1-2---naslov-nadnaslov
        '--mobile-h1-2---naslov-tekst': '12px', // --mobile-h1-2---naslov-tekst
        '--mobile-h1-2---sadrzaj-cta': '32px', // --mobile-h1-2---naslov-tekst
        '--mobile-h1-2---cta-udaljenost': '8px', // --mobile-h1-2---cta-udaljenost
        '--mobile-h3-4---naslov-nadnaslov': '4px', // --mobile-h3-4---naslov-nadnaslov
        '--mobile-h3-4---naslov-tekst': '8px', // --mobile-h3-4---naslov-tekst
        '--mobile-h3-4---sadrzaj-cta': '32px', // --mobile-h3-4---sadrzaj-cta
        '--mobile-h3-4---cta-udaljenost': '8px', // --mobile-h3-4---cta-udaljenost

        // Mobile Base Spacing Variables
        '--mobile---micro': '2px', // --mobile---micro
        '--mobile---xs': '4px', // --mobile---xs
        '--mobile---s': '6px', // --mobile---s
        '--mobile---m': '8px', // --mobile---m
        '--mobile---l': '12px', // --mobile---l
        '--mobile---xl': '16px', // --mobile---xl
        '--mobile---2xl': '24px', // --mobile---2xl
        '--mobile---3xl': '32px', // --mobile---3xl
        '--mobile---4xl': '48px', // --mobile---4xl
        '--mobile---5xl': '64px', // --mobile---5xl
        '--mobile---section-l': '96px', // --mobile---section-l
        '--mobile---section-xl': '128px', // --mobile---section-xl
        '--mobile---section-2xl': '160px', // --mobile---section-2xl
        '--mobile---section-3xl': '192px', // --mobile---section-3xl

        '--mobile-liste-udaljenost-u-listama-big': '12px', // --mobile-liste-udaljenost-u-listama-big
        '--mobile-liste-udaljenost-u-listama-small': '6px', // --mobile-liste-udaljenost-u-listama-small
      },

      // --------------------------------------------------

      // # Padding Variables
      padding: {
        // ## Button Padding
        'botun-xl-td': '20px', // --botun-options-botun_xl-td-padding
        'botun-xl-lr': '45px', // --botun-options-botun_xl-lr-padding
        'botun-l-td': '15px', // --botun-options-botun_l-td-padding
        'botun-l-lr': '40px', // --botun-options-botun_l-lr-padding
        'botun-base-td': '13px', // --botun-options-botun_base-td-padding
        'botun-base-lr': '28px', // --botun-options-botun_base-lr-padding
        'botun-s-td': '11px', // --botun-options-botun_s-td-padding
        'botun-s-lr': '24px', // --botun-options-botun_s-lr-padding
        'botun-xs-td': '9px', // --botun-options-botun_xs-td-padding
        'botun-xs-lr': '20px', // --botun-options-botun_xs-lr-padding

        // --------------------------------------------------

        // ## Tag Padding
        'tag-xl-td': '8px', // --tag-xl-td-padding
        'tag-xl-lr': '11px', // --tag-xl-lr-padding
        'tag-desktop-td': '8px', // --tag-desktop-td-padding
        'tag-desktop-lr': '10px', // --tag-desktop-lr-padding
        'tag-tablet-td': '7px', // --tag-tablet-td-padding
        'tag-tablet-lr': '10px', // --tag-tablet-lr-padding
        'tag-mobile-td': '0px', // --tag-mobile-td-padding
        'tag-mobile-lr': '6px', // --tag-mobile-lr-padding
      },

      // --------------------------------------------------

      // # Border Radius Variables
      borderRadius: {
        // ## Button Border Radius
        'botun-xl': '9px', // --botun-options-botun_xl-roundness (izmijenjeno iz '1px')
        'botun-l': '7px', // --botun-options-botun_l-roundness (izmijenjeno iz '1px')
        'botun-base': '7px', // --botun-options-botun_base-roundness (izmijenjeno iz '1px')
        'botun-s': '5px', // --botun-options-botun_s-roundness (izmijenjeno iz '1px')
        'botun-xs': '1px', // --botun-options-botun_xs-roundness (ostaje)

        // --------------------------------------------------

        // ## Tag Border Radius
        'tag-xl': '5px', // --tag-xl-roundness
        'tag-desktop': '4px', // --tag-desktop-roundness
        'tag-tablet': '3px', // --tag-tablet-roundness
        'tag-mobile': '2px', // --tag-mobile-roundness

        // --------------------------------------------------

        // ## Single Icon Border Radius
        'single-icon-xl': '8px', // --single_icon_options-xl-roundness
        'single-icon-l': '8px', // --single_icon_options-l-roundness
        'single-icon-base': '8px', // --single_icon_options-base-roundness
        'single-icon-s': '4px', // --single_icon_options-s-roundness
        'single-icon-xs': '2px', // --single_icon_options-xs-roundness
      },

      // --------------------------------------------------

      // # Width Variables
      width: {
        // ## Avatar Sizes
        'velicina-kruga-avatar-xl': '26px', // --avatar-size-velicina-kruga-avatara-xl
        'velicina-kruga-avatar-desktop': '24px', // --avatar-size-velicina-kruga-avatara-desktop
        'velicina-kruga-avatar-tablet': '22px', // --avatar-size-velicina-kruga-avatara-tablet
        'velicina-kruga-avatar-mobile': '18px', // --avatar-size-velicina-kruga-avatara-mobile

        // --------------------------------------------------

        // ## Divider Sizes
        'divider-xl': '4px', // --divider-xl
        'divider-desktop': '2px', // --divider-desktop
        'divider-tablet': '2px', // --divider-tablet
        'divider-mobile': '1px', // --divider-mobile
      },

      // --------------------------------------------------

      // # Height Variables
      height: {
        // ## Avatar Sizes
        'velicina-kruga-avatar-xl': '26px', // --avatar-size-velicina-kruga-avatara-xl
        'velicina-kruga-avatar-desktop': '24px', // --avatar-size-velicina-kruga-avatara-desktop
        'velicina-kruga-avatar-tablet': '22px', // --avatar-size-velicina-kruga-avatara-tablet
        'velicina-kruga-avatar-mobile': '18px', // --avatar-size-velicina-kruga-avatara-mobile

        // --------------------------------------------------

        // ## Divider Sizes
        'divider-xl': '4px', // --divider-xl
        'divider-desktop': '2px', // --divider-desktop
        'divider-tablet': '2px', // --divider-tablet
        'divider-mobile': '1px', // --divider-mobile

        // --------------------------------------------------

        // ## Navbar Heights
        'navbar-xl': '60px', // --navbar-xl-navbar-visina
        'nad-navbar-xl': '40px', // --navbar-xl-nad-navbar-visina
        'navbar-desktop': '55px', // --navbar-desktop-navbar-visina
        'nad-navbar-desktop': '35px', // --navbar-desktop-nad-navbar-visina
        'navbar-tablet': '45px', // --navbar-tablet-navbar-visina
        'nad-navbar-tablet': '30px', // --navbar-tablet-nad-navbar-visina
        'navbar-mobile': '45px', // --navbar-mobile-navbar-visina
        'nad-navbar-mobile': '30px', // --navbar-mobile-nad-navbar-visina
      },

      // --------------------------------------------------

      // # Content
      content: {
        'datum-divider': '" "', // --content-datum-divider
        'datum-divider-kosacrta': '"/"', // --content-datum-divider-kosacrta
        'divider-izmedu-stavki': '" • "', // --content-divider-između-stavki
      },

      // --------------------------------------------------

      // # Line Height
      lineHeight: {
        sutraCardTitleLineHeight: '32px', // --line-height-sutraCardTitleLineHeight
      },

      // --------------------------------------------------

      // # Max Width
      maxWidth: {
        '--xl-maxwidth-naslov': '1200px', // --xl-maxwidth-naslov
        '--xl-maxwidth-blokispodnaslova': '1000px', // --xl-maxwidth-blokispodnaslova

        '--desktop-maxwidth-naslov': '999px', // --desktop-maxwidth-naslov
        '--desktop-maxwidth-blokispodnaslova': '900px', // --desktop-maxwidth-blokispodnaslova

        '--tablet-maxwidth-naslov': '1200px', // --tablet-maxwidth-naslov
        '--tablet-maxwidth-blokispodnaslova': '1000px', // --tablet-maxwidth-blokispodnaslova

        'mobile-maxwidth-naslov': '90px', // --mobile-maxwidth-naslov
        'mobile-maxwidth-blokispodnaslova': '600px', // --mobile-maxwidth-blokispodnaslova
      },

      // --------------------------------------------------

      // # Font Family
      fontFamily: {
        'Rounded Mplus 1c Bold': ['"Rounded Mplus 1c Bold"', 'sans-serif'],
        Kodchasan: ['Kodchasan', 'sans-serif'],
        Phenomena: ['Phenomena', 'sans-serif'],
        Eastman: ['Eastman', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
    // require('@tailwindcss/forms')({
    //   strategy: 'base',
    // }),
    require('tailwindcss-motion'),
  ],
};

export default config;
