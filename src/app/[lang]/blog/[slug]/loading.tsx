const Loading = () => {
  return (
    <div className='w-full h-screen bg-white relative'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='loader-sutra'></div>
      </div>
    </div>
  );
};

export default Loading;
