import { fetchMediaPaths } from '@/app/utils/callMediaPaths';
import Client from './Client';
import { Suspense } from 'react';
import { fetchData } from '@/app/utils/callApi';
import getFaqPage from '@/app/queries/dynamicQueries/getFaqPage';
import TabClient from './TabClient';

import dataset from '../../staticData/staticQueryData.json';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { Metadata } from 'next';

const meta = dataset.data.allSeoAdmin.edges.find((s) => s.node.title === 'FAQ SEO');

export function generateMetadata({ params: { lang } }: { params: { lang: string } }): Promise<Metadata> {
  const l = getSuffixFromLang(lang);
  //@ts-ignore
  const t = meta.node[`bazniSeo${l}`]?.[`bazniSeoTekstoviGlobalniZaStranicu${l}`].seoNaslov;
  //@ts-ignore
  const d = meta.node[`bazniSeo${l}`]?.[`bazniSeoTekstoviGlobalniZaStranicu${l}`].seoOpisStranice;
  return {
    //@ts-ignore
    title: t,
    desctiption: d,
  };
}

export default async function FAQpage({ params: { lang } }: { params: { lang: string } }) {
  const MP = await fetchMediaPaths();

  const getFaqData = await fetchData(getFaqPage());

  const dataset =
    !getFaqData.error && typeof getFaqData.data !== 'undefined' ? getFaqData.data.allFaqOnePager.edges : null;

  const { heroImagesFAQ } = MP;
  return (
    <main className='relative w-full min-h-screen -mt--desktop---4xl'>
      <Suspense>
        <Client lang={lang} imgSrc={heroImagesFAQ} />

        {dataset && <TabClient currentLang={lang} data={dataset} />}
      </Suspense>
    </main>
  );
}
