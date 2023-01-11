import React from 'react';
import ReactDOM from 'react-dom/client';
import { DataProvider } from './contexts/DataContext';
import { KeyEventProvider } from './contexts/KeyEventContext';
import './index.css';
import Main from './page/Main';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DataProvider>
    <KeyEventProvider>
      <Main />
    </KeyEventProvider>
  </DataProvider>
);

reportWebVitals();