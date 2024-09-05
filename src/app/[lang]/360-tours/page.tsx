import PageContent from './PageContent';

export default async function VirtualTours({ params: { lang } }: { params: { lang: string } }) {
  const fetchSites = async () => {
    const res = await fetch(process.env.SUTRA_NETLIFY_BASE_URL!, {
      headers: {
        Authorization: `Bearer ${process.env.SUTRA_VIRTUAL_TOURS_API_KEY!}`,
      },
      // cache: 'no-cache',
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      console.error('Greška pri dohvaćanju sajtova:', res.status);
    }
  };

  const sites = await fetchSites();

  return (
    <main>
      <div className='w-full max-w-[1440px] mx-auto my-0 px-4 min-h-screen'>
        <div className='w-full mx-auto flex items-center justify-center'>
          <h2 className='text-4xl font-medium'>Šetnje</h2>
        </div>
        {sites && <PageContent toursList={sites} lang={lang} />}
      </div>
    </main>
  );
}
