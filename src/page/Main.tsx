import React, { useState } from 'react';
import Recommend from '../components/Recommend';
import Search from '../components/Search';
import { useData } from '../contexts/DataContext';
import { EventFunc } from '../types/type.d'

export default function Main(): React.ReactElement {
  const [keyword, setKeyword] = useState('');
  const [isRecomend, setIsRecomend] = useState(false);

  const handleChange: EventFunc = e => setKeyword(e.target.value);
  const handleFocus: () => void = () => { setIsRecomend(true) };

  const { sickData } = useData();
  console.log(sickData);

  return (
    <main>
      <Search
        keyword={keyword}
        handleChange={handleChange}
        handleFocus={handleFocus}
      />
      {isRecomend && <Recommend keyword={keyword} />}
    </main>
  );
}

