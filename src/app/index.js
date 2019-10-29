import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './page/home';
import Characters from './page/characters';

const app = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/characters/:charactersId" component={Characters} />
  </Router>
);

export default app;