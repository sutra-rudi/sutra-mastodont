interface SutraButtonBaseInterface {
  size: 'small' | 'normal' | 'large';
  innerText: string;
  isAccentButton?: boolean;
  frontIcon?: React.ElementType;
  backIcon?: React.ElementType;
  onClickAction?: () => any;
}

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
