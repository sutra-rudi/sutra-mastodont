import { BrandClrButton } from '@/app/components/SutraButton';
import { FaArrowRight as RightIcon, FaPlus as PlusIcon } from 'react-icons/fa6';

import { BsCartPlusFill as CartIcon } from 'react-icons/bs';

const PageContent = () => {
  return (
    <section className='w-full min-h-screen'>
      <h2 className='w-full text-h0_2xl font-medium text-center dark:text-primarna-svijetla'>BOTUNI</h2>
      <div className='grid grid-cols-1 gap-8 place-items-start mt-6 pb-24'>
        <div className='w-full flex items-center gap-10 flex-col'>
          <h3 className='text-h3_md dark:text-primarna-svijetla'>Brand color button</h3>
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
      </div>
    </section>
  );
};

export default PageContent;
