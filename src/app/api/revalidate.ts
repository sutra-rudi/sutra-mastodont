import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { UserLanguage } from '../enums/LangEnum';

export async function POST(req: NextRequest) {
  const { id, secret } = await req.json();

  // Provjeri tajni token za sigurnost
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  if (!id) {
    return NextResponse.json({ message: 'Missing id in request' }, { status: 400 });
  }

  try {
    // Prođi kroz sve jezike u enumu i revalidiraj rutu za svaki jezik
    const languages = Object.values(UserLanguage);
    for (const lang of languages) {
      const localizedPath = `/${lang}/blog/${id}`;
      await revalidatePath(localizedPath);
    }

    return NextResponse.json({ revalidated: true, id });
  } catch (error: any) {
    return NextResponse.json({ message: 'Error revalidating', error: error.message }, { status: 500 });
  }
}
