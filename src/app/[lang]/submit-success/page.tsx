import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import CountdownRedirect from './CountdownRedirect';

export default async function SubmitSuccess({
  params: { lang },
  searchParams: { rtime },
}: {
  params: { lang: string };
  searchParams: { rtime: string };
}) {
  const l = getSuffixFromLang(lang);
  return (
    <main className='w-full h-full min-h-svh'>
      <div className='flex flex-col items-start gap-8 max-w-sutraBlogTestMaxWidth mx-auto'>
        <h2 className='text-2xl leading-normal text-primarna-tamna font-bold'>
          Pozdrav, uspili smo, pišem ovu poruku jer u cms nema poruke za ovu stranicu, ali nije bitno, mozemo dodat bilo
          sta
        </h2>

        <CountdownRedirect seconds={Number(rtime ?? 10)} redirectTo={`/${l}`} />
      </div>
    </main>
  );
}
