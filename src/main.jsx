import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';

import IndexPage from './pages/index';

import './scss/simple-normalize.scss';
import './scss/base.scss';

import './components/Header/Header.scss';
import './components/QrCodeGenerator/QrCodeGenerator.scss';
import './components/Title/Title.scss';
import './components/QrCodeScanner/QrCodeScanner.scss';
import './components/GenerateHistory/GenerateHistory.scss';
import './components/ScanHistory/ScanHistory.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
    <Header />
    <main className="main">
     <IndexPage />
    </main>
   </BrowserRouter>
  </StrictMode>,
);