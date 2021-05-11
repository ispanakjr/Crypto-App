import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Pokedex from "./pokedex";
import Pokemon from "./pokemon";


function App() {
  return (
    <Router basename="/pokemon-app">
      <Switch>
        <Route exact path="/" render={(props) => <Pokedex {...props} />} />
        <Route exact path="/:pokemonId" render={(props) => <Pokemon {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
