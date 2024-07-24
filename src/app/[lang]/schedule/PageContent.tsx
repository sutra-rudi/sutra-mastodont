import React from 'react';

const PageContent = () => {
  return (
    <article className='mx-auto my-0 max-w-[1024px] py-4'>
      <h2 className='w-full text-center text-7xl font-semibold pt-8 pb-8'>Rasporedi</h2>

      <div className='grid items-start gap-8 w-full'>
        <section className='relative overflow-x-auto'>
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Product name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Color
                </th>
                <th scope='col' className='px-6 py-3'>
                  Category
                </th>
                <th scope='col' className='px-6 py-3'>
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  Apple MacBook Pro 17&quot;
                </th>
                <td className='px-6 py-4'>Silver</td>
                <td className='px-6 py-4'>Laptop</td>
                <td className='px-6 py-4'>$2999</td>
              </tr>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  Microsoft Surface Pro
                </th>
                <td className='px-6 py-4'>White</td>
                <td className='px-6 py-4'>Laptop PC</td>
                <td className='px-6 py-4'>$1999</td>
              </tr>
              <tr className='bg-white dark:bg-gray-800'>
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  Magic Mouse 2
                </th>
                <td className='px-6 py-4'>Black</td>
                <td className='px-6 py-4'>Accessories</td>
                <td className='px-6 py-4'>$99</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className='bg-white dark:bg-gray-900 antialiased'>
          <div className='max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24'>
            <div className='max-w-3xl mx-auto text-center'>
              <h2 className='text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white'>
                Schedule
              </h2>

              <div className='mt-4'>
                <a
                  href='#'
                  title=''
                  className='inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500'
                >
                  Learn more about our agenda
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5 ml-2'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className='flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16'>
              <div className='-my-4 divide-y divide-gray-200 dark:divide-gray-700'>
                <div className='flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center'>
                  <p className='w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0'>
                    08:00 - 09:00
                  </p>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    <a href='#' className='hover:underline'>
                      Opening remarks
                    </a>
                  </h3>
                </div>

                <div className='flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center'>
                  <p className='w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0'>
                    09:00 - 10:00
                  </p>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    <a href='#' className='hover:underline'>
                      Bergside LLC: Controlling the video traffic flows
                    </a>
                  </h3>
                </div>

                <div className='flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center'>
                  <p className='w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0'>
                    10:00 - 11:00
                  </p>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    <a href='#' className='hover:underline'>
                      Flowbite - An Open Framework for Forensic Watermarking
                    </a>
                  </h3>
                </div>

                <div className='flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center'>
                  <p className='w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0'>
                    11:00 - 12:00
                  </p>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    <a href='#' className='hover:underline'>
                      Coffee Break
                    </a>
                  </h3>
                </div>

                <div className='flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center'>
                  <p className='w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0'>
                    12:00 - 13:00
                  </p>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    <a href='#' className='hover:underline'>
                      Scaling your brand from €0 to multimillion euros
                    </a>
                  </h3>
                </div>

                <div className='flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center'>
                  <p className='w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0'>
                    13:00 - 14:00
                  </p>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    <a href='#' className='hover:underline'>
                      Updates from the Open Source Multimedia community
                    </a>
                  </h3>
                </div>

                <div className='flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center'>
                  <p className='w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0'>
                    14:00 - 15:00
                  </p>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    <a href='#' className='hover:underline'>
                      Exploring the balance between customer acquisition and retention
                    </a>
                  </h3>
                </div>

                <div className='flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center'>
                  <p className='w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0'>
                    15:00 - 16:00
                  </p>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    <a href='#' className='hover:underline'>
                      Flowbite - An Open Framework for Forensic Watermarking
                    </a>
                  </h3>
                </div>

                <div className='flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center'>
                  <p className='w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0'>
                    16:00 - 14:00
                  </p>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    <a href='#' className='hover:underline'>
                      Scaling your brand from €0 to multimillion euros
                    </a>
                  </h3>
                </div>

                <div className='flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center'>
                  <p className='w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0'>
                    17:00 - 14:00
                  </p>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    <a href='#' className='hover:underline'>
                      Drinks & networking
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default PageContent;
