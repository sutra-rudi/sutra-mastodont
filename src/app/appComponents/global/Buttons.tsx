interface BTN {
  withMargin?: boolean;
  txt?: string;
}

export function PuniTamni({ withMargin, txt }: BTN) {
  return (
    <button className='w-max max-w-[180px] lg:-mt--desktop-h1-2---sadrzaj-cta md:-mt--tablet-h1-2---sadrzaj-cta -mt--mobile-h1-2---sadrzaj-cta  flex items-center justify-start bg-primarna-tamna text-almost-white lg:text-button-desktop md:text-button-tablet text-button-mobile md:px-7 md:py-3 px-6 py-[15px] md:rounded-[7px] rounded-[5px] md:gap-[13.3px] gap-[11.6px] transition-all ease-in-out duration-300 group hover:bg-sekundarna-tamna active:bg-almost-black'>
      <span className='motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>{txt ? txt : 'Button text'}</span>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='10'
        height='12'
        viewBox='0 0 10 12'
        fill='none'
        className='transition-all ease-in-out group-hover:translate-x-1'
      >
        <path
          d='M0.333336 0.747747L0.333335 11.248C0.333685 11.3544 0.364457 11.4586 0.422337 11.5494C0.480216 11.6403 0.563013 11.7145 0.661814 11.7638C0.760617 11.8132 0.871683 11.836 0.983057 11.8297C1.09443 11.8234 1.20189 11.7883 1.29388 11.7281L9.25252 6.47799C9.58249 6.26041 9.58249 5.73656 9.25252 5.51838L1.29388 0.268233C1.20209 0.207463 1.09457 0.171825 0.983008 0.165193C0.871449 0.158561 0.760117 0.181188 0.661105 0.230615C0.562094 0.280042 0.479191 0.35438 0.421405 0.445551C0.36362 0.536721 0.33316 0.641239 0.333336 0.747747Z'
          fill='currentColor'
        />
      </svg>
    </button>
  );
}

export function PuniSvjetli() {
  return (
    <button className='w-max max-w-[180px] lg:-mt--desktop-h1-2---sadrzaj-cta md:-mt--tablet-h1-2---sadrzaj-cta -mt--mobile-h1-2---sadrzaj-cta flex items-center justify-start bg-sekundarna-svijetla text-sekundarna-tamna lg:text-button-desktop md:text-button-tablet text-button-mobile md:px-7 md:py-3 px-6 py-[15px] md:rounded-[7px] rounded-[5px] md:gap-[13.3px] gap-[11.6px] transition-all ease-in-out duration-300 group hover:bg-primarna-svijetla active:bg-sekundarna-svijetla hover:text-sekundarna-tamna'>
      <span className='text-primarna-tamna motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>
        Button text
      </span>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='10'
        height='12'
        viewBox='0 0 10 12'
        fill='none'
        className='transition-all ease-in-out group-hover:translate-x-1'
      >
        <path
          d='M0.333336 0.747747L0.333335 11.248C0.333685 11.3544 0.364457 11.4586 0.422337 11.5494C0.480216 11.6403 0.563013 11.7145 0.661814 11.7638C0.760617 11.8132 0.871683 11.836 0.983057 11.8297C1.09443 11.8234 1.20189 11.7883 1.29388 11.7281L9.25252 6.47799C9.58249 6.26041 9.58249 5.73656 9.25252 5.51838L1.29388 0.268233C1.20209 0.207463 1.09457 0.171825 0.983008 0.165193C0.871449 0.158561 0.760117 0.181188 0.661105 0.230615C0.562094 0.280042 0.479191 0.35438 0.421405 0.445551C0.36362 0.536721 0.33316 0.641239 0.333336 0.747747Z'
          fill='currentColor'
        />
      </svg>
    </button>
  );
}
export function PuniAccent() {
  return (
    <button className='w-max max-w-[180px] lg:-mt--desktop-h1-2---sadrzaj-cta md:-mt--tablet-h1-2---sadrzaj-cta -mt--mobile-h1-2---sadrzaj-cta flex items-center justify-start bg-accent-boja text-almost-black lg:text-button-desktop md:text-button-tablet text-button-mobile md:px-7 md:py-3 px-6 py-[15px] md:rounded-[7px] rounded-[5px] md:gap-[13.3px] gap-[11.6px] transition-all ease-in-out duration-300 group hover:outline hover:outline-1 hover:outline-almost-black active:text-almost-white'>
      <span className='motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>Button text</span>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='10'
        height='12'
        viewBox='0 0 10 12'
        fill='none'
        className='transition-all ease-in-out group-hover:translate-x-1'
      >
        <path
          d='M0.333336 0.747747L0.333335 11.248C0.333685 11.3544 0.364457 11.4586 0.422337 11.5494C0.480216 11.6403 0.563013 11.7145 0.661814 11.7638C0.760617 11.8132 0.871683 11.836 0.983057 11.8297C1.09443 11.8234 1.20189 11.7883 1.29388 11.7281L9.25252 6.47799C9.58249 6.26041 9.58249 5.73656 9.25252 5.51838L1.29388 0.268233C1.20209 0.207463 1.09457 0.171825 0.983008 0.165193C0.871449 0.158561 0.760117 0.181188 0.661105 0.230615C0.562094 0.280042 0.479191 0.35438 0.421405 0.445551C0.36362 0.536721 0.33316 0.641239 0.333336 0.747747Z'
          fill='currentColor'
        />
      </svg>
    </button>
  );
}
export function PrazniSvjetli() {
  return (
    <button className='w-max max-w-[180px] lg:-mt--desktop-h1-2---sadrzaj-cta md:-mt--tablet-h1-2---sadrzaj-cta -mt--mobile-h1-2---sadrzaj-cta flex items-center justify-start bg-transparent text-primarna-svijetla outline outline-2 outline-primarna-svijetla  lg:text-button-desktop md:text-button-tablet text-button-mobile md:px-7 md:py-3 px-6 py-[15px] md:rounded-[7px] rounded-[5px] md:gap-[13.3px] gap-[11.6px] transition-all ease-in-out duration-300 group hover:outline-accent-boja hover:text-accent-boja active:outline-[3px] active:outline-primarna-svijetla'>
      <span className='motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>Button text</span>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='10'
        height='12'
        viewBox='0 0 10 12'
        fill='none'
        className='transition-all ease-in-out group-hover:translate-x-1'
      >
        <path
          d='M0.333336 0.747747L0.333335 11.248C0.333685 11.3544 0.364457 11.4586 0.422337 11.5494C0.480216 11.6403 0.563013 11.7145 0.661814 11.7638C0.760617 11.8132 0.871683 11.836 0.983057 11.8297C1.09443 11.8234 1.20189 11.7883 1.29388 11.7281L9.25252 6.47799C9.58249 6.26041 9.58249 5.73656 9.25252 5.51838L1.29388 0.268233C1.20209 0.207463 1.09457 0.171825 0.983008 0.165193C0.871449 0.158561 0.760117 0.181188 0.661105 0.230615C0.562094 0.280042 0.479191 0.35438 0.421405 0.445551C0.36362 0.536721 0.33316 0.641239 0.333336 0.747747Z'
          fill='currentColor'
        />
      </svg>
    </button>
  );
}

