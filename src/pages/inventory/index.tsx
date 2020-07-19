import React from 'react';

import ComponentContainer from '../../components/container';

import { Container, DivA, DivB, DivC, DivD } from './styles';

const Inventory = () => {

    return (
        <Container>
            <DivA>
                <ComponentContainer title={'DivA'} />
            </DivA>
            <DivB>
                <ComponentContainer title={'DivB'} />
            </DivB>
            <DivC>
                <ComponentContainer title={'DivC'} />
            </DivC>
            <DivD>
                <ComponentContainer title={'DivD'} />
            </DivD>
        </Container>
    );
}

export default Inventory;