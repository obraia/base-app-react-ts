import React, { JSXElementConstructor } from 'react';

import { Container, Title } from './styles';


const FullContainer = (props: { title: string, content?: any }) => {

    return (
        <Container>
            <Title>{props.title}</Title>
            {props.content && <props.content/>}
        </Container>
    );
}

export default FullContainer;