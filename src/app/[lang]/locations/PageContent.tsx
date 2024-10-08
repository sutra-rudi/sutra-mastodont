'use client';

import parse from 'html-react-parser';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
interface LocationsSectionInterface {
  pageContent: any;
}

const PageContent = ({ pageContent }: LocationsSectionInterface) => {
  const defaultMultiple = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section>
      <h2 className='w-full text-center text-7xl font-semibold pt-8'>Lokacije</h2>

      <div className='max-w-2xl lg:max-w-4xl mx-auto text-center'>
        <h2 className='text-3xl font-extrabold text-gray-900'>Visit Our Location</h2>
        <p className='mt-4 text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='max-w-[1225px] mx-auto my-8'>
        {pageContent.map((cont: any) => {
          const contShorthand = cont.node.radnaVremenaLokacijaOsnovneInformacije;

          const prepGallery = Object.values(cont.node.photoGallery.fotogalerija);

          const imageSourceNaslovnaSlika = cont.node.naslovnaSlika.glavnaSlikaNaslovnaSlika
            ? cont.node.naslovnaSlika.glavnaSlikaNaslovnaSlika
            : 'https://placehold.co/400.png';

          const imageSourceSekundarnaSlika = cont.node.naslovnaSlika.sekundarnaGlavnaSlikaThumbnailHover
            ? cont.node.naslovnaSlika.sekundarnaGlavnaSlikaThumbnailHover
            : 'https://placehold.co/400.png';

          return (
            <div key={cont.node.id} className='mt-16 lg:mt-20 grid grid-cols-1 gap-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='rounded-lg overflow-hidden group relative'>
                  <picture className='group-hover:opacity-0 group-hover:scale-90 transition-all scale-100 duration-200 absolute inset-0'>
                    <img src={imageSourceNaslovnaSlika.node.sourceUrl} alt='company location' />
                  </picture>
                  <picture className='group-hover:opacity-100 group-hover:scale-100 opacity-0 scale-90 transition-all duration-200 absolute inset-0'>
                    <img src={imageSourceSekundarnaSlika.node.sourceUrl} alt='company location' />
                  </picture>
                </div>
                <div>
                  <div className='max-w-full mx-auto rounded-lg overflow-hidden'>
                    <div className='px-6 py-4'>
                      <h3 className='text-lg font-medium text-gray-900'>Our Address</h3>
                      <p className='prose'>{parse(contShorthand.adresaLokacije)}</p>
                    </div>
                    <div className='border-t border-gray-200 px-6 py-4'>
                      <h3 className='text-lg font-medium text-gray-900'>Reference person</h3>
                      <p className='mt-1 text-gray-600'>{contShorthand.imeOdgovorneOsobe}</p>
                    </div>
                    <div className='border-t border-gray-200 px-6 py-4'>
                      <h3 className='text-lg font-medium text-gray-900'>Contact</h3>
                      <p className='mt-1 text-gray-600'>Email: {contShorthand.emailLokacije}</p>
                      <p className='mt-1 text-gray-600'>Phone: {contShorthand.kontaktTelefonLokacije}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=''>
                <Slider {...defaultMultiple}>
                  {prepGallery.map((galItem: any, index: number) => {
                    return (
                      galItem && (
                        <picture key={index} className=''>
                          <img src={galItem.node.sourceUrl} alt='company locations gallery image' />
                        </picture>
                      )
                    );
                  })}
                </Slider>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PageContent;
