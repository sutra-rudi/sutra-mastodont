'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const homeLabels: Record<string, string> = {
  hr: 'Početna',
  eng: 'Home',
  ger: 'Startseite',
  ita: 'Home',
  esp: 'Inicio',
  fra: 'Accueil',
};

function formatSegment(segment: string): string {
  return segment
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');
}

export default function Breadcrumbs() {
  const pathname = usePathname() || '';
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) return null;

  const lang = segments[0];

  const crumbs = [
    {
      href: `/${lang}`,
      label: `🏠 ${homeLabels[lang] || 'Home'}`,
    },
  ];

  segments.slice(1).forEach((seg, idx) => {
    const href = '/' + segments.slice(0, idx + 2).join('/');
    crumbs.push({ href, label: formatSegment(seg) });
  });

  return (
    <div className='text-sm mb-4'>
      <ol className='list-none p-0 inline-flex items-center space-x-1'>
        {crumbs.map((crumb, idx) => {
          const isLast = idx === crumbs.length - 1;
          return (
            <li key={crumb.href} className='inline-flex items-center'>
              {!isLast ? (
                <a href={crumb.href} className='text-text-light-mode hover:underline'>
                  {crumb.label}
                </a>
              ) : (
                <>
                  <span className='text-accent-boja md:hidden block'>
                    {crumb.label.length > 25 ? `${crumb.label.slice(0, 25)}...` : crumb.label}
                  </span>
                  <span className='text-accent-boja md:block hidden'>{crumb.label}</span>
                </>
              )}
              {!isLast && <span className='mx-2'>/</span>}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
