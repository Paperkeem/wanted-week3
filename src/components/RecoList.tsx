import React from 'react';
import { RLProps } from '../types/type';

export default function RecoList({ data: {sickCd, sickNm}, keyword, setKeyword } : RLProps) {
  return sickNm.includes(keyword) ? (
    <li
      onClick={() => setKeyword(sickNm)}
      className='hover:bg-blue-100'>
      {sickNm.split(keyword)[0]}
      <span className='font-extrabold text-blue-900'>{keyword}</span>
      {sickNm.split(keyword)[1]}
    </li>
  ) : (
    <li>일치하는 결과가 없습니다.</li>  
  );
}

