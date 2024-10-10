import { AccentTag, BrandClrTag, PrimaryTag } from '@/app/components/SutraTag';
import React from 'react';
import { FaArrowRight as RightIcon } from 'react-icons/fa6';
import { BsCartPlusFill as CartIcon } from 'react-icons/bs';
const PageContent = () => {
  return (
    <section className='w-full min-h-screen dark:bg-primarna-tamna'>
      <h2 className='w-full text-h0_2xl font-medium text-center dark:text-primarna-svijetla'>Tagovi</h2>

      <div className='grid grid-cols-1 gap-8 place-items-start mt-6 pb-24'>
        <div className='w-full flex items-center gap-10 flex-col'>
          <h3 className='text-h3-desktop dark:text-primarna-svijetla w-full text-center bg-red-400'>Brand color tag</h3>
          <div className='flex items-center justify-start gap-4'>
            <BrandClrTag size='mobile' innerText='extra small' />
            <BrandClrTag size='tablet' innerText='small small' />
            <BrandClrTag size='desktop' innerText='base base' />
            <BrandClrTag size='xl' innerText='large large' />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <BrandClrTag size='mobile' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} />
            <BrandClrTag size='tablet' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} />
            <BrandClrTag size='desktop' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} />
            <BrandClrTag size='xl' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} />
          </div>

          <h3 className='text-h3-desktop dark:text-primarna-svijetla w-full text-center bg-red-200'>
            Brand color tag responzivni
          </h3>

          <div className='flex items-center justify-start gap-4'>
            <BrandClrTag size='mobile' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} isResponsive />
            <BrandClrTag size='tablet' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} isResponsive />
            <BrandClrTag size='desktop' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} isResponsive />
            <BrandClrTag size='xl' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} isResponsive />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <BrandClrTag size='mobile' innerText='extra small' isResponsive />
            <BrandClrTag size='tablet' innerText='small small' isResponsive />
            <BrandClrTag size='desktop' innerText='base base' isResponsive />
            <BrandClrTag size='xl' innerText='large large' isResponsive />
          </div>
        </div>

        <div className='w-full flex items-center gap-10 flex-col'>
          <h3 className='text-h3-desktop dark:text-primarna-svijetla w-full text-center bg-red-400'>
            Primary color tag
          </h3>
          <div className='flex items-center justify-start gap-4'>
            <PrimaryTag size='mobile' innerText='extra small' />
            <PrimaryTag size='tablet' innerText='small small' />
            <PrimaryTag size='desktop' innerText='base base' />
            <PrimaryTag size='xl' innerText='large large' />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <PrimaryTag size='mobile' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} />
            <PrimaryTag size='tablet' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} />
            <PrimaryTag size='desktop' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} />
            <PrimaryTag size='xl' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} />
          </div>

          <h3 className='text-h3-desktop dark:text-primarna-svijetla w-full text-center bg-red-200'>
            Primary color tag responzivni
          </h3>

          <div className='flex items-center justify-start gap-4'>
            <PrimaryTag size='mobile' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} isResponsive />
            <PrimaryTag size='tablet' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} isResponsive />
            <PrimaryTag size='desktop' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} isResponsive />
            <PrimaryTag size='xl' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} isResponsive />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <PrimaryTag size='mobile' innerText='extra small' isResponsive />
            <PrimaryTag size='tablet' innerText='small small' isResponsive />
            <PrimaryTag size='desktop' innerText='base base' isResponsive />
            <PrimaryTag size='xl' innerText='large large' isResponsive />
          </div>
        </div>

        <div className='w-full flex items-center gap-10 flex-col'>
          <h3 className='text-h3-desktop dark:text-primarna-svijetla w-full text-center bg-red-400'>
            Accent color tag
          </h3>
          <div className='flex items-center justify-start gap-4'>
            <AccentTag size='mobile' innerText='extra small' />
            <AccentTag size='tablet' innerText='small small' />
            <AccentTag size='desktop' innerText='base base' />
            <AccentTag size='xl' innerText='large large' />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <AccentTag size='mobile' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} />
            <AccentTag size='tablet' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} />
            <AccentTag size='desktop' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} />
            <AccentTag size='xl' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} />
          </div>

          <h3 className='text-h3-desktop dark:text-primarna-svijetla w-full text-center bg-red-200'>
            Accent color tag responzivni
          </h3>

          <div className='flex items-center justify-start gap-4'>
            <AccentTag size='mobile' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} isResponsive />
            <AccentTag size='tablet' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} isResponsive />
            <AccentTag size='desktop' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} isResponsive />
            <AccentTag size='xl' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} isResponsive />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <AccentTag size='mobile' innerText='extra small' isResponsive />
            <AccentTag size='tablet' innerText='small small' isResponsive />
            <AccentTag size='desktop' innerText='base base' isResponsive />
            <AccentTag size='xl' innerText='large large' isResponsive />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageContent;
