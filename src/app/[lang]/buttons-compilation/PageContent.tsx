import {
  SutraButtonBase,
  SutraButtonGhost,
  SutraButtonGradient,
  SutraButtonLink,
  SutraButtonOutlined,
  SutraButtonWithIcon,
} from '@/app/components/SutraButton';

import { BsCartPlusFill as CartIcon, BsArrowRightShort as RightIcon } from 'react-icons/bs';

const PageContent = () => {
  return (
    <section className='w-full min-h-screen'>
      <h2 className='w-full text-h0_2xl font-medium text-center dark:text-primarna-svijetla'>BOTUNI</h2>
      <div className='grid grid-cols-1 gap-8 place-items-start mt-6 pb-24'>
        <div className='w-full flex items-center gap-4 flex-col'>
          <h3 className='text-h3_md dark:text-primarna-svijetla'>Bazni botun + accent botun</h3>
          <div className='flex items-center justify-start gap-4'>
            <SutraButtonBase innerText='Small Button' size='small' isAccentButton={false} />
            <SutraButtonBase innerText='Base Button' size='normal' isAccentButton={false} />
            <SutraButtonBase innerText='Large Button' size='large' isAccentButton={false} />
            <SutraButtonBase innerText='Accent Button' size='normal' isAccentButton={true} />
          </div>
        </div>

        <div className='w-full flex items-center gap-4 flex-col'>
          <h3 className='text-h3_md dark:text-primarna-svijetla'>Gradient botun</h3>
          <div className='flex items-center justify-start gap-4'>
            <SutraButtonGradient innerText='Small Button' size='small' isAccentButton={false} />
            <SutraButtonGradient innerText='Base Button' size='normal' isAccentButton={false} />
            <SutraButtonGradient innerText='Large Button' size='large' isAccentButton={false} />
          </div>
        </div>

        <div className='w-full flex items-center gap-4 flex-col'>
          <h3 className='text-h3_md dark:text-primarna-svijetla'>Outline botun</h3>
          <div className='flex items-center justify-start gap-4'>
            <SutraButtonOutlined innerText='Small Button' size='small' isAccentButton={false} />
            <SutraButtonOutlined innerText='Base Button' size='normal' isAccentButton={false} />
            <SutraButtonOutlined innerText='Large Button' size='large' isAccentButton={false} />
          </div>
        </div>

        <div className='w-full flex items-center gap-4 flex-col'>
          <h3 className='text-h3_md dark:text-primarna-svijetla'>Ghost botun</h3>
          <div className='flex items-center justify-start gap-4'>
            <SutraButtonGhost innerText='Small Button' size='small' isAccentButton={false} />
            <SutraButtonGhost innerText='Base Button' size='normal' isAccentButton={false} />
            <SutraButtonGhost innerText='Large Button' size='large' isAccentButton={false} />
          </div>
        </div>

        <div className='w-full flex items-center gap-4 flex-col'>
          <h3 className='text-h3_md dark:text-primarna-svijetla'>Link botun</h3>
          <div className='flex items-center justify-start gap-4'>
            <SutraButtonLink innerText='Small Button' size='small' isAccentButton={false} />
            <SutraButtonLink innerText='Base Button' size='normal' isAccentButton={false} />
            <SutraButtonLink innerText='Large Button' size='large' isAccentButton={false} />
            <SutraButtonLink innerText='Accent Button' size='normal' isAccentButton={true} />
          </div>
        </div>

        <div className='w-full flex items-center gap-4 flex-col'>
          <h3 className='text-h3_md dark:text-primarna-svijetla'>Icon botun</h3>
          <div className='flex items-center justify-start gap-4'>
            <SutraButtonWithIcon innerText='Small Button' size='small' frontIcon={CartIcon} />
            <SutraButtonWithIcon innerText='Base Button' size='normal' backIcon={RightIcon} />
            <SutraButtonWithIcon innerText='Large Button' size='large' frontIcon={CartIcon} backIcon={RightIcon} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageContent;
