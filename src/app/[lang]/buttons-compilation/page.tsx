import dynamic from 'next/dynamic';
const LazyContent = dynamic(() => import('./PageContent'));
export default async function ButtonsCompilationPage() {
  return (
    <main className='dark:bg-almost-black'>
      <LazyContent />
    </main>
  );
}
