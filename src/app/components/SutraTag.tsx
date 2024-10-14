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

export const PrimaryTag = ({
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
        className={` xl:px-tag-xl-lr xl:py-tag-xl-td xl:text-tag-xl xl:rounded-tag-xl lg:px-tag-desktop-lr lg:py-tag-desktop-td lg:text-tag-desktop lg:rounded-tag-desktop md:px-tag-tablet-lr md:py-tag-tablet-td md:text-tag-tablet md:rounded-tag-tablet px-tag-mobile-lr py-tag-mobile-td text-tag-mobile rounded-tag-mobile xl:gap-tag-element-inside-xl lg:gap-tag-element-inside-desktop md:gap-tag-element-inside-tablet gap-tag-element-inside-mobile flex items-center justify-start transition-all ease-in-out cursor-pointer bg-primarna-tamna dark:bg-primarna-svijetla  text-primarna-svijetla dark:text-primarna-tamna dark:hover:bg-sekundarna-svijetla dark:hover:text-sekundarna-tamna hover:outline hover:outline-1 hover:outline-offset-0 hover:outline-sekundarna-svijetla hover:dark:outline-accent-boja active:outline-[3px]  active:text-accent-boja dark:active:text-sekundarna-tamna active:outline-accent-boja`}
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
        } flex items-center justify-start transition-all ease-in-out cursor-pointer bg-primarna-tamna dark:bg-primarna-svijetla  text-primarna-svijetla dark:text-primarna-tamna dark:hover:bg-sekundarna-svijetla dark:hover:text-sekundarna-tamna hover:outline hover:outline-1 hover:outline-offset-0 hover:outline-sekundarna-svijetla hover:dark:outline-accent-boja active:outline-[3px]  active:text-accent-boja dark:active:text-sekundarna-tamna active:outline-accent-boja`}
      >
        {BackIcon && <BackIcon className='shrink-0' />}
        <span>{innerText}</span>
        {FrontIcon && <FrontIcon className='shrink-0' />}
      </div>
    );
  }

  return (
    <div
      className={`${calcSizes()} transition-all ease-in-out cursor-pointer bg-primarna-tamna dark:bg-primarna-svijetla  text-primarna-svijetla dark:text-primarna-tamna dark:hover:bg-sekundarna-svijetla dark:hover:text-sekundarna-tamna hover:outline hover:outline-1 hover:outline-offset-0 hover:outline-sekundarna-svijetla hover:dark:outline-accent-boja active:outline-[3px]  active:text-accent-boja dark:active:text-sekundarna-tamna active:outline-accent-boja`}
    >
      <span>{innerText}</span>
    </div>
  );
};

export const AccentTag = ({
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
        className={` xl:px-tag-xl-lr xl:py-tag-xl-td xl:text-tag-xl xl:rounded-tag-xl lg:px-tag-desktop-lr lg:py-tag-desktop-td lg:text-tag-desktop lg:rounded-tag-desktop md:px-tag-tablet-lr md:py-tag-tablet-td md:text-tag-tablet md:rounded-tag-tablet px-tag-mobile-lr py-tag-mobile-td text-tag-mobile rounded-tag-mobile xl:gap-tag-element-inside-xl lg:gap-tag-element-inside-desktop md:gap-tag-element-inside-tablet gap-tag-element-inside-mobile flex items-center justify-start transition-all ease-in-out cursor-pointer bg-accent-boja text-almost-black    hover:outline hover:outline-1 hover:outline-offset-0 hover:outline-sekundarna-svijetla hover:bg-primarna-svijetla active:outline-[3px] active:outline-primarna-svijetla active:bg-accent-boja`}
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
        } flex items-center justify-start transition-all ease-in-out cursor-pointer bg-accent-boja text-almost-black    hover:outline hover:outline-1 hover:outline-offset-0 hover:outline-sekundarna-svijetla hover:bg-primarna-svijetla active:outline-[3px] active:outline-primarna-svijetla active:bg-accent-boja`}
      >
        {BackIcon && <BackIcon className='shrink-0' />}
        <span>{innerText}</span>
        {FrontIcon && <FrontIcon className='shrink-0' />}
      </div>
    );
  }

  return (
    <div
      className={`${calcSizes()} transition-all ease-in-out cursor-pointer bg-accent-boja text-almost-black    hover:outline hover:outline-1 hover:outline-offset-0 hover:outline-sekundarna-svijetla hover:bg-primarna-svijetla active:outline-[3px] active:outline-primarna-svijetla active:bg-accent-boja`}
    >
      <span>{innerText}</span>
    </div>
  );
};

