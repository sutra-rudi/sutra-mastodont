import { UserLanguage } from '@/app/enums/LangEnum';

export async function generateStaticParams() {
  return Object.values(UserLanguage).map((lang) => ({ lang }));
}
