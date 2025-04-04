interface SutraButtonInterface {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  frontIcon?: React.ElementType;
  backIcon?: React.ElementType;
  onClickAction?: () => any;
  innerText?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  isSingleIconButton?: boolean;
  singleIconSource?: React.ElementType;
  isResponsive?: boolean;
  isOnOverlayImage?: boolean;
}

export const MainSutraButton = ({
  size,
  frontIcon: FrontIcon,
  backIcon: BackIcon,
  onClickAction,
  innerText,
  type,
  isSingleIconButton,
  singleIconSource: SingleIconSource,
  isResponsive,
  isOnOverlayImage,
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

  if (isResponsive) {
    return (
      <button
        className={`flex items-center justify-start transition-all ease-in-out  outline-none  outline-2 ${
          isOnOverlayImage
            ? 'bg-primarna-svijetla outline-primarna-svijetla outline-offset-0 border-none cursor-pointer text-primarna-tamna  hover:text-sekundarna-tamna hover:outline hover:outline-offset-0 hover:outline-accent-boja hover:bg-sekundarna-svijetla active:outline active:outline-offset-0 active:outline-accent-boja active:bg-sekundarna-svijetla'
            : 'bg-primarna-tamna outline-primarna-tamna dark:outline-primarna-svijetla outline-offset-0 border-none cursor-pointer text-primarna-svijetla dark:bg-primarna-svijetla dark:text-primarna-tamna hover:text-sekundarna-tamna hover:outline hover:outline-offset-0 hover:outline-accent-boja hover:bg-sekundarna-svijetla active:outline active:outline-offset-0 active:outline-accent-boja active:bg-sekundarna-svijetla'
        } active:outline-[3px] xl:px-botun-xl-lr xl:py-botun-xl-td xl:text-button-xl xl:rounded-botun-xl lg:px-botun-l-lr lg:py-botun-l-td lg:text-button-l lg:rounded-botun-l md:px-botun-base-lr md:py-botun-base-td md:text-button-base md:rounded-botun-base px-botun-s-lr py-botun-s-td text-button-small rounded-botun-s xl:gap-element-inside-btn-l md:gap-element-inside-btn-m gap-element-inside-btn-s`}
      >
        {BackIcon && <BackIcon className='shrink-0' />}
        <span>{innerText}</span>
        {FrontIcon && <FrontIcon className='shrink-0' />}
      </button>
    );
  }
  if (FrontIcon || BackIcon) {
    return (
      <button
        className={`${calcSizes()} flex items-center justify-start transition-all ease-in-out bg-primarna-svijetla outline-none border-none cursor-pointer text-primarna-tamna hover:text-sekundarna-tamna hover:outline hover:outline-offset-0 hover:outline-accent-boja hover:bg-sekundarna-svijetla active:outline active:outline-offset-0 active:outline-accent-boja active:bg-sekundarna-svijetla active:outline-[3px] ${
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
        className={`${calcRadius()} text-[24px] flex items-center justify-center transition-all ease-in-out bg-primarna-svijetla outline-none border-none cursor-pointer text-primarna-tamna hover:text-sekundarna-tamna hover:outline hover:outline-offset-0 hover:outline-accent-boja hover:bg-sekundarna-svijetla active:outline active:outline-offset-0 active:outline-accent-boja active:bg-sekundarna-svijetla active:outline-[3px]`}
      >
        <SingleIconSource />
      </button>
    );
  }

  return (
    <button
      onClick={onClickAction}
      type={type}
      className={`${calcSizes()} transition-all ease-in-out bg-primarna-svijetla outline-none border-none cursor-pointer text-primarna-tamna hover:text-sekundarna-tamna hover:outline hover:outline-offset-0 hover:outline-accent-boja hover:bg-sekundarna-svijetla active:outline active:outline-offset-0 active:outline-accent-boja active:bg-sekundarna-svijetla active:outline-[3px]`}
    >
      <span>{innerText}</span>
    </button>
  );
};

export const OutlineSutraButton = ({
  size,
  frontIcon: FrontIcon,
  backIcon: BackIcon,
  onClickAction,
  innerText,
  type,
  isSingleIconButton,
  singleIconSource: SingleIconSource,
  isResponsive,
  isOnOverlayImage,
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

  if (isResponsive) {
    return (
      <button
        className={` 
          flex items-center justify-start transition-all ease-in-out bg-transparent outline outline-offset-0 outline-2 active:outline-[3px] xl:px-botun-xl-lr xl:py-botun-xl-td xl:text-button-xl xl:rounded-botun-xl lg:px-botun-l-lr lg:py-botun-l-td lg:text-button-l lg:rounded-botun-l md:px-botun-base-lr md:py-botun-base-td md:text-button-base md:rounded-botun-base px-botun-s-lr py-botun-s-td text-button-small rounded-botun-s xl:gap-element-inside-btn-l md:gap-element-inside-btn-m gap-element-inside-btn-s 
          ${
            isOnOverlayImage
              ? 'outline-primarna-svijetla  border-none cursor-pointer text-primarna-svijetla    hover:text-sekundarna-svijetla  hover:outline-sekundarna-svijetla hover:bg-white/10 active:outline-accent-boja active:bg-black/15 active:text-accent-boja'
              : 'outline-primarna-tamna dark:outline-primarna-svijetla border-none cursor-pointer text-primarna-tamna dark:text-primarna-svijetla dark:hover:text-accent-boja dark:hover:outline-accent-boja hover:text-sekundarna-tamna  hover:outline-sekundarna-tamna hover:bg-black/10 active:outline-accent-boja active:bg-black/15 active:text-accent-boja'
          }`}
      >
        {BackIcon && <BackIcon className='shrink-0' />}
        <span>{innerText}</span>
        {FrontIcon && <FrontIcon className='shrink-0' />}
      </button>
    );
  }
  if (FrontIcon || BackIcon) {
    return (
      <button
        className={`${calcSizes()} flex items-center justify-start transition-all ease-in-out bg-primarna-svijetla outline-none border-none cursor-pointer text-primarna-tamna hover:text-sekundarna-tamna hover:outline hover:outline-offset-0 hover:outline-accent-boja hover:bg-sekundarna-svijetla active:outline active:outline-offset-0 active:outline-accent-boja active:bg-sekundarna-svijetla active:outline-[3px] ${
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
        className={`${calcRadius()} text-[24px] flex items-center justify-center transition-all ease-in-out bg-primarna-svijetla outline-none border-none cursor-pointer text-primarna-tamna hover:text-sekundarna-tamna hover:outline hover:outline-offset-0 hover:outline-accent-boja hover:bg-sekundarna-svijetla active:outline active:outline-offset-0 active:outline-accent-boja active:bg-sekundarna-svijetla active:outline-[3px]`}
      >
        <SingleIconSource />
      </button>
    );
  }

  return (
    <button
      onClick={onClickAction}
      type={type}
      className={`${calcSizes()} transition-all ease-in-out bg-primarna-svijetla outline-none border-none cursor-pointer text-primarna-tamna hover:text-sekundarna-tamna hover:outline hover:outline-offset-0 hover:outline-accent-boja hover:bg-sekundarna-svijetla active:outline active:outline-offset-0 active:outline-accent-boja active:bg-sekundarna-svijetla active:outline-[3px]`}
    >
      <span>{innerText}</span>
    </button>
  );
};

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
        className={`xl:px-botun-l-lr xl:py-botun-l-td xl:text-button-l xl:rounded-botun-l md:px-botun-base-lr md:py-botun-base-td md:text-button-base md:rounded-botun-base px-botun-s-lr py-botun-s-td text-button-small rounded-botun-s flex items-center justify-start 
          
        lg:gap-element-inside-btn-l md:gap-element-inside-btn-m gap-element-inside-btn-s transition-all ease-in-out 
        
        bg-primarna-tamna outline outline-2 outline-primarna-tamna border-none cursor-pointer text-primarna-svijetla hover:outline hover:outline-offset-0 hover:outline-sekundarna-svijetla hover:bg-sekundarna-tamna active:outline active:outline-offset-0 active:outline-accent-boja active:text-accent-boja active:bg-sekundarna-tamna active:outline-[3px]
        
        dark:bg-primarna-svijetla dark:outline-primarna-svijetla dark:text-primarna-tamna dark:hover:text-sekundarna-tamna dark:hover:outline-accent-boja dark:hover:bg-sekundarna-svijetla dark:active:outline-accent-boja dark:active:bg-sekundarna-svijetla`}
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
      className={`xl:px-botun-l-lr xl:py-botun-l-td xl:text-button-l xl:rounded-botun-l md:px-botun-base-lr md:py-botun-base-td md:text-button-base md:rounded-botun-base px-botun-s-lr py-botun-s-td text-button-small rounded-botun-s transition-all ease-in-out bg-primarna-tamna outline-none border-none cursor-pointer text-primarna-svijetla hover:outline hover:outline-offset-0 hover:outline-sekundarna-svijetla hover:bg-sekundarna-tamna active:outline active:outline-offset-0 active:outline-accent-boja active:text-accent-boja active:bg-sekundarna-tamna active:outline-[3px]`}
    >
      <span>{innerText}</span>
    </button>
  );
};

export const PrimaryLightButton = ({
  size,
  frontIcon: FrontIcon,
  backIcon: BackIcon,
  onClickAction,
  innerText,
  type,
  isSingleIconButton,
  singleIconSource: SingleIconSource,
  isResponsive,
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

  if (isResponsive) {
    return (
      <button
        className={`flex items-center justify-start transition-all ease-in-out bg-primarna-svijetla outline-none border-none outline outline-2 outline-primarna-svijetla outline-offset-0 cursor-pointer text-primarna-tamna hover:text-sekundarna-tamna hover:outline hover:outline-offset-0 hover:outline-accent-boja hover:bg-sekundarna-svijetla active:outline active:outline-offset-0 active:outline-accent-boja active:bg-sekundarna-svijetla active:outline-[3px] xl:px-botun-xl-lr xl:py-botun-xl-td xl:text-button-xl xl:rounded-botun-xl lg:px-botun-l-lr lg:py-botun-l-td lg:text-button-l lg:rounded-botun-l md:px-botun-base-lr md:py-botun-base-td md:text-button-base md:rounded-botun-base px-botun-s-lr py-botun-s-td text-button-small rounded-botun-s xl:gap-element-inside-btn-l md:gap-element-inside-btn-m gap-element-inside-btn-s`}
      >
        {BackIcon && <BackIcon className='shrink-0' />}
        <span>{innerText}</span>
        {FrontIcon && <FrontIcon className='shrink-0' />}
      </button>
    );
  }

  if (FrontIcon || BackIcon) {
    return (
      <button
        className={`${calcSizes()} flex items-center justify-start transition-all ease-in-out bg-primarna-svijetla outline-none border-none cursor-pointer text-primarna-tamna hover:text-sekundarna-tamna hover:outline hover:outline-offset-0 hover:outline-accent-boja hover:bg-sekundarna-svijetla active:outline active:outline-offset-0 active:outline-accent-boja active:bg-sekundarna-svijetla active:outline-[3px] ${
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
        className={`${calcRadius()} text-[24px] flex items-center justify-center transition-all ease-in-out bg-primarna-svijetla outline-none border-none cursor-pointer text-primarna-tamna hover:text-sekundarna-tamna hover:outline hover:outline-offset-0 hover:outline-accent-boja hover:bg-sekundarna-svijetla active:outline active:outline-offset-0 active:outline-accent-boja active:bg-sekundarna-svijetla active:outline-[3px]`}
      >
        <SingleIconSource />
      </button>
    );
  }

  return (
    <button
      onClick={onClickAction}
      type={type}
      className={`${calcSizes()} transition-all ease-in-out bg-primarna-svijetla outline-none border-none cursor-pointer text-primarna-tamna hover:text-sekundarna-tamna hover:outline hover:outline-offset-0 hover:outline-accent-boja hover:bg-sekundarna-svijetla active:outline active:outline-offset-0 active:outline-accent-boja active:bg-sekundarna-svijetla active:outline-[3px]`}
    >
      <span>{innerText}</span>
    </button>
  );
};

export const AccentButton = ({
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
        className={`${calcSizes()} flex items-center justify-start transition-all ease-in-out bg-accent-boja outline-none border-none cursor-pointer text-almost-black hover:text-sekundarna-tamna hover:outline hover:outline-offset-0 hover:outline-sekundarna-svijetla hover:bg-primarna-svijetla active:outline active:outline-offset-0 active:outline-primarna-svijetla active:bg-accent-boja active:outline-[3px] ${
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
        className={`${calcRadius()} text-[24px] flex items-center justify-center transition-all ease-in-out  bg-accent-boja outline-none border-none cursor-pointer text-almost-black hover:text-sekundarna-tamna hover:outline hover:outline-offset-0 hover:outline-sekundarna-svijetla hover:bg-primarna-svijetla active:outline active:outline-offset-0 active:outline-primarna-svijetla active:bg-accent-boja active:outline-[3px]`}
      >
        <SingleIconSource />
      </button>
    );
  }

  return (
    <button
      onClick={onClickAction}
      type={type}
      className={`${calcSizes()} transition-all ease-in-out  bg-accent-boja outline-none border-none cursor-pointer text-almost-black hover:text-sekundarna-tamna hover:outline hover:outline-offset-0 hover:outline-sekundarna-svijetla hover:bg-primarna-svijetla active:outline active:outline-offset-0 active:outline-primarna-svijetla active:bg-accent-boja active:outline-[3px]`}
    >
      <span>{innerText}</span>
    </button>
  );
};

export const DarkGradientButton = ({
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
        className={`${calcSizes()} flex items-center justify-start transition-all ease-in-out bg-gradient-dark outline-none border-none cursor-pointer text-primarna-svijetla hover:text-sekundarna-svijetla hover:outline hover:outline-offset-0 hover:outline-sekundarna-svijetla hover:bg-sekundarna-tamna active:outline active:outline-offset-0 active:outline-accent-boja active:bg-gradient-light active:outline-[3px] active:text-primarna-tamna ${
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
        className={`${calcRadius()} text-[24px] flex items-center justify-center transition-all ease-in-out  bg-gradient-dark outline-none border-none cursor-pointer text-primarna-svijetla hover:text-sekundarna-svijetla hover:outline hover:outline-offset-0 hover:outline-sekundarna-svijetla hover:bg-sekundarna-tamna active:outline active:outline-offset-0 active:outline-accent-boja active:bg-gradient-light active:outline-[3px] active:text-primarna-tamna`}
      >
        <SingleIconSource />
      </button>
    );
  }

  return (
    <button
      onClick={onClickAction}
      type={type}
      className={`${calcSizes()} transition-all ease-in-out bg-gradient-dark outline-none border-none cursor-pointer text-primarna-svijetla hover:text-sekundarna-svijetla hover:outline hover:outline-offset-0 hover:outline-sekundarna-svijetla hover:bg-sekundarna-tamna active:outline active:outline-offset-0 active:outline-accent-boja active:bg-gradient-light active:outline-[3px] active:text-primarna-tamna`}
    >
      <span>{innerText}</span>
    </button>
  );
};

export const LightGradientButton = ({
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
        className={`${calcSizes()} flex items-center justify-start transition-all ease-in-out bg-gradient-light outline-none border-none cursor-pointer text-almost-black hover:text-sekundarna-tamna hover:outline hover:outline-offset-0 hover:outline-accent-boja  active:outline active:outline-offset-0 active:outline-accent-boja active:bg-gradient-dark active:outline-[3px] active:text-accent-boja ${
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
        className={`${calcRadius()} text-[24px] flex items-center justify-center transition-all ease-in-out  bg-gradient-light outline-none border-none cursor-pointer text-almost-black hover:text-sekundarna-tamna hover:outline hover:outline-offset-0 hover:outline-accent-boja  active:outline active:outline-offset-0 active:outline-accent-boja active:bg-gradient-dark active:outline-[3px] active:text-accent-boja`}
      >
        <SingleIconSource />
      </button>
    );
  }

  return (
    <button
      onClick={onClickAction}
      type={type}
      className={`${calcSizes()} transition-all ease-in-out bg-gradient-light outline-none border-none cursor-pointer text-almost-black hover:text-sekundarna-tamna hover:outline hover:outline-offset-0 hover:outline-accent-boja  active:outline active:outline-offset-0 active:outline-accent-boja active:bg-gradient-dark active:outline-[3px] active:text-accent-boja`}
    >
      <span>{innerText}</span>
    </button>
  );
};

export const ButtonOutlinePrimaryLight = ({
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
        className={`xl:px-botun-l-lr xl:py-botun-l-td xl:text-button-l xl:rounded-botun-l md:px-botun-base-lr md:py-botun-base-td md:text-button-base md:rounded-botun-base px-botun-s-lr py-botun-s-td text-button-small rounded-botun-s flex items-center justify-start 
        
        lg:gap-element-inside-btn-l md:gap-element-inside-btn-m gap-element-inside-btn-s transition-all ease-in-out 

        bg-transparent outline outline-offset-0 outline-2 outline-primarna-tamna border-none cursor-pointer text-primarna-tamna hover:text-sekundarna-tamna  hover:outline-sekundarna-tamna hover:bg-black/10 active:outline-accent-boja active:bg-black/15 active:outline-[3px] active:text-accent-boja`}
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
        className={`${calcRadius()} text-[24px] flex items-center justify-center transition-all ease-in-out  bg-transparent outline outline-offset-0 outline-2 outline-primarna-tamna border-none cursor-pointer text-primarna-tamna hover:text-sekundarna-tamna  hover:outline-sekundarna-tamna hover:bg-black/10 active:outline-accent-boja active:bg-black/15 active:outline-[3px] active:text-accent-boja`}
      >
        <SingleIconSource />
      </button>
    );
  }

  return (
    <button
      onClick={onClickAction}
      type={type}
      className={`${calcSizes()} transition-all ease-in-out bg-transparent outline outline-offset-0 outline-2 outline-primarna-tamna border-none cursor-pointer text-primarna-tamna hover:text-sekundarna-tamna  hover:outline-sekundarna-tamna hover:bg-black/10 active:outline-accent-boja active:bg-black/15 active:outline-[3px] active:text-accent-boja`}
    >
      <span>{innerText}</span>
    </button>
  );
};

export const ButtonOutlinePrimaryDark = ({
  size,
  frontIcon: FrontIcon,
  backIcon: BackIcon,
  onClickAction,
  innerText,
  type,
  isSingleIconButton,
  singleIconSource: SingleIconSource,
  isResponsive,
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

  if (isResponsive) {
    return (
      <button
        onClick={onClickAction}
        type={type}
        className={`flex items-center justify-start transition-all ease-in-out bg-transparent outline outline-offset-0 outline-2 outline-primarna-svijetla border-none cursor-pointer text-primarna-svijetla  hover:outline-sekundarna-svijetla  active:outline-accent-boja active:bg-white/20 active:outline-[3px] active:text-accent-boja xl:px-botun-xl-lr xl:py-botun-xl-td xl:text-button-xl xl:rounded-botun-xl lg:px-botun-l-lr lg:py-botun-l-td lg:text-button-l lg:rounded-botun-l md:px-botun-base-lr md:py-botun-base-td md:text-button-base md:rounded-botun-base px-botun-s-lr py-botun-s-td text-button-small rounded-botun-s xl:gap-element-inside-btn-l md:gap-element-inside-btn-m gap-element-inside-btn-s`}
      >
        {BackIcon && <BackIcon className='shrink-0' />}
        <span>{innerText}</span>
        {FrontIcon && <FrontIcon className='shrink-0' />}
      </button>
    );
  }

  if (FrontIcon || BackIcon) {
    return (
      <button
        className={`${calcSizes()} flex items-center justify-start transition-all ease-in-out bg-transparent outline outline-offset-0 outline-2 outline-primarna-svijetla border-none cursor-pointer text-primarna-svijetla  hover:outline-sekundarna-svijetla  active:outline-accent-boja active:bg-white/20 active:outline-[3px] active:text-accent-boja ${
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
        className={`${calcRadius()} text-[24px] flex items-center justify-center transition-all ease-in-out  bg-transparent outline outline-offset-0 outline-2 outline-primarna-svijetla border-none cursor-pointer text-primarna-svijetla  hover:outline-sekundarna-svijetla  active:outline-accent-boja active:bg-white/20 active:outline-[3px] active:text-accent-boja `}
      >
        <SingleIconSource />
      </button>
    );
  }

  return (
    <button
      onClick={onClickAction}
      type={type}
      className={`${calcSizes()} transition-all ease-in-out bg-transparent outline outline-offset-0 outline-2 outline-primarna-svijetla border-none cursor-pointer text-primarna-svijetla  hover:outline-sekundarna-svijetla  active:outline-accent-boja active:bg-white/20 active:outline-[3px] active:text-accent-boja `}
    >
      <span>{innerText}</span>
    </button>
  );
};

export const ButtonOutlineAlmostBlack = ({
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
        className={`${calcSizes()} flex items-center justify-start transition-all ease-in-out bg-transparent outline outline-offset-0 outline-2 outline-almost-black border-none cursor-pointer text-almost-black  hover:outline-sekundarna-tamna hover:text-sekundarna-tamna hover:bg-black/10  active:outline-sekundarna-tamna active:bg-black/20 active:outline-[3px] active:text-sekundarna-tamna ${
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
        className={`${calcRadius()} text-[24px] flex items-center justify-center transition-all ease-in-out  bg-transparent outline outline-offset-0 outline-2 outline-almost-black border-none cursor-pointer text-almost-black  hover:outline-sekundarna-tamna hover:text-sekundarna-tamna hover:bg-black/10  active:outline-sekundarna-tamna active:bg-black/20 active:outline-[3px] active:text-sekundarna-tamna`}
      >
        <SingleIconSource />
      </button>
    );
  }

  return (
    <button
      onClick={onClickAction}
      type={type}
      className={`${calcSizes()} transition-all ease-in-out bg-transparent outline outline-offset-0 outline-2 outline-almost-black border-none cursor-pointer text-almost-black  hover:outline-sekundarna-tamna hover:text-sekundarna-tamna hover:bg-black/10  active:outline-sekundarna-tamna active:bg-black/20 active:outline-[3px] active:text-sekundarna-tamna`}
    >
      <span>{innerText}</span>
    </button>
  );
};

export const ButtonOutlineAlmostWhite = ({
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
        className={`${calcSizes()} flex items-center justify-start transition-all ease-in-out bg-transparent outline outline-offset-0 outline-2 outline-almost-white border-none cursor-pointer text-almost-white  hover:outline-sekundarna-svijetla hover:bg-white/5 hover:text-sekundarna-svijetla  active:outline-primarna-svijetla active:bg-white/15 active:outline-[3px] active:text-sekundarna-svijetla ${
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
        className={`${calcRadius()} text-[24px] flex items-center justify-center transition-all ease-in-out  bg-transparent outline outline-offset-0 outline-2 outline-almost-white border-none cursor-pointer text-almost-white  hover:outline-sekundarna-svijetla hover:bg-white/5 hover:text-sekundarna-svijetla  active:outline-primarna-svijetla active:bg-white/15 active:outline-[3px] active:text-sekundarna-svijetla`}
      >
        <SingleIconSource />
      </button>
    );
  }

  return (
    <button
      onClick={onClickAction}
      type={type}
      className={`${calcSizes()} transition-all ease-in-out bg-transparent outline outline-offset-0 outline-2 outline-almost-white border-none cursor-pointer text-almost-white  hover:outline-sekundarna-svijetla hover:bg-white/5 hover:text-sekundarna-svijetla  active:outline-primarna-svijetla active:bg-white/15 active:outline-[3px] active:text-sekundarna-svijetla`}
    >
      <span>{innerText}</span>
    </button>
  );
};

export const AlmostBlackButton = ({
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
        className={`${calcSizes()} flex items-center justify-start transition-all ease-in-out bg-almost-black outline-none border-none cursor-pointer text-almost-white hover:outline outline-offset-0 hover:outline-almost-black hover:text-sekundarna-svijetla hover:bg-sekundarna-tamna active:outline  active:outline-almost-black active:text-almost-black active:bg-almost-white active:outline-[3px] ${
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
        className={`${calcRadius()} text-[24px] flex items-center justify-center transition-all ease-in-out  bg-almost-black outline-none border-none cursor-pointer text-almost-white hover:outline outline-offset-0 hover:outline-almost-black hover:text-sekundarna-svijetla hover:bg-sekundarna-tamna active:outline  active:outline-almost-black active:text-almost-black active:bg-almost-white active:outline-[3px]`}
      >
        <SingleIconSource />
      </button>
    );
  }

  return (
    <button
      onClick={onClickAction}
      type={type}
      className={`${calcSizes()} transition-all ease-in-out  bg-almost-black outline-none border-none cursor-pointer text-almost-white hover:outline outline-offset-0 hover:outline-almost-black hover:text-sekundarna-svijetla hover:bg-sekundarna-tamna active:outline  active:outline-almost-black active:text-almost-black active:bg-almost-white active:outline-[3px]`}
    >
      <span>{innerText}</span>
    </button>
  );
};

export const AlmostWhiteButton = ({
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
        className={`${calcSizes()} flex items-center justify-start transition-all ease-in-out bg-almost-white outline-none border-none cursor-pointer text-almost-black hover:outline outline-offset-0 hover:outline-almost-white hover:text-sekundarna-tamna hover:bg-almost-white active:outline  active:outline-almost-white active:text-almost-white active:bg-sekundarna-tamna active:outline-[3px] ${
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
        className={`${calcRadius()} text-[24px] flex items-center justify-center transition-all ease-in-out   bg-almost-white outline-none border-none cursor-pointer text-almost-black hover:outline outline-offset-0 hover:outline-almost-white hover:text-sekundarna-tamna hover:bg-almost-white active:outline  active:outline-almost-white active:text-almost-white active:bg-sekundarna-tamna active:outline-[3px]`}
      >
        <SingleIconSource />
      </button>
    );
  }

  return (
    <button
      onClick={onClickAction}
      type={type}
      className={`${calcSizes()} transition-all ease-in-out  bg-almost-white outline-none border-none cursor-pointer text-almost-black hover:outline outline-offset-0 hover:outline-almost-white hover:text-sekundarna-tamna hover:bg-almost-white active:outline  active:outline-almost-white active:text-almost-white active:bg-sekundarna-tamna active:outline-[3px]`}
    >
      <span>{innerText}</span>
    </button>
  );
};

export const LinkButtonPrimaryLight = ({
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
        className={`${calcSizes()} flex items-center justify-start transition-all ease-in-out bg-transparent outline-none border-none cursor-pointer text-primarna-tamna hover:text-sekundarna-tamna active:text-accent-boja ${
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
        className={`${calcRadius()} text-[24px] flex items-center justify-center transition-all ease-in-out   bg-transparent outline-none border-none cursor-pointer text-primarna-tamna hover:text-sekundarna-tamna active:text-accent-boja`}
      >
        <SingleIconSource />
      </button>
    );
  }

  return (
    <button
      onClick={onClickAction}
      type={type}
      className={`${calcSizes()} transition-all ease-in-out  bg-transparent outline-none border-none cursor-pointer text-primarna-tamna hover:text-sekundarna-tamna active:text-accent-boja`}
    >
      <span>{innerText}</span>
    </button>
  );
};

export const LinkButtonPrimaryDark = ({
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
        className={`${calcSizes()} flex items-center justify-start transition-all ease-in-out bg-transparent outline-none border-none cursor-pointer text-primarna-svijetla active:text-accent-boja ${
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
        className={`${calcRadius()} text-[24px] flex items-center justify-center transition-all ease-in-out   bg-transparent outline-none border-none cursor-pointer text-primarna-svijetla active:text-accent-boja`}
      >
        <SingleIconSource />
      </button>
    );
  }

  return (
    <button
      onClick={onClickAction}
      type={type}
      className={`${calcSizes()} transition-all ease-in-out  bg-transparent outline-none border-none cursor-pointer text-primarna-svijetla active:text-accent-boja`}
    >
      <span>{innerText}</span>
    </button>
  );
};

export const LinkButtonAccent = ({
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
        className={`${calcSizes()} flex items-center justify-start transition-all ease-in-out bg-transparent outline-none border-none cursor-pointer text-accent-boja hover:text-primarna-tamna active:text-primarna-svijetla ${
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
        className={`${calcRadius()} text-[24px] flex items-center justify-center transition-all ease-in-out bg-transparent outline-none border-none cursor-pointer text-accent-boja hover:text-primarna-tamna active:text-primarna-svijetla`}
      >
        <SingleIconSource />
      </button>
    );
  }

  return (
    <button
      onClick={onClickAction}
      type={type}
      className={`${calcSizes()} transition-all ease-in-out  bg-transparent outline-none border-none cursor-pointer text-accent-boja hover:text-primarna-tamna active:text-primarna-svijetla`}
    >
      <span>{innerText}</span>
    </button>
  );
};

export const LinkButton = ({
  size,
  frontIcon: FrontIcon,
  backIcon: BackIcon,
  onClickAction,
  innerText,
  type,
  isSingleIconButton,
  singleIconSource: SingleIconSource,
}: SutraButtonInterface) => {
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
        className={`lg:px-botun-l-lr lg:py-botun-l-td lg:text-button-l lg:rounded-botun-l md:px-botun-base-lr md:py-botun-base-td md:text-button-base md:rounded-botun-base px-botun-s-lr py-botun-s-td text-button-small rounded-botun-s lg:gap-element-inside-btn-l md:gap-element-inside-btn-m gap-element-inside-btn-s
          
      flex items-center justify-start transition-all ease-in-out bg-transparent outline-none border-none cursor-pointer text-primarna-tamna hover:text-sekundarna-tamna active:text-accent-boja
        
      relative after:absolute after:w-0 after:h-px after:transition-all after:duration-300 after:ease-out after:bg-red-600 after:bottom-0 after:right-0 hover:after:w-full hover:after:left-0 hover:after:right-auto
        `}
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
        className={`${calcRadius()} text-[24px] flex items-center justify-center transition-all ease-in-out   bg-transparent outline-none border-none cursor-pointer text-primarna-tamna hover:text-sekundarna-tamna active:text-accent-boja`}
      >
        <SingleIconSource />
      </button>
    );
  }

  return (
    <button
      onClick={onClickAction}
      type={type}
      className={`lg:px-botun-l-lr lg:py-botun-l-td lg:text-button-l lg:rounded-botun-l md:px-botun-base-lr md:py-botun-base-td md:text-button-base md:rounded-botun-base px-botun-s-lr py-botun-s-td text-button-small rounded-botun-s lg:gap-element-inside-btn-l md:gap-element-inside-btn-m gap-element-inside-btn-s
          
      flex items-center justify-start transition-all ease-in-out bg-transparent outline-none border-none cursor-pointer text-primarna-tamna hover:text-sekundarna-tamna active:text-accent-boja
        
      relative after:absolute after:w-0 after:h-px after:transition-all after:duration-300 after:ease-out after:bg-red-600 after:bottom-0 after:right-0 hover:after:w-full hover:after:left-0 hover:after:right-auto
        `}
    >
      <span>{innerText}</span>
    </button>
  );
};