export const GradientTag = ({
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
        className={` xl:px-tag-xl-lr xl:py-tag-xl-td xl:text-tag-xl xl:rounded-tag-xl lg:px-tag-desktop-lr lg:py-tag-desktop-td lg:text-tag-desktop lg:rounded-tag-desktop md:px-tag-tablet-lr md:py-tag-tablet-td md:text-tag-tablet md:rounded-tag-tablet px-tag-mobile-lr py-tag-mobile-td text-tag-mobile rounded-tag-mobile xl:gap-tag-element-inside-xl lg:gap-tag-element-inside-desktop md:gap-tag-element-inside-tablet gap-tag-element-inside-mobile flex items-center justify-start transition-all ease-in-out cursor-pointer bg-gradient-dark dark:bg-gradient-light  text-primarna-svijetla dark:text-almost-black dark:hover:text-sekundarna-tamna hover:bg-sekundarna-tamna dark:hover:bg-gradient-light  hover:outline hover:outline-1 hover:outline-offset-0 hover:outline-sekundarna-svijetla hover:dark:outline-accent-boja active:outline-[3px]  active:text-primarna-tamna active:bg-gradient-light dark:active:text-accent-boja active:outline-accent-boja dark:active:bg-gradient-dark`}
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
        } flex items-center justify-start transition-all ease-in-out cursor-pointer bg-gradient-dark dark:bg-gradient-light  text-primarna-svijetla dark:text-almost-black dark:hover:text-sekundarna-tamna hover:bg-sekundarna-tamna dark:hover:bg-gradient-light  hover:outline hover:outline-1 hover:outline-offset-0 hover:outline-sekundarna-svijetla hover:dark:outline-accent-boja active:outline-[3px]  active:text-primarna-tamna active:bg-gradient-light dark:active:text-accent-boja active:outline-accent-boja dark:active:bg-gradient-dark`}
      >
        {BackIcon && <BackIcon className='shrink-0' />}
        <span>{innerText}</span>
        {FrontIcon && <FrontIcon className='shrink-0' />}
      </div>
    );
  }

  return (
    <div
      className={`${calcSizes()} transition-all ease-in-out cursor-pointer bg-gradient-dark dark:bg-gradient-light  text-primarna-svijetla dark:text-almost-black dark:hover:text-sekundarna-tamna hover:bg-sekundarna-tamna dark:hover:bg-gradient-light  hover:outline hover:outline-1 hover:outline-offset-0 hover:outline-sekundarna-svijetla hover:dark:outline-accent-boja active:outline-[3px]  active:text-primarna-tamna active:bg-gradient-light dark:active:text-accent-boja active:outline-accent-boja dark:active:bg-gradient-dark`}
    >
      <span>{innerText}</span>
    </div>
  );
};

export const PrimaryTagOutline = ({
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
        className={` xl:px-tag-xl-lr xl:py-tag-xl-td xl:text-tag-xl xl:rounded-tag-xl lg:px-tag-desktop-lr lg:py-tag-desktop-td lg:text-tag-desktop lg:rounded-tag-desktop md:px-tag-tablet-lr md:py-tag-tablet-td md:text-tag-tablet md:rounded-tag-tablet px-tag-mobile-lr py-tag-mobile-td text-tag-mobile rounded-tag-mobile xl:gap-tag-element-inside-xl lg:gap-tag-element-inside-desktop md:gap-tag-element-inside-tablet gap-tag-element-inside-mobile flex items-center justify-start transition-all ease-in-out cursor-pointer   bg-transparent  dark:text-primarna-svijetla  outline outline-1 outline-offset-0 hover:bg-black/10 hover:outline-sekundarna-tamna hover:text-sekundarna-tamna hover:dark:outline-sekundarna-svijetla hover:dark:bg-white/10 hover:dark:text-primarna-svijetla active:text-accent-boja dark:active:text-accent-boja active:bg-black/15 dark:active:bg-white/20 active:outline-accent-boja dark:active:outline-accent-boja active:outline-[3px]`}
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
        } flex items-center justify-start transition-all ease-in-out cursor-pointer bg-transparent text-primarna-tamna dark:text-primarna-svijetla  outline outline-1 outline-offset-0 hover:bg-black/10 hover:outline-sekundarna-tamna hover:text-sekundarna-tamna hover:dark:outline-sekundarna-svijetla hover:dark:bg-white/10 hover:dark:text-primarna-svijetla active:text-accent-boja dark:active:text-accent-boja active:bg-black/15 dark:active:bg-white/20 active:outline-accent-boja dark:active:outline-accent-boja active:outline-[3px]`}
      >
        {BackIcon && <BackIcon className='shrink-0' />}
        <span>{innerText}</span>
        {FrontIcon && <FrontIcon className='shrink-0' />}
      </div>
    );
  }

  return (
    <div
      className={`${calcSizes()} transition-all ease-in-out cursor-pointer  bg-transparent text-primarna-tamna dark:text-primarna-svijetla  outline outline-1 outline-offset-0 hover:bg-black/10 hover:outline-sekundarna-tamna hover:text-sekundarna-tamna hover:dark:outline-sekundarna-svijetla hover:dark:bg-white/10 hover:dark:text-primarna-svijetla active:text-accent-boja dark:active:text-accent-boja active:bg-black/15 dark:active:bg-white/20 active:outline-accent-boja dark:active:outline-accent-boja active:outline-[3px]`}
    >
      <span>{innerText}</span>
    </div>
  );
};

