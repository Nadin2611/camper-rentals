import 'modern-normalize';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import GlobalStyles from 'assets/styles/GlobalStyles';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/camper-rentals">
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
