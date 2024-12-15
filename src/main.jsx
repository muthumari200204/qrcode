import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './components/Qrcode.css';
import { Qrcode } from './components/Qrcode.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Qrcode /> 
  </StrictMode>
); 

