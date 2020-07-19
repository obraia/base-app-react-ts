import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import Inventory from './pages/inventory';
import Products from './pages/products';
import Configurations from './pages/configurations';

const Routes = () => {
  return (
    <>
      <Redirect from="/" to="/dashboard" />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/inventory' component={Inventory} />
      <Route exact path='/products' component={Products} />
      <Route exact path='/configurations' component={Configurations} />     
    </>
  );
}

export default Routes;