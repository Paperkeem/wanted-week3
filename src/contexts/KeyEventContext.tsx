import { createContext, useContext, useState } from 'react';

type Key = {
  index: number,
  maxIndex: number|undefined,
  setIndex: (a: number) => void,
  setMaxIndex: (a: number|undefined) => void,
}

const KeyEventContext = createContext<Key | null>(null);

export function KeyEventProvider({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState<number|undefined>(-1);

  return (
    <KeyEventContext.Provider value={{ index, maxIndex, setIndex, setMaxIndex }}>
      {children}
    </KeyEventContext.Provider>
  )
}

export const useKeyEvent = () => {
  const state = useContext(KeyEventContext);
  if (!state) throw new Error('Cannot find DataProvider');
  return state
}