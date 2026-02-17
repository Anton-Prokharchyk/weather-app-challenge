import { Header } from '@/components/header/Header.component';
import { Main } from './components/main/Main.component';
import { ApiErrorFallback } from './components/api-error/Api-error.fallback';
import { ErrorBoundary } from './components/api-error/Api-error.boundary';

import { AppContainer } from './app.styles';

function App() {
  return (
    <AppContainer>
      <Header />
      <ErrorBoundary fallback={<ApiErrorFallback />}>
        <Main />
      </ErrorBoundary>
    </AppContainer>
  );
}

export default App;
