import { getSezonskoRadnoVrijemeQuery } from '@/app/queries/getAllSezonskoRadnoVrijemeQuery';
import PageContent from './PageContent';
import { getAllRadnoVrijemeQuery } from '@/app/queries/getDefaultRadnoVrijeme';
import { getTjedniRasporedQuery } from '@/app/queries/getAllTjedniRasporedQuery';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import parse from 'html-react-parser';
import dayjs from 'dayjs';
import Script from 'next/script';

export function generateSchemaOrg(lang: string, pageContent: any, defaultRadno: any, tjedniRaspored: any) {
  const l = getSuffixFromLang(lang);
  const masterField = `radnoVrijeme${l}`;
  const displayField = pageContent[masterField][`textBox${l}`];
  const displayFieldDefault = defaultRadno[masterField][`textBox${l}`];
  const vrijediOdSez = pageContent.sezonskoRadnoVrijemeAktivatorDatuma.vrijediOdSezonskoRadnoVrijeme;
  const vrijediDoSez = pageContent.sezonskoRadnoVrijemeAktivatorDatuma.vrijediDoSezonskoRadnoVrijeme;
  const contShorthand = tjedniRaspored[`tjedniRaspored${l}`]?.[`tjedniRaspored${l}`];
  const uvodShorthand = tjedniRaspored.tjedniRasporedUvod;
  const isSeasonal: boolean = uvodShorthand?.sezonskoRadnoVrijeme;

  const radnoVrijemeSchema = {
    '@type': 'OpeningHoursSpecification',
    opens: parse(displayFieldDefault ? displayFieldDefault : '08:00').toString(),
    closes: parse(displayFieldDefault ? displayFieldDefault : '16:00').toString(),
    validFrom: dayjs(vrijediOdSez).format('YYYY-MM-DD'),
    validThrough: dayjs(vrijediDoSez).format('YYYY-MM-DD'),
    description: parse(displayFieldDefault ?? 'Nema dostupnih informacija').toString(),
  };

  const seasonalSchema = isSeasonal
    ? {
        '@type': 'OpeningHoursSpecification',
        validFrom: dayjs(uvodShorthand.vrijediOd).format('YYYY-MM-DD'),
        validThrough: dayjs(uvodShorthand.vrijediDo).format('YYYY-MM-DD'),
        description: parse(displayField).toString(),
      }
    : null;

  // Kreiranje tjednog rasporeda
  const fieldDays = [
    { hr: 'ponedjeljak', eng: 'Monday', ger: 'Montag', ita: 'lunedì' },
    { hr: 'utorak', eng: 'Tuesday', ger: 'Dienstag', ita: 'martedì' },
    { hr: 'srijeda', eng: 'Wednesday', ger: 'Mittwoch', ita: 'mercoledì' },
    { hr: 'cetvrtak', eng: 'Thursday', ger: 'Donnerstag', ita: 'giovedì' },
    { hr: 'petak', eng: 'Friday', ger: 'Freitag', ita: 'venerdì' },
    { hr: 'subota', eng: 'Saturday', ger: 'Samstag', ita: 'sabato' },
    { hr: 'nedjelja', eng: 'Sunday', ger: 'Sonntag', ita: 'domenica' },
  ];

  const weeklyHours = fieldDays.map((day) => ({
    '@type': 'OpeningHoursSpecification',
    //@ts-ignore
    dayOfWeek: day[lang] || day.hr, // koristi odgovarajući dan na temelju jezika
    opens: parse(contShorthand[day.hr]?.split('-')[0] || '08:00').toString(),
    closes: parse(contShorthand[day.hr]?.split('-')[1] || '16:00').toString(),
  }));

  // Vraćanje cijelog schema.org objekta
  const schemaOrgData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: pageContent?.imeTvrtke ?? 'Sutra Mastodont',
    openingHoursSpecification: [
      radnoVrijemeSchema,
      ...(seasonalSchema ? [seasonalSchema] : []),
      ...weeklyHours, // dodajemo tjedne rasporede
    ],
  };

  return JSON.stringify(schemaOrgData);
}

export default async function RadnaVremena({
  params: { lang },
  searchParams: { tag },
}: {
  params: { lang: string };
  searchParams: { tag: string };
}) {
  const getAllSeasonalVremena = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getSezonskoRadnoVrijemeQuery(lang),
    }),
  });

  const parseData = await getAllSeasonalVremena.json();

  const dataShorthandSezonsko = parseData.data.allSezonskoRadnoVrijeme.edges[0].node;

  const getDefaultRadnaVremena = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllRadnoVrijemeQuery(lang),
    }),
  });

  const parseDefaultData = await getDefaultRadnaVremena.json();

  const defaultShorthand = parseDefaultData.data.allRadnoVrijeme.edges[0].node;

  const getTjedniRaspored = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getTjedniRasporedQuery(lang),
    }),
  });

  const parseTjedniRasporedData = await getTjedniRaspored.json();
  const dataShorthandTjedni = parseTjedniRasporedData.data.allTjedniRaspored.edges[0].node;

  const schemaOrgData = generateSchemaOrg(lang, dataShorthandSezonsko, defaultShorthand, dataShorthandTjedni);

  return (
    <main className='w-full min-h-dvh pb-12 dark:bg-primary-dark'>
      {dataShorthandSezonsko && (
        <PageContent
          defaultRadno={defaultShorthand}
          lang={lang}
          pageContent={dataShorthandSezonsko}
          tjedniRaspored={dataShorthandTjedni}
        />
      )}

      <Script
        id='opening-hours-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: schemaOrgData,
        }}
      />
    </main>
  );
}
