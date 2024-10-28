import React from 'react';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import parse from 'html-react-parser';

import Image from 'next/image';
import Script from 'next/script';

interface ClientTestimonials {
  pageContent: any;
  lang: any;
}

function generateTestimonialsSchemaOrg(pageContent: any, lang: string) {
  const l = getSuffixFromLang(lang);

  // Izračunaj prosječnu ocjenu
  const ratings = pageContent.map((cont: any) => {
    const ratingValue = cont.node.iskustvaklijenataUvod.ocijenaIliBrojZvjezdicaTestimonials;
    return parseFloat(ratingValue) || 0;
  });
  const averageRating = ratings.length ? ratings.reduce((a: any, b: any) => a + b, 0) / ratings.length : 0;

  // Generiranje recenzija
  const testimonials = pageContent.map((cont: any) => {
    const introContent = cont.node.iskustvaklijenataUvod;
    const mainContent = {
      clientPosition: cont.node[`testimonials${l}`]?.[`pozicijaUkolikoPostoji${l}`],
      clientContent: cont.node[`testimonials${l}`]?.[`tekstTestimoniala${l}`],
    };

    return {
      '@type': 'Review',
      author: introContent.imeKlijentaTestimonials ?? 'Unknown Client',
      datePublished: introContent.datumObjaveTestimonials ?? '2024-01-01', // Dodano statičko polje datuma objave
      reviewBody: mainContent.clientContent ? mainContent.clientContent.replace(/<\/?[^>]+(>|$)/g, '') : 'No content',
      name: introContent.nazivRecenzijeTestimonials ?? 'Unnamed Review', // Dodano statičko polje za naziv recenzije
      reviewRating: {
        '@type': 'Rating',
        bestRating: '5',
        ratingValue: introContent.ocijenaIliBrojZvjezdicaTestimonials ?? '0',
        worstRating: '1', // Dodano statičko polje za najgoru ocjenu
      },
    };
  });

  // Generiranje schema.org podataka
  const schemaOrgData = {
    '@context': 'https://schema.org',
    '@type': 'Product', // Postavljeno na 'Product' da bude u skladu s primjerom
    name: 'Testimonial Product', // Dodano statičko ime proizvoda/usluge
    description: 'This product has received various reviews from customers.', // Dodano statičko polje opisa
    image: 'https://example.com/product.jpg', // Placeholder slika
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating.toFixed(1),
      reviewCount: pageContent.length,
    },
    offers: {
      '@type': 'Offer',
      price: '100.00', // Placeholder cijena
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock', // Dodana statička dostupnost
    },
    review: testimonials,
  };

  return JSON.stringify(schemaOrgData);
}

const TestimonialsSection = ({ pageContent, lang }: ClientTestimonials) => {
  const schemaOrgData = generateTestimonialsSchemaOrg(pageContent, lang);

  const l = getSuffixFromLang(lang);
  const prepareData = pageContent.map((cont: any) => {
    return {
      id: cont.node.id,
      introContent: { ...cont.node.iskustvaklijenataUvod },
      mainContent: {
        clientPosition: cont.node[`testimonials${l}`]?.[`pozicijaUkolikoPostoji${l}`],
        clientContent: cont.node[`testimonials${l}`]?.[`tekstTestimoniala${l}`],
      },
    };
  });

  return (
    <section>
      <h2 className='w-full text-center xl:text-h2-xl lg:text-h2-desktop md:text-h2-tablet text-h2-mobile font-semibold pt-8 text-primarna-tamna dark:text-primarna-svijetla'>
        Iskustva klijenata
      </h2>

      <div className='max-w-[1225px] mx-auto my-8 flex items-center justify-start gap-8 flex-wrap'>
        {prepareData.map((singleExp: any) => {
          const shorthand = singleExp.introContent;

          return (
            <article key={singleExp.id} className='w-full max-w-[534px] shrink-0'>
              <div className='xl:-pb--xl---m lg:-pb--desktop---m md:-pb--tablet---m -pb--mobile---m w-full flex items-center justify-center'>
                <div className='relative w-full max-w-[350px] h-[193px]'>
                  <Image
                    src={shorthand.prilozenaSlikaTestimonials.node.sourceUrl}
                    alt='Priložena slika testimoniala'
                    fill
                    className='block object-cover object-center aspect-auto'
                  />
                </div>
              </div>

              <div className='xl:text-text-base-l-xl lg:text-text-base-l-desktop text-text-base-l-mobiletablet text-almost-black text-center max-w-[534px] xl:-mt--xl---s lg:-mt--desktop---s md:-mt--tablet---s -mt--mobile---s xl:-pb--xl---m lg:-pb--desktop---m md:-pb--tablet---m -pb--mobile---m'>
                {parse(singleExp.mainContent.clientContent)}
              </div>

              <div className='w-full flex items-center justify-center'>
                <div className='xl:-mt--xl---s lg:-mt--desktop---s md:-mt--tablet---s -mt--mobile---s flex items-center justify-start xl:-gap--xl---s lg:-gap--desktop---s md:-gap--tablet---s -gap--mobile---s'>
                  <div className='w-14 h-14 relative'>
                    <Image
                      src={shorthand.logotipIliSlikaOsobe.node.sourceUrl}
                      alt='Logo ili slika osobe'
                      fill
                      className='object-cover object-center rounded-full block'
                    />
                  </div>

                  <div className=''>
                    <p className='xl:text-all-caps-xl lg:text-all-caps-large md:text-all-caps-medium text-all-caps-small uppercase'>
                      {shorthand.imeKlijentaTestimonials}
                    </p>
                    <p className='xl:text-text-base-small-xl lg:text-text-base-small-desktop text-text-base-small-mobiletablet text-almost-black'>
                      {singleExp.mainContent.clientPosition}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <Script
        id='schema-org-testimonials'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: schemaOrgData }}
      />
    </section>
  );
};

export default TestimonialsSection;
