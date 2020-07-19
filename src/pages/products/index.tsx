import React from 'react';

import ComponentContainer from '../../components/container';

import { Container, DivA, DivB, DivC } from './styles';

const Products = () => {

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
        </Container>
    );
}

export default Products;