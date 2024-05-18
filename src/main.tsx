import GlobalStyle from '@styles/GlobalStyle.ts';
import theme from '@styles/theme.ts';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </>
);
