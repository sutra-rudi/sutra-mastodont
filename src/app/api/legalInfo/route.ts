import { NextResponse } from 'next/server';
import { getAllLegalneInformacijeQuery } from '@/app/queries/getAllLegalInfoQuery';
import { UserLanguage } from '@/app/enums/LangEnum';

export async function GET(request: Request) {
  const allLanguagesData = {};

  // Iteriramo kroz sve podržane jezike i dohvaćamo podatke
  for (const lang of Object.values(UserLanguage)) {
    const cmsResponse = await fetch(`${process.env.CMS_BASE_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: getAllLegalneInformacijeQuery(lang) }),
      cache: 'force-cache', // Dugotrajno keširanje za sve jezike
    });

    const data = await cmsResponse.json();
    //@ts-ignore
    allLanguagesData[lang] = data;
  }

  return NextResponse.json(allLanguagesData, {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable', // Postavke dugotrajnog keširanja
    },
  });
}
