import React from 'react';

interface Footer {
  logos: any;
  currentLang: any;
}

export default async function AppFooter({ logos, currentLang }: Footer) {
  return (
    <footer className='bg-sekundarna-tamna lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl min-h-[300px] flex items-center justify-center'>
      <div className='container mx-auto px-4 flex justify-between'>
        <picture>
          <img
            src={logos.verticalDark}
            alt='SITE_LOGO'
            width={190}
            height={50}
            className='aspect-auto object-cover object-center block'
          />
        </picture>

        <div className='flex items-end gap-12 text-text-dark-mode'>
          <div className='flex flex-col gap-1'>
            <a href=''>Link1</a>
            <a href=''>Link2</a>
            <a href=''>Link3</a>
          </div>
          <div className='flex flex-col gap-1'>
            <a href=''>Link4</a>
            <a href=''>Link5</a>
            <a href=''>Link6</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
