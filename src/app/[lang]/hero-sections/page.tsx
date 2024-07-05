import {
  HeroSectionFive,
  HeroSectionFour,
  HeroSectionOne,
  HeroSectionSeven,
  HeroSectionSix,
  HeroSectionThree,
  HeroSectionTwo,
} from './PageContent';

export default async function HeroCompilation() {
  return (
    <main className='w-full grid items-start gap-8'>
      <HeroSectionOne />

      <HeroSectionTwo />

      <HeroSectionThree />

      <HeroSectionFour />

      <HeroSectionFive />

      <HeroSectionSix />

      <HeroSectionSeven />
    </main>
  );
}
