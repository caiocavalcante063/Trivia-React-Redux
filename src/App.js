import React from 'react';
import { Switch, Route } from 'react-router';
import Login from './pages/Login';
import Game from './pages/Game';
import Configs from './pages/Configs';
import './App.css';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/game" component={ Game } />
      <Route path="/settings" component={ Configs } />
    </Switch>
  );
}
