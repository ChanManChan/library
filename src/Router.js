import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import O_Timeline from './pages/O_Timeline';

const Router = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/cart' component={Cart} />
    <Route exact path='/order' component={O_Timeline} />
  </Switch>
);

export default Router;
