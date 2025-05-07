import ContactForm from '@/app/appComponents/global/ContactForm';
import { fetchMediaPaths } from '@/app/utils/callMediaPaths';
import Marquee from 'react-fast-marquee';
import caruselData from '../../staticData/staticQueryData.json';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import Hero from './Hero';

const findKarusel2 = Object.values(caruselData.data.allSlikeGalerijaKarusel.edges[1].node.photoGallery30pcs).filter(
  (v) => v
);

const getData = caruselData.data.allAdminKontaktForma.edges[0].node;

export default async function ContactPage({ params: { lang } }: { params: { lang: string } }) {
  const MP = await fetchMediaPaths();
  const l = getSuffixFromLang(lang);

  const { heroImagesContactUs } = MP;
  return (
    <main className='w-full min-h-screen relative'>
      <Hero heroImagesContactUs={heroImagesContactUs} />

      <div className='w-full z-40 relative lg:max-w-[900px] max-w-[95%] bg-white mx-auto shadow-md px-4 py-12 lg:-mt--desktop---4xl md:-mt--tablet---4xl -mt--mobile---4xl lg:translate-y-[-40%] translate-y-[-20%] rounded-lg'>
        <div className='max-w-screen-sm mx-auto'>
          <span className='lg:mb-desktop-naslov-nadnaslov md:mb-tablet-naslov-nadnaslov mb-mobile-naslov-nadnaslov block text-base font-semibold text-accent-boja'>
            {
              //@ts-ignore
              getData[`adminKontaktFormaTekstovi${l}`]?.[`kontaktiBazaTekstova${l}`].uvodniTekstoviZaKontakteGrupaPolja
                .nadnaslovpodnaslovUKontaktima
            }
          </span>
          <h2 className='lg:mb-desktop-tekst-naslov md:mb-tablet-tekst-naslov mb-mobile-tekst-naslov lg:text-4xl md:text-3xl text-2xl font-bold uppercase text-heading-color-light-mode'>
            {
              //@ts-ignore
              getData[`adminKontaktFormaTekstovi${l}`]?.[`kontaktiBazaTekstova${l}`].uvodniTekstoviZaKontakteGrupaPolja
                .naslovUKontaktima
            }
          </h2>
          <p className='lg:mb-9 md:mb-8 mb-7 text-base leading-relaxed text-text-light-mode'>
            {
              //@ts-ignore
              getData[`adminKontaktFormaTekstovi${l}`]?.[`kontaktiBazaTekstova${l}`].uvodniTekstoviZaKontakteGrupaPolja
                .uvodniTekstZaKontakte12Recenice
            }
          </p>
        </div>
        <ContactForm formId='hGGUQ121C' lng={lang} />
      </div>

      <Marquee className='lg:-mt--desktop---s md:-mt--tablet---s -mt--mobile---s'>
        {findKarusel2.map((im) => (
          <picture key={im?.node.id}>
            <img
              src={im?.node.sourceUrl}
              alt={`Image - ${im?.node.id}`}
              width={300}
              height={290}
              loading='eager'
              fetchPriority='high'
              className='object-cover object-center block m-0 p-0 aspect-square w-full max-w-[300px] lg:max-h-[290px] max-h-[223px]'
            />
          </picture>
        ))}
      </Marquee>
    </main>
  );
}
