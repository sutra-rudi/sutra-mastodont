import { fetchMediaPaths } from '@/app/utils/callMediaPaths';
import PageContent from './PageContent';

export default async function NavbarTrakeKompilacija() {
  const MEDIA_PATHS = await fetchMediaPaths();

  const { siteLogo } = MEDIA_PATHS;

  console.log('MEDIA', siteLogo);

  return (
    <main>
      <PageContent logoPaths={siteLogo} />
    </main>
  );
}