export const BlackWhiteTagOutline = ({
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
        className={` xl:px-tag-xl-lr xl:py-tag-xl-td xl:text-tag-xl xl:rounded-tag-xl lg:px-tag-desktop-lr lg:py-tag-desktop-td lg:text-tag-desktop lg:rounded-tag-desktop md:px-tag-tablet-lr md:py-tag-tablet-td md:text-tag-tablet md:rounded-tag-tablet px-tag-mobile-lr py-tag-mobile-td text-tag-mobile rounded-tag-mobile xl:gap-tag-element-inside-xl lg:gap-tag-element-inside-desktop md:gap-tag-element-inside-tablet gap-tag-element-inside-mobile flex items-center justify-start transition-all ease-in-out cursor-pointer    bg-transparent text-almost-black dark:text-almost-white  outline outline-2 outline-offset-0 hover:bg-black/10 hover:outline-sekundarna-tamna hover:text-sekundarna-tamna hover:dark:outline-sekundarna-svijetla hover:dark:bg-white/5 hover:dark:text-sekundarna-svijetla active:text-sekundarna-tamna dark:active:text-sekundarna-svijetla active:bg-black/15 dark:active:bg-white/15 active:outline-sekundarna-tamna dark:active:outline-primarna-svijetla active:outline-[3px]`}
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
        } flex items-center justify-start transition-all ease-in-out cursor-pointer bg-transparent text-almost-black dark:text-almost-white  outline outline-2 outline-offset-0 hover:bg-black/10 hover:outline-sekundarna-tamna hover:text-sekundarna-tamna hover:dark:outline-sekundarna-svijetla hover:dark:bg-white/5 hover:dark:text-sekundarna-svijetla active:text-sekundarna-tamna dark:active:text-sekundarna-svijetla active:bg-black/15 dark:active:bg-white/15 active:outline-sekundarna-tamna dark:active:outline-primarna-svijetla active:outline-[3px]`}
      >
        {BackIcon && <BackIcon className='shrink-0' />}
        <span>{innerText}</span>
        {FrontIcon && <FrontIcon className='shrink-0' />}
      </div>
    );
  }

  return (
    <div
      className={`${calcSizes()} transition-all ease-in-out cursor-pointer   bg-transparent text-almost-black dark:text-almost-white  outline outline-2 outline-offset-0 hover:bg-black/10 hover:outline-sekundarna-tamna hover:text-sekundarna-tamna hover:dark:outline-sekundarna-svijetla hover:dark:bg-white/5 hover:dark:text-sekundarna-svijetla active:text-sekundarna-tamna dark:active:text-sekundarna-svijetla active:bg-black/15 dark:active:bg-white/15 active:outline-sekundarna-tamna dark:active:outline-primarna-svijetla active:outline-[3px]`}
    >
      <span>{innerText}</span>
    </div>
  );
};

export const BlackWhiteTagFull = ({
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
        className={` xl:px-tag-xl-lr xl:py-tag-xl-td xl:text-tag-xl xl:rounded-tag-xl lg:px-tag-desktop-lr lg:py-tag-desktop-td lg:text-tag-desktop lg:rounded-tag-desktop md:px-tag-tablet-lr md:py-tag-tablet-td md:text-tag-tablet md:rounded-tag-tablet px-tag-mobile-lr py-tag-mobile-td text-tag-mobile rounded-tag-mobile xl:gap-tag-element-inside-xl lg:gap-tag-element-inside-desktop md:gap-tag-element-inside-tablet gap-tag-element-inside-mobile flex items-center justify-start transition-all ease-in-out cursor-pointer  bg-almost-black dark:bg-almost-white  text-almost-white dark:text-almost-black hover:bg-primarna-tamna dark:hover:bg-almost-white hover:text-sekundarna-svijetla dark:hover:text-sekundarna-tamna hover:outline hover:outline-1 hover:outline-offset-0 hover:outline-almost-black hover:dark:outline-almost-white active:outline-[3px]  active:text-almost-black dark:active:text-almost-white  dark:active:bg-almost-black dark:active:outline-almost-white active:outline-almost-black active:bg-almost-white`}
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
        } flex items-center justify-start transition-all ease-in-out cursor-pointer bg-almost-black dark:bg-almost-white  text-almost-white dark:text-almost-black hover:bg-primarna-tamna dark:hover:bg-almost-white hover:text-sekundarna-svijetla dark:hover:text-sekundarna-tamna hover:outline hover:outline-1 hover:outline-offset-0 hover:outline-almost-black hover:dark:outline-almost-white active:outline-[3px]  active:text-almost-black dark:active:text-almost-white  dark:active:bg-almost-black dark:active:outline-almost-white active:outline-almost-black active:bg-almost-white`}
      >
        {BackIcon && <BackIcon className='shrink-0' />}
        <span>{innerText}</span>
        {FrontIcon && <FrontIcon className='shrink-0' />}
      </div>
    );
  }

  return (
    <div
      className={`${calcSizes()} transition-all ease-in-out cursor-pointer bg-almost-black dark:bg-almost-white  text-almost-white dark:text-almost-black hover:bg-primarna-tamna dark:hover:bg-almost-white hover:text-sekundarna-svijetla dark:hover:text-sekundarna-tamna hover:outline hover:outline-1 hover:outline-offset-0 hover:outline-almost-black hover:dark:outline-almost-white active:outline-[3px]  active:text-almost-black dark:active:text-almost-white  dark:active:bg-almost-black dark:active:outline-almost-white active:outline-almost-black active:bg-almost-white`}
    >
      <span>{innerText}</span>
    </div>
  );
};

