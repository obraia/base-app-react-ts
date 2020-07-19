import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import ThemeProvider from './context/theme';

import GlobalStyle from './styles/global';
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

  return (
    <ThemeProvider>
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
