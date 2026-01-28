import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App.tsx';
import { UnitsProvider } from './contexts/units/Units.provider.tsx';
import { RactQueryClientProvider } from './tanstack/react-query.config';

import './reset.css';
import './index.css';
import { theme } from './theme.styles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RactQueryClientProvider>
        <UnitsProvider>
          <App />
        </UnitsProvider>
      </RactQueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
);
