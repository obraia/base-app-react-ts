import React, { useState } from 'react';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';


import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import userPersistedState from './utils/userPersistedState';

function App() {
  const [theme, setTheme] = userPersistedState('themeBeTheHope', light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
