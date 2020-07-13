import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Dashboard from './pages/dashboard';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Dashboard} />
        </BrowserRouter>
    );
}

export default Routes;