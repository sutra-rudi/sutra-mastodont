'use client';

import React from 'react';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import parse from 'html-react-parser';

import Image from 'next/image';
import Script from 'next/script';

// const ReactPlayerDy = dynamic(() => import('react-player'), { ssr: false });

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
  console.log('PAGE CONT', pageContent);

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
      <h2 className='w-full text-center text-7xl font-semibold pt-8'>Iskustva klijenata</h2>

      <div className='max-w-[1225px] mx-auto my-8 grid grid-cols-1 gap-6'>
        {prepareData.map((singleExp: any, index: number) => {
          const shorthand = singleExp.introContent;

          return (
            <article key={singleExp.id}>
              <Image
                src={shorthand.prilozenaSlikaTestimonials.node.sourceUrl}
                alt='Priložena slika testimoniala'
                width={350}
                height={193}
              />

              <div className=''>{parse(singleExp.mainContent.clientContent)}</div>

              <div className=''>
                <div className='w-14 h-14 relative'>
                  <Image src={shorthand.logotipIliSlikaOsobe.node.sourceUrl} alt='Logo ili slika osobe' fill />
                </div>

                <div className=''>
                  <p>{shorthand.imeKlijentaTestimonials}</p>
                  <p>{singleExp.mainContent.clientPosition}</p>
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
