import dynamic from 'next/dynamic';
const LazyContent = dynamic(() => import('./PageContent'));
export default async function GalleryPage() {
  return (
    <main className='w-full min-h-screen bg-almost-white dark:bg-almost-black'>
      <LazyContent />
    </main>
  );
}
