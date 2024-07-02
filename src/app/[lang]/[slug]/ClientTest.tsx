export default const ClientTest = () =>  <article key={index} className='border border-blue-500 w-full max-w-[500px]'>
              <div className='flex place-items-center'>
                <div className='py-2'>
                  <h3>{singleExp.introContent.imeKlijentaTestimonials ?? 'Nema imena'}</h3>
                  <h5>{singleExp.introContent.imeTvrtkeZemljaTestimonials ?? 'Nema tvrtke'}</h5>
                  <p>Pozicija: {singleExp.mainContent.clientPosition ?? 'Nema pozicije'}</p>
                  <div className=''>
                    <span>Ocjena: {shorthand.ocijenaIliBrojZvjezdicaTestimonials ?? 'Nema ocjene'}</span>
                  </div>
                  <div className=''>
                    <h4>LOGO</h4>
                    <div className='relative  w-[50px] h-[50px]'>
                      <Image
                        src={shorthand.logotipTestimonials.node.sourceUrl ?? 'https://placehold.co/400.png'}
                        alt='ciaos'
                        fill
                      />
                    </div>
                  </div>
                </div>

                <div className='relative w-full h-[200px] rounded-full max-w-[200px]'>
                  <Image
                    src={shorthand.prilozenaSlikaTestimonials.node.sourceUrl ?? 'https://placehold.co/400.png'}
                    alt='slika'
                    fill
                    className='object-center object-cover block aspect-square rounded-full'
                  />
                </div>
              </div>

              <div className='py-2 prose'>
                {singleExp.mainContent.clientContent ? parse(singleExp.mainContent.clientContent) : 'Nema sadržaja'}
              </div>

              <div className='py-2'>
                {shorthand.uploadVideo && (
                  <ReactPlayer
                    url={shorthand.uploadVideo.node.mediaItemUrl}
                    width={'100%'}
                    height={'100%'}
                    playsinline
                    controls
                  />
                )}
              </div>

              <div className='flex justify-between py-2'>
                {shorthand.vanjskaPoveznicaTestimonials && (
                  <a href={shorthand.vanjskaPoveznicaTestimonials}>Vanjski link</a>
                )}
                {shorthand.vanjskiLinkNaVideoYoutube && <a href={shorthand.vanjskiLinkNaVideoYoutube}>Youtube link</a>}
              </div>
            </article>