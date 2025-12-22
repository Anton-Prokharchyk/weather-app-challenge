import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

import './reset.css';
import './index.css';
import { RactQueryClientProvider } from './tanstack/react-query.config';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RactQueryClientProvider>
      <App />
    </RactQueryClientProvider>
  </StrictMode>,
);
