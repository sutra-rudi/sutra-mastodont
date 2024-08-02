//@ts-nocheck
'use client';

import { toast } from 'react-hot-toast';
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import DatePicker from 'react-datepicker';
import { useFormspark } from '@formspark/use-formspark';
import { useRouter } from 'next/navigation';
import { BiSolidPhoneCall as PhoneIcon } from 'react-icons/bi';
import {
  IoMailSharp as MailIcon,
  IoLogoTwitter as TwitterIcon,
  IoLogoInstagram as InstagramIcon,
} from 'react-icons/io5';
import { MdLocationPin as LocationIcon } from 'react-icons/md';
import { FaDiscord as DiscordIcon } from 'react-icons/fa';
import dayjs from 'dayjs';
import StickyBox from 'react-sticky-box';
import { FileUploaderRegular, UploadCtxProvider } from '@uploadcare/react-uploader';
import * as LR from '@uploadcare/blocks';
import '@uploadcare/blocks/web/lr-file-uploader-regular.min.css';
LR.registerBlocks(LR);
interface ContactPageInterface {
  personsData: any;
  sectorsData: any;
  lang: any;
  contactSemantics: any;
  contactSemanticFormContent: any;
  contactSemanticIntro: any;
  contactGlobalIntro: any;
}

interface FormValues {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  company: string;
  visitDate: Date | null;
  endDate: Date | null;
  followUpDate: Date | null;
  excursionType: string;
  messageTitle?: string; // Naslov poruke
  messageBody?: string; // Tekst poruke
  terms: boolean;
  contactTerms: boolean;
  optionalField1?: string;
  optionalField2?: string;
  optionalField3?: string;
  optionalField4?: string;
  optionalField5?: string;
  selektor1?: any;
  selektor2?: any;
  selektor3?: any;
  selektor4?: any;
  selektor5?: any;
  selektor6?: any;
  fileUpload?: FileList;
}

