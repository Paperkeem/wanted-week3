import React from 'react';
import ReactDOM from 'react-dom/client';
import { DataProvider } from './contexts/DataContext';
import './index.css';
import Main from './page/Main';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DataProvider>
    <Main />
  </DataProvider>
);

reportWebVitals();