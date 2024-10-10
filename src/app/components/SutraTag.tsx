interface SutraTagInterface {
  size: 'mobile' | 'tablet' | 'desktop' | 'xl';
  frontIcon?: React.ElementType;
  backIcon?: React.ElementType;
  onClickAction?: () => any;
  innerText?: string;
  isResponsive?: boolean;
}

export const BrandClrTag = ({
  frontIcon: FrontIcon,
  backIcon: BackIcon,
  size,
  onClickAction,
  innerText,
  isResponsive,
}: SutraTagInterface) => {
  const calcSizes = () => {
    if (size === 'mobile') return 'px-tag-mobile-lr py-tag-mobile-td text-tag-mobile rounded-tag-mobile';
    if (size === 'tablet') return 'px-tag-tablet-lr py-tag-tablet-td text-tag-tablet rounded-tag-tablet';
    if (size === 'desktop') return 'px-tag-desktop-lr py-tag-desktop-td text-tag-desktop rounded-tag-desktop';
    if (size === 'xl') return 'px-tag-xl-lr py-tag-xl-td text-tag-xl rounded-tag-xl';
  };

  if (isResponsive) {
    return (
      <div
        className={` xl:px-tag-xl-lr xl:py-tag-xl-td xl:text-tag-xl xl:rounded-tag-xl lg:px-tag-desktop-lr lg:py-tag-desktop-td lg:text-tag-desktop lg:rounded-tag-desktop md:px-tag-tablet-lr md:py-tag-tablet-td md:text-tag-tablet md:rounded-tag-tablet px-tag-mobile-lr py-tag-mobile-td text-tag-mobile rounded-tag-mobile xl:gap-tag-element-inside-xl lg:gap-tag-element-inside-desktop md:gap-tag-element-inside-tablet gap-tag-element-inside-mobile flex items-center justify-start transition-all ease-in-out cursor-pointer bg-brand-color-main text-almost-white hover:bg-brand-color-secondary hover:outline hover:outline-1 hover:outline-offset-0 hover:outline-accent-boja active:outline-[3px] active:outline-sekundarna-svijetla active:bg-accent-boja active:text-sekundarna-tamna`}
      >
        {BackIcon && <BackIcon className='shrink-0' />}
        <span>{innerText}</span>
        {FrontIcon && <FrontIcon className='shrink-0' />}
      </div>
    );
  }

  if (FrontIcon || BackIcon) {
    return (
      <div
        className={`${calcSizes()} ${
          size === 'mobile'
            ? 'gap-tag-element-inside-mobile'
            : size === 'tablet'
            ? 'gap-tag-element-inside-tablet'
            : size === 'desktop'
            ? 'gap-tag-element-inside-desktop'
            : 'gap-tag-element-inside-xl'
        } flex items-center justify-start transition-all ease-in-out cursor-pointer bg-brand-color-main text-almost-white hover:bg-brand-color-secondary hover:outline hover:outline-1 hover:outline-offset-0 hover:outline-accent-boja active:outline-[3px] active:outline-sekundarna-svijetla active:bg-accent-boja active:text-sekundarna-tamna`}
      >
        {BackIcon && <BackIcon className='shrink-0' />}
        <span>{innerText}</span>
        {FrontIcon && <FrontIcon className='shrink-0' />}
      </div>
    );
  }

  return (
    <div
      className={`${calcSizes()} transition-all ease-in-out cursor-pointer bg-brand-color-main text-almost-white hover:bg-brand-color-secondary hover:outline hover:outline-1 hover:outline-offset-0 hover:outline-accent-boja active:outline-[3px] active:outline-sekundarna-svijetla active:bg-accent-boja active:text-sekundarna-tamna`}
    >
      <span>{innerText}</span>
    </div>
  );
};
