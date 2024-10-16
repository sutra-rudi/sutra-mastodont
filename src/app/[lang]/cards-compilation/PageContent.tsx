import SutraCard from '@/app/components/card/SutraCard';
import dayjs from 'dayjs';
import React from 'react';

const PageContent = () => {
  const niz = [1, 2, 3];

  return (
    <section className='w-full bg-almost-white dark:bg-almost-black min-h-dvh py-10'>
      <h2 className='w-full text-center text-h2-desktop'>Kartice</h2>

      <div className='max-w-screen-2xl mx-auto flex items-start justify-start gap-10 py-5 flex-wrap xl:px-10 lg:px-8 md:px-6 px-4'>
        <SutraCard
          authorName={{
            name: 'Jurica',
            lastName: 'Pađen',
            avatar: { url: '' },
            firstName: null,
            nicename: null,
            username: null,
            nickname: null,
          }}
          date={dayjs('07-16-1992').format('DD/MM/YYYY')}
          //     date={null}
          textContent={
            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.'
          }
          //     subTitle={'Sed ut perspiciatis natpis'}
          subTitle={'neki subtitle'}
          tagText={[{ catName: 'Neka kategorija' }, { catName: 'Druga isto' }]}
          title={'Sed ut perspiciatis testing dva reda tri reda test kjasdhkjhd'}
          readTime={'6min'}
          lineInfoPos='bottom'
          textContentPos='center'
          hasBackgroundShadows={true}
          hasCardImage={true}
          isBaseCard={true}
        />

        <SutraCard
          authorName={{
            name: 'Jurica',
            lastName: 'Pađen',
            avatar: { url: '' },
            firstName: null,
            nicename: null,
            username: null,
            nickname: null,
          }}
          date={dayjs('07-16-1992').format('DD/MM/YYYY')}
          //     date={null}
          textContent={
            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.'
          }
          subTitle={'Sed ut perspiciatis natpis'}
          title={'Sed ut perspiciatis testing dva reda tri reda test kjasdhkjhd'}
          tagText={[{ catName: 'Neka kategorija' }, { catName: 'Druga isto' }]}
          readTime={'6min'}
          lineInfoPos='top'
          textContentPos='bottom'
          hasBackgroundShadows={true}
          hasCardImage={true}
          isBaseCard={false}
        />
      </div>
    </section>
  );
};

export default PageContent;
