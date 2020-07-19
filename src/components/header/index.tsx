import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import HeaderMenu from '../headerMenu';

import { Container, PageTitle, ButtonMenu } from './styles';

const Header = () => {

  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <Container>
      <PageTitle>{location.pathname}</PageTitle>
      <ButtonMenu onClick={toggleMenu}>
        username
      </ButtonMenu>
      {menuOpen && <HeaderMenu toggleMenu={toggleMenu}/>}
    </Container>
  );
}

export default Header;
