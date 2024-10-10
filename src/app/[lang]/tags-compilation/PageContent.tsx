import {
  AccentTag,
  BlackWhiteTagFull,
  BlackWhiteTagOutline,
  BrandClrTag,
  GradientTag,
  PrimaryTag,
  PrimaryTagOutline,
} from '@/app/components/SutraTag';
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

        <div className='w-full flex items-center gap-10 flex-col'>
          <h3 className='text-h3-desktop dark:text-primarna-svijetla w-full text-center bg-red-400'>
            Gradient color tag
          </h3>
          <div className='flex items-center justify-start gap-4'>
            <GradientTag size='mobile' innerText='extra small' />
            <GradientTag size='tablet' innerText='small small' />
            <GradientTag size='desktop' innerText='base base' />
            <GradientTag size='xl' innerText='large large' />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <GradientTag size='mobile' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} />
            <GradientTag size='tablet' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} />
            <GradientTag size='desktop' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} />
            <GradientTag size='xl' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} />
          </div>

          <h3 className='text-h3-desktop dark:text-primarna-svijetla w-full text-center bg-red-200'>
            Gradient color tag responzivni
          </h3>

          <div className='flex items-center justify-start gap-4'>
            <GradientTag size='mobile' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} isResponsive />
            <GradientTag size='tablet' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} isResponsive />
            <GradientTag size='desktop' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} isResponsive />
            <GradientTag size='xl' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} isResponsive />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <GradientTag size='mobile' innerText='extra small' isResponsive />
            <GradientTag size='tablet' innerText='small small' isResponsive />
            <GradientTag size='desktop' innerText='base base' isResponsive />
            <GradientTag size='xl' innerText='large large' isResponsive />
          </div>
        </div>

        <div className='w-full flex items-center gap-10 flex-col'>
          <h3 className='text-h3-desktop dark:text-primarna-svijetla w-full text-center bg-red-400'>
            Outline primary color tag
          </h3>
          <div className='flex items-center justify-start gap-4'>
            <PrimaryTagOutline size='mobile' innerText='extra small' />
            <PrimaryTagOutline size='tablet' innerText='small small' />
            <PrimaryTagOutline size='desktop' innerText='base base' />
            <PrimaryTagOutline size='xl' innerText='large large' />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <PrimaryTagOutline size='mobile' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} />
            <PrimaryTagOutline size='tablet' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} />
            <PrimaryTagOutline size='desktop' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} />
            <PrimaryTagOutline size='xl' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} />
          </div>

          <h3 className='text-h3-desktop dark:text-primarna-svijetla w-full text-center bg-red-200'>
            Outline primary color tag responzivni
          </h3>

          <div className='flex items-center justify-start gap-4'>
            <PrimaryTagOutline
              size='mobile'
              innerText='extra small'
              backIcon={CartIcon}
              frontIcon={RightIcon}
              isResponsive
            />
            <PrimaryTagOutline
              size='tablet'
              innerText='small small'
              backIcon={CartIcon}
              frontIcon={RightIcon}
              isResponsive
            />
            <PrimaryTagOutline
              size='desktop'
              innerText='base base'
              backIcon={CartIcon}
              frontIcon={RightIcon}
              isResponsive
            />
            <PrimaryTagOutline
              size='xl'
              innerText='large large'
              backIcon={CartIcon}
              frontIcon={RightIcon}
              isResponsive
            />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <PrimaryTagOutline size='mobile' innerText='extra small' isResponsive />
            <PrimaryTagOutline size='tablet' innerText='small small' isResponsive />
            <PrimaryTagOutline size='desktop' innerText='base base' isResponsive />
            <PrimaryTagOutline size='xl' innerText='large large' isResponsive />
          </div>
        </div>

        <div className='w-full flex items-center gap-10 flex-col'>
          <h3 className='text-h3-desktop dark:text-primarna-svijetla w-full text-center bg-red-400'>
            Almost black and white color tag
          </h3>
          <div className='flex items-center justify-start gap-4'>
            <BlackWhiteTagOutline size='mobile' innerText='extra small' />
            <BlackWhiteTagOutline size='tablet' innerText='small small' />
            <BlackWhiteTagOutline size='desktop' innerText='base base' />
            <BlackWhiteTagOutline size='xl' innerText='large large' />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <BlackWhiteTagOutline size='mobile' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} />
            <BlackWhiteTagOutline size='tablet' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} />
            <BlackWhiteTagOutline size='desktop' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} />
            <BlackWhiteTagOutline size='xl' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} />
          </div>

          <h3 className='text-h3-desktop dark:text-primarna-svijetla w-full text-center bg-red-200'>
            Almost black and white color tag responzivni
          </h3>

          <div className='flex items-center justify-start gap-4'>
            <BlackWhiteTagOutline
              size='mobile'
              innerText='extra small'
              backIcon={CartIcon}
              frontIcon={RightIcon}
              isResponsive
            />
            <BlackWhiteTagOutline
              size='tablet'
              innerText='small small'
              backIcon={CartIcon}
              frontIcon={RightIcon}
              isResponsive
            />
            <BlackWhiteTagOutline
              size='desktop'
              innerText='base base'
              backIcon={CartIcon}
              frontIcon={RightIcon}
              isResponsive
            />
            <BlackWhiteTagOutline
              size='xl'
              innerText='large large'
              backIcon={CartIcon}
              frontIcon={RightIcon}
              isResponsive
            />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <BlackWhiteTagOutline size='mobile' innerText='extra small' isResponsive />
            <BlackWhiteTagOutline size='tablet' innerText='small small' isResponsive />
            <BlackWhiteTagOutline size='desktop' innerText='base base' isResponsive />
            <BlackWhiteTagOutline size='xl' innerText='large large' isResponsive />
          </div>
        </div>

        <div className='w-full flex items-center gap-10 flex-col'>
          <h3 className='text-h3-desktop dark:text-primarna-svijetla w-full text-center bg-red-400'>
            Almost black and white color tag full
          </h3>
          <div className='flex items-center justify-start gap-4'>
            <BlackWhiteTagFull size='mobile' innerText='extra small' />
            <BlackWhiteTagFull size='tablet' innerText='small small' />
            <BlackWhiteTagFull size='desktop' innerText='base base' />
            <BlackWhiteTagFull size='xl' innerText='large large' />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <BlackWhiteTagFull size='mobile' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} />
            <BlackWhiteTagFull size='tablet' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} />
            <BlackWhiteTagFull size='desktop' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} />
            <BlackWhiteTagFull size='xl' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} />
          </div>

          <h3 className='text-h3-desktop dark:text-primarna-svijetla w-full text-center bg-red-200'>
            Almost black and white color tag full responzivni
          </h3>

          <div className='flex items-center justify-start gap-4'>
            <BlackWhiteTagFull
              size='mobile'
              innerText='extra small'
              backIcon={CartIcon}
              frontIcon={RightIcon}
              isResponsive
            />
            <BlackWhiteTagFull
              size='tablet'
              innerText='small small'
              backIcon={CartIcon}
              frontIcon={RightIcon}
              isResponsive
            />
            <BlackWhiteTagFull
              size='desktop'
              innerText='base base'
              backIcon={CartIcon}
              frontIcon={RightIcon}
              isResponsive
            />
            <BlackWhiteTagFull
              size='xl'
              innerText='large large'
              backIcon={CartIcon}
              frontIcon={RightIcon}
              isResponsive
            />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <BlackWhiteTagFull size='mobile' innerText='extra small' isResponsive />
            <BlackWhiteTagFull size='tablet' innerText='small small' isResponsive />
            <BlackWhiteTagFull size='desktop' innerText='base base' isResponsive />
            <BlackWhiteTagFull size='xl' innerText='large large' isResponsive />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageContent;
