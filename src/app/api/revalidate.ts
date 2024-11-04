import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Provjeri tajni token u tijelu zahtjeva
  const { slug, secret } = await req.json();

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  if (!slug) {
    return NextResponse.json({ message: 'Missing slug in request' }, { status: 400 });
  }

  try {
    // Koristi revalidatePath za specifični slug (stranicu) bloga
    await revalidatePath(`/blog/${slug}`);
    return NextResponse.json({ revalidated: true, slug });
  } catch (error: any) {
    return NextResponse.json({ message: 'Error revalidating', error: error.message }, { status: 500 });
  }
}
