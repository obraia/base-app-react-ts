import React, { useState } from 'react';

import ComponentContainer from '../../components/container';

// Configuration list
import ConfigList from './configList';

import { Container } from './styles';

const Configurations = () => {

    return (
        <Container>
                <ComponentContainer title={''} content={ConfigList} />
        </Container>
    );
}

export default Configurations;