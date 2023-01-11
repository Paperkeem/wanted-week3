import React from 'react';
import { SProps } from '../types/type.d'

export default function Search({ keyword, handleChange ,handleFocus }: SProps) {

  return (
    <section>
      <form className='flex flex-row mb-5'>
        <input
          type="text"
          className='basis-10/12 text-3xl p-5 px-5 rounded-l-full'
          onChange={handleChange}
          onFocus={handleFocus}
          value={keyword || ''} />
        <button
          className='p-3 basis-2/12 text-center bg-blue-700 hover:bg-blue-900 
          rounded-r-full text-white text-2xl font-bold'
        >검색</button>
        </form>
      </section>
  );
}

