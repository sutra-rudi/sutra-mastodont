'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface CountdownRedirectProps {
  seconds: number;
  redirectTo: string;
}

const CountdownRedirect: React.FC<CountdownRedirectProps> = ({ seconds, redirectTo }) => {
  const [countdown, setCountdown] = useState(seconds);
  const router = useRouter();

  useEffect(() => {
    if (countdown <= 0) {
      router.push(redirectTo);
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, redirectTo, router]);

  return (
    <div className='w-full h-full grid grid-cols-1 gap-8 items-start'>
      <p>
        Vraćam vas na naslovnu stranicu za <span className='font-bold text-accent-boja underline'>{countdown}</span>{' '}
        sekundi...
      </p>

      <Link className='px-6 py-3 outline outline-accent w-min' href={'/'}>
        <span className='text-nowrap text-base'>Vrati me odmah</span>
      </Link>
    </div>
  );
};

export default CountdownRedirect;
