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
          //     date={null}
          textContent={
            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.'
          }
          subTitle={'Sed ut perspiciatis natpis'}
          tagText={'Neka kategorija'}
          title={'Sed ut perspiciatis testing dva reda tri reda test kjasdhkjhd'}
          readTime={'6min'}
          lineInfoPos='bottom'
          textContentPos='hidden'
          hasBackgroundShadows={true}
          hasCardImage={true}
        />

        <SutraCard
          authorName={'Jurica Pađen'}
          date={dayjs('07-16-1992').format('DD/MM/YYYY')}
          //     date={null}
          textContent={
            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.'
          }
          subTitle={'Sed ut perspiciatis natpis'}
          title={'Sed ut perspiciatis testing dva reda tri reda test kjasdhkjhd'}
          tagText={'Neka kategorija'}
          readTime={'6min'}
          lineInfoPos='top'
          textContentPos='bottom'
          hasBackgroundShadows={true}
          hasCardImage={true}
        />
      </div>
    </section>
  );
};

export default PageContent;
