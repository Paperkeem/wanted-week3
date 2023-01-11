import React from 'react';
import { useData } from '../contexts/DataContext';
import { Data, SProps } from '../types/type';
import RecoList from './RecoList';

export default function Recommend({ keyword }: SProps) {
  const { sickData } = useData();
  
  return (
    <ul className='bg-white rounded-2xl p-10 grid gap-5 text-lg h-96 overflow-y-scroll'>
      <span className='text-md text-gray-400'>추천 검색어</span>
      {keyword
        ? sickData.map((data, idx) => {
          if (data.sickNm.includes(keyword)) {
            return <RecoList
              key={idx}
              data={data}
              keyword={keyword} />
          } else {
            return undefined
          }
          })
        : <li>검색 결과가 존재하지 않습니다.</li>
      }
    </ul>
  );
}

