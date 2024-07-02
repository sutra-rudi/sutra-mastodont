import React from 'react';
import parse from 'html-react-parser';

interface LocationsSectionInterface {
  pageContent: any;
}

const LocationsSection = ({ pageContent }: LocationsSectionInterface) => {
  const contentShorthand = pageContent.data.lokacije.edges;

  return (
    <section>
      <h2 className='w-full text-center text-7xl font-semibold pt-8'>Lokacije</h2>

      <div className='max-w-[1225px] mx-auto my-8'>
        {contentShorthand.map((cont: any) => {
          const contShorthand = cont.node.radnaVremenaLokacijaOsnovneInformacije;

          const imageSourceNaslovnaSlika = cont.node.naslovnaSlika.glavnaSlikaNaslovnaSlika
            ? cont.node.naslovnaSlika.glavnaSlikaNaslovnaSlika
            : 'https://placehold.co/400.png';

          return (
            <div className='flex justify-center place-items-center gap-8' key={cont.node.id}>
              <div className='grid'>
                <div className='flex prose'>
                  <h3>Adresa</h3>
                  <p>{parse(contShorthand.adresaLokacije)}</p>
                </div>

                <div className='flex'>
                  <h3>Odgovorna osoba</h3>
                  <p>{contShorthand.imeOdgovorneOsobe}</p>
                </div>

                <div className='flex'>
                  <h3>Email</h3>
                  {contShorthand.emailLokacije}
                </div>

                <div className='flex'>
                  <a href={contShorthand.googleMapsLinkPojedineLokacije}>Google maps</a>
                </div>

                <div className='flex'>
                  <h3>Telefon:</h3>
                  <p>{contShorthand.kontaktTelefonLokacije}</p>
                </div>
              </div>

              <div className='relative w-[250px] h-[200px]'>
                <picture>
                  <img src={imageSourceNaslovnaSlika.node.sourceUrl} alt='company logo' />
                </picture>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LocationsSection;
