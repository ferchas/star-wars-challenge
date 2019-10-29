import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './page/home';
import Character from './page/character';

const app = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/character/:characterId" component={Character} />
  </Router>
);

export default app;