import Image from 'next/image';
import React from 'react';

interface ContactPageInterface {
  personsData: any;
  sectorsData: any;
  lang: any;
}

const PageContent = ({ personsData, sectorsData, lang }: ContactPageInterface) => {
  return (
    <section>
      <div className='max-w-[1225px] mx-auto my-8 '>
        <div className=''>
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

        <div className=''>
          <h2 className='w-full text-center text-7xl font-semibold pt-8'>Sektori</h2>

          <div className=''>
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
        </div>
      </div>

      <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>
          Contact Us
        </h2>
        <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
          Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let
          us know.
        </p>
        <form action='#' className='space-y-8'>
          <div>
            <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              placeholder='name@flowbite.com'
              required
            />
          </div>
          <div>
            <label htmlFor='subject' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              Subject
            </label>
            <input
              type='text'
              id='subject'
              className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              placeholder='Let us know how we can help you'
              required
            />
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor='message' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>
              Your message
            </label>
            <textarea
              id='message'
              rows={6}
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
              placeholder='Leave a comment...'
            ></textarea>
          </div>
          <button
            type='submit'
            className='py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default PageContent;