export function PrazniTamni() {
  return (
    <button className='w-max max-w-[180px] lg:-mt--desktop-h1-2---sadrzaj-cta md:-mt--tablet-h1-2---sadrzaj-cta -mt--mobile-h1-2---sadrzaj-cta flex items-center justify-start bg-transparent text-primarna-tamna outline outline-2 outline-primarna-tamna lg:text-button-desktop md:text-button-tablet text-button-mobile md:px-7 md:py-3 px-6 py-[15px] md:rounded-[7px] rounded-[5px] md:gap-[13.3px] gap-[11.6px] transition-all ease-in-out duration-300 group hover:bg-primarna-tamna hover:text-sekundarna-svijetla hover:outline hover:outline-2 hover:outline-sekundarna-svijetla active:text-accent-boja'>
      <span className='motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>Button text</span>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='10'
        height='12'
        viewBox='0 0 10 12'
        fill='none'
        className='transition-all ease-in-out group-hover:translate-x-1'
      >
        <path
          d='M0.333336 0.747747L0.333335 11.248C0.333685 11.3544 0.364457 11.4586 0.422337 11.5494C0.480216 11.6403 0.563013 11.7145 0.661814 11.7638C0.760617 11.8132 0.871683 11.836 0.983057 11.8297C1.09443 11.8234 1.20189 11.7883 1.29388 11.7281L9.25252 6.47799C9.58249 6.26041 9.58249 5.73656 9.25252 5.51838L1.29388 0.268233C1.20209 0.207463 1.09457 0.171825 0.983008 0.165193C0.871449 0.158561 0.760117 0.181188 0.661105 0.230615C0.562094 0.280042 0.479191 0.35438 0.421405 0.445551C0.36362 0.536721 0.33316 0.641239 0.333336 0.747747Z'
          fill='currentColor'
        />
      </svg>
    </button>
  );
}

