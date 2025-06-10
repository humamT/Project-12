// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { LanguageProvider } from './context/LanguageContext.jsx'; // <-- 1. Import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>  {/* <-- 2. Wrap App */}
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)