import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import 'typeface-poppins';

import ThemeProvider from './context/theme';
import GlobalStyle from './styles/global';

import Header from './components/header';
import Sidebar from './components/sidebar';

import { Container } from './styles';

const App = () => {

  return (
    <ThemeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Sidebar />
        <Container>
          <Header />
          <Routes />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
