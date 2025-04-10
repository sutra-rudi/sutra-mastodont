import { fetchMediaPaths } from '@/app/utils/callMediaPaths';
import tJson from '../../staticData/staticQueryData.json';
// import { mPlusFont } from '@/app/ui/fonts';
import parse from 'html-react-parser';
import { UserLanguage } from '@/app/enums/LangEnum';
const parseFrontendData = tJson.data.allAdminLegalTekstovi.edges.find(
  (ltxt) => ltxt.node.title === 'Politika kolačića'
)?.node;
export default async function CookiePolicy({ params: { lang } }: { params: { lang: string } }) {
  const mp = await fetchMediaPaths();

  const { heroImagesCookies } = mp;

  return (
    <main>
      <picture>
        <img
          src={heroImagesCookies.desktop}
          alt='Hero decorative image'
          fetchPriority='high'
          width={1920}
          height={650}
          className='object-cover object-center w-full h-full max-h-[650px] aspect-auto md:block hidden'
        />
      </picture>

      <picture>
        <img
          src={heroImagesCookies.mobile}
          alt='Hero decorative image'
          fetchPriority='high'
          width={1920}
          height={650}
          className='object-cover object-center w-full h-full max-h-[650px] aspect-auto md:hidden block'
        />
      </picture>

      <div className='w-full '>
        <div className='max-w-[750px] mx-auto lg:-pt--desktop---4xl md:-pt--tablet---4xl -pt--mobile---4xl lg:-pb--desktop---section-l md:-pb--tablet---section-l -pb--mobile---section-l px-[14px]'>
          <h2
            className={` lg:text-h2-desktop md:text-h2-tablet text-h2-mobile text-sekundarna-tamna lg:-mb--desktop-h1-2---naslov-tekst md:-mb--tablet-h1-2---naslov-tekst -mb--mobile-h1-2---naslov-tekst`}
          >
            {lang === UserLanguage.hr
              ? parseFrontendData?.modulBazeTekstovaHr.naslovBazaTekstovaHr
              : parseFrontendData?.modulBazeTekstovaEng.naslovBazaTekstovaEng}
          </h2>

          <div className='text-sekundarna-tamna lg:text-text-base-base-desktop md:text-text-base-base-tablet text-text-base-base-mobile prose'>
            {lang === UserLanguage.hr
              ? parse(parseFrontendData?.modulBazeTekstovaHr.tekstBazaTekstovaHr!)
              : parse(parseFrontendData?.modulBazeTekstovaEng.tekstBazaTekstovaEng!)}
          </div>
        </div>
      </div>
    </main>
  );
}
