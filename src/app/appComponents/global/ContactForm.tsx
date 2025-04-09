'use client';

import toast from 'react-hot-toast';
import { useFormspark } from '@formspark/use-formspark';
import { useForm } from 'react-hook-form';
import cData from '../../staticData/staticQueryData.json';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
interface Contact {
  formId: string;
  lng: string;
}

const getData = cData.data.allAdminKontaktForma.edges[0].node;

export default function ContactForm({ formId, lng }: Contact) {
  const l = getSuffixFromLang(lng);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [submit, submitting] = useFormspark({
    formId: formId,
  });

  const onSubmit = async (data: any, event: any) => {
    event.preventDefault();

    try {
      const parseClientData = {
        ['Ime osobe']: data.name,
        ['Email adresa']: data.email,
        ['Poruka']: data.message,
      };

      await toast.promise(submit({ ...parseClientData }), {
        loading: 'Šaljemo vašu poruku...',
        success: 'Poruka je uspješno poslana!',
        error: 'Došlo je do problema. Pokušajte ponovno.',
      });

      reset();
    } catch (error) {
      console.error('Error sending the message:', error);
      toast.error('Ups! Nešto je pošlo po zlu. Pokušajte kasnije.');
    }
  };

  const onError = async (errors: any) => {
    Object.entries(errors).forEach(([field, error]) => {
      //@ts-ignore
      return toast.error(`Greška u polju ${field}: ${error.message}`);
    });
  };

  //${mPlusFont.className}

  return (
    <div className='w-full max-w-screen-sm mx-auto'>
      <p className='md:text-text-base-small-desktop text-text-base-small-mobiletablet text-accent-boja lg:mb-desktop-naslov-nadnaslov md:mb-tablet-naslov-nadnaslov mb-mobile-naslov-nadnaslov'>
        {
          //@ts-ignore
          getData[`adminKontaktFormaTekstovi${l}`]?.[`kontaktiBazaTekstova${l}`].uvodniTekstoviZaKontakteGrupaPolja
            .nadnaslovpodnaslovUKontaktima
        }
      </p>
      <h4
        className={` lg:text-h4-desktop md:text-h4-tablet text-h4-mobile lg:mb-desktop-tekst-naslov md:mb-tablet-tekst-naslov mb-mobile-tekst-naslov`}
      >
        {
          //@ts-ignore
          getData[`adminKontaktFormaTekstovi${l}`]?.[`kontaktiBazaTekstova${l}`].uvodniTekstoviZaKontakteGrupaPolja
            .naslovUKontaktima
        }
      </h4>
      <p className='md:text-text-base-base-desktop text-text-base-base-mobiletablet mb-4'>
        {
          //@ts-ignore
          getData[`adminKontaktFormaTekstovi${l}`]?.[`kontaktiBazaTekstova${l}`].uvodniTekstoviZaKontakteGrupaPolja
            .uvodniTekstZaKontakte12Recenice
        }
      </p>
      <form onSubmit={handleSubmit(onSubmit, onError)} className='w-full  z-40'>
        <div className='mb-4 w-full group'>
          <label
            htmlFor='name'
            className='mb-2 block text-sm font-medium text-text-light-mode group-focus-within:text-primarna-svijetla transition-all ease-out duration-200 '
          >
            {
              //@ts-ignore
              getData[`adminKontaktFormaTekstovi${l}`]?.[`kontaktiBazaTekstova${l}`].tekstoviStavkiUKontaktima
                .imeNazivStavke
            }
          </label>
          <input
            type='text'
            id='name'
            className={`block p-2.5 w-full text-sm text-almost-black outline-sekundarna-tamna outline-none border-none outline-1 focus:ring-0 active:ring-0 focus:placeholder:opacity-0 transition-all ease-in-out placeholder:transition-all placeholder:ease-in-out rounded ${
              errors.name && 'border-red-500'
            }`}
            placeholder={
              //@ts-ignore
              getData[`adminKontaktFormaTekstovi${l}`]?.[`kontaktiBazaTekstova${l}`].tekstoviStavkiUKontaktima
                .imePlaceholderTekst
            }
            {...register('name', {
              required:
                //@ts-ignore
                getData[`adminKontaktFormaTekstovi${l}`]?.[`kontaktiBazaTekstova${l}`].tekstoviStavkiUKontaktima
                  .imeErrorMessage,
            })}
          />
          {/* @ts-ignore */}
          {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
        </div>

        <div className='mb-4 w-full group'>
          <label
            htmlFor='email'
            className='mb-2 block text-sm font-medium text-text-light-mode group-focus-within:text-primarna-svijetla transition-all ease-out duration-200 '
          >
            {
              //@ts-ignore
              getData[`adminKontaktFormaTekstovi${l}`]?.[`kontaktiBazaTekstova${l}`].tekstoviStavkiUKontaktima
                .emailNazivStavke
            }
          </label>
          <input
            type='email'
            id='email'
            className={`block p-2.5 w-full text-sm text-almost-black outline-sekundarna-tamna outline-none border-none outline-1 focus:ring-0 active:ring-0 focus:placeholder:opacity-0 transition-all ease-in-out placeholder:transition-all placeholder:ease-in-out rounded ${
              errors.name && 'border-red-500'
            }`}
            placeholder={
              //@ts-ignore
              getData[`adminKontaktFormaTekstovi${l}`]?.[`kontaktiBazaTekstova${l}`].tekstoviStavkiUKontaktima
                .emailPlaceholderTekst
            }
            {...register('email', {
              required:
                //@ts-ignore
                getData[`adminKontaktFormaTekstovi${l}`]?.[`kontaktiBazaTekstova${l}`].tekstoviStavkiUKontaktima
                  .emailErrorMessage,
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                message:
                  //@ts-ignore
                  getData[`adminKontaktFormaTekstovi${l}`]?.[`kontaktiBazaTekstova${l}`].tekstoviStavkiUKontaktima
                    .emailErrorMessage,
              },
            })}
          />
          {/* @ts-ignore */}
          {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
        </div>

        <div className='mb-4 group'>
          <label
            htmlFor='message'
            className='mb-2 block text-sm font-medium text-text-light-mode group-focus-within:text-primarna-svijetla transition-all ease-out duration-200 '
          >
            {
              //@ts-ignore
              getData[`adminKontaktFormaTekstovi${l}`]?.[`kontaktiBazaTekstova${l}`].tekstoviStavkiUKontaktima
                .porukaNazivStavke
            }
          </label>
          <textarea
            id='message'
            rows={4}
            className={`block p-2.5 w-full text-sm text-almost-black outline-sekundarna-tamna outline-none border-none outline-1 focus:ring-0 active:ring-0 focus:placeholder:opacity-0 transition-all ease-in-out placeholder:transition-all placeholder:ease-in-out rounded ${
              errors.name && 'border-red-500'
            }`}
            placeholder={
              //@ts-ignore
              getData[`adminKontaktFormaTekstovi${l}`]?.[`kontaktiBazaTekstova${l}`].tekstoviStavkiUKontaktima
                .porukaPlaceholderTekst
            }
            {...register('message', {
              required:
                //@ts-ignore
                getData[`adminKontaktFormaTekstovi${l}`]?.[`kontaktiBazaTekstova${l}`].tekstoviStavkiUKontaktima
                  .porukaErrorMessage,
            })}
          />
          {/* @ts-ignore */}
          {errors.message && <span className='text-red-500'>{errors.message.message}</span>}
        </div>
        <div className='w-full flex items-center justify-center'>
          <button
            type='submit'
            disabled={submitting}
            className='w-full bg-prva-tamna-boja  py-4 transition-all duration-200 ease-out cursor-pointer bg-primarna-tamna text-almost-white hover:bg-primarna-svijetla rounded'
          >
            Pošalji poruku
          </button>
        </div>
      </form>
    </div>
  );
}
