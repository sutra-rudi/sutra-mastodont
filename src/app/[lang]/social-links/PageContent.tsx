'use client';

import React from 'react';

interface SocialLinksProps {
  links: { [key: string]: string | null };
}

interface SocialLinksPageContent {
  pageContent: any;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  // Funkcija za generiranje imena profila ako postoji, koristi zadano ime profila ako specifično ime ne postoji
  const getProfileName = (network: string) => {
    const specificProfileKey = `${network}ImeProfilaTekstKojiSeIspisuje`;
    const specificProfileName = links[specificProfileKey] || '';

    if (specificProfileName) {
      return specificProfileName;
    }

    const defaultProfileName = links.imeProfilaDrustvene || '';
    return defaultProfileName;
  };

  // Funkcija za generiranje URL-a za društvene mreže
  const getSocialLink = (network: string) => {
    return links[network] || null;
  };

  // Generiramo popis društvenih mreža na temelju ključeva u links objektu
  const networks = Object.keys(links)
    .filter((key) => !key.endsWith('ImeProfilaTekstKojiSeIspisuje') && links[key] !== null) // Filtriramo ključeve koji su URL-ovi
    .filter((key) => !key.startsWith('dodatneOpcije') && !key.startsWith('dodatni')) // Filtriramo bool switcheve
    .map((key) => key);

  return (
    <div className='w-full mx-auto grid grid-cols-1 gap-2 place-items-center '>
      {networks.map((network) => {
        const url = getSocialLink(network);
        const profileName = getProfileName(network);
        return url ? (
          <div key={network} className='social-link'>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-start gap-2 border-b border-accent'
            >
              <span>{network.charAt(0).toUpperCase() + network.slice(1)}</span>
              <span className='italic'>{profileName && `@${profileName}`}</span>
            </a>
          </div>
        ) : null;
      })}
    </div>
  );
};

export const PageContent = ({ pageContent }: SocialLinksPageContent) => {
  console.log('PAGE CONTENT', pageContent);

  return (
    <section className='w-full min-h-dvh'>
      <div className='w-full max-w-[1440px] mx-auto my-8'>
        <div className='w-full grid grid-cols-1 gap-4 items-start'>
          <h2 className='w-full text-center text-3xl font-medium'>Social links</h2>
          <SocialLinks links={pageContent.povezniceDrustvene} />
        </div>
      </div>
    </section>
  );
};
``;
