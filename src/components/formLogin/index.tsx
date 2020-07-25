import React from 'react';

import { Container, Title, Group, InputGroup, Label, Input, Checkbox, Button } from './styles';


const Login = (props: { onSubmit: () => void }) => {

    return (
        <Container onSubmit={props.onSubmit}>
            <Title>Faça o login</Title>
            <Input type='text' placeholder='Usuário' />
            <Input type='password' placeholder='Senha' />
            <Group>
                <InputGroup>
                    <Checkbox type='checkbox' id='remember-me' />
                    <Label htmlFor='remember-me'>Manter conectado</Label>
                </InputGroup>
                <Button>Entrar</Button>
            </Group>
        </Container>
    );
}

export default Login;