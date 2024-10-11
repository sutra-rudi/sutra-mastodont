import SutraCard from '@/app/components/card/SutraCard';
import React from 'react';

const PageContent = () => {
  return (
    <section className='w-full bg-almost-white dark:bg-almost-black min-h-dvh py-10'>
      <h2 className='w-full text-center text-h2-desktop'>Kartice</h2>

      <div className='max-w-screen-2xl mx-auto flex items-center justify-center py-5'>
        <SutraCard
          authorName={'Jurica Pađen'}
          date={new Date('16.7.1992')}
          subTitle={'Primjer kartice'}
          tagText={'Neka kategorija'}
          readTime={'6min'}
          hasBackgroundShadows={true}
          hasBottomLineInfo={true}
          hasBottomTextContent={true}
          hasCardImage={true}
          hasTopLineInfo={true}
          hasTopTextContent={true}
        />

        <SutraCard
          authorName={'Jurica Pađen'}
          date={new Date('16.7.1992')}
          subTitle={'Primjer kartice'}
          tagText={'Neka kategorija'}
          readTime={'6min'}
          hasBackgroundShadows={true}
          hasBottomLineInfo={true}
          hasBottomTextContent={true}
          hasCardImage={true}
          hasTopLineInfo={false}
          hasTopTextContent={true}
        />
      </div>
    </section>
  );
};

export default PageContent;
