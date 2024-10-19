interface AsideContent {
  layout: 'hor' | 'ver';
}

const AsideContent = ({ layout }: AsideContent) => {
  if (layout === 'hor')
    return (
      <div className=' h-full relative w-full'>
        <div className={`sticky transition-all ease-in-out duration-200 top-4 pt-4 flex`}>
          <p>aside content</p>
          <p>aside content</p>
          <p>aside content</p>
          <p>aside content</p>
          <p>aside content</p>
        </div>
      </div>
    );

  return (
    <div className=' relative w-full xl:px-0 md:px-4 px-2'>
      <div
        className={`transition-all ease-in-out duration-200 top-4 pt-4 flex w-full justify-between items-start flex-wrap lg:gap-6 md:gap-5 gap-4`}
      >
        <p>aside content</p>
        <p>aside content</p>
        <p>aside content</p>
        <p>aside content</p>
        <p>aside content</p>
      </div>
    </div>
  );
};

export default AsideContent;
