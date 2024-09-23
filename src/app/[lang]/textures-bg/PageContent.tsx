import Image from 'next/image';

interface BgTexturesContent {
  bgTextures: any;
}

const PageContent = ({ bgTextures }: BgTexturesContent) => {
  return (
    <div className='p-4'>
      {Object.keys(bgTextures).map((key) => (
        <section key={key} className='mb-8 text-center'>
          <div className='relative w-full min-h-screen'>
            <Image src={bgTextures[key as keyof typeof bgTextures]} alt={key} fill className='mx-auto rounded-lg' />
            <h2 className='text-3xl text-almost-black font-semibold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              {key}
            </h2>
          </div>
        </section>
      ))}
    </div>
  );
};

export default PageContent;