export const LinkTag = ({
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
        className={` xl:px-tag-xl-lr xl:py-tag-xl-td xl:text-tag-xl xl:rounded-tag-xl lg:px-tag-desktop-lr lg:py-tag-desktop-td lg:text-tag-desktop lg:rounded-tag-desktop md:px-tag-tablet-lr md:py-tag-tablet-td md:text-tag-tablet md:rounded-tag-tablet px-tag-mobile-lr py-tag-mobile-td text-tag-mobile rounded-tag-mobile xl:gap-tag-element-inside-xl lg:gap-tag-element-inside-desktop md:gap-tag-element-inside-tablet gap-tag-element-inside-mobile flex items-center justify-start transition-all ease-in-out cursor-pointer   text-primarna-tamna dark:text-primarna-svijetla  hover:text-sekundarna-tamna dark:hover:text-primarna-svijetla active:text-accent-boja dark:active:text-accent-boja`}
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
        } flex items-center justify-start transition-all ease-in-out cursor-pointer text-primarna-tamna dark:text-primarna-svijetla  hover:text-sekundarna-tamna dark:hover:text-primarna-svijetla active:text-accent-boja dark:active:text-accent-boja`}
      >
        {BackIcon && <BackIcon className='shrink-0' />}
        <span>{innerText}</span>
        {FrontIcon && <FrontIcon className='shrink-0' />}
      </div>
    );
  }

  return (
    <div
      className={`${calcSizes()} transition-all ease-in-out cursor-pointer  text-primarna-tamna dark:text-primarna-svijetla  hover:text-sekundarna-tamna dark:hover:text-primarna-svijetla active:text-accent-boja dark:active:text-accent-boja`}
    >
      <span>{innerText}</span>
    </div>
  );
};

export const LinkTagAccent = ({
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
        className={` xl:px-tag-xl-lr xl:py-tag-xl-td xl:text-tag-xl xl:rounded-tag-xl lg:px-tag-desktop-lr lg:py-tag-desktop-td lg:text-tag-desktop lg:rounded-tag-desktop md:px-tag-tablet-lr md:py-tag-tablet-td md:text-tag-tablet md:rounded-tag-tablet px-tag-mobile-lr py-tag-mobile-td text-tag-mobile rounded-tag-mobile xl:gap-tag-element-inside-xl lg:gap-tag-element-inside-desktop md:gap-tag-element-inside-tablet gap-tag-element-inside-mobile flex items-center justify-start transition-all ease-in-out cursor-pointer    text-accent-boja hover:text-primarna-tamna dark:hover:text-primarna-svijetla active:text-primarna-svijetla dark:active:text-primarna-svijetla`}
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
        } flex items-center justify-start transition-all ease-in-out cursor-pointer text-accent-boja hover:text-primarna-tamna dark:hover:text-primarna-svijetla active:text-primarna-svijetla dark:active:text-primarna-svijetla`}
      >
        {BackIcon && <BackIcon className='shrink-0' />}
        <span>{innerText}</span>
        {FrontIcon && <FrontIcon className='shrink-0' />}
      </div>
    );
  }

  return (
    <div
      className={`${calcSizes()} transition-all ease-in-out cursor-pointer  text-accent-boja hover:text-primarna-tamna dark:hover:text-primarna-svijetla active:text-primarna-svijetla dark:active:text-primarna-svijetla`}
    >
      <span>{innerText}</span>
    </div>
  );
};

