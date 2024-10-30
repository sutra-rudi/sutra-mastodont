import { fetchMediaPaths } from '@/app/utils/callMediaPaths';
import { HeroVersionFour, HeroVersionOne, HeroVersionThree, HeroVersionTwo } from './PageContent';
import { fetchData } from '@/app/utils/callApi';
import { getHeroContentQuery } from '@/app/queries/getAllHeroContent';

export default async function HeroCompilation({ params: { lang } }: { params: { lang: string } }) {
  const IMG_PATHS = await fetchMediaPaths();

  const getAllHeroContent = await fetchData(getHeroContentQuery(lang));

  const heroDataShorthand = !getAllHeroContent.error ? getAllHeroContent.data.allHeroSekcija.edges[0] || null : null;

  return (
    <main className='w-full grid items-start gap-8'>
      <HeroVersionOne
        pathsToMasks={IMG_PATHS.heroMasks}
        pathsToHeroBg={IMG_PATHS.heroImagesHomePageMultiple}
        heroContent={heroDataShorthand}
        lang={lang}
      />
      <HeroVersionTwo
        pathsToMasks={IMG_PATHS.heroMasks}
        pathsToHeroBg={IMG_PATHS.heroImagesHomePageMultiple}
        heroContent={heroDataShorthand}
        lang={lang}
      />

      <HeroVersionThree
        pathsToMasks={IMG_PATHS.heroMasks}
        pathsToHeroBg={IMG_PATHS.heroImagesHomePageMultiple}
        heroContent={heroDataShorthand}
        lang={lang}
      />

      <HeroVersionFour
        pathsToMasks={IMG_PATHS.heroMasks}
        pathsToHeroBg={IMG_PATHS.heroImagesHomePageMultiple}
        heroContent={heroDataShorthand}
        lang={lang}
      />
    </main>
  );
}
