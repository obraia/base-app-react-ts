import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { MenuItem } from '../../interfaces/Interfaces';

import { ReactComponent as DashboardIcon } from '../../assets/icons/chart-line-solid.svg';
import { ReactComponent as InventoryIcon } from '../../assets/icons/box-open-solid.svg';
import { ReactComponent as ProductsIcon } from '../../assets/icons/scanner-solid.svg';
import { ReactComponent as ConfigurationsIcon } from '../../assets/icons/cog-solid.svg';

import { Container, MenuList, MenuListItem, MenuItemName } from './styles';

const menuItems: MenuItem[] = [
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
  },
  {
    name: 'Configurações',
    route: '/configurations',
    icon: ConfigurationsIcon
  }
];

const Sidebar = () => {

  const location = useLocation();

  return location.pathname !== '/authenticate' ? (
    <Container>
      <MenuList>
        {menuItems.map(menuItem => (
          <MenuListItem key={menuItem.name} className={menuItem.route === location.pathname ? 'selected' : ''}>
            <Link to={menuItem.route}>
              {<menuItem.icon />}
              <MenuItemName>{menuItem.name}</MenuItemName>
            </Link>
          </MenuListItem>
        ))}
      </MenuList>
    </Container>
  ) : null;
}

export default Sidebar;