import { NextResponse } from 'next/server';
import { getAllLegalneInformacijeQuery } from '@/app/queries/getAllLegalInfoQuery';

export async function GET(request: Request) {
  const lang = new URL(request.url).searchParams.get('lang') || 'hr';
  const cmsResponse = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=31536000, immutable',
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
