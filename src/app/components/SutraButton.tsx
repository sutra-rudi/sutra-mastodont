interface SutraButtonBaseInterface {
  size: 'small' | 'normal' | 'large';
  innerText: string;
  isAccentButton?: boolean;
  frontIcon?: React.ElementType;
  backIcon?: React.ElementType;
  onClickAction?: () => any;
}

interface SutraButtonInterface {
  size: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  frontIcon?: React.ElementType;
  backIcon?: React.ElementType;
  onClickAction?: () => any;
  innerText?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  isSingleIconButton?: boolean;
  singleIconSource?: React.ElementType;
}

export const BrandClrButton = ({
  size,
  frontIcon: FrontIcon,
  backIcon: BackIcon,
  onClickAction,
  innerText,
  type,
  isSingleIconButton,
  singleIconSource: SingleIconSource,
}: SutraButtonInterface) => {
  const calcSizes = () => {
    if (size === 'xs') return 'px-botun-xs-lr py-botun-xs-td text-button-xs rounded-botun-xs';
    if (size === 'sm') return 'px-botun-s-lr py-botun-s-td text-button-small rounded-botun-s';
    if (size === 'base') return 'px-botun-base-lr py-botun-base-td text-button-base rounded-botun-base';
    if (size === 'lg') return 'px-botun-l-lr py-botun-l-td text-button-l rounded-botun-l';
    if (size === 'xl') return 'px-botun-xl-lr py-botun-xl-td text-button-xl rounded-botun-xl';
  };

  const calcRadius = () => {
    if (size === 'xs') return 'rounded-single-icon-xs  p-1';
    if (size === 'sm') return 'rounded-single-icon-s  p-2';
    if (size === 'base') return 'rounded-single-icon-base  p-2.5';
    if (size === 'lg') return 'rounded-single-icon-l p-3';
    if (size === 'xl') return 'rounded-single-icon-xl p-3.5';
  };
  if (FrontIcon || BackIcon) {
    return (
      <button
        className={`${calcSizes()} flex items-center justify-start transition-all ease-in-out bg-brand-color-main outline-none border-none cursor-pointer text-almost-white hover:bg-brand-color-secondary hover:text-almost-black hover:outline hover:outline-offset-0 hover:outline-accent-boja active:text-almost-black active:outline active:outline-offset-0 active:outline-sekundarna-svijetla active:bg-accent-boja active:outline-[3px] ${
          size === 'xl' || size === 'lg'
            ? 'gap-element-inside-btn-l'
            : size === 'base'
            ? 'gap-element-inside-btn-m'
            : 'gap-element-inside-btn-s'
        }`}
      >
        {BackIcon && <BackIcon className='shrink-0' />}
        <span>{innerText}</span>
        {FrontIcon && <FrontIcon className='shrink-0' />}
      </button>
    );
  }

  if (isSingleIconButton && SingleIconSource) {
    return (
      <button
        className={`${calcRadius()} text-[24px] flex items-center justify-center bg-brand-color-main outline-none border-none cursor-pointer text-almost-white transition-all ease-in-out hover:bg-brand-color-secondary hover:text-almost-black hover:outline hover:outline-offset-0 hover:outline-accent-boja active:text-almost-black active:outline active:outline-offset-0 active:outline-sekundarna-svijetla active:bg-accent-boja active:outline-[3px] `}
      >
        <SingleIconSource />
      </button>
    );
  }

  return (
    <button
      onClick={onClickAction}
      type={type}
      className={`${calcSizes()} bg-brand-color-main outline-none border-none cursor-pointer text-almost-white transition-all ease-in-out hover:bg-brand-color-secondary hover:text-almost-black hover:outline hover:outline-offset-0 hover:outline-accent-boja active:text-almost-black active:outline active:outline-offset-0 active:outline-sekundarna-svijetla active:bg-accent-boja active:outline-[3px] `}
    >
      <span>{innerText}</span>
    </button>
  );
};

