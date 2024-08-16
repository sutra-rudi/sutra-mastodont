'use client';

import Link from 'next/link';
import React from 'react';
import { queryObjects } from 'v8';

interface ToursPageContent {
  toursList: any[];
  lang: string;
}

const PageContent = ({ toursList, lang }: ToursPageContent) => {
  console.log('TOUROVI', toursList);

  const prepTourNameForClient = (str: string) =>
    str
      .split('-')
      .slice(1)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  return (
    <div className='w-full max-w-[1440px] mx-auto my-0'>
      {toursList.map((sinTour: any) => {
        console.log('PREP', prepTourNameForClient(sinTour.name));
        return (
          <Link key={sinTour.name} href={{ pathname: `/${lang}/360-tours/${sinTour.name}` }}>
            {prepTourNameForClient(sinTour.name)}
          </Link>
        );
      })}
    </div>
  );
};

export default PageContent;
