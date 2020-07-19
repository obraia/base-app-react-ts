import React from 'react';

import { Container } from './styles';

const Card = (props: {title: string}) => {

    return (
        <Container>
            {props.title}
        </Container>
    );
}

export default Card;