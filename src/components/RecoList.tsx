import React from 'react';
import { Data } from '../types/type';

type RProps = { data: Data, keyword: string }

export default function RecoList({ data: {sickCd, sickNm}, keyword } : RProps) {
  return sickNm.includes(keyword) ? (
    <li className='hover:bg-blue-100'>
      {sickNm.split(keyword)[0]}
      <span className='font-extrabold text-blue-900'>{keyword}</span>
      {sickNm.split(keyword)[1]}
    </li>
  ) : (
    <li>일치하는 결과가 없습니다.</li>  
  );
}