export const SutraCardTag = ({
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
        className={` xl:px-tag-xl-lr xl:py-tag-xl-td xl:text-tag-xl xl:rounded-tag-xl lg:px-tag-desktop-lr lg:py-tag-desktop-td lg:text-tag-desktop lg:rounded-tag-desktop md:px-tag-tablet-lr md:py-tag-tablet-td md:text-tag-tablet md:rounded-tag-tablet px-tag-mobile-lr py-tag-mobile-td text-tag-mobile rounded-tag-mobile xl:gap-tag-element-inside-xl lg:gap-tag-element-inside-desktop md:gap-tag-element-inside-tablet gap-tag-element-inside-mobile flex items-center justify-start transition-all ease-in-out cursor-pointer   bg-transparent text-primarna-svijetla  dark:text-primarna-tamna  outline outline-1 outline-offset-0 hover:bg-black/10 hover:outline-sekundarna-svijetla hover:text-sekundarna-svijetla hover:dark:outline-sekundarna-svijetla hover:dark:bg-white/10 hover:dark:text-primarna-svijetla active:text-accent-boja dark:active:text-accent-boja active:bg-black/15 dark:active:bg-white/20 active:outline-accent-boja dark:active:outline-accent-boja active:outline-[3px]`}
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
        } flex items-center justify-start transition-all ease-in-out cursor-pointer bg-transparent text-primarna-tamna dark:text-primarna-svijetla  outline outline-1 outline-offset-0 hover:bg-black/10 hover:outline-sekundarna-tamna hover:text-sekundarna-tamna hover:dark:outline-sekundarna-svijetla hover:dark:bg-white/10 hover:dark:text-primarna-svijetla active:text-accent-boja dark:active:text-accent-boja active:bg-black/15 dark:active:bg-white/20 active:outline-accent-boja dark:active:outline-accent-boja active:outline-[3px]`}
      >
        {BackIcon && <BackIcon className='shrink-0' />}
        <span>{innerText}</span>
        {FrontIcon && <FrontIcon className='shrink-0' />}
      </div>
    );
  }

  return (
    <div
      className={`${calcSizes()} transition-all ease-in-out cursor-pointer  bg-transparent text-primarna-tamna dark:text-primarna-svijetla  outline outline-1 outline-offset-0 hover:bg-black/10 hover:outline-sekundarna-tamna hover:text-sekundarna-tamna hover:dark:outline-sekundarna-svijetla hover:dark:bg-white/10 hover:dark:text-primarna-svijetla active:text-accent-boja dark:active:text-accent-boja active:bg-black/15 dark:active:bg-white/20 active:outline-accent-boja dark:active:outline-accent-boja active:outline-[3px]`}
    >
      <span>{innerText}</span>
    </div>
  );
};
