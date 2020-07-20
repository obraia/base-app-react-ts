import React from 'react';

import { Container, Group, InputGroup, Label, Input, Checkbox, Button } from './styles';


const Login = (props: { onSubmit: () => void }) => {

    return (
        <Container onSubmit={props.onSubmit}>
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