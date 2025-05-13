const Loading = () => {
  return (
    <div className='relative h-screen w-full bg-white'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='loader-sutra'></div>
      </div>
    </div>
  );
};

export default Loading;
