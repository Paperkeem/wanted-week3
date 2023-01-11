import React from 'react';
import { useData } from '../contexts/DataContext';
import { RProps } from '../types/type';
import RecoList from './RecoList';

export default function Recommend({ keyword, setKeyword }: RProps) {
  const { sickData } = useData();
  const keyItem = sickData?.filter((data) => data.sickNm.includes(keyword));

  return (
    <ul className='bg-white rounded-2xl p-10 grid gap-5 text-lg h-96 overflow-y-scroll'>
      <span className='text-md text-gray-400'>추천 검색어</span>
      <ul></ul>
      {keyItem && keyItem.map((data, idx) => (
        <RecoList
          key={idx}
          data={data}
          keyword={keyword}
          setKeyword={setKeyword}
        />
      ))}
    </ul>
  );
}

