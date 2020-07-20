import React from 'react';

import { useHistory } from 'react-router-dom';

import Login from '../../components/login';

import { Container } from './styles';

const Authenticate = () => {

	const history = useHistory();

	const handleLogin = (e?: Event) => {
		e?.preventDefault();
		// Lógica para autenticação
		history.push('/dashboard');
	}

	return (
		<Container>
			<Login onSubmit={handleLogin}/>
		</Container>
	);
}

export default Authenticate;