import SutraCard from '@/app/components/card/SutraCard';
import dayjs from 'dayjs';
import React from 'react';

const PageContent = () => {
  return (
    <section className='w-full bg-almost-white dark:bg-almost-black min-h-dvh py-10'>
      <h2 className='w-full text-center text-h2-desktop'>Kartice</h2>

      <div className='max-w-screen-2xl mx-auto flex items-start justify-start gap-10 py-5 flex-wrap xl:px-10 lg:px-8 md:px-6 px-4'>
        <SutraCard
          authorName={'Jurica Pađen'}
          date={dayjs('07-16-1992').format('DD/MM/YYYY')}
          subTitle={'Primjer kartice'}
          tagText={'Neka kategorija'}
          readTime={'6min'}
          lineInfo='top'
          hasBackgroundShadows={true}
          hasBottomTextContent={true}
          hasCardImage={true}
          hasTopTextContent={true}
        />

        <SutraCard
          authorName={'Jurica Pađen'}
          date={dayjs('07-16-1992').format('DD/MM/YYYY')}
          subTitle={'Primjer kartice'}
          tagText={'Neka kategorija'}
          readTime={'6min'}
          lineInfo='bottom'
          hasBackgroundShadows={true}
          hasBottomTextContent={true}
          hasCardImage={true}
          hasTopTextContent={true}
        />
      </div>
    </section>
  );
};

export default PageContent;
