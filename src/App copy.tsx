import React, { useState, useContext } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';

import userPersistedState from './utils/userPersistedState';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import 'typeface-poppins';

import { Container } from './styles';

import { ReactComponent as DashboardIcon } from './assets/icons/chart-line-solid.svg';
import { ReactComponent as InventoryIcon } from './assets/icons/box-open-solid.svg';
import { ReactComponent as ProductsIcon } from './assets/icons/scanner-solid.svg';
import { ReactComponent as ConfigurationsIcon } from './assets/icons/cog-solid.svg';

import Header from './components/header';
import Sidebar from './components/sidebar';

const menuItems: any[] = [
  {
    name: 'Dashboard',
    route: '/dashboard',
    icon: DashboardIcon
  },
  {
    name: 'Estoque',
    route: '/inventory',
    icon: InventoryIcon
  },
  {
    name: 'Produtos',
    route: '/products',
    icon: ProductsIcon
  }
  ,
  {
    name: 'Configurações',
    route: '/configurations',
    icon: ConfigurationsIcon
  }
];

const App = () => {

  const [theme, setTheme] = userPersistedState('theme', dark);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Sidebar menuItems={menuItems} />
        <Container>
          <Header />
          <Routes />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
