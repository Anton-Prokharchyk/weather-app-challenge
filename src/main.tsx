import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { UnitsProvider } from './contexts/units/Units.provider.tsx';
import { RactQueryClientProvider } from './tanstack/react-query.config';

import './reset.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RactQueryClientProvider>
      <UnitsProvider>
        <App />
      </UnitsProvider>
    </RactQueryClientProvider>
  </StrictMode>,
);
