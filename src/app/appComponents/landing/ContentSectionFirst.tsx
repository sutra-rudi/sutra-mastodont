export default function ContentSectionFirst() {
  return (
    <section className='relative isolate  flex justify-center items-center overflow-hidden lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl'>
      <div className='mx-auto max-w-full md:max-w-5xl px-3 py-3 md:px-6'>
        <div className='grid md:grid-cols-2 place-items-center gap-10 grid-cols-1'>
          <div className='w-full rounded-lg md:rounded-xl'>
            <picture>
              <img
                src='https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxidXNpbmVzc3xlbnwwfDB8fHwxNzI1NTU4MDkyfDA&ixlib=rb-4.0.3&q=80&w=1080'
                alt={'Photo '}
                className={' object-fill object-center w-full h-full'}
              />
            </picture>
          </div>
          <div className='w-full px-3 py-3 space-y-5'>
            <h1 className='text-black text-xl font-bold font-Poppins leading-6 tracking-wide'>
              Join Us in Shaping Tomorrow
            </h1>
            <p className='text-black font-Poppins leading-5 tracking-wider text-xs font-medium '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet totam et fuga consectetur molestiae
              ipsum, temporibus voluptates dolore alias vitae nostrum commodi sed sit animi atque quod nobis odio. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Quam eos pariatur autem amet assumenda accusantium
              voluptas. Minima iste, nulla magnam quos maiores dignissimos perferendis rerum qui aut autem laborum
              cupiditate.
            </p>
            <div className='inline-block'>
              <button className='bg-[#C96202] text-white active:translate-y-[6px] py-2.5 px-5 rounded-full text-xs font-medium tracking-wider font-Poppins transition duration-300 ease-in-out transform  hover:shadow-custom-white hover:shadow-gray-600'>
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
