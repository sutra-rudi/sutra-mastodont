import { NextResponse } from 'next/server';
import { getAllLegalneInformacijeQuery } from '@/app/queries/getAllLegalInfoQuery';

export async function GET(request: Request) {
  console.log('DATA', request);
  const lang = new URL(request.url).searchParams.get('lang') || 'hr';
  const cmsResponse = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllLegalneInformacijeQuery(lang),
    }),
  });

  const data = await cmsResponse.json();

  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
