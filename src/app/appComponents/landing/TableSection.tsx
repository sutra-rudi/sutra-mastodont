'use client';

import React from 'react';
import { parseTablica } from '@/app/utils/parseTable';
import tableData from '../../staticData/tableData.json';

const tablicaNode = tableData.data.allTablica.edges[0].node;

// Parsiranje za HR i ENG
const tablicaHr = parseTablica(tablicaNode, 'hr');
const tablicaEng = parseTablica(tablicaNode, 'eng');

interface TableSection {
  currentLang: any;
}

export default function TableSection({ currentLang }: TableSection) {
  if (!tablicaHr) return <p className='text-red-600'>Greška pri dohvaćanju tablice.</p>;

  return (
    <section className='-mt--desktop---4xl px-4 py-8'>
      <div className='max-w-4xl mx-auto bg-white p-6 border shadow rounded-xl'>
        <header className='mb-6 text-center'>
          {tablicaHr.nadnaslov && <p className='text-sm text-gray-500 uppercase'>{tablicaHr.nadnaslov}</p>}
          {tablicaHr.naslov && <h2 className='text-2xl font-semibold'>{tablicaHr.naslov}</h2>}
        </header>

        <div className='overflow-x-auto'>
          <table className='w-full text-sm text-left border-collapse'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='border px-4 py-2'>Karakteristika</th>
                {tablicaHr.kolumne.map((col, idx) => (
                  <th key={idx} className='border px-4 py-2'>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tablicaHr.redovi.map((row, idx) => (
                <tr key={idx} className='even:bg-gray-50'>
                  <td className='border px-4 py-2 font-medium text-gray-800'>{row.nazivReda}</td>
                  {row.vrijednosti.map((val, i) => (
                    <td key={i} className='border px-4 py-2 text-gray-700'>
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