export const PrimaryDarkButton = ({
  size,
  frontIcon: FrontIcon,
  backIcon: BackIcon,
  onClickAction,
  innerText,
  type,
  isSingleIconButton,
  singleIconSource: SingleIconSource,
}: SutraButtonInterface) => {
  const calcSizes = () => {
    if (size === 'xs') return 'px-botun-xs-lr py-botun-xs-td text-button-xs rounded-botun-xs';
    if (size === 'sm') return 'px-botun-s-lr py-botun-s-td text-button-small rounded-botun-s';
    if (size === 'base') return 'px-botun-base-lr py-botun-base-td text-button-base rounded-botun-base';
    if (size === 'lg') return 'px-botun-l-lr py-botun-l-td text-button-l rounded-botun-l';
    if (size === 'xl') return 'px-botun-xl-lr py-botun-xl-td text-button-xl rounded-botun-xl';
  };

  const calcRadius = () => {
    if (size === 'xs') return 'rounded-single-icon-xs  p-1';
    if (size === 'sm') return 'rounded-single-icon-s  p-2';
    if (size === 'base') return 'rounded-single-icon-base  p-2.5';
    if (size === 'lg') return 'rounded-single-icon-l p-3';
    if (size === 'xl') return 'rounded-single-icon-xl p-3.5';
  };
  if (FrontIcon || BackIcon) {
    return (
      <button
        className={`${calcSizes()} flex items-center justify-start transition-all ease-in-out bg-primarna-tamna outline-none border-none cursor-pointer text-primarna-svijetla hover:outline hover:outline-offset-0 hover:outline-sekundarna-svijetla hover:bg-sekundarna-tamna active:outline active:outline-offset-0 active:outline-accent-boja active:text-accent-boja active:bg-sekundarna-tamna active:outline-[3px] ${
          size === 'xl' || size === 'lg'
            ? 'gap-element-inside-btn-l'
            : size === 'base'
            ? 'gap-element-inside-btn-m'
            : 'gap-element-inside-btn-s'
        }`}
      >
        {BackIcon && <BackIcon className='shrink-0' />}
        <span>{innerText}</span>
        {FrontIcon && <FrontIcon className='shrink-0' />}
      </button>
    );
  }

  if (isSingleIconButton && SingleIconSource) {
    return (
      <button
        className={`${calcRadius()} text-[24px] flex items-center justify-center transition-all ease-in-out bg-primarna-tamna outline-none border-none cursor-pointer text-primarna-svijetla hover:outline hover:outline-offset-0 hover:outline-sekundarna-svijetla hover:bg-sekundarna-tamna active:outline active:outline-offset-0 active:outline-accent-boja active:text-accent-boja active:bg-sekundarna-tamna active:outline-[3px]`}
      >
        <SingleIconSource />
      </button>
    );
  }

  return (
    <button
      onClick={onClickAction}
      type={type}
      className={`${calcSizes()} transition-all ease-in-out bg-primarna-tamna outline-none border-none cursor-pointer text-primarna-svijetla hover:outline hover:outline-offset-0 hover:outline-sekundarna-svijetla hover:bg-sekundarna-tamna active:outline active:outline-offset-0 active:outline-accent-boja active:text-accent-boja active:bg-sekundarna-tamna active:outline-[3px]`}
    >
      <span>{innerText}</span>
    </button>
  );
};

//////////////////////////////////// STARO ////////////////////////////////////

export const SutraButtonBase = ({ innerText, size, isAccentButton, onClickAction }: SutraButtonBaseInterface) => {
  return (
    <button
      role='button'
      onClick={onClickAction && onClickAction}
      className={`${
        size === 'small'
          ? 'text-xs rounded-sutraButtonBorderRadiusSmall'
          : size === 'normal'
          ? 'text-base rounded-sutraButtonBorderRadiusBase'
          : size === 'large'
          ? 'text-lg rounded-sutraButtonBorderRadiusLarge'
          : ''
      } transition-all ease-in-out py-[0.75rem] px-[1.125rem]  hover:scale-105 active:outline active:outline-sutraButtonOutline ${
        isAccentButton
          ? 'bg-accent text-sutraButtonText hover:text-accent-boja hover:bg-primarna-tamna active:outline-accent'
          : 'bg-primarna-tamna text-sutraButtonText  dark:bg-primarna-svijetla dark:text-primarna-tamna hover:bg-primarna-svijetla hover:text-primarna-tamna active:outline-accent dark:hover:bg-primarna-tamna dark:hover:text-sekundarna-svijetla'
      }  `}
    >
      {innerText}
    </button>
  );
};

