'use client';

import React from 'react';

const AsideContent = () => {
  const [showContent, setShowContent] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > document.body.scrollHeight / 4) {
      setShowContent(true);
    } else {
      setShowContent(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='bg-blue-400 h-full relative w-full'>
      <div
        className={`sticky transition-all ease-in-out duration-200 top-0 ${
          showContent ? 'opacity-100' : 'opacity-0'
        } flex`}
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
