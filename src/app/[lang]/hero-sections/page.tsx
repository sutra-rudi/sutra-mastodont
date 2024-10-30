import { fetchMediaPaths } from '@/app/utils/callMediaPaths';
import {
  HeroVersionFive,
  HeroVersionFour,
  HeroVersionOne,
  HeroVersionSix,
  HeroVersionThree,
  HeroVersionTwo,
} from './PageContent';

export default async function HeroCompilation() {
  const IMG_PATHS = await fetchMediaPaths();

  return (
    <main className='w-full grid items-start gap-8'>
      <HeroVersionOne pathsToMasks={IMG_PATHS.heroMasks} pathsToHeroBg={IMG_PATHS.heroImagesHomePageMultiple} />
      <HeroVersionTwo pathsToMasks={IMG_PATHS.heroMasks} pathsToHeroBg={IMG_PATHS.heroImagesHomePageMultiple} />
      <HeroVersionThree pathsToMasks={IMG_PATHS.heroMasks} pathsToHeroBg={IMG_PATHS.heroImagesHomePageMultiple} />
      <HeroVersionFour pathsToMasks={IMG_PATHS.heroMasks} pathsToHeroBg={IMG_PATHS.heroImagesHomePageMultiple} />
      <HeroVersionFive pathsToMasks={IMG_PATHS.heroMasks} pathsToHeroBg={IMG_PATHS.heroImagesHomePageMultiple} />
      <HeroVersionSix pathsToMasks={IMG_PATHS.heroMasks} pathsToHeroBg={IMG_PATHS.heroImagesHomePageMultiple} />
    </main>
  );
}
