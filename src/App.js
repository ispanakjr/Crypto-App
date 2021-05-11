import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Pokedex from "./pokedex";
import Pokemon from "./pokemon";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/pokemon-app/" render={(props) => <Pokedex {...props} />} />
        <Route exact path="/pokemon-app/:pokemonId" render={(props) => <Pokemon {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
