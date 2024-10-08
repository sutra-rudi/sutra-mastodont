import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
interface PartnersSectionInterface {
  pageContent: any;
}
const PageContent = ({ pageContent }: PartnersSectionInterface) => {
  const duplicatedContent = [...pageContent, ...pageContent];

  return (
    <section className='min-h-screen'>
      <h2 className='w-full text-center text-7xl font-semibold pt-8'>Partneri</h2>
      <div className='max-w-[1225px] mx-auto my-8'>
        <h2 className='mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl'>
          You&apos;ll be in good company
        </h2>

        <Marquee direction='left'>
          {duplicatedContent.map((cont: any) => {
            const imageSourcesShorthand = cont.node.logotipiPartnera.logoPNG.node;
            return (
              cont.node.logotipiPartnera.prikaziNaNaslovnici && (
                <Link
                  key={cont.node.id}
                  className='block mx-4 flex-shrink-0'
                  href={cont.node.logotipiPartnera.linkNaStranicuKlijentapartnera}
                >
                  <Image
                    src={imageSourcesShorthand.sourceUrl}
                    alt='partner logo'
                    width={96}
                    height={96}
                    sizes={imageSourcesShorthand.sizes}
                    className='object-contain object-center block'
                  />
                </Link>
              )
            );
          })}
        </Marquee>

        <div className='w-full flex items-center justify-start gap-6 bg-primarna-tamna dark:bg-primarna-svijetla mt-16 overflow-hidden'>
          <Marquee direction='right'>
            {duplicatedContent.map((cont: any) => {
              const imageSourcesShorthand = cont.node.logotipiPartnera.logoPNG.node;
              return (
                cont.node.logotipiPartnera.prikaziNaNaslovnici && (
                  <Link
                    key={cont.node.id}
                    className='block mx-4 flex-shrink-0 px-6 py-8'
                    href={cont.node.logotipiPartnera.linkNaStranicuKlijentapartnera}
                  >
                    <Image
                      src={imageSourcesShorthand.sourceUrl}
                      alt='partner logo'
                      width={96}
                      height={96}
                      sizes={imageSourcesShorthand.sizes}
                      className='object-contain object-center block'
                    />
                  </Link>
                )
              );
            })}
          </Marquee>
        </div>

        <div className='grid grid-cols-3 items-center mt-16'>
          {duplicatedContent.map((cont: any) => {
            const imageSourcesShorthand = cont.node.logotipiPartnera.logoPNG.node;
            return (
              cont.node.logotipiPartnera.prikaziNaNaslovnici && (
                <Link
                  key={cont.node.id}
                  className=' mx-4 flex-shrink-0 w-full px-12 py-10 border border-sekundarna-svijetla flex items-center justify-center'
                  href={cont.node.logotipiPartnera.linkNaStranicuKlijentapartnera}
                >
                  <Image
                    src={imageSourcesShorthand.sourceUrl}
                    alt='partner logo'
                    width={96}
                    height={96}
                    sizes={imageSourcesShorthand.sizes}
                    className='object-contain object-center block'
                  />
                </Link>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PageContent;
