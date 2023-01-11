import { createContext, useContext, useEffect, useState } from 'react';
import { Data, Datas } from '../types/type';
import JsonApi from '../api/api';

const DataContext = createContext<Datas | null>(null);

export function DataProvider({children}: { children: React.ReactNode }) {
  const [sickData, setSickData] = useState<Data[] | []>([]);

  useEffect(() => {
    const api = new JsonApi();
    api.getAllData().then(setSickData);
  }, []);
  
  return (
    <DataContext.Provider value={{ sickData }}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  const state = useContext(DataContext);
  if (!state) throw new Error('Cannot find DataProvider');
  return state
}