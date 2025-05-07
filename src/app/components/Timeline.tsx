import React from 'react';

export default function Timeline() {
  return (
    <section className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl w-full h-full'>
      <h2 className='text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px] w-full text-center lg:mb-20 mb-[60px]'>
        {/* {findGeneralTranslation('Portfolio', currentLang, generalTranslations)} */}
        Timeline
      </h2>
      <div className='container px-4 mx-auto'>
        <ol className='relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200'>
          <li className='group relative grid grid-cols-2 odd:-me-3 even:-ms-3'>
            <div className='relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last'>
              <span className='size-3 shrink-0 rounded-full bg-blue-600'></span>

              <div className='-mt-2'>
                <time className='text-xs/none font-medium text-gray-700'>12/02/2025</time>

                <h3 className='text-lg font-bold text-gray-900'>Kickoff</h3>

                <p className='mt-0.5 text-sm text-gray-700'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum adipisci tenetur
                  sunt quae exercitationem sed pariatur porro!
                </p>
              </div>
            </div>

            <div aria-hidden='true'></div>
          </li>

          <li className='group relative grid grid-cols-2 odd:-me-3 even:-ms-3'>
            <div className='relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last'>
              <span className='size-3 shrink-0 rounded-full bg-blue-600'></span>

              <div className='-mt-2'>
                <time className='text-xs/none font-medium text-gray-700'>5/03/2025</time>

                <h3 className='text-lg font-bold text-gray-900'>First Milestone</h3>

                <p className='mt-0.5 text-sm text-gray-700'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum adipisci tenetur
                  sunt quae exercitationem sed pariatur porro!
                </p>
              </div>
            </div>

            <div aria-hidden='true'></div>
          </li>

          <li className='group relative grid grid-cols-2 odd:-me-3 even:-ms-3'>
            <div className='relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last'>
              <span className='size-3 shrink-0 rounded-full bg-blue-600'></span>

              <div className='-mt-2'>
                <time className='text-xs/none font-medium text-gray-700'>24/04/2025</time>

                <h3 className='text-lg font-bold text-gray-900'>Launch</h3>

                <p className='mt-0.5 text-sm text-gray-700'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum adipisci tenetur
                  sunt quae exercitationem sed pariatur porro!
                </p>
              </div>
            </div>

            <div aria-hidden='true'></div>
          </li>
        </ol>
      </div>
    </section>
  );
}
