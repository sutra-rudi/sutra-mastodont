'use client';

import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import DatePicker from 'react-datepicker';

interface ContactPageInterface {
  personsData: any;
  sectorsData: any;
  lang: any;
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
}

const PageContent = ({ personsData, sectorsData, lang }: ContactPageInterface) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('DATA', data);
  };

  return (
    <section>
      <form className='max-w-md mx-auto' onSubmit={handleSubmit(onSubmit)}>
        {/* Email Input */}
        <div className='relative z-0 w-full mb-5 group'>
          <input
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none ${
              errors.email ? 'border-red-500' : 'border-gray-300'
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

        {/* First and Last Name Inputs */}
        <div className='grid md:grid-cols-2 md:gap-6'>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='text'
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none ${
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
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none ${
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
                } peer`}
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
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none z-50 ${
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
          <legend className='text-sm text-gray-500 dark:text-gray-400 mb-2'>Type of Excursion</legend>
          <div className='flex flex-col space-y-2'>
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
              <span className='ml-2'>City Tour</span>
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
              <span className='ml-2'>Nature Hike</span>
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
              <span className='ml-2'>Cultural Experience</span>
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
              <span className='ml-2'>Adventure</span>
            </label>
          </div>
          {errors.excursionType && <p className='text-red-500 text-xs italic'>{errors.excursionType.message}</p>}
        </fieldset>

        {/* Optional Message Input */}
        <div className='relative z-0 w-full mb-5 group'>
          <textarea
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none ${
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

        {/* Submit Button */}
        <button type='submit' className='mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
          Submit
        </button>
      </form>
    </section>
  );
};

export default PageContent;
