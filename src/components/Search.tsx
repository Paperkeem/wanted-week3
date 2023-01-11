import React from 'react';
import { useKeyEvent } from '../contexts/KeyEventContext';
import { SProps } from '../types/type.d'

const ArrowDown = "ArrowDown";
const ArrowUp = "ArrowUp";
const Escape = "Escape";

export default function Search({ keyword, handleChange, handleFocus }: SProps) {
  const { index, setIndex, maxIndex, isKeyboardOn, setIsKeyboardOn, recoKeyword } = useKeyEvent();  
  
  const handleKeyArrow = (e: React.KeyboardEvent) => {
      switch (e.key) {
        case ArrowDown: //키보드 아래 키
          if (maxIndex === index + 1) setIndex(0);
          else setIndex(index + 1);
          setIsKeyboardOn(true);
          break;
          case ArrowUp: //키보드 위에 키
          if (index <= 0) setIndex(0);
          else setIndex(index - 1);
          setIsKeyboardOn(true);
          break;
          case Escape: // esc key를 눌렀을때,
          setIndex(0);
          setIsKeyboardOn(false);
          break;
      }  
  }

  return (
    <section>
      <form className='flex flex-row mb-5'>
        <input
          type="text"
          className='basis-10/12 text-xl p-5 px-8 rounded-l-full'
          onChange={handleChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyArrow}
          value={isKeyboardOn ? recoKeyword : keyword}
          placeholder='질환명을 입력해주세요'
        />
        <button
          className='p-3 basis-2/12 text-center bg-blue-700 hover:bg-blue-900 
          rounded-r-full text-white text-2xl font-bold'
        >검색</button>
        </form>
      </section>
  );
}

