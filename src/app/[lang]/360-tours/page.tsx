import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import Link from 'next/link';
import slugify from 'slugify';

export default async function VirtualTours({ params: { lang } }: { params: { lang: string } }) {
  const tourList = ['Gym-360', 'Villa Culina'];

  //   const l = getSuffixFromLang(lang);

  return (
    <main>
      <h2>Šetnje</h2>

      <div className=''>
        {tourList.map((tour, index) => (
          <Link href={`/${lang}/360-tours/${slugify(tour) + `-${index + 1}`}`} key={index}>
            {tour}
          </Link>
        ))}
      </div>
    </main>
  );
}
