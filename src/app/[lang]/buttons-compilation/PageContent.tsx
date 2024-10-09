import {
  AccentButton,
  BrandClrButton,
  ButtonOutlinePrimaryLight,
  DarkGradientButton,
  LightGradientButton,
  PrimaryDarkButton,
  PrimaryLightButton,
} from '@/app/components/SutraButton';
import { FaArrowRight as RightIcon, FaPlus as PlusIcon } from 'react-icons/fa6';

import { BsCartPlusFill as CartIcon } from 'react-icons/bs';

const PageContent = () => {
  return (
    <section className='w-full min-h-screen'>
      <h2 className='w-full text-h0_2xl font-medium text-center dark:text-primarna-svijetla'>BOTUNI</h2>
      <div className='grid grid-cols-1 gap-8 place-items-start mt-6 pb-24'>
        <div className='w-full flex items-center gap-10 flex-col'>
          <h3 className='text-h3_md dark:text-primarna-svijetla w-full text-center bg-red-400'>Brand color button</h3>
          <div className='flex items-center justify-start gap-4'>
            <BrandClrButton size='xs' innerText='extra small' />
            <BrandClrButton size='sm' innerText='small small' />
            <BrandClrButton size='base' innerText='base base' />
            <BrandClrButton size='lg' innerText='large large' />
            <BrandClrButton size='xl' innerText='extralarge extralarge' />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <BrandClrButton size='xs' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} />
            <BrandClrButton size='sm' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} />
            <BrandClrButton size='base' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} />
            <BrandClrButton size='lg' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} />
            <BrandClrButton size='xl' innerText='extralarge extralarge' backIcon={CartIcon} frontIcon={RightIcon} />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <BrandClrButton size='xs' isSingleIconButton singleIconSource={PlusIcon} />
            <BrandClrButton size='sm' isSingleIconButton singleIconSource={PlusIcon} />
            <BrandClrButton size='base' isSingleIconButton singleIconSource={PlusIcon} />
            <BrandClrButton size='lg' isSingleIconButton singleIconSource={PlusIcon} />
            <BrandClrButton size='xl' isSingleIconButton singleIconSource={PlusIcon} />
          </div>
        </div>

        <div className='w-full flex items-center gap-10 flex-col'>
          <h3 className='text-h3_md dark:text-primarna-svijetla w-full text-center bg-red-400'>
            Primary dark color button
          </h3>
          <div className='flex items-center justify-start gap-4'>
            <PrimaryDarkButton size='xs' innerText='extra small' />
            <PrimaryDarkButton size='sm' innerText='small small' />
            <PrimaryDarkButton size='base' innerText='base base' />
            <PrimaryDarkButton size='lg' innerText='large large' />
            <PrimaryDarkButton size='xl' innerText='extralarge extralarge' />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <PrimaryDarkButton size='xs' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} />
            <PrimaryDarkButton size='sm' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} />
            <PrimaryDarkButton size='base' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} />
            <PrimaryDarkButton size='lg' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} />
            <PrimaryDarkButton size='xl' innerText='extralarge extralarge' backIcon={CartIcon} frontIcon={RightIcon} />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <PrimaryDarkButton size='xs' isSingleIconButton singleIconSource={PlusIcon} />
            <PrimaryDarkButton size='sm' isSingleIconButton singleIconSource={PlusIcon} />
            <PrimaryDarkButton size='base' isSingleIconButton singleIconSource={PlusIcon} />
            <PrimaryDarkButton size='lg' isSingleIconButton singleIconSource={PlusIcon} />
            <PrimaryDarkButton size='xl' isSingleIconButton singleIconSource={PlusIcon} />
          </div>
        </div>

        <div className='w-full flex items-center gap-10 flex-col'>
          <h3 className='text-h3_md dark:text-primarna-svijetla w-full text-center bg-red-400'>
            Primary light color button
          </h3>
          <div className='flex items-center justify-start gap-4'>
            <PrimaryLightButton size='xs' innerText='extra small' />
            <PrimaryLightButton size='sm' innerText='small small' />
            <PrimaryLightButton size='base' innerText='base base' />
            <PrimaryLightButton size='lg' innerText='large large' />
            <PrimaryLightButton size='xl' innerText='extralarge extralarge' />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <PrimaryLightButton size='xs' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} />
            <PrimaryLightButton size='sm' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} />
            <PrimaryLightButton size='base' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} />
            <PrimaryLightButton size='lg' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} />
            <PrimaryLightButton size='xl' innerText='extralarge extralarge' backIcon={CartIcon} frontIcon={RightIcon} />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <PrimaryLightButton size='xs' isSingleIconButton singleIconSource={PlusIcon} />
            <PrimaryLightButton size='sm' isSingleIconButton singleIconSource={PlusIcon} />
            <PrimaryLightButton size='base' isSingleIconButton singleIconSource={PlusIcon} />
            <PrimaryLightButton size='lg' isSingleIconButton singleIconSource={PlusIcon} />
            <PrimaryLightButton size='xl' isSingleIconButton singleIconSource={PlusIcon} />
          </div>
        </div>

        <div className='w-full flex items-center gap-10 flex-col'>
          <h3 className='text-h3_md dark:text-primarna-svijetla w-full text-center bg-red-400'>Accent button</h3>
          <div className='flex items-center justify-start gap-4'>
            <AccentButton size='xs' innerText='extra small' />
            <AccentButton size='sm' innerText='small small' />
            <AccentButton size='base' innerText='base base' />
            <AccentButton size='lg' innerText='large large' />
            <AccentButton size='xl' innerText='extralarge extralarge' />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <AccentButton size='xs' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} />
            <AccentButton size='sm' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} />
            <AccentButton size='base' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} />
            <AccentButton size='lg' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} />
            <AccentButton size='xl' innerText='extralarge extralarge' backIcon={CartIcon} frontIcon={RightIcon} />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <AccentButton size='xs' isSingleIconButton singleIconSource={PlusIcon} />
            <AccentButton size='sm' isSingleIconButton singleIconSource={PlusIcon} />
            <AccentButton size='base' isSingleIconButton singleIconSource={PlusIcon} />
            <AccentButton size='lg' isSingleIconButton singleIconSource={PlusIcon} />
            <AccentButton size='xl' isSingleIconButton singleIconSource={PlusIcon} />
          </div>
        </div>

        <div className='w-full flex items-center gap-10 flex-col'>
          <h3 className='text-h3_md dark:text-primarna-svijetla w-full text-center bg-red-400'>Dark gradient button</h3>
          <div className='flex items-center justify-start gap-4'>
            <DarkGradientButton size='xs' innerText='extra small' />
            <DarkGradientButton size='sm' innerText='small small' />
            <DarkGradientButton size='base' innerText='base base' />
            <DarkGradientButton size='lg' innerText='large large' />
            <DarkGradientButton size='xl' innerText='extralarge extralarge' />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <DarkGradientButton size='xs' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} />
            <DarkGradientButton size='sm' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} />
            <DarkGradientButton size='base' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} />
            <DarkGradientButton size='lg' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} />
            <DarkGradientButton size='xl' innerText='extralarge extralarge' backIcon={CartIcon} frontIcon={RightIcon} />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <DarkGradientButton size='xs' isSingleIconButton singleIconSource={PlusIcon} />
            <DarkGradientButton size='sm' isSingleIconButton singleIconSource={PlusIcon} />
            <DarkGradientButton size='base' isSingleIconButton singleIconSource={PlusIcon} />
            <DarkGradientButton size='lg' isSingleIconButton singleIconSource={PlusIcon} />
            <DarkGradientButton size='xl' isSingleIconButton singleIconSource={PlusIcon} />
          </div>
        </div>

        <div className='w-full flex items-center gap-10 flex-col'>
          <h3 className='text-h3_md dark:text-primarna-svijetla w-full text-center bg-red-400'>
            Light gradient button
          </h3>
          <div className='flex items-center justify-start gap-4'>
            <LightGradientButton size='xs' innerText='extra small' />
            <LightGradientButton size='sm' innerText='small small' />
            <LightGradientButton size='base' innerText='base base' />
            <LightGradientButton size='lg' innerText='large large' />
            <LightGradientButton size='xl' innerText='extralarge extralarge' />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <LightGradientButton size='xs' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} />
            <LightGradientButton size='sm' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} />
            <LightGradientButton size='base' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} />
            <LightGradientButton size='lg' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} />
            <LightGradientButton
              size='xl'
              innerText='extralarge extralarge'
              backIcon={CartIcon}
              frontIcon={RightIcon}
            />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <LightGradientButton size='xs' isSingleIconButton singleIconSource={PlusIcon} />
            <LightGradientButton size='sm' isSingleIconButton singleIconSource={PlusIcon} />
            <LightGradientButton size='base' isSingleIconButton singleIconSource={PlusIcon} />
            <LightGradientButton size='lg' isSingleIconButton singleIconSource={PlusIcon} />
            <LightGradientButton size='xl' isSingleIconButton singleIconSource={PlusIcon} />
          </div>
        </div>

        <div className='w-full flex items-center gap-10 flex-col'>
          <h3 className='text-h3_md dark:text-primarna-svijetla w-full text-center bg-red-400'>
            Outline light primary button
          </h3>
          <div className='flex items-center justify-start gap-4'>
            <ButtonOutlinePrimaryLight size='xs' innerText='extra small' />
            <ButtonOutlinePrimaryLight size='sm' innerText='small small' />
            <ButtonOutlinePrimaryLight size='base' innerText='base base' />
            <ButtonOutlinePrimaryLight size='lg' innerText='large large' />
            <ButtonOutlinePrimaryLight size='xl' innerText='extralarge extralarge' />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <ButtonOutlinePrimaryLight size='xs' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} />
            <ButtonOutlinePrimaryLight size='sm' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} />
            <ButtonOutlinePrimaryLight size='base' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} />
            <ButtonOutlinePrimaryLight size='lg' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} />
            <ButtonOutlinePrimaryLight
              size='xl'
              innerText='extralarge extralarge'
              backIcon={CartIcon}
              frontIcon={RightIcon}
            />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <ButtonOutlinePrimaryLight size='xs' isSingleIconButton singleIconSource={PlusIcon} />
            <ButtonOutlinePrimaryLight size='sm' isSingleIconButton singleIconSource={PlusIcon} />
            <ButtonOutlinePrimaryLight size='base' isSingleIconButton singleIconSource={PlusIcon} />
            <ButtonOutlinePrimaryLight size='lg' isSingleIconButton singleIconSource={PlusIcon} />
            <ButtonOutlinePrimaryLight size='xl' isSingleIconButton singleIconSource={PlusIcon} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageContent;
