import dynamic from 'next/dynamic';

export default async function GalleryPage() {
  const LazyContent = dynamic(() => import('./PageContent'));

  return (
    <main className='w-full min-h-screen bg-almost-white dark:bg-almost-black'>
      <LazyContent />
    </main>
  );
}
