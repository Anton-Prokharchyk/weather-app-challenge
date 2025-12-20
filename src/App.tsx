import { Header } from '@/components/header/Header.component';
import { Main } from './components/main/Main.component';

import { AppContainer } from './app.styles';

function App() {
  return (
    <AppContainer>
      <Header />
      <Main />
    </AppContainer>
  );
}

export default App;
