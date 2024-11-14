import AppHeaderVone from './versions/AppHeaderVone';
import AppHeaderVtwo from './versions/AppHeaderVtwo';
import AppHeaderVthree from './versions/AppHeaderVthree';

interface NavbarResources {
  logoPaths: Record<string, string>;
  iconPaths: Record<string, any>;
}

const PageContent = ({ logoPaths, iconPaths }: NavbarResources) => {
  return (
    <div>
      <h2 className='w-full text-center xl:text-h2-xl lg:text-h2-desktop md:text-h2-tablet text-h2-mobile font-semibold pt-8 text-primarna-tamna dark:text-primarna-svijetla my-4'>
        Verzija jedan
      </h2>

      <AppHeaderVone logoPaths={logoPaths} iconPaths={iconPaths} />

      <h2 className='w-full text-center xl:text-h2-xl lg:text-h2-desktop md:text-h2-tablet text-h2-mobile font-semibold pt-8 text-primarna-tamna dark:text-primarna-svijetla my-4'>
        Verzija dva
      </h2>

      <AppHeaderVtwo logoPaths={logoPaths} iconPaths={iconPaths} />

      <h2 className='w-full text-center xl:text-h2-xl lg:text-h2-desktop md:text-h2-tablet text-h2-mobile font-semibold pt-8 text-primarna-tamna dark:text-primarna-svijetla my-4'>
        Verzija tri
      </h2>

      <AppHeaderVthree logoPaths={logoPaths} iconPaths={iconPaths} />
    </div>
  );
};

export default PageContent;
