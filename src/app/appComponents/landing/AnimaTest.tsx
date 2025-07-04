'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@uidotdev/usehooks';

export default function TestAnimationsSection() {
  // Intersection Observer for entry animations
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: '0px',
  });
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (entry?.isIntersecting) {
      setInView(true);
    }
  }, [entry]);

  // Sample data for stagger demo
  const items = ['Prvi', 'Drugi', 'Treći', 'Četvrti'];

  return (
    <section
      ref={ref}
      className='max-w-4xl mx-auto py-20 space-y-12 lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl h-screen px-4'
    >
      {/* 1) Slide‑down entry */}
      <div className={`${entry?.isIntersecting ? 'animate-play anim-slide-down' : ''}`}>
        <h2 className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile lg:-mb--desktop-h1-2---naslov-nadnaslov md:-mb--tablet-h1-2---naslov-nadnaslov -mb--mobile-h1-2---naslov-nadnaslov text-heading-color-light-mode dark:text-heading-color-dark-mode'>
          Slide‑Down Entry
        </h2>
        <p className='lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile lg:text-nadnaslov-color-light-mode dark:text-nadnaslov-color-dark-mode'>
          Ovaj naslov i paragraf dolaze iz gornjeg kuta uz animaciju.
        </p>
      </div>

      {/* 2) Hover‑scale demo */}
      <div className='flex items-center gap-6'>
        <div className='anim-hover-scale w-max max-w-[180px] lg:-mt--desktop-h1-2---sadrzaj-cta md:-mt--tablet-h1-2---sadrzaj-cta -mt--mobile-h1-2---sadrzaj-cta flex items-center justify-start bg-transparent text-primarna-svijetla outline outline-2 outline-primarna-svijetla  lg:text-button-desktop md:text-button-tablet text-button-mobile md:px-7 md:py-3 px-6 py-[15px] md:rounded-[7px] rounded-[5px] md:gap-[13.3px] gap-[11.6px] '>
          <p>hover!</p>
        </div>
        <div className='anim-hover-scale w-max max-w-[180px] lg:-mt--desktop-h1-2---sadrzaj-cta md:-mt--tablet-h1-2---sadrzaj-cta -mt--mobile-h1-2---sadrzaj-cta flex items-center justify-start bg-sekundarna-svijetla text-sekundarna-tamna lg:text-button-desktop md:text-button-tablet text-button-mobile md:px-7 md:py-3 px-6 py-[15px] md:rounded-[7px] rounded-[5px] md:gap-[13.3px] gap-[11.6px]'>
          <p>drugi hover!</p>
        </div>
      </div>

      {/* 3) Staggered list */}
      <div>
        <h2 className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile lg:-mb--desktop-h1-2---naslov-nadnaslov md:-mb--tablet-h1-2---naslov-nadnaslov -mb--mobile-h1-2---naslov-nadnaslov text-heading-color-light-mode dark:text-heading-color-dark-mode relative block'>
          Stagger
        </h2>
        <ul className='anim-stagger space-y-2 lg:-mt--desktop---2xl md:-mt--tablet---2xl -mt--mobile---2xl'>
          {items.map((item, idx) => (
            <li
              key={item}
              style={{ '--index': idx } as React.CSSProperties}
              className={`${entry?.isIntersecting ? 'animate-play anim-slide-down' : ''} bg-gray-50 p-4 rounded`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
