import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';  // importamos CSS Bootstrap global
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <App />
  </StrictMode>,
);
