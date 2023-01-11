import React, { useState } from 'react';
import Recommend from '../components/Recommend';
import Search from '../components/Search';
import { useKeyEvent } from '../contexts/KeyEventContext';
import { EventFunc } from '../types/type.d'

export default function Main(): React.ReactElement {
  const [keyword, setKeyword] = useState('');
  const [isRecomend, setIsRecomend] = useState(false);
  const { setIsKeyboardOn } = useKeyEvent();

  const handleChange: EventFunc = (e) => {
    setKeyword(e.target.value);
    setIsKeyboardOn(false);
  };
  const handleFocus: () => void = () => setIsRecomend(true);

  return (
    <main>
      <Search
        keyword={keyword}
        handleChange={handleChange}
        handleFocus={handleFocus}
      />
      {isRecomend && <Recommend
        setKeyword={setKeyword}
        keyword={keyword} />}
    </main>
  );
}

