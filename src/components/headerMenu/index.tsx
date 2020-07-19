import React from 'react';

import { Container, Item, OutsideArea } from './styles';

const HeaderMenu = (props: { toggleMenu: any }) => {

  return (
    <>
      <Container>
        <Item />
        <Item />
        <Item />
        <Item />
      </Container>
      <OutsideArea onClick={props.toggleMenu} />
    </>
  );
}

export default HeaderMenu;
