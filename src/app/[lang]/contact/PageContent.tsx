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
  visitDate: Date | null; // Add date field
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
      <div className='max-w-[1225px] mx-auto my-8'>{/* Your existing content for personsData and sectorsData */}</div>

      <form className='max-w-md mx-auto' onSubmit={handleSubmit(onSubmit)}>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } peer`}
            placeholder=' '
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

        <div className='relative z-0 w-full mb-5 group'>
          <Controller
            name='visitDate'
            control={control}
            defaultValue={null}
            rules={{
              required: 'Datum posjeta je obavezan',
            }}
            render={({ field }) => (
              //@ts-ignore
              <DatePicker
                {...field}
                selected={field.value}
                onChange={(date: Date | null) => field.onChange(date)}
                placeholderText='Select visit date'
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none ${
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

        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none ${
              errors.company ? 'border-red-500' : 'border-gray-300'
            } peer`}
            placeholder=' '
            {...register('company', { required: 'Kompanija je obavezna' })}
          />
          <label
            htmlFor='company'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Company (Ex. Google)
          </label>
          {errors.company && <p className='text-red-500 text-xs italic'>{errors.company.message}</p>}
        </div>

        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default PageContent;
