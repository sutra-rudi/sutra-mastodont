import React from 'react';
import { getAllSocialLinksQuery } from '../queries/getAllSocialLinksQuery';

export default async function AppFooter() {
  const getAllSocialLinks = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllSocialLinksQuery(),
    }),
    cache: 'no-cache',
  });

  const parseDataSocialLinks = await getAllSocialLinks.json();

  const dataShorthand = parseDataSocialLinks.data.allDrustveneMrezeLinkovi.edges[0].node;

  const socialLinks: [string, string][] = Object.entries(dataShorthand.povezniceDrustvene);

  return (
    <footer className='bg-blue-200'>
      <div className='max-w-[1225px] mx-auto my-8'>
        <h2 className='w-full text-center text-7xl font-semibold pt-8'>Social links - ovo je footer</h2>
        <div className='grid grid-cols-2 gap-y-1 gap-x-3'>
          {socialLinks.map(([network, url]) => {
            return (
              <a key={network} href={url}>
                {network}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
