import {
  AccentButton,
  AlmostBlackButton,
  AlmostWhiteButton,
  BrandClrButton,
  ButtonOutlineAlmostBlack,
  ButtonOutlineAlmostWhite,
  ButtonOutlinePrimaryDark,
  ButtonOutlinePrimaryLight,
  DarkGradientButton,
  LightGradientButton,
  LinkButtonAccent,
  LinkButtonPrimaryDark,
  LinkButtonPrimaryLight,
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

        <div className='w-full flex items-center gap-10 flex-col bg-almost-black pb-10'>
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

        <div className='w-full flex items-center gap-10 flex-col bg-almost-black pb-10'>
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

        <div className='w-full flex items-center gap-10 flex-col bg-almost-black pb-10'>
          <h3 className='text-h3_md dark:text-primarna-svijetla w-full text-center bg-red-400'>
            Outline dark primary button
          </h3>
          <div className='flex items-center justify-start gap-4'>
            <ButtonOutlinePrimaryDark size='xs' innerText='extra small' />
            <ButtonOutlinePrimaryDark size='sm' innerText='small small' />
            <ButtonOutlinePrimaryDark size='base' innerText='base base' />
            <ButtonOutlinePrimaryDark size='lg' innerText='large large' />
            <ButtonOutlinePrimaryDark size='xl' innerText='extralarge extralarge' />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <ButtonOutlinePrimaryDark size='xs' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} />
            <ButtonOutlinePrimaryDark size='sm' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} />
            <ButtonOutlinePrimaryDark size='base' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} />
            <ButtonOutlinePrimaryDark size='lg' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} />
            <ButtonOutlinePrimaryDark
              size='xl'
              innerText='extralarge extralarge'
              backIcon={CartIcon}
              frontIcon={RightIcon}
            />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <ButtonOutlinePrimaryDark size='xs' isSingleIconButton singleIconSource={PlusIcon} />
            <ButtonOutlinePrimaryDark size='sm' isSingleIconButton singleIconSource={PlusIcon} />
            <ButtonOutlinePrimaryDark size='base' isSingleIconButton singleIconSource={PlusIcon} />
            <ButtonOutlinePrimaryDark size='lg' isSingleIconButton singleIconSource={PlusIcon} />
            <ButtonOutlinePrimaryDark size='xl' isSingleIconButton singleIconSource={PlusIcon} />
          </div>
        </div>

        <div className='w-full flex items-center gap-10 flex-col'>
          <h3 className='text-h3_md dark:text-primarna-svijetla w-full text-center bg-red-400'>
            Outline button almost black
          </h3>
          <div className='flex items-center justify-start gap-4'>
            <ButtonOutlineAlmostBlack size='xs' innerText='extra small' />
            <ButtonOutlineAlmostBlack size='sm' innerText='small small' />
            <ButtonOutlineAlmostBlack size='base' innerText='base base' />
            <ButtonOutlineAlmostBlack size='lg' innerText='large large' />
            <ButtonOutlineAlmostBlack size='xl' innerText='extralarge extralarge' />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <ButtonOutlineAlmostBlack size='xs' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} />
            <ButtonOutlineAlmostBlack size='sm' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} />
            <ButtonOutlineAlmostBlack size='base' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} />
            <ButtonOutlineAlmostBlack size='lg' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} />
            <ButtonOutlineAlmostBlack
              size='xl'
              innerText='extralarge extralarge'
              backIcon={CartIcon}
              frontIcon={RightIcon}
            />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <ButtonOutlineAlmostBlack size='xs' isSingleIconButton singleIconSource={PlusIcon} />
            <ButtonOutlineAlmostBlack size='sm' isSingleIconButton singleIconSource={PlusIcon} />
            <ButtonOutlineAlmostBlack size='base' isSingleIconButton singleIconSource={PlusIcon} />
            <ButtonOutlineAlmostBlack size='lg' isSingleIconButton singleIconSource={PlusIcon} />
            <ButtonOutlineAlmostBlack size='xl' isSingleIconButton singleIconSource={PlusIcon} />
          </div>
        </div>

        <div className='w-full flex items-center gap-10 flex-col bg-almost-black pb-10'>
          <h3 className='text-h3_md dark:text-primarna-svijetla w-full text-center bg-red-400'>
            Outline button almost white
          </h3>
          <div className='flex items-center justify-start gap-4'>
            <ButtonOutlineAlmostWhite size='xs' innerText='extra small' />
            <ButtonOutlineAlmostWhite size='sm' innerText='small small' />
            <ButtonOutlineAlmostWhite size='base' innerText='base base' />
            <ButtonOutlineAlmostWhite size='lg' innerText='large large' />
            <ButtonOutlineAlmostWhite size='xl' innerText='extralarge extralarge' />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <ButtonOutlineAlmostWhite size='xs' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} />
            <ButtonOutlineAlmostWhite size='sm' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} />
            <ButtonOutlineAlmostWhite size='base' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} />
            <ButtonOutlineAlmostWhite size='lg' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} />
            <ButtonOutlineAlmostWhite
              size='xl'
              innerText='extralarge extralarge'
              backIcon={CartIcon}
              frontIcon={RightIcon}
            />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <ButtonOutlineAlmostWhite size='xs' isSingleIconButton singleIconSource={PlusIcon} />
            <ButtonOutlineAlmostWhite size='sm' isSingleIconButton singleIconSource={PlusIcon} />
            <ButtonOutlineAlmostWhite size='base' isSingleIconButton singleIconSource={PlusIcon} />
            <ButtonOutlineAlmostWhite size='lg' isSingleIconButton singleIconSource={PlusIcon} />
            <ButtonOutlineAlmostWhite size='xl' isSingleIconButton singleIconSource={PlusIcon} />
          </div>
        </div>

        <div className='w-full flex items-center gap-10 flex-col'>
          <h3 className='text-h3_md dark:text-primarna-svijetla w-full text-center bg-red-400'>Almost black button</h3>
          <div className='flex items-center justify-start gap-4'>
            <AlmostBlackButton size='xs' innerText='extra small' />
            <AlmostBlackButton size='sm' innerText='small small' />
            <AlmostBlackButton size='base' innerText='base base' />
            <AlmostBlackButton size='lg' innerText='large large' />
            <AlmostBlackButton size='xl' innerText='extralarge extralarge' />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <AlmostBlackButton size='xs' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} />
            <AlmostBlackButton size='sm' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} />
            <AlmostBlackButton size='base' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} />
            <AlmostBlackButton size='lg' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} />
            <AlmostBlackButton size='xl' innerText='extralarge extralarge' backIcon={CartIcon} frontIcon={RightIcon} />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <AlmostBlackButton size='xs' isSingleIconButton singleIconSource={PlusIcon} />
            <AlmostBlackButton size='sm' isSingleIconButton singleIconSource={PlusIcon} />
            <AlmostBlackButton size='base' isSingleIconButton singleIconSource={PlusIcon} />
            <AlmostBlackButton size='lg' isSingleIconButton singleIconSource={PlusIcon} />
            <AlmostBlackButton size='xl' isSingleIconButton singleIconSource={PlusIcon} />
          </div>
        </div>

        <div className='w-full flex items-center gap-10 flex-col bg-almost-black pb-10'>
          <h3 className='text-h3_md dark:text-primarna-svijetla w-full text-center bg-red-400'>Almost white button</h3>
          <div className='flex items-center justify-start gap-4'>
            <AlmostWhiteButton size='xs' innerText='extra small' />
            <AlmostWhiteButton size='sm' innerText='small small' />
            <AlmostWhiteButton size='base' innerText='base base' />
            <AlmostWhiteButton size='lg' innerText='large large' />
            <AlmostWhiteButton size='xl' innerText='extralarge extralarge' />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <AlmostWhiteButton size='xs' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} />
            <AlmostWhiteButton size='sm' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} />
            <AlmostWhiteButton size='base' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} />
            <AlmostWhiteButton size='lg' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} />
            <AlmostWhiteButton size='xl' innerText='extralarge extralarge' backIcon={CartIcon} frontIcon={RightIcon} />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <AlmostWhiteButton size='xs' isSingleIconButton singleIconSource={PlusIcon} />
            <AlmostWhiteButton size='sm' isSingleIconButton singleIconSource={PlusIcon} />
            <AlmostWhiteButton size='base' isSingleIconButton singleIconSource={PlusIcon} />
            <AlmostWhiteButton size='lg' isSingleIconButton singleIconSource={PlusIcon} />
            <AlmostWhiteButton size='xl' isSingleIconButton singleIconSource={PlusIcon} />
          </div>
        </div>

        <div className='w-full flex items-center gap-10 flex-col'>
          <h3 className='text-h3_md dark:text-primarna-svijetla w-full text-center bg-red-400'>
            Link button primary light
          </h3>
          <div className='flex items-center justify-start gap-4'>
            <LinkButtonPrimaryLight size='xs' innerText='extra small' />
            <LinkButtonPrimaryLight size='sm' innerText='small small' />
            <LinkButtonPrimaryLight size='base' innerText='base base' />
            <LinkButtonPrimaryLight size='lg' innerText='large large' />
            <LinkButtonPrimaryLight size='xl' innerText='extralarge extralarge' />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <LinkButtonPrimaryLight size='xs' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} />
            <LinkButtonPrimaryLight size='sm' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} />
            <LinkButtonPrimaryLight size='base' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} />
            <LinkButtonPrimaryLight size='lg' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} />
            <LinkButtonPrimaryLight
              size='xl'
              innerText='extralarge extralarge'
              backIcon={CartIcon}
              frontIcon={RightIcon}
            />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <LinkButtonPrimaryLight size='xs' isSingleIconButton singleIconSource={PlusIcon} />
            <LinkButtonPrimaryLight size='sm' isSingleIconButton singleIconSource={PlusIcon} />
            <LinkButtonPrimaryLight size='base' isSingleIconButton singleIconSource={PlusIcon} />
            <LinkButtonPrimaryLight size='lg' isSingleIconButton singleIconSource={PlusIcon} />
            <LinkButtonPrimaryLight size='xl' isSingleIconButton singleIconSource={PlusIcon} />
          </div>
        </div>

        <div className='w-full flex items-center gap-10 flex-col bg-almost-black pb-10'>
          <h3 className='text-h3_md dark:text-primarna-svijetla w-full text-center bg-red-400'>
            Link button primary dark
          </h3>
          <div className='flex items-center justify-start gap-4'>
            <LinkButtonPrimaryDark size='xs' innerText='extra small' />
            <LinkButtonPrimaryDark size='sm' innerText='small small' />
            <LinkButtonPrimaryDark size='base' innerText='base base' />
            <LinkButtonPrimaryDark size='lg' innerText='large large' />
            <LinkButtonPrimaryDark size='xl' innerText='extralarge extralarge' />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <LinkButtonPrimaryDark size='xs' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} />
            <LinkButtonPrimaryDark size='sm' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} />
            <LinkButtonPrimaryDark size='base' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} />
            <LinkButtonPrimaryDark size='lg' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} />
            <LinkButtonPrimaryDark
              size='xl'
              innerText='extralarge extralarge'
              backIcon={CartIcon}
              frontIcon={RightIcon}
            />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <LinkButtonPrimaryDark size='xs' isSingleIconButton singleIconSource={PlusIcon} />
            <LinkButtonPrimaryDark size='sm' isSingleIconButton singleIconSource={PlusIcon} />
            <LinkButtonPrimaryDark size='base' isSingleIconButton singleIconSource={PlusIcon} />
            <LinkButtonPrimaryDark size='lg' isSingleIconButton singleIconSource={PlusIcon} />
            <LinkButtonPrimaryDark size='xl' isSingleIconButton singleIconSource={PlusIcon} />
          </div>
        </div>

        <div className='w-full flex items-center gap-10 flex-col '>
          <h3 className='text-h3_md dark:text-primarna-svijetla w-full text-center bg-red-400'>Link button accent</h3>
          <div className='flex items-center justify-start gap-4'>
            <LinkButtonAccent size='xs' innerText='extra small' />
            <LinkButtonAccent size='sm' innerText='small small' />
            <LinkButtonAccent size='base' innerText='base base' />
            <LinkButtonAccent size='lg' innerText='large large' />
            <LinkButtonAccent size='xl' innerText='extralarge extralarge' />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <LinkButtonAccent size='xs' innerText='extra small' backIcon={CartIcon} frontIcon={RightIcon} />
            <LinkButtonAccent size='sm' innerText='small small' backIcon={CartIcon} frontIcon={RightIcon} />
            <LinkButtonAccent size='base' innerText='base base' backIcon={CartIcon} frontIcon={RightIcon} />
            <LinkButtonAccent size='lg' innerText='large large' backIcon={CartIcon} frontIcon={RightIcon} />
            <LinkButtonAccent size='xl' innerText='extralarge extralarge' backIcon={CartIcon} frontIcon={RightIcon} />
          </div>

          <div className='flex items-center justify-start gap-4'>
            <LinkButtonAccent size='xs' isSingleIconButton singleIconSource={PlusIcon} />
            <LinkButtonAccent size='sm' isSingleIconButton singleIconSource={PlusIcon} />
            <LinkButtonAccent size='base' isSingleIconButton singleIconSource={PlusIcon} />
            <LinkButtonAccent size='lg' isSingleIconButton singleIconSource={PlusIcon} />
            <LinkButtonAccent size='xl' isSingleIconButton singleIconSource={PlusIcon} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageContent;
