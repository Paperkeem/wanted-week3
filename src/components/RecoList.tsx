import React, { useEffect } from 'react';
import { useKeyEvent } from '../contexts/KeyEventContext';
import { RLProps } from '../types/type';

export default function RecoList({ data: { sickNm }, keyword, isFocus, setKeyword }: RLProps) {
  const { setRecoKeyword, index } = useKeyEvent();
  
  useEffect(() => {
    if (isFocus) setRecoKeyword(sickNm);
  }, [index])

  return sickNm.includes(keyword) ? (
    <li
      onClick={() => setKeyword(sickNm)}
      className={isFocus ? 'bg-blue-100' : ''}>
      {sickNm.split(keyword)[0]}
      <span className='font-extrabold text-blue-900'>{keyword}</span>
      {sickNm.split(keyword)[1]}
    </li>
  ) : null ;
}

