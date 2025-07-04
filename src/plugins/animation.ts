//@ts-nocheck

// ===============================================================
// Animations Starter – centralni izvor istine
// 1) EASING TOKENS  •  2) ANIMACIJSKI TOKENS  •  3) TAILWIND PLUGIN
// 4) REACT HOOK (Intersection Observer) – samo 10 linija
// Sve je maksimalno komentirano na hrvatskom.
// ===============================================================

/* ------------------------------------------------------------------
   1) GLOBALNI  "EASE"  TOKENI
   ------------------------------------------------------------------ */
export const easings = {
  base: 'cubic-bezier(0.4, 0, 0.2, 1)', // univerzalni default
  enter: 'cubic-bezier(0, 0, 0.2, 1)', // brzo krene, blago stane – ulazak
  exit: 'cubic-bezier(0.4, 0, 1, 1)', // lagano krene, ubrza – izlazak
  snappy: 'cubic-bezier(0.4, 0, 0.6, 1)', // mikro‑efekti (hover/tap)
  spring: 'cubic-bezier(0.17, 0.67, 0.83, 0.67)', // elastičan osjećaj
  bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // jači bounce
};

/* ------------------------------------------------------------------
   2)  ANIMACIJSKI  TOKENI – sve ključne vrijednosti po breakpointu
   ------------------------------------------------------------------ */
export const animations = {
  /* -----  ENTRY / SCROLL GRUPA  --------------------------------- */
  fadeIn: {
    // jednostavni fade‑in
    duration: { mobile: 300, desktop: 300 },
    easing: 'base',
  },
  slideDownIn: {
    // primjer scroll‑trigger entry (dolje)
    distance: { mobile: 20, desktop: 30 }, // px
    duration: { mobile: 300, desktop: 400 }, // ms
    easing: 'enter',
  },
  /* -----  HOVER GRUPA  ------------------------------------------ */
  hoverScale: {
    scaleHover: 1.05,
    scaleTap: 0.95,
    duration: 150,
    easing: 'snappy',
  },
  hoverSlideRight: {
    distance: 8, // px
    duration: 150,
    easing: 'snappy',
  },
  /* -----  TAP / UTILITY GRUPA  ---------------------------------- */
  tapShrink: {
    scale: 0.9,
    duration: 100,
    easing: 'snappy',
  },
  clickBounce: {
    keyframes: [1, 1.2, 0.9, 1],
    duration: 400,
    easing: 'bounce',
  },
  /* -----  STAGGER DELAY  ---------------------------------------- */
  stagger: {
    delay: { mobile: 100, tablet: 80, desktop: 100, xl: 120 }, // ms
  },
};

/* ------------------------------------------------------------------
   3)  TAILWIND PLUGIN – generira .anim‑* klase + mobile fallback
   ------------------------------------------------------------------ */
import plugin from 'tailwindcss/plugin';

export const animationsPlugin = plugin(({ addComponents, theme }) => {
  const cmp: Record<string, any> = {};
  const e = easings; // kraći alias
  const a = animations;

  /* === anim-slide-down ========================================== */
  cmp['.anim-slide-down'] = {
    /* početno "skriveno" stanje + animacija PAUSED  */
    '--anim-distance': `${a.slideDownIn.distance.mobile}px`,
    '--anim-duration': `${a.slideDownIn.duration.mobile}ms`,
    '--anim-ease': e[a.slideDownIn.easing],
    opacity: 0,
    transform: 'translateY(var(--anim-distance))',
    animation: 'slide-down var(--anim-duration) var(--anim-ease) both',
    animationPlayState: 'paused',
    '@keyframes slide-down': {
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
    /* tablet/desktop override */
    '@screen tablet': {
      '--anim-distance': `${a.slideDownIn.distance.desktop}px`,
      '--anim-duration': `${a.slideDownIn.duration.desktop}ms`,
    },
    /* touch uređaji – hover verzije gasimo */
    '@media (hover: none)': {
      // ovdje bi gasili hover klase; slide‑down ostaje OK
    },
  };

  /* === anim-hover-scale ========================================= */
  cmp['.anim-hover-scale'] = {
    transition: `transform ${a.hoverScale.duration}ms ${e[a.hoverScale.easing]}`,
    '@media (hover: hover)': {
      '&:hover': { transform: `scale(${a.hoverScale.scaleHover})` },
      '&:active': { transform: `scale(${a.hoverScale.scaleTap})` },
    },
    '@media (hover: none)': {
      // na touch – koristimo tapShrink vrijednosti
      '&:active': {
        transform: `scale(${animations.tapShrink.scale})`,
        transition: `transform ${animations.tapShrink.duration}ms ${e[animations.tapShrink.easing]}`,
      },
    },
  };

  /* === staggering util‑klasa ===================================== */
  cmp['.anim-stagger'] = {
    '& > *': {
      animationDelay: `calc(var(--index) * ${animations.stagger.delay.desktop}ms)`,
    },
    '@screen tablet': {
      '& > *': {
        animationDelay: `calc(var(--index) * ${animations.stagger.delay.tablet}ms)`,
      },
    },
    '@screen mobile': {
      '& > *': {
        animationDelay: `calc(var(--index) * ${animations.stagger.delay.mobile}ms)`,
      },
    },
  };

  cmp['.animate-play'] = {
    animationPlayState: 'running !important',
  };

  addComponents(cmp);
});
