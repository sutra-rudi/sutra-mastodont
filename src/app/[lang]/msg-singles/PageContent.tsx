import Image from 'next/image';
import React from 'react';
import parse from 'html-react-parser';

interface SingleMSGInterface {
  content: any;
}
const PageContent = ({ content }: SingleMSGInterface) => {
  return (
    <article className='mx-auto my-0 max-w-[1024px] py-8'>
      <div className='py-4'>
        <h2 className='text-4xl font-bold'>PORUKE POJEDINACNE</h2>

        <div className=''>
          {content.map((cont: any) => {
            return (
              <div className='' key={cont.msgId}>
                <div className='flex'>
                  <div className='relative w-full h-[250px]'>
                    <Image src={cont.mainImg.sourceUrl} alt='singles msg img' fill />
                  </div>

                  <div className='relative w-full h-[250px]'>
                    <Image src={cont.secondaryImg.sourceUrl} alt='singles msg img' fill />
                  </div>
                </div>

                <div className='py-4'>{cont.msgContent && parse(cont.msgContent)}</div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default PageContent;
