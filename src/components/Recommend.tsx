import React, { useEffect } from 'react';
import { useData } from '../contexts/DataContext';
import { useKeyEvent } from '../contexts/KeyEventContext';
import { RProps } from '../types/type';
import RecoList from './RecoList';

export default function Recommend({ keyword, setKeyword }: RProps) {
  const { sickData } = useData();
  const { index, setMaxIndex } = useKeyEvent();
  const keyItem = keyword.length !== 0 ? sickData?.filter((data) => data.sickNm.includes(keyword)) : null;
  
  useEffect(() => {
    if (keyItem?.length !== 0 && keyItem?.length !== undefined) {
      setMaxIndex(keyItem?.length);
    }
  }, [keyItem, setMaxIndex]);
  
  return (
    <ul
      className='bg-white rounded-2xl p-10 grid gap-5 text-lg h-96 overflow-y-scroll'>
      <span className='text-md text-gray-400'>추천 검색어</span>
      {(keyItem?.length !== 0 && keyItem)
        ? keyItem.map((data, idx) => ( <RecoList
          key={idx}
          data={data}
          keyword={keyword}
          isFocus={index === idx ? true : false}
          setKeyword={setKeyword}
        />
        ))
        : <span className='-mt-32'>검색어가 존재하지 않습니다</span>
      }
    </ul>
  );
}

