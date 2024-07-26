'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

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
    <div>
      <p>Vraćam vas na naslovnu stranicu za {countdown} sekundi...</p>
    </div>
  );
};

export default CountdownRedirect;
