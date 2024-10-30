import { fetchMediaPaths } from '@/app/utils/callMediaPaths';
import { HeroVersionOne } from './PageContent';

export default async function HeroCompilation() {
  const IMG_PATHS = await fetchMediaPaths();

  console.log('IMAGES', IMG_PATHS);
  return (
    <main className='w-full grid items-start gap-8'>
      <HeroVersionOne />
    </main>
  );
}
