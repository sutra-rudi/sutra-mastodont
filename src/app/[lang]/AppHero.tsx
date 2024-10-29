import React from 'react';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';

interface AppHero {
  heroContent: any;
  lang: string;
}

const AppHero = ({ heroContent, lang }: AppHero) => {
  const l = getSuffixFromLang(lang);
  const heroDataShorthand = heroContent.node[`tekstHero${l}`];

  console.log('HERO DATA SHORTHAND', heroDataShorthand);
  return <div>AppHero</div>;
};

export default AppHero;
