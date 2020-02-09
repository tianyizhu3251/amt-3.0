import React from 'react'

import { Switch, Route } from 'react-router-dom';
import Home from '@/views/home/home.js';

const Routers = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
)

export default Routers
