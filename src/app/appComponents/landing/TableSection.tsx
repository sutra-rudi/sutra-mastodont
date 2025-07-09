'use client';

import React from 'react';
import { parseTablica } from '@/app/utils/parseTable';
import tableData from '../../staticData/tableData.json';

const tablicaNode = tableData.data.allTablica.edges[0].node;

// Parsiranje za HR i ENG
const tablicaHr = parseTablica(tablicaNode, 'hr');
const tablicaEng = parseTablica(tablicaNode, 'eng');

interface TableSectionProps {
  currentLang: any;
}

export default function TableSection({ currentLang }: TableSectionProps) {
  const tablica = currentLang === 'eng' ? tablicaEng : tablicaHr;

  if (!tablica) return <p className='text-red-600'>Greška pri dohvaćanju tablice.</p>;

  return (
    <section className='-mt--desktop---4xl px-4 py-8'>
      <div className='max-w-4xl mx-auto bg-white p-6 border shadow rounded-xl'>
        <header className='mb-6 text-center'>
          {tablica.nadnaslov && <p className='text-sm text-gray-500 uppercase'>{tablica.nadnaslov}</p>}
          {tablica.naslov && <h2 className='text-2xl font-semibold'>{tablica.naslov}</h2>}
        </header>

        <div className='overflow-x-auto'>
          <table className='w-full text-sm text-left border-collapse border-none outline-none appearance-none'>
            <thead>
              <tr className='bg-gray-100'>
                {tablica.kolumne.map((col, idx) => (
                  <th key={idx} className='border px-4 py-2 rounded bg-primarna-svijetla'>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className='border-none '>
              {tablica.redovi.map((row, rowIdx) => (
                <tr key={rowIdx} className='even:bg-gray-50 border-none'>
                  {row.vrijednosti.map((val, colIdx) => (
                    <td key={colIdx} className='border px-4 py-2 text-gray-700 font-medium'>
                      {val || '—'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
