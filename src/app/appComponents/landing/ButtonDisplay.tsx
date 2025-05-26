import React from 'react';
import {
  LinkAccent,
  LinkSvjetli,
  LinkTamni,
  PrazniAccent,
  PrazniSvjetli,
  PrazniTamni,
  PuniAccent,
  PuniSvjetli,
  PuniTamni,
  SpecialSvjetli,
  SpecialTamni,
} from '../global/Buttons';

export default function ButtonDisplay() {
  return (
    <section className='flex items-center justify-start flex-wrap gap-6 container mx-auto lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl'>
      <PuniTamni />
      <PuniSvjetli />
      <PuniAccent />
      <PrazniSvjetli />
      <PrazniTamni />
      <PrazniAccent />
      <LinkSvjetli />
      <LinkTamni />
      <LinkAccent />
      <SpecialTamni />
      <SpecialSvjetli />
    </section>
  );
}
