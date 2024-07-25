import React from 'react';

const dump = () => {
  return (
    <div>
      {/* <div>
        <h2 className='w-full text-center text-7xl font-semibold pt-8'>Osobe</h2>
        <div className='flex w-full justify-between'>
          {personsData.map((persons: any) => {
            const titleFieldsShorthand = persons.node[`imePrezimePozicijaDodatnogKontakta${lang}`];
            const nameFieldShorthand = persons.node[`kontaktiDodatniEmailKontakti`];

            return (
              <article className='w-full' key={persons.node.id}>
                <div className='relative w-full max-w-[200px] h-[200px]'>
                  <Image src={nameFieldShorthand.slikaDodatniKontaktOsobe.node.sourceUrl} alt='person image' fill />
                </div>
                <h2 className='py-2'>
                  {nameFieldShorthand.imeKontaktOsobe} {nameFieldShorthand.prezimeKontaktOsobe}
                </h2>

                <div className='py-2'>
                  <h3>pozicija: {titleFieldsShorthand[`pozicijaDodatnogKontakta${lang}`]}</h3>
                  <h3>sektor: {titleFieldsShorthand[`sektorDodatniKontakti${lang}`]}</h3>
                  <h3>bonus text: {titleFieldsShorthand[`bonusLinkTekst${lang}`]}</h3>
                </div>
                <div className='py-2'>
                  <div className='grid grid-cols-2 gap-1'>
                    <span>email: {nameFieldShorthand.emailKontaktOsobe}</span>
                    <span>facebook: {nameFieldShorthand.facebookKontaktOsobe}</span>
                    <span>instagram: {nameFieldShorthand.instagramKontaktOsobe}</span>
                    <span>linkedin: {nameFieldShorthand.linkedinKontaktOsobe}</span>
                    <span>mobitel: {nameFieldShorthand.mobitelLinkKontaktOsobe}</span>
                    <span>telefon: {nameFieldShorthand.telefonLinkKontaktOsobe}</span>
                    <span>viber: {nameFieldShorthand.viberKontaktOsobe}</span>
                    <span>whatsapp: {nameFieldShorthand.whatsappKontaktOsobe}</span>
                    <span>x: {nameFieldShorthand.xKontaktOsobe}</span>
                    <span>Youtube: {nameFieldShorthand.youtubeKontaktOsobe}</span>
                    <span>discord: {nameFieldShorthand.discordKontaktOsobe}</span>
                    <span>bonusPolje: {nameFieldShorthand.bonusPoljeKontaktOsobe}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div>
        <h2 className='w-full text-center text-7xl font-semibold pt-8'>Sektori</h2>

        <div>
          {sectorsData &&
            sectorsData.map((sector: any) => {
              const sectorFieldsShorthand = sector.node[`kontaktNazivSektora${lang}`];
              return (
                <article key={sector.node.id}>
                  <div className='relative w-full max-w-[200px] h-[200px]'>
                    <Image src={sector.node.kontaktiSektor.slikaSektor.node.sourceUrl} alt='sector image' fill />
                  </div>
                  <h3>{sectorFieldsShorthand[`nazivSektora${lang}`]}</h3>

                  <div className='grid grid-cols-2 gap-1'>
                    <span>mail: {sector.node.kontaktiSektor.emailSektor}</span>
                    <span>fax: {sector.node.kontaktiSektor.faxLinkSektor}</span>
                    <span>fax2: {sector.node.kontaktiSektor.faxPrikazNaStraniciSektor}</span>
                    <span>mob: {sector.node.kontaktiSektor.mobitelLinkSektor}</span>
                    <span>mob2: {sector.node.kontaktiSektor.mobitelPrikazNaStraniciSektor}</span>
                    <span>zoom teams:{sector.node.kontaktiSektor.ostaloKontaktZoomTeamsSektor}</span>
                    <span>slack: {sector.node.kontaktiSektor.slackKontaktSektor}</span>
                    <span>tel: {sector.node.kontaktiSektor.telefonLinkSektor}</span>
                    <span>tel2: {sector.node.kontaktiSektor.telefonPrikazNaStraniciSektor}</span>
                  </div>
                </article>
              );
            })}
        </div>
      </div> */}
    </div>
  );
};

export default dump;
