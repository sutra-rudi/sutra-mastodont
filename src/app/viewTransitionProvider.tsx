//@ts-nocheck
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ViewTransitionProvider({ children }) {
  const router = useRouter();

  useEffect(() => {
    const handleClick = (e) => {
      // nađi roditeljski <a> (ili sam target) unutar aplikacijskog domena
      const link = e.target.closest('a[href^="/"]');
      if (
        !link ||
        e.defaultPrevented ||
        link.target === '_blank' ||
        link.hasAttribute('download') ||
        link.getAttribute('href').startsWith('#')
      ) {
        return;
      }

      e.preventDefault();
      const href = link.getAttribute('href');

      if (document.startViewTransition) {
        // osiguravamo da se transition uvijek desi, čak i na cache-anoj strani
        document.startViewTransition(() =>
          // Next.js App Router push vrši client-side navigaciju
          router.push(href)
        );
      } else {
        // fallback za stare browsere
        window.location.href = href;
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [router]);

  return children;
}
