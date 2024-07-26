import CountdownRedirect from './CountdownRedirect';

export default async function SubmitSuccess({ params: { lang } }: { params: { lang: string } }) {
  return (
    <main className='w-full h-full min-h-svh'>
      <div className='flex flex-col items-start gap-8 max-w-sutraBlogTestMaxWidth mx-auto'>
        <h2 className='text-2xl leading-normal text-primary-dark font-bold'>
          Pozdrav, uspili smo, evo komponenta koja vraća za x sekundi, trenutno je fixirano ali spojimo na API, kao i
          jezike
        </h2>
        <CountdownRedirect seconds={10} redirectTo='/' />
      </div>
    </main>
  );
}
