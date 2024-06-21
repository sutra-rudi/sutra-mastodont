import { UserLanguage } from '../enums/LangEnum';

const commonTitles = {
  [UserLanguage.eng]: 'Category',
  [UserLanguage.hr]: 'Kategorija',
  [UserLanguage.ita]: 'Categoria',
  [UserLanguage.ger]: 'Kategorie',
};

export const generateCommonTitles = (lang: UserLanguage): string => {
  return commonTitles[lang] || '';
};