export const SutraButtonGradient = ({ innerText, size }: SutraButtonBaseInterface) => {
  return (
    <button
      role='button'
      className={`${
        size === 'small'
          ? 'text-sm rounded-sutraButtonBorderRadiusSmall'
          : size === 'normal'
          ? 'text-base rounded-sutraButtonBorderRadiusBase'
          : size === 'large'
          ? 'text-lg rounded-sutraButtonBorderRadiusLarge'
          : ''
      } transition-all ease-in-out py-[0.75rem] px-[1.125rem]  hover:scale-105 active:outline active:outline-sutraButtonOutline bg-sutraGradientButton text-sutraButtonText  dark:bg-sutraGradientButtonDark active:outline-accent hover:bg-sutraGradientButtonDark dark:hover:bg-sutraGradientButton dark:text-almost-black dark:hover:text-almost-white`}
    >
      {innerText}
    </button>
  );
};

export const SutraButtonOutlined = ({ innerText, size }: SutraButtonBaseInterface) => {
  return (
    <button
      role='button'
      className={`${
        size === 'small'
          ? 'text-sm rounded-sutraButtonBorderRadiusSmall'
          : size === 'normal'
          ? 'text-base rounded-sutraButtonBorderRadiusBase'
          : size === 'large'
          ? 'text-lg rounded-sutraButtonBorderRadiusLarge'
          : ''
      } transition-all ease-in-out py-[0.75rem] px-[1.125rem]  hover:scale-105 outline outline-sutraButtonOutlineAsPrim outline-primarna-tamna text-primarna-tamna hover:text-accent-boja hover:outline-sutraButtonOutlineAsPrimHover active:outline-sutraButtonOutlineAsPrimHover dark:outline-primarna-svijetla dark:text-primarna-svijetla `}
    >
      {innerText}
    </button>
  );
};

export const SutraButtonGhost = ({ innerText, size }: SutraButtonBaseInterface) => {
  return (
    <button
      role='button'
      className={`${
        size === 'small'
          ? 'text-sm rounded-sutraButtonBorderRadiusSmall'
          : size === 'normal'
          ? 'text-base rounded-sutraButtonBorderRadiusBase'
          : size === 'large'
          ? 'text-lg rounded-sutraButtonBorderRadiusLarge'
          : ''
      } transition-all ease-in-out py-[0.75rem] px-[1.125rem]  hover:scale-105 outline outline-sutraButtonOutlineAsPrim outline-primarna-tamna text-primarna-tamna  active:outline-sutraButtonOutlineAsPrimHover dark:outline-primarna-svijetla dark:text-accent-boja opacity-ghostButtonOpacity`}
    >
      {innerText}
    </button>
  );
};

export const SutraButtonLink = ({ innerText, size, isAccentButton }: SutraButtonBaseInterface) => {
  return (
    <button
      role='button'
      className={`${
        size === 'small'
          ? 'text-sm rounded-sutraButtonBorderRadiusSmall'
          : size === 'normal'
          ? 'text-base rounded-sutraButtonBorderRadiusBase'
          : size === 'large'
          ? 'text-lg rounded-sutraButtonBorderRadiusLarge'
          : ''
      } transition-all ease-in-out py-[0.75rem] px-[1.125rem] ${
        isAccentButton
          ? 'text-accent-boja dark:text-accent-boja hover:text-primarna-tamna dark:hover:text-primarna-svijetla active:text-primarna-tamna dark:active:text-primarna-svijetla'
          : ' text-primarna-tamna hover:text-accent-boja dark:hover:text-accent-boja active:text-primarna-tamna dark:text-primarna-svijetla dark:active:text-primarna-svijetla'
      }`}
    >
      {innerText}
    </button>
  );
};

export const SutraButtonWithIcon = ({
  innerText,
  size,
  isAccentButton,
  frontIcon: FrontIcon,
  backIcon: BackIcon,
}: SutraButtonBaseInterface) => {
  return (
    <button
      role='button'
      className={`${
        size === 'small'
          ? 'text-xs rounded-sutraButtonBorderRadiusSmall'
          : size === 'normal'
          ? 'text-base rounded-sutraButtonBorderRadiusBase'
          : size === 'large'
          ? 'text-lg rounded-sutraButtonBorderRadiusLarge'
          : ''
      } transition-all ease-in-out py-[0.75rem] px-[1.125rem] flex items-center gap-2 bg-accent text-sutraButtonText hover:text-accent-boja hover:bg-primarna-tamna active:outline-accent`}
    >
      {FrontIcon && <FrontIcon className='shrink-0' />}
      <span>{innerText}</span>
      {BackIcon && <BackIcon className='shrink-0' />}
    </button>
  );
};
