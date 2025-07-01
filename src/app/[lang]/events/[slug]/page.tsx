import Breadcrumbs from '@/app/globalComponents/Breadcrumbs';
import getSingleEvent from '@/app/queries/dynamicQueries/getSingleEvent';
import { fetchData } from '@/app/utils/callApi';
import React from 'react';
import Client from './Client';

export default async function SingleEventPage({ params: { lang, slug } }: { params: { lang: string; slug: string } }) {
  const getIdFromSlug = (slug: string): string => {
    const parts = slug.split('-');
    return parts.pop() || '';
  };

  const slugId = getIdFromSlug(slug);

  const eData = await fetchData(getSingleEvent(slugId));

  const dataset = !eData.error ? eData.data.event : null;

  return (
    <main className='xl:-pb--xl---5xl lg:-pb--desktop---5xl md:-pb--tablet---5xl -pb--mobile---5xl relative w-full dark:bg-primarna-tamna min-h-screen bg-white z-40'>
      <div className='container px-4 mx-auto flex items-center justify-start -mt--desktop---5xl'>
        <Breadcrumbs />
      </div>

      {dataset && <Client data={dataset} currentLang={lang} />}
    </main>
  );
}
