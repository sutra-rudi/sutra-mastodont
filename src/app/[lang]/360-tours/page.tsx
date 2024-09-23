import dynamic from 'next/dynamic';
const LazyContent = dynamic(() => import('./PageContent'));

export default async function VirtualTours({ params: { lang } }: { params: { lang: string } }) {
  async function fetchSites() {
    try {
      const response = await fetch(process.env.SUTRA_NETLIFY_BASE_URL!, {
        headers: {
          Authorization: `Bearer ${process.env.SUTRA_VIRTUAL_TOURS_API_KEY}`,
        },
      });

      if (!response.ok) {
        console.error('Greška pri dohvaćanju sajtova:', response.status);
        throw new Error(`Fetch error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error: any) {
      console.error('Fetch error:', error.message);
      throw error;
    }
  }

  const sites = await fetchSites();

  return (
    <main className='min-h-screen w-full'>
      <div className='w-full max-w-[1440px] mx-auto my-0 px-4 min-h-screen'>
        <div className='w-full mx-auto flex items-center justify-center'>
          <h2 className='text-4xl font-medium'>Šetnje</h2>
        </div>
        {sites && <LazyContent toursList={sites} lang={lang} />}
      </div>
    </main>
  );
}
