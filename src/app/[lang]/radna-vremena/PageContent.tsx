import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import dayjs from 'dayjs';
import parse from 'html-react-parser';

interface RadnaVremenaPageContent {
  pageContent: any;
  defaultRadno: any;
  tjedniRaspored: any;
  lang: string;
}

const PageContent = ({ pageContent, lang, defaultRadno, tjedniRaspored }: RadnaVremenaPageContent) => {
  const l = getSuffixFromLang(lang);
  const masterField = `radnoVrijeme${l}`;

  const displayField = pageContent[masterField][`textBox${l}`];
  const displayFieldDefault = defaultRadno[masterField][`textBox${l}`];
  const vrijediOdSez = pageContent.sezonskoRadnoVrijemeAktivatorDatuma.vrijediOdSezonskoRadnoVrijeme;
  const vrijediDoSez = pageContent.sezonskoRadnoVrijemeAktivatorDatuma.vrijediDoSezonskoRadnoVrijeme;
  const contShorthand = tjedniRaspored[`tjedniRaspored${l}`]?.[`tjedniRaspored${l}`];
  const uvodShorthand = tjedniRaspored.tjedniRasporedUvod;
  const isSeasonal: boolean = uvodShorthand.sezonskoRadnoVrijeme;

  const notifyShort = tjedniRaspored[`tjedniRaspored${l}`].dodatnaNapomenaTjedniRasporedHr;

  const fieldDays: any[] = [
    { hr: 'ponedjeljak', eng: 'Monday', ger: 'Montag', ita: 'lunedì' },
    { hr: 'utorak', eng: 'Tuesday', ger: 'Dienstag', ita: 'martedì' },
    { hr: 'srijeda', eng: 'Wednesday', ger: 'Mittwoch', ita: 'mercoledì' },
    { hr: 'cetvrtak', eng: 'Thursday', ger: 'Donnerstag', ita: 'giovedì' },
    { hr: 'petak', eng: 'Friday', ger: 'Freitag', ita: 'venerdì' },
    { hr: 'subota', eng: 'Saturday', ger: 'Samstag', ita: 'sabato' },
    { hr: 'nedjelja', eng: 'Sunday', ger: 'Sonntag', ita: 'domenica' },
  ];

  return (
    <section className='w-full min-h-dvh px-4'>
      <div className='w-full max-w-[1440px] mx-auto my-0 border-b border-accent/25'>
        <div className='w-full mx-auto flex flex-col place-items-center gap-4 py-6'>
          <h1 className='text-3xl font-bold dark:text-primary-light'>Radna vremena prijatelju moj</h1>
          <p className='italic text-xl text-primary-dark/25 dark:text-primary-light'>...Đavo ih odnio...</p>
        </div>
        <div className='w-full grid grid-cols-1 place-items-center gap-4 my-12'>
          <h2 className='max-w-prose text-2xl font-semibold dark:text-primary-light'>{displayField ?? 'Nema polja'}</h2>

          <div className=''>
            <p className='underline dark:text-primary-light'>
              Vrijedi od: <span>{dayjs(vrijediOdSez).format('DD.MM.YYYY')}</span> do:{' '}
              {dayjs(vrijediDoSez).format('DD.MM.YYYY')}
            </p>
          </div>
        </div>
      </div>

      <div className='w-full max-w-[1440px] mx-auto my-0 border-b border-accent/25'>
        <div className='w-full mx-auto flex flex-col place-items-center gap-4 py-6'>
          <h1 className='text-3xl font-bold dark:text-primary-light'>Radna vremena default prijatelju moj</h1>
          <p className='italic text-xl text-primary-dark/25 dark:text-primary-light'>...Đavo ih donio...</p>
        </div>
        <div className='w-full grid grid-cols-1 place-items-center gap-4 my-12'>
          <h2 className='max-w-prose text-2xl font-semibold dark:text-primary-light'>
            {parse(displayFieldDefault) ?? 'Nema polja'}
          </h2>
        </div>
      </div>

      {isSeasonal && (
        <div className='py-4'>
          <div className='w-full mx-auto flex flex-col place-items-center gap-4 py-6'>
            <h4 className='font-medium text-accent text-lg '>Sezonsko radno vrijeme prijatelju moj</h4>
            <p className='italic text-xl text-primary-dark/25 dark:text-primary-light'>...Đavo ga donio...</p>
          </div>

          <div className='w-full flex items-center justify-start'>
            <p className='flex items-center justify-start gap-1 dark:text-primary-light'>
              <span className='font-medium dark:text-primary-light'>Vrijedi od:</span>
              <span className='italic underline px-1 dark:text-primary-light'>
                {dayjs(uvodShorthand.vrijediOd).format('DD.MM.YYYY')}
              </span>
              <span className='font-medium dark:text-primary-light'>do:</span>
              <span className='italic underline px-1 dark:text-primary-light'>
                {dayjs(uvodShorthand.vrijediDo).format('DD.MM.YYYY')}
              </span>
            </p>
          </div>
        </div>
      )}

      <div className='w-full mx-auto flex flex-col place-items-center gap-4 py-6'>
        <h1 className='text-3xl font-bold dark:text-primary-light'>Tjedni raspored prijatelju moj</h1>
        <p className='italic text-xl text-primary-dark/25 dark:text-primary-light'>...Đavo ga odnio...</p>
        {notifyShort && (
          <div className='prose prose-p:text-base prose-p:text-balance dark:prose-p:text-primary-light dark:prose-strong:text-primary-light text-center'>
            {parse(notifyShort)}
          </div>
        )}
      </div>

      <div className='grid items-start gap-8 w-full max-w-[1440px] mx-auto'>
        <section className='relative overflow-x-auto'>
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                {fieldDays.map(
                  (day) =>
                    contShorthand[day.hr] && ( // Prikazujemo samo dane koji imaju vrijednost
                      <th scope='col' key={day[lang]} className='px-6 py-3'>
                        {day[lang]}
                      </th>
                    )
                )}
              </tr>
            </thead>
            <tbody>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                {fieldDays.map(
                  (day) =>
                    contShorthand[day.hr] && ( // Prikazujemo samo dane koji imaju vrijednost
                      <td key={day.hr} className='px-6 py-4'>
                        {contShorthand[day.hr]}
                      </td>
                    )
                )}
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </section>
  );
};

export default PageContent;
