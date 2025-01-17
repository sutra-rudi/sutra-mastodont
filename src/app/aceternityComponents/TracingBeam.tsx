'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';
import { cn } from '../utils/aceternity';

export const TracingBeam = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  // Usporiti punjenje crte
  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [0, svgHeight]), {
    stiffness: 200, // Smanjite stiffness
    damping: 100, // Povećajte damping
  });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, svgHeight]), {
    stiffness: 200, // Smanjite stiffness
    damping: 100, // Povećajte damping
  });

  return (
    <motion.div ref={ref} className={cn('relative w-full  mx-auto h-full', className)}>
      <div className='absolute -left-4 md:-left-20 top-3'>
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow: scrollYProgress.get() > 0 ? 'none' : 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          }}
          className='ml-[27px] h-0 w-0 '
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? 'white' : '#8B9554',
              borderColor: scrollYProgress.get() > 0 ? 'white' : '#8B9554',
            }}
            className='h-0 w-0 '
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width='20'
          height={svgHeight}
          className='ml-4 lg:block hidden'
          aria-hidden='true'
        >
          <motion.path
            d={`M 10 0 V ${svgHeight}`}
            fill='none'
            stroke='#8B9554'
            strokeOpacity='0.16'
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 10 0 V ${svgHeight}`}
            fill='none'
            stroke='url(#gradient)'
            strokeWidth='1.25'
            className='motion-reduce:hidden'
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient id='gradient' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1={y1} y2={y2}>
              <stop stopColor='#8B9554' stopOpacity='0'></stop>
              <stop stopColor='#8B9554'></stop>
              <stop offset='0.325' stopColor='#8B9554'></stop>
              <stop offset='1' stopColor='#8B9554' stopOpacity='0'></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
