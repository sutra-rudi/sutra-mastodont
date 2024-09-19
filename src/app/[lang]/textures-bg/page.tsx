import dynamic from 'next/dynamic';
const LazyContent = dynamic(() => import('./PageContent'));
export default async function TexturesBackgroundPage() {
  return (
    <main>
      <LazyContent />
    </main>
  );
}
