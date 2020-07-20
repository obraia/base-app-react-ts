import React from 'react';
import { useHistory } from 'react-router-dom';

import { MenuItem } from '../../interfaces/Interfaces';

import { ReactComponent as Account } from '../../assets/icons/user-circle-solid.svg';
import { ReactComponent as Logout } from '../../assets/icons/sign-out-alt-solid.svg';
import { ReactComponent as About } from '../../assets/icons/info-circle-solid.svg';

import { Container, Item, ItemName, OutsideArea } from './styles';


const menuItems: MenuItem[] = [
  {
    name: 'Minha conta',
    route: '/my-account',
    icon: Account
  },
  {
    name: 'Sobre',
    route: '/about',
    icon: About
  },
  {
    name: 'Sair',
    route: '/authenticate',
    icon: Logout
  }
];

const HeaderMenu = (props: { toggleMenu: any }) => {

  const history = useHistory();

  const navigateTo = (route: string) => {
    props.toggleMenu();
    history.push(route);
  }

  return (
    <>
      <Container>
        {menuItems.map(item => (
          <Item key={item.name} onClick={() => navigateTo(item.route)}>
            <ItemName>{item.name}</ItemName>
            {<item.icon />}
          </Item>
        ))}
      </Container>
      <OutsideArea onClick={props.toggleMenu} />
    </>
  );
}

export default HeaderMenu;
