import { getKontaktiOsobeQuery } from '@/app/queries/getAllKontaktOsobeQuery';
import { getKontaktiSektorQuery } from '@/app/queries/getAllKontaktSektorQuery';
import PageContent from './PageContent';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { getAdminContactFormSemanticsQuery } from '@/app/queries/getContactFormSemantics';

export default async function ContactPage({ params: { lang } }: { params: { lang: string } }) {
  const getAllContactPersons = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getKontaktiOsobeQuery(lang),
    }),
    // cache: 'no-cache',
  });

  const parseDataPersons = await getAllContactPersons.json();

  const getAllContactSectors = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getKontaktiSektorQuery(lang),
    }),
    // cache: 'no-cache',
  });

  const getAllContactSemantics = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAdminContactFormSemanticsQuery(lang),
    }),
    cache: 'no-cache',
  });

  const parseDataSectors = await getAllContactSectors.json();

  const parseDataContactSemantics = await getAllContactSemantics.json();

  const dataShorthandPersons = parseDataPersons.data.kontaktiOsobe.edges;

  const dataShorthandSectors = parseDataSectors.data.kontaktiSektor.edges;

  const l = getSuffixFromLang(lang);

  const contactSemanticsShorthand = parseDataContactSemantics.data.adminKontaktForme.edges[0].node ?? [];
  const contactSemanticIntro =
    contactSemanticsShorthand[`adminKontaktFormaTekstovi${l}`]?.[`kontaktiBazaTekstova${l}`]
      .uvodniTekstoviZaKontakteGrupaPolja;

  const contactSemanticFormContent =
    contactSemanticsShorthand[`adminKontaktFormaTekstovi${l}`]?.[`kontaktiBazaTekstova${l}`].tekstoviStavkiUKontaktima;

  const contactFormGlobalIntro = contactSemanticsShorthand.kontaktFormaUvod;
  return (
    <main className='min-h-svh bg-sutraContactUsTempBg dark:bg-almost-black'>
      <PageContent
        personsData={dataShorthandPersons}
        sectorsData={dataShorthandSectors}
        contactSemantics={contactSemanticsShorthand}
        lang={lang}
        contactSemanticFormContent={contactSemanticFormContent}
        contactSemanticIntro={contactSemanticIntro}
        contactGlobalIntro={contactFormGlobalIntro}
      />
    </main>
  );
}
