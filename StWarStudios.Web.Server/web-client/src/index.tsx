import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './i18n/i8n';
import { TranslationProvider } from './Components/translation-provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <TranslationProvider>
        <App />
      </TranslationProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
