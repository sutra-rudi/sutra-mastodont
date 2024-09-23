import dynamic from 'next/dynamic';
const LazyContent = dynamic(() => import('./PageContent'));
export default async function TexturesBackgroundPage() {
  const fetchMediaPaths = async () => {
    try {
      const response = await fetch(`${process.env.BASE_APP_URL}/api/mediaPaths`, {});

      if (!response.ok) {
        throw new Error('Neuspješno dohvaćanje putanja medija');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Greška prilikom dohvaćanja medija:', error);
      return {
        data: [],
      };
    }
  };

  const media = await fetchMediaPaths();

  return <main className='min-h-screen w-full'>{media && <LazyContent bgTextures={media.bgTextures} />}</main>;
}
