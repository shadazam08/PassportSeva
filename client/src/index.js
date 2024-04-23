import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import Routes from './Pages/Routes/Routes';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Routes />
  </StrictMode>
);