const PageContent = ({
  personsData,
  sectorsData,
  lang,
  contactSemantics,
  contactSemanticFormContent,
  contactSemanticIntro,
  contactGlobalIntro,
}: ContactPageInterface) => {
  const pageRouter = useRouter();

  const uCapiKey = 'e0e7dbf3ab114523a67a';

  const ctxProviderRef = React.useRef(null);
  const [files, setFiles] = React.useState<any[]>([]);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (ctxProviderRef.current) {
      const handleChangeEvent = (e) => {
        console.log('change event payload:', e.detail);

        setFiles([...e.detail.allEntries.filter((f) => f.status === 'success')]);
      };

      const ctxProvider = ctxProviderRef.current;

      ctxProvider.addEventListener('change', handleChangeEvent);
      ctxProvider.addEventListener('file-upload-progress', () => console.log('file-upload-progress event'));

      return () => {
        ctxProvider.removeEventListener('change', handleChangeEvent);
      };
    }
  }, [ctxProviderRef.current]); // Pokreće se kada se ctxProviderRef ažurira

  React.useEffect(() => {
    console.log('ctxProviderRef on mount:', ctxProviderRef.current);
  }, []);

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const [submit, submitting] = useFormspark({
    formId: 'qzYhzVkrj',
  });

  const OptionalFields = () => {
    const optionalFieldsArr = [
      contactSemanticFormContent.bonusPoljeUnosaInformacija1,
      contactSemanticFormContent.bonusPoljeUnosaInformacija2,
      contactSemanticFormContent.bonusPoljeUnosaInformacija3,
      contactSemanticFormContent.bonusPoljeUnosaInformacija4,
      contactSemanticFormContent.bonusPoljeUnosaInformacija5,
    ];

    // console.log('PAGI CONT', contactSemantics);

    return optionalFieldsArr.map((optionalField: any, index) => {
      const ind = index + 1;
      if (optionalField.status) {
        return (
          <div key={ind} className='relative z-0 w-full mb-5 group'>
            <input
              type='text'
              className={`form-input block py-2.5 px-0 w-full text-sm text-secondary-dark dark:text-secondary-light bg-transparent border-0 border-b-[1px] border-sutraPlaceholderClr focus:border-accent appearance-none placeholder:opacity-0 focus:placeholder:opacity-100 focus:outline-none placeholder:text-sutraPlaceholderClr placeholder:font-medium active:ring-0 focus:ring-0  peer  ${
                //@ts-ignore
                errors[`optionalField${ind}`] ? 'border-error' : 'border-sutraPlaceholderClr'
              } `}
              placeholder={optionalField.bonusPoljeUnosaPlaceholder ?? 'Bonus polje '}
              {...register(`optionalField${ind}` as any, {
                required: optionalField.bonusPoljeUnosaErrorPoruka ?? 'Bonus polje je obavezno',
                minLength: {
                  value: 10,
                  message: optionalField.bonusPoljeUnosaErrorPoruka ?? '10 slova minimum',
                },
              })}
            />
            <label
              htmlFor={`optionalField${ind}`}
              className='peer-focus:font-medium absolute text-xs text-almost-black dark:text-secondary-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              {`Bonus polje ${ind}`}
            </label>

            {
              //@ts-ignore
              errors[`optionalField${ind}`] && ( //@ts-ignore
                <p className='text-error text-xs italic'>{errors[`optionalField${ind}`].message}</p>
              )
            }
          </div>
        );
      }
    });
  };

  const OptionalSelectors = () => {
    const optionalSelectorsArr = [
      contactSemanticFormContent.selektor1,
      contactSemanticFormContent.selektor2,
      contactSemanticFormContent.selektor3,
      contactSemanticFormContent.selektor4,
      contactSemanticFormContent.selektor5,
      contactSemanticFormContent.selektor6,
    ];

    return optionalSelectorsArr.map((optionalSelector: any, index) => {
      if (optionalSelector.status) {
        let errorMessage: string | undefined;

        if (optionalSelector.odabirVrstaPrikaza === 'Radio button') {
          const options = optionalSelector.odabirPopisStavkiKojeSePrikazuju;
          const fields: string[] = options.split('\r').join('').split('\n');
          //@ts-ignore
          errorMessage = errors[`selektor${index + 1}`]?.message;

          return (
            <div key={index}>
              <fieldset className='flex w-full items-center justify-between'>
                <legend className='text-sm text-secondary-dark dark:text-secondary-light font-semibold mb-4 text-balance leading-normal'>
                  {optionalSelector.odabirNazivStavke}
                </legend>
                {fields.map((field) => (
                  <div className='w-full flex items-center gap-2' key={field}>
                    <input
                      type='radio'
                      //@ts-ignore
                      {...register(`selektor${index + 1}`, {
                        required: {
                          value: true,
                          message: optionalSelector.odabirErrorPoruka ?? 'Polje je obavezno',
                        },
                      })}
                      value={field}
                      id={`${field}_${index}`}
                      className='custom-radio'
                    />
                    <label
                      htmlFor={`${field}_${index}`}
                      className='text-xs text-secondary-dark dark:text-secondary-light'
                    >
                      {field}
                    </label>
                  </div>
                ))}
              </fieldset>
              {errorMessage && <p className='text-error text-xs italic mt-2'>{errorMessage}</p>}
            </div>
          );
        }

        if (optionalSelector.odabirVrstaPrikaza === 'Dropdown') {
          const options = optionalSelector.odabirPopisStavkiKojeSePrikazuju;
          const fields: string[] = options.split('\r').join('').split('\n');
          //@ts-ignore
          errorMessage = errors[`selektor${index + 1}`]?.message;

          return (
            <div key={index} className='flex flex-col gap-2 items-start'>
              <label
                className='text-sm font-semibold text-secondary-dark dark:text-secondary-light mb-1'
                htmlFor={`selektor${index + 1}`}
              >
                {optionalSelector.odabirNazivStavke}
              </label>
              <select
                id={`selektor${index + 1}`} //@ts-ignore
                {...register(`selektor${index + 1}`, {
                  required: {
                    value: true,
                    message: optionalSelector.odabirErrorPoruka ?? 'Polje je obavezno',
                  },
                })}
                className='bg-white border border-gray-300 rounded-md py-1 px-2 text-xs text-gray-700 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent w-full max-w-36 form-select'
              >
                <option value='' className='text-gray-500'>
                  Opcije za odabir
                </option>
                {fields.map((field) => (
                  <option key={field} value={field}>
                    {field}
                  </option>
                ))}
              </select>
              {errorMessage && <p className='text-error text-xs italic mt-2'>{errorMessage}</p>}
            </div>
          );
        }

        if (optionalSelector.odabirVrstaPrikaza === 'Checkmark') {
          const options = optionalSelector.odabirPopisStavkiKojeSePrikazuju;
          const fields: string[] = options.split('\r').join('').split('\n');
          //@ts-ignore
          errorMessage = errors[`selektor${index + 1}`]?.message;

          return (
            // Komponenta
            <div key={index}>
              <fieldset className='flex items-center w-full justify-between'>
                <legend className='text-sm font-semibold text-secondary-dark dark:text-secondary-light  mb-4'>
                  {optionalSelector.odabirNazivStavke}
                </legend>
                <div className='flex items-center justify-between w-full'>
                  {fields.map((field) => (
                    <div className='w-full flex items-center gap-2' key={field}>
                      <input
                        type='checkbox'
                        id={`${field}_${index}`} //@ts-ignore
                        {...register(`selektor${index + 1}`, {
                          validate: (value) => {
                            if (!value) {
                              return optionalSelector.odabirErrorPoruka ?? 'Polje je obavezno';
                            }
                          },
                        })}
                        value={field}
                        className=' custom-radio form-checkbox'
                      />
                      <label
                        htmlFor={`${field}_${index}`}
                        className='text-xs text-secondary-dark dark:text-secondary-light'
                      >
                        {field}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
              {errorMessage && <p className='text-error text-xs italic mt-2'>{errorMessage}</p>}
            </div>
          );
        }
      }
      return null;
    });
  };

  const onSubmit: SubmitHandler<FormValues> = async (data, event) => {
    console.log('EVENT', event);
    event?.preventDefault();
    const loadingToast = toast.loading('Šaljem...');

    try {
      const parseData = { ...data, fileName: files[0].name, fileUrl: files[0].cdnUrl };
      await submit({ parseData });

      console.log('FORM DATA', data);

      toast.success('Uspješno poslano, bravo!');
      pageRouter.push(`/${lang}/submit-success?rtime=${contactGlobalIntro.timerZaRedirectKontaktForme ?? '10'}`);
    } catch (error) {
      toast.error('Nešto ne valja :(');
    } finally {
      toast.dismiss(loadingToast);
    }
  };

  const formErrorMessageTriage = React.useCallback(
    (cmsMessage: string | null, fallback: string) => (cmsMessage ? cmsMessage : fallback),
    []
  );

  console.log('files', files);

  const setCtxProviderRef = React.useCallback((node) => {
    if (node) {
      ctxProviderRef.current = node;

      const handleChangeEvent = (e) => {
        console.log('change event payload:', e.detail);

        setFiles([...e.detail.allEntries.filter((f) => f.status === 'success')]);
      };

      node.addEventListener('change', handleChangeEvent);
      node.addEventListener('file-upload-progress', () => console.log('file-upload-progress event'));

      return () => {
        node.removeEventListener('change', handleChangeEvent);
      };
    }
  }, []);

  return (
    <section className='w-full h-full'>
      <div className='w-full flex items-center justify-center flex-col gap-2 pt-12'>
        <h2 className='text-h2 leading-normal text-primary-dark dark:text-primary-light font-bold'>
          {contactSemanticIntro ? contactSemanticIntro.naslovUKontaktima : 'Contact Us'}
        </h2>

        <p className='prose text-primary-dark dark:text-primary-light'>
          {contactSemanticIntro ? contactSemanticIntro.uvodniTekstZaKontakte12Recenice : 'Intro text'}
        </p>
      </div>

      <div className='flex mx-auto max-w-sutraContactUsTempFormWidth w-full justify-between items-start lg:flex-nowrap flex-wrap lg:px-0 px-3 bg-white dark:bg-secondary-dark lg:gap-12 lg:pr-12 mt-12'>
        <StickyBox
          offsetBottom={20}
          offsetTop={20}
          className='w-full h-full p-3 lg:max-w-lg self-stretch max-lg:!relative max-lg:!top-0'
        >
          <div className='w-full h-full lg:p-3 lg:max-w-lg self-stretch'>
            <div className='bg-secondary-dark dark:bg-primary-dark w-full h-full rounded-sutraContactCardBorderRadius relative overflow-hidden'>
              {/* KRUGOVI */}
              <div className='absolute -bottom-12 w-64 h-64 rounded-full bg-accent opacity-20 -right-24'></div>
              <div className='absolute bottom-24 w-32 h-32 rounded-full bg-accent opacity-10 right-12'></div>

              {/* /// */}
              <div className='grid items-start w-full gap-28 pb-9 pt-10 px-10'>
                <div className='w-full flex flex-col items-start gap-2'>
                  <h3 className='text-white text-contactFormSidebarHeading leading-none'>
                    {contactSemanticIntro ? contactSemanticIntro.nadnaslovpodnaslovUKontaktima : 'Contact Us'}
                  </h3>
                  <p className='text-secondary-light  leading-normal text-base max-w-prose'>
                    {contactSemanticIntro ? contactSemanticIntro.uvodniTekstZaKontakte12Recenice : 'Intro text'}
                  </p>
                </div>

                <div className='grid grid-cols-1 items-start gap-12'>
                  <div className='flex items-center justify-start gap-6'>
                    <PhoneIcon className='text-white text-2xl shrink-0' />
                    <span className='text-white text-base'>+1012 3456 789</span>
                  </div>
                  <div className='flex items-center justify-start gap-6'>
                    <MailIcon className='text-white text-2xl shrink-0' />
                    <span className='text-white text-base'>demo@gmail.com</span>
                  </div>
                  <div className='flex items-center justify-start gap-6'>
                    <LocationIcon className='text-white text-2xl shrink-0' />
                    <span className='text-white text-base  text-balance'>
                      132 Dartmouth Street Boston, Massachusetts 02156 United States
                    </span>
                  </div>
                </div>

                <div className='flex items-center gap-6'>
                  <div className='group cursor-pointer'>
                    <div className='w-8 h-8 bg-accent rounded-full flex items-center justify-center transition-all duration-300 ease-linear group-hover:bg-white'>
                      <TwitterIcon className='shrink-0 text-base text-white transition-all ease-linear duration-200 group-hover:text-secondary-dark' />
                    </div>
                  </div>
                  <div className='group cursor-pointer'>
                    <div className='w-8 h-8 bg-accent rounded-full flex items-center justify-center transition-all duration-300 ease-linear group-hover:bg-white'>
                      <InstagramIcon className='shrink-0 text-base text-white transition-all ease-linear duration-200 group-hover:text-secondary-dark' />
                    </div>
                  </div>
                  <div className='group cursor-pointer'>
                    <div className='w-8 h-8 bg-accent rounded-full flex items-center justify-center transition-all duration-300 ease-linear group-hover:bg-white'>
                      <DiscordIcon className='shrink-0 text-base text-white transition-all ease-linear duration-200 group-hover:text-secondary-dark' />
                    </div>
                  </div>
                </div>
              </div>
              {/* /// */}
            </div>
          </div>
        </StickyBox>

        <form className='lg:max-w-3xl w-full lg:pt-14 pt-4 pb-9 lg:px-0 px-3' onSubmit={handleSubmit(onSubmit)}>
          {/* First and Last Name Inputs */}
          <div className='grid lg:grid-cols-2 lg:gap-6'>
            <div className='relative z-0 w-full mb-5 group'>
              <input
                type='text'
                id='firstName'
                className={`form-input block py-2.5 px-0 w-full text-sm text-secondary-dark dark:text-secondary-light bg-transparent border-0 border-b-[1px] border-sutraPlaceholderClr focus:border-accent appearance-none placeholder:opacity-0 focus:placeholder:opacity-100 focus:outline-none placeholder:text-sutraPlaceholderClr placeholder:font-medium active:ring-0 focus:ring-0  peer ${
                  errors.firstName ? 'border-error' : 'border-sutraPlaceholderClr'
                }`}
                placeholder={contactSemanticFormContent.imePlaceholderTekst ?? 'Ime osobe'}
                {...register('firstName', {
                  required: 'Ime je obavezno',
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: formErrorMessageTriage(
                      contactSemanticFormContent.imeErrorMessage,
                      'Ime može sadržavati samo slova'
                    ),
                  },
                })}
              />
              <label
                htmlFor='firstName'
                className='peer-focus:font-medium absolute text-xs text-almost-black dark:text-secondary-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                {contactSemanticFormContent.imeNazivStavke ?? 'First name'}
              </label>
              {errors.firstName && <p className='text-error text-xs italic'>{errors.firstName.message}</p>}
            </div>

            <div className='relative z-0 w-full mb-5 group'>
              <input
                type='text'
                id='lastName'
                className={`form-input block py-2.5 px-0 w-full text-sm text-secondary-dark dark:text-secondary-light bg-transparent border-0 border-b-[1px] border-sutraPlaceholderClr focus:border-accent appearance-none placeholder:opacity-0 focus:placeholder:opacity-100 focus:outline-none placeholder:text-sutraPlaceholderClr placeholder:font-medium active:ring-0 focus:ring-0  peer  ${
                  errors.lastName ? 'border-error' : 'border-sutraPlaceholderClr'
                } `}
                placeholder={contactSemanticFormContent.prezimePlaceholderTekst ?? 'Prezime'}
                {...register('lastName', {
                  required: 'Prezime je obavezno',
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: formErrorMessageTriage(
                      contactSemanticFormContent.prezimeErrorMessage,
                      'Prezime može sadržavati samo slova'
                    ),
                  },
                })}
              />
              <label
                htmlFor='lastName'
                className='peer-focus:font-medium absolute text-xs text-almost-black dark:text-secondary-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                {contactSemanticFormContent.prezimeNazivStavke ?? 'Last name'}
              </label>
              {errors.lastName && <p className='text-error text-xs italic'>{errors.lastName.message}</p>}
            </div>
          </div>

          <div className='grid lg:grid-cols-2 lg:gap-6'>
            {/* Email Input */}
            <div className='relative z-0 w-full mb-5 group'>
              <input
                id='email'
                className={`form-input block py-2.5 px-0 w-full text-sm text-secondary-dark dark:text-secondary-light bg-transparent border-0 border-b-[1px] border-sutraPlaceholderClr focus:border-accent appearance-none placeholder:opacity-0 focus:placeholder:opacity-100 focus:outline-none placeholder:text-sutraPlaceholderClr placeholder:font-medium active:ring-0 focus:ring-0  peer ${
                  errors.email ? 'border-error' : 'border-sutraPlaceholderClr'
                } `}
                placeholder={contactSemanticFormContent.emailPlaceholderTekst ?? 'Email'}
                {...register('email', {
                  required: 'Email je obavezan',
                  maxLength: {
                    value: 50, // Povećana duzina za email adrese
                    message: 'Email ne smije biti duži od 50 znakova',
                  },
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: formErrorMessageTriage(
                      contactSemanticFormContent.emailErrorMessage,
                      'Molimo unesite valjan email'
                    ),
                  },
                })}
              />
              <label
                htmlFor='email'
                className='peer-focus:font-medium absolute text-xs text-almost-black dark:text-secondary-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                {contactSemanticFormContent.emailNazivStavke ?? 'Email'}
              </label>
              {errors.email && <p className='text-error text-xs italic'>{errors.email.message}</p>}
            </div>

            {/* Phone Input */}

            <Controller
              name='phone'
              control={control}
              defaultValue=''
              rules={{
                required: 'Telefon je obavezan',
                validate: (value) => {
                  const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
                  return phoneNumberPattern.test(value) || 'Unesite valjan telefonski broj';
                },
              }}
              render={({ field }) => (
                <div className='relative z-0 w-full mb-5 group'>
                  <PhoneInput
                    {...field}
                    id='phone'
                    defaultCountry='HR'
                    international
                    numberInputProps={{
                      className: `form-input block py-2.5 px-0 w-full text-sm text-secondary-dark dark:text-secondary-light bg-transparent border-0 border-b-[1px] border-sutraPlaceholderClr focus:border-accent appearance-none placeholder:opacity-0 focus:placeholder:opacity-100 focus:outline-none placeholder:text-sutraPlaceholderClr placeholder:font-medium active:ring-0 focus:ring-0  peer  flex items-center justify-start ${
                        errors.phone ? 'border-error' : 'border-sutraPlaceholderClr'
                      } `,
                      placeholder: contactSemanticFormContent.telefonPlaceholderTekst ?? 'Phone number',
                    }}
                    limitMaxLength
                    focusInputOnCountrySelection
                    placeholder={contactSemanticFormContent.telefonPlaceholderTekst ?? 'Phone number'}
                  />
                  <label
                    htmlFor='phone'
                    className='peer-focus:font-medium absolute text-xs text-almost-black dark:text-secondary-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Phone number
                  </label>
                  {errors.phone && <p className='text-error text-xs italic'>{errors.phone.message}</p>}
                </div>
              )}
            />

            {/* Bonus polja */}
            <OptionalFields />
          </div>

          <div className='w-full grid grid-cols-1 gap-5'>
            {/* Bonus selektori */}
            <div className='pt-14 pb-9 w-full grid grid-cols-1 gap-10'>
              <OptionalSelectors />
            </div>

            {/* Naslov poruke */}
            <div className='relative z-0 w-full mb-5 group'>
              <input
                type='text'
                id='messageTitle'
                {...register('messageTitle', {
                  required: 'Naslov poruke je obavezan',
                })}
                placeholder='Naslov poruke'
                className='form-input block py-2.5 px-0 w-full text-sm text-secondary-dark dark:text-secondary-light bg-transparent border-0 border-b-[1px] border-sutraPlaceholderClr focus:border-accent appearance-none placeholder:opacity-0 focus:placeholder:opacity-100 focus:outline-none placeholder:text-sutraPlaceholderClr placeholder:font-medium active:ring-0 focus:ring-0  peer'
              />

              <label
                htmlFor='messageTitle'
                className='peer-focus:font-medium absolute text-xs text-almost-black dark:text-secondary-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Naslov poruke
              </label>
              {errors.messageTitle && <p className='text-error text-xs italic mt-2'>{errors.messageTitle.message}</p>}
            </div>

            {/* Tekst poruke */}
            <div className='relative z-0 w-full mb-5 group'>
              <textarea
                id='messageBody'
                {...register('messageBody', {
                  required: 'Tekst poruke je obavezan',
                })}
                rows={4}
                placeholder='ciao'
                className='form-input block py-2.5 px-0 w-full text-sm text-secondary-dark dark:text-secondary-light bg-transparent border-0 border-b-[1px] border-sutraPlaceholderClr focus:border-accent appearance-none placeholder:opacity-0 focus:placeholder:opacity-100 focus:outline-none placeholder:text-sutraPlaceholderClr placeholder:font-medium active:ring-0 focus:ring-0  peer'
              />
              <label
                htmlFor='messageBody'
                className='peer-focus:font-medium absolute text-xs text-almost-black dark:text-secondary-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Tekst poruke
              </label>
              {errors.messageBody && <p className='text-error text-xs italic mt-2'>{errors.messageBody.message}</p>}
            </div>

            {/* First DatePicker Input */}
            <div className='w-full flex justify-between lg:flex-nowrap wrap items-center'>
              <div className='relative z-50 w-full mb-5 group'>
                <Controller
                  name='visitDate'
                  control={control}
                  defaultValue={null}
                  rules={{
                    required: 'Datum posjeta je obavezan',
                  }}
                  render={({ field }) => (
                    <div className='relative peer'>
                      <DatePicker
                        id='visitDate'
                        selected={field.value ? new Date(field.value) : null}
                        minDate={dayjs(new Date()).toDate()}
                        onChange={(date) => field.onChange(date)}
                        placeholderText={
                          contactSemanticFormContent.datepicker1.datePickerPlaceholderTekst ?? 'Odaberi datum'
                        }
                        className={`block py-2.5 px-0 w-full text-sm text-secondary-dark dark:text-secondary-light bg-transparent border-0 border-b-[1px] border-sutraPlaceholderClr focus:border-accent appearance-none placeholder:opacity-0 focus:placeholder:opacity-100 focus:outline-none placeholder:text-sutraPlaceholderClr placeholder:font-medium active:ring-0 focus:ring-0 relative peer ${
                          errors.visitDate ? 'border-error' : 'border-sutraPlaceholderClr'
                        } `}
                      />
                      <label
                        htmlFor='visitDate'
                        className='peer-focus:font-medium absolute text-xs text-almost-black dark:text-secondary-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 transition-all ease-linear'
                      >
                        {contactSemanticFormContent.datepicker1.datePickerNazivStavke ?? 'Visit date'}
                      </label>
                    </div>
                  )}
                />
                {errors.visitDate && <p className='text-error text-xs italic'>{errors.visitDate.message}</p>}
              </div>

              {/* Second DatePicker Input */}
              <div className='relative z-50 w-full mb-5 group'>
                <Controller
                  name='endDate'
                  control={control}
                  defaultValue={null}
                  rules={{
                    required: 'Krajnji datum je obavezan',
                  }}
                  render={({ field }) => (
                    <div className='w-full'>
                      <DatePicker
                        id='endDate'
                        selected={field.value ? new Date(field.value) : null}
                        minDate={dayjs(new Date()).toDate()}
                        onChange={(date) => field.onChange(date)}
                        placeholderText={
                          contactSemanticFormContent.datepicker2.datePickerPlaceholderTekst ?? 'Odaberi datum'
                        }
                        className={`block py-2.5 px-0 w-full text-sm text-secondary-dark dark:text-secondary-light bg-transparent border-0 border-b-[1px] border-sutraPlaceholderClr focus:border-accent appearance-none placeholder:opacity-0 focus:placeholder:opacity-100 focus:outline-none placeholder:text-sutraPlaceholderClr placeholder:font-medium active:ring-0 focus:ring-0 relative peer ${
                          errors.endDate ? 'border-error' : 'border-sutraPlaceholderClr'
                        } `}
                      />
                      <label
                        htmlFor='endDate'
                        className='peer-focus:font-medium absolute text-xs text-almost-black dark:text-secondary-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                      >
                        {contactSemanticFormContent.datepicker2.datePickerNazivStavke ?? 'End date'}
                      </label>
                    </div>
                  )}
                />

                {errors.endDate && <p className='text-error text-xs italic'>{errors.endDate.message}</p>}
              </div>
            </div>

            {/* File Upload Input */}
            <div className='relative z-0 w-full mb-5 group'>
              {isClient && (
                <div>
                  <lr-config
                    ctx-name='fileUpload'
                    pubkey={uCapiKey}
                    sourceList='local, url, camera, dropbox'
                  ></lr-config>
                  <lr-file-uploader-regular ctx-name='fileUpload' class='uc-light'></lr-file-uploader-regular>
                  <lr-upload-ctx-provider ctx-name='fileUpload' ref={setCtxProviderRef}></lr-upload-ctx-provider>

                  <label
                    htmlFor='fileUpload'
                    className='peer-focus:font-medium absolute text-xs text-almost-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Upload File (optional)
                  </label>
                </div>
              )}
              {files.map((file) => (
                <div key={file.uuid}>
                  <img
                    // className={st.previewImage}
                    key={file.uuid}
                    src={`${file.cdnUrl}/-/preview/-/resize/x400/`}
                    width='200'
                    height='200'
                    alt={file.fileInfo.originalFilename || ''}
                    title={file.fileInfo.originalFilename || ''}
                  />

                  <p className={'st.previewData'}>{file.fileInfo.originalFilename}</p>
                  {/* <p className={"st.previewData"}>{formatSize(file.fileInfo.size)}</p> */}
                </div>
              ))}
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className='flex w-full flex-col gap-2'>
              <div className='relative z-0 w-full group'>
                <label className='inline-flex items-center'>
                  <Controller
                    name='terms'
                    control={control}
                    defaultValue={false}
                    rules={{ required: 'Morate se složiti sa uvjetima' }}
                    render={({ field }) => (
                      <input
                        type='checkbox'
                        id='terms'
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                        className='custom-radio'
                      />
                    )}
                  />
                  <span className='ml-2 text-xs'>
                    {contactSemanticFormContent.uvjetiCheckmark ?? 'Slažem se sa uvjetima'}
                  </span>
                </label>
                {errors.terms && <p className='text-error text-xs italic'>{errors.terms.message}</p>}
              </div>

              <div className='relative z-0 w-full group'>
                <label className='inline-flex items-center'>
                  <Controller
                    name='contactTerms'
                    control={control}
                    defaultValue={false}
                    rules={{ required: 'Morate se složiti sa uvjetima' }}
                    render={({ field }) => (
                      <input
                        type='checkbox'
                        id='contactTerms'
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                        className='custom-radio'
                      />
                    )}
                  />
                  <span className='ml-2 text-xs'>
                    {contactSemanticFormContent.checkmarkBonusPolje ?? 'Slažem se sa uvjetima'}
                  </span>
                </label>
                {errors.contactTerms && <p className='text-error text-xs italic'>{errors.contactTerms.message}</p>}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='mt-4 bg-secondary-dark py-2 px-12 text-base text-white rounded-sutraContactFormButton hover:bg-blue-700'
          >
            {contactSemanticFormContent.submitButtonText ?? 'Send message'}
          </button>
        </form>

        {/* <form action=''>
          {' '}
          <div>
            <lr-config
              ctx-name='fileUpload'
              // pubkey='a6ca334c3520777c0045'
              pubkey={uCapiKey}
              sourceList='local, url, camera, dropbox'
            ></lr-config>
            <lr-file-uploader-regular ctx-name='fileUpload' class='uc-light'></lr-file-uploader-regular>
            <lr-upload-ctx-provider ctx-name='fileUpload' ref={ctxProviderRef}></lr-upload-ctx-provider>
          </div>
        </form> */}
      </div>
    </section>
  );
};

export default PageContent;
