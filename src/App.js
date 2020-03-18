import React, { Component } from "react";
import "./style.less";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader";

import { Exercise } from "./Pages/Exercise";
import { Homepage } from "./Pages/Homepage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Navigation selected="react" />
            <Homepage />
          </Route>
          <Route path="/exercise">
            <Navigation selected="exercise" />
            <Exercise />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default hot(module)(App);