export function PrazniAccent() {
  return (
    <button className='w-max max-w-[180px] lg:-mt--desktop-h1-2---sadrzaj-cta md:-mt--tablet-h1-2---sadrzaj-cta -mt--mobile-h1-2---sadrzaj-cta flex items-center justify-start bg-transparent text-accent-boja outline outline-2 outline-accent-boja lg:text-button-desktop md:text-button-tablet text-button-mobile md:px-7 md:py-3 px-6 py-[15px] md:rounded-[7px] rounded-[5px] md:gap-[13.3px] gap-[11.6px]  transition-all ease-in-out duration-300 group hover:bg-black/10 active:bg-black/30 hover:outline-[3px]'>
      <span className='motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>Button text</span>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='10'
        height='12'
        viewBox='0 0 10 12'
        fill='none'
        className='transition-all ease-in-out group-hover:translate-x-1'
      >
        <path
          d='M0.333336 0.747747L0.333335 11.248C0.333685 11.3544 0.364457 11.4586 0.422337 11.5494C0.480216 11.6403 0.563013 11.7145 0.661814 11.7638C0.760617 11.8132 0.871683 11.836 0.983057 11.8297C1.09443 11.8234 1.20189 11.7883 1.29388 11.7281L9.25252 6.47799C9.58249 6.26041 9.58249 5.73656 9.25252 5.51838L1.29388 0.268233C1.20209 0.207463 1.09457 0.171825 0.983008 0.165193C0.871449 0.158561 0.760117 0.181188 0.661105 0.230615C0.562094 0.280042 0.479191 0.35438 0.421405 0.445551C0.36362 0.536721 0.33316 0.641239 0.333336 0.747747Z'
          fill='currentColor'
        />
      </svg>
    </button>
  );
}

export function LinkSvjetli() {
  return (
    <button className='w-max max-w-[180px] lg:-mt--desktop-h1-2---sadrzaj-cta md:-mt--tablet-h1-2---sadrzaj-cta -mt--mobile-h1-2---sadrzaj-cta flex items-center justify-start bg-transparent text-primarna-svijetla  lg:text-button-desktop md:text-button-tablet text-button-mobile md:px-7 md:py-3 px-6 py-[15px] md:rounded-[7px] rounded-[5px] md:gap-[13.3px] gap-[11.6px] transition-all ease-in-out duration-300 group hover:text-accent-boja active:text-almost-white'>
      <span className='motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>Button text</span>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='10'
        height='12'
        viewBox='0 0 10 12'
        fill='none'
        className='transition-all ease-in-out group-hover:translate-x-1'
      >
        <path
          d='M0.333336 0.747747L0.333335 11.248C0.333685 11.3544 0.364457 11.4586 0.422337 11.5494C0.480216 11.6403 0.563013 11.7145 0.661814 11.7638C0.760617 11.8132 0.871683 11.836 0.983057 11.8297C1.09443 11.8234 1.20189 11.7883 1.29388 11.7281L9.25252 6.47799C9.58249 6.26041 9.58249 5.73656 9.25252 5.51838L1.29388 0.268233C1.20209 0.207463 1.09457 0.171825 0.983008 0.165193C0.871449 0.158561 0.760117 0.181188 0.661105 0.230615C0.562094 0.280042 0.479191 0.35438 0.421405 0.445551C0.36362 0.536721 0.33316 0.641239 0.333336 0.747747Z'
          fill='currentColor'
        />
      </svg>
    </button>
  );
}

export function LinkTamni() {
  return (
    <button className='w-max max-w-[180px] lg:-mt--desktop-h1-2---sadrzaj-cta md:-mt--tablet-h1-2---sadrzaj-cta -mt--mobile-h1-2---sadrzaj-cta flex items-center justify-start bg-transparent text-primarna-tamna  lg:text-button-desktop md:text-button-tablet text-button-mobile md:px-7 md:py-3 px-6 py-[15px] md:rounded-[7px] rounded-[5px] md:gap-[13.3px] gap-[11.6px] transition-all ease-in-out duration-300 group hover:text-accent-boja active:text-almost-black'>
      <span className='motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>Button text</span>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='10'
        height='12'
        viewBox='0 0 10 12'
        fill='none'
        className='transition-all ease-in-out group-hover:translate-x-1'
      >
        <path
          d='M0.333336 0.747747L0.333335 11.248C0.333685 11.3544 0.364457 11.4586 0.422337 11.5494C0.480216 11.6403 0.563013 11.7145 0.661814 11.7638C0.760617 11.8132 0.871683 11.836 0.983057 11.8297C1.09443 11.8234 1.20189 11.7883 1.29388 11.7281L9.25252 6.47799C9.58249 6.26041 9.58249 5.73656 9.25252 5.51838L1.29388 0.268233C1.20209 0.207463 1.09457 0.171825 0.983008 0.165193C0.871449 0.158561 0.760117 0.181188 0.661105 0.230615C0.562094 0.280042 0.479191 0.35438 0.421405 0.445551C0.36362 0.536721 0.33316 0.641239 0.333336 0.747747Z'
          fill='currentColor'
        />
      </svg>
    </button>
  );
}
export function LinkAccent() {
  return (
    <button className='w-max max-w-[180px] lg:-mt--desktop-h1-2---sadrzaj-cta md:-mt--tablet-h1-2---sadrzaj-cta -mt--mobile-h1-2---sadrzaj-cta flex items-center justify-start bg-transparent text-accent-boja  lg:text-button-desktop md:text-button-tablet text-button-mobile md:px-7 md:py-3 px-6 py-[15px] md:rounded-[7px] rounded-[5px] md:gap-[13.3px] gap-[11.6px] transition-all ease-in-out duration-300 group hover:text-accent-boja active:text-primarna-tamna'>
      <span className='motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>Button text</span>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='10'
        height='12'
        viewBox='0 0 10 12'
        fill='none'
        className='transition-all ease-in-out group-hover:translate-x-1'
      >
        <path
          d='M0.333336 0.747747L0.333335 11.248C0.333685 11.3544 0.364457 11.4586 0.422337 11.5494C0.480216 11.6403 0.563013 11.7145 0.661814 11.7638C0.760617 11.8132 0.871683 11.836 0.983057 11.8297C1.09443 11.8234 1.20189 11.7883 1.29388 11.7281L9.25252 6.47799C9.58249 6.26041 9.58249 5.73656 9.25252 5.51838L1.29388 0.268233C1.20209 0.207463 1.09457 0.171825 0.983008 0.165193C0.871449 0.158561 0.760117 0.181188 0.661105 0.230615C0.562094 0.280042 0.479191 0.35438 0.421405 0.445551C0.36362 0.536721 0.33316 0.641239 0.333336 0.747747Z'
          fill='currentColor'
        />
      </svg>
    </button>
  );
}

export function SpecialTamni() {
  return (
    <button className='md:w-[344px] w-[180px] lg:-mt--desktop-h1-2---sadrzaj-cta md:-mt--tablet-h1-2---sadrzaj-cta -mt--mobile-h1-2---sadrzaj-cta flex items-center justify-center bg-primarna-tamna text-almost-white lg:text-button-desktop md:text-button-tablet text-button-mobile md:px-7 md:py-3 px-6 py-[15px] md:rounded-[7px] rounded-[5px] md:gap-[13.3px] gap-[11.6px] transition-all ease-in-out duration-300 group hover:bg-sekundarna-tamna hover:text-sekundarna-svijetla active:text-almost-white active:bg-accent-boja'>
      <span className='motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>Button text</span>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='17'
        height='14'
        viewBox='0 0 17 14'
        fill='none'
        className='transition-all ease-in-out group-hover:translate-x-1'
      >
        <path
          d='M0.5 13.6693V0.335938L16.3333 7.00261L0.5 13.6693ZM2.16667 11.1693L12.0417 7.00261L2.16667 2.83594V5.75261L7.16667 7.00261L2.16667 8.2526V11.1693ZM2.16667 11.1693V7.00261V2.83594V5.75261V8.2526V11.1693Z'
          fill='currentColor'
        />
      </svg>
    </button>
  );
}

export function SpecialSvjetli() {
  return (
    <button className='md:w-[344px] w-[180px] lg:-mt--desktop-h1-2---sadrzaj-cta md:-mt--tablet-h1-2---sadrzaj-cta -mt--mobile-h1-2---sadrzaj-cta flex items-center justify-center bg-primarna-svijetla text-almost-white lg:text-button-desktop md:text-button-tablet text-button-mobile md:px-7 md:py-3 px-6 py-[15px] md:rounded-[7px] rounded-[5px] md:gap-[13.3px] gap-[11.6px]  transition-all ease-in-out duration-300 group hover:text-heading-color-light-mode hover:bg-primarna-svijetla active:text-almost-black active:bg-accent-boja'>
      <span className='motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>Button text</span>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='17'
        height='14'
        viewBox='0 0 17 14'
        fill='none'
        className='transition-all ease-in-out group-hover:translate-x-1'
      >
        <path
          d='M0.5 13.6693V0.335938L16.3333 7.00261L0.5 13.6693ZM2.16667 11.1693L12.0417 7.00261L2.16667 2.83594V5.75261L7.16667 7.00261L2.16667 8.2526V11.1693ZM2.16667 11.1693V7.00261V2.83594V5.75261V8.2526V11.1693Z'
          fill='currentColor'
        />
      </svg>
    </button>
  );
}
