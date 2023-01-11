import { createContext, useContext, useState } from 'react';
import { Keybord } from '../types/type';

const KeyEventContext = createContext<Keybord | null>(null);

export function KeyEventProvider({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState<number | undefined>(-1);
  
  const [isKeyboardOn, setIsKeyboardOn] = useState(false);
  const [recoKeyword, setRecoKeyword] = useState('');

  return (
    <KeyEventContext.Provider value={{
      index, maxIndex, setIndex, setMaxIndex,
      isKeyboardOn, recoKeyword, setIsKeyboardOn, setRecoKeyword
    }}>
      {children}
    </KeyEventContext.Provider>
  )
}

export const useKeyEvent = () => {
  const state = useContext(KeyEventContext);
  if (!state) throw new Error('Cannot find DataProvider');
  return state
}