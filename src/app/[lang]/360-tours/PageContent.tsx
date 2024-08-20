'use client';

import Link from 'next/link';
import React from 'react';

interface ToursPageContent {
  toursList: any[];
  lang: string;
}

const PageContent = ({ toursList, lang }: ToursPageContent) => {
  const prepTourNameForClient = (str: string) =>
    str
      .split('-')
      .slice(1)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  return (
    <div className='w-full max-w-[1440px] mx-auto my-0'>
      <div className='grid grid-cols-2 w-full px-4 place-items-center py-16'>
        {toursList.map((sinTour: any) => {
          return (
            <Link
              key={sinTour.name}
              href={{ pathname: `/${lang}/360-tours/${sinTour.name}` }}
              className=' w-full border border-accent max-w-lg min-h-28 flex items-center justify-center'
            >
              {prepTourNameForClient(sinTour.name)}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PageContent;
