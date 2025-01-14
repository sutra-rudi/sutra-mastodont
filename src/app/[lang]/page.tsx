export const maxDuration = 60;

export default async function Landing({ params: { lang } }: { params: { lang: string } }) {
  return (
    <main className='relative w-full dark:bg-primarna-tamna'>
      <h2 className='w-full text-center text-4xl'>POCETAK</h2>

      <h4 className='w-full text-center text-2xl'>{`Trenutni jezik: ${lang}`}</h4>
    </main>
  );
}
