'use client';

import { CirclesWithBar } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <CirclesWithBar
        width='100'
        color='#4E4848'
        outerCircleColor='#4E4848'
        innerCircleColor='#4E4848'
        barColor='#4E4848'
        ariaLabel='circles-with-bar-loading'
        visible={true}
      />
    </div>
  );
};

export default Loading;
