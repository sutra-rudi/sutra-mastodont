'use client';

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

interface ContactPageInterface {
  personsData: any;
  sectorsData: any;
  lang: any;
  contactSemantics: any;
}

interface FormValues {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  company: string;
  visitDate: Date | null;
  excursionType: string;
  message?: string;
  terms: boolean;
}

const PageContent = ({ personsData, sectorsData, lang, contactSemantics }: ContactPageInterface) => {
  const pageRouter = useRouter();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const [submit, submitting] = useFormspark({
    formId: 'qzYhzVkrj',
  });

  console.log('SEM', contactSemantics);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log('DATA', data);

    await submit({ data });

    await pageRouter.push(`/${lang}/submit-success`);
  };

  return (
    <section className='w-full h-full'>
      <div className='w-full flex items-center justify-center'>
        <h2 className='text-h2 leading-normal text-primary-dark font-bold'>Contact Us</h2>
      </div>
      <div className='flex mx-auto max-w-sutraContactUsTempFormWidth w-full justify-between items-start lg:flex-nowrap flex-wrap lg:px-0 px-3 bg-white gap-12 lg:pr-12'>
        <div className='w-full h-full p-3 max-w-lg self-stretch'>
          <div className='bg-secondary-dark w-full h-full rounded-sutraContactCardBorderRadius'>
            {/* /// */}
            <div className='grid items-start w-full gap-28 pb-9 pt-10 pl-10'>
              <div className=''>
                <h3 className='text-white'>Contact information</h3>
                <p className='text-secondary-light'>Say something to start a live chat!</p>
              </div>

              <div className='grid grid-cols-1 items-start gap-12'>
                <div className='flex items-center justify-start gap-6'>
                  <PhoneIcon className='text-white text-base shrink-0' />
                  <span className='text-white text-base'>+1012 3456 789</span>
                </div>
                <div className='flex items-center justify-start gap-6'>
                  <MailIcon className='text-white text-base shrink-0' />
                  <span className='text-white text-base'>demo@gmail.com</span>
                </div>
                <div className='flex items-center justify-start gap-6'>
                  <LocationIcon className='text-white text-base shrink-0' />
                  <span className='text-white text-base  text-balance'>
                    132 Dartmouth Street Boston, Massachusetts 02156 United States
                  </span>
                </div>
              </div>

              <div className='flex items-center gap-6'>
                <div className=''>
                  <div className='w-8 h-8 bg-accent rounded-full flex items-center justify-center'>
                    <TwitterIcon className='text-base text-white' />
                  </div>
                </div>
                <div className=''>
                  <div className='w-8 h-8 bg-accent rounded-full flex items-center justify-center'>
                    <InstagramIcon className='text-base text-white' />
                  </div>
                </div>
                <div className=''>
                  <div className='w-8 h-8 bg-accent rounded-full flex items-center justify-center'>
                    <DiscordIcon className='text-base text-white' />
                  </div>
                </div>
              </div>
            </div>
            {/* /// */}
          </div>
        </div>

        <form className='max-w-3xl w-full pt-14 pb-9' onSubmit={handleSubmit(onSubmit)}>
          {/* First and Last Name Inputs */}
          <div className='grid lg:grid-cols-2 lg:gap-6'>
            <div className='relative z-0 w-full mb-5 group'>
              <input
                type='text'
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                } peer`}
                placeholder=' '
                {...register('firstName', { required: 'Ime je obavezno' })}
              />
              <label
                htmlFor='firstName'
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                First name
              </label>
              {errors.firstName && <p className='text-red-500 text-xs italic'>{errors.firstName.message}</p>}
            </div>
            <div className='relative z-0 w-full mb-5 group'>
              <input
                type='text'
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                } peer`}
                placeholder=' '
                {...register('lastName', { required: 'Prezime je obavezno' })}
              />
              <label
                htmlFor='lastName'
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Last name
              </label>
              {errors.lastName && <p className='text-red-500 text-xs italic'>{errors.lastName.message}</p>}
            </div>
          </div>

          <div className='grid lg:grid-cols-2 lg:gap-6'>
            {/* Email Input */}
            <div className='relative z-0 w-full mb-5 group'>
              <input
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none ${
                  errors.email ? 'border-red-500' : 'border-gray-300 '
                } peer`}
                placeholder=''
                {...register('email', {
                  required: 'Email je obavezan',
                  maxLength: {
                    value: 20,
                    message: 'Email ne smije biti duži od 20 znakova',
                  },
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Molimo unesite valjan email',
                  },
                })}
              />
              <label
                htmlFor='email'
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Email address
              </label>
              {errors.email && <p className='text-red-500 text-xs italic'>{errors.email.message}</p>}
            </div>

            {/* Phone Input */}
            <div className='relative z-0 w-full mb-5 group'>
              <Controller
                name='phone'
                control={control}
                defaultValue=''
                rules={{
                  required: 'Telefon je obavezan',
                  validate: (value) => {
                    if (!value) return 'Telefon je obavezan';
                    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
                    return phoneNumberPattern.test(value) || 'Unesite valjan telefonski broj';
                  },
                }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    defaultCountry='US'
                    international
                    placeholder='Phone number'
                    className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } peer flex`}
                  />
                )}
              />
              <label
                htmlFor='phone'
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Phone number
              </label>
              {errors.phone && <p className='text-red-500 text-xs italic'>{errors.phone.message}</p>}
            </div>
          </div>
          {/* Visit Date Input */}
          <div className='relative z-50 w-full mb-5 group'>
            <Controller
              name='visitDate'
              control={control}
              defaultValue={null}
              rules={{
                required: 'Datum posjeta je obavezan',
              }}
              render={({ field }) => (
                <DatePicker
                  selected={field.value ? new Date(field.value) : null}
                  onChange={(date: Date | null) => field.onChange(date)}
                  placeholderText='Select visit date'
                  className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none z-50 focus:outline-none ${
                    errors.visitDate ? 'border-red-500' : 'border-gray-300'
                  } peer`}
                />
              )}
            />
            <label
              htmlFor='visitDate'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Visit Date
            </label>
            {errors.visitDate && <p className='text-red-500 text-xs italic'>{errors.visitDate.message}</p>}
          </div>

          {/* Excursion Type Radio Buttons */}
          <fieldset className='relative z-0 w-full mb-5 group'>
            <legend className='text-sm text-secondary-dark font-semibold dark:text-gray-400 mb-2'>
              Select Subject?
            </legend>
            <div className='flex  space-x-2'>
              <label className='inline-flex items-center'>
                <Controller
                  name='excursionType'
                  control={control}
                  defaultValue=''
                  rules={{ required: 'Vrsta izleta je obavezna' }}
                  render={({ field }) => (
                    //@ts-ignore
                    <input
                      type='radio'
                      value='cityTour'
                      checked={field.value === 'cityTour'}
                      onChange={() => field.onChange('cityTour')}
                      className='form-radio text-blue-600'
                    />
                  )}
                />
                <span className='ml-2 text-xs text-secondary-dark'>General Inquiry</span>
              </label>
              <label className='inline-flex items-center'>
                <Controller
                  name='excursionType'
                  control={control}
                  defaultValue=''
                  rules={{ required: 'Vrsta izleta je obavezna' }}
                  render={({ field }) => (
                    <input
                      type='radio'
                      value='natureHike'
                      checked={field.value === 'natureHike'}
                      onChange={() => field.onChange('natureHike')}
                      className='form-radio text-blue-600'
                    />
                  )}
                />
                <span className='ml-2 text-xs text-secondary-dark'>General Inquiry</span>
              </label>
              <label className='inline-flex items-center'>
                <Controller
                  name='excursionType'
                  control={control}
                  defaultValue=''
                  rules={{ required: 'Vrsta izleta je obavezna' }}
                  render={({ field }) => (
                    <input
                      type='radio'
                      value='culturalExperience'
                      checked={field.value === 'culturalExperience'}
                      onChange={() => field.onChange('culturalExperience')}
                      className='form-radio text-blue-600'
                    />
                  )}
                />
                <span className='ml-2 text-xs text-secondary-dark'>General Inquiry</span>
              </label>
              <label className='inline-flex items-center'>
                <Controller
                  name='excursionType'
                  control={control}
                  defaultValue=''
                  rules={{ required: 'Vrsta izleta je obavezna' }}
                  render={({ field }) => (
                    <input
                      type='radio'
                      value='adventure'
                      checked={field.value === 'adventure'}
                      onChange={() => field.onChange('adventure')}
                      className='form-radio text-blue-600'
                    />
                  )}
                />
                <span className='ml-2 text-xs text-secondary-dark'>General Inquiry</span>
              </label>
            </div>
            {errors.excursionType && <p className='text-red-500 text-xs italic'>{errors.excursionType.message}</p>}
          </fieldset>

          {/* Optional Message Input */}
          <div className='relative z-0 w-full mb-5 group'>
            <textarea
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } peer`}
              placeholder=' '
              {...register('message')}
            />
            <label
              htmlFor='message'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Message (optional)
            </label>
            {errors.message && <p className='text-red-500 text-xs italic'>{errors.message.message}</p>}
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className='relative z-0 w-full mb-5 group'>
            <label className='inline-flex items-center'>
              <Controller
                name='terms'
                control={control}
                defaultValue={false}
                rules={{ required: 'Morate se složiti sa uvjetima' }}
                render={({ field }) => (
                  <input
                    type='checkbox'
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                    className='form-checkbox text-blue-600'
                  />
                )}
              />
              <span className='ml-2'>Slažem se sa uvjetima</span>
            </label>
            {errors.terms && <p className='text-red-500 text-xs italic'>{errors.terms.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='mt-4  bg-secondary-dark py-2 px-12 text-base text-white rounded-sutraContactFormButton hover:bg-blue-700'
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default PageContent;
