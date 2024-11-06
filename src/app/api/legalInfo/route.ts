import { NextResponse } from 'next/server';
import { getAllLegalneInformacijeQuery } from '@/app/queries/getAllLegalInfoQuery';
import { UserLanguage } from '@/app/enums/LangEnum';
import { fetchData } from '@/app/utils/callApi';

export async function GET(request: Request) {
  const fetchAllLanguagesData = async () => {
    const allLanguagesData: Record<string, any> = {};

    const fetchPromises = Object.values(UserLanguage).map(async (lang) => {
      const data = await fetchData(getAllLegalneInformacijeQuery(lang), false);
      allLanguagesData[lang] = data;
    });

    await Promise.all(fetchPromises);
    return allLanguagesData;
  };

  const allLanguagesData = await fetchAllLanguagesData();

  return NextResponse.json(allLanguagesData, {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
