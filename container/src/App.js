import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { createBrowserHistory } from "history";

import { Home, GreetingCat } from './components'

import "./App.scss";

// const defaultHistory = createBrowserHistory();


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cat/:greeting" component={GreetingCat} />
      </Switch>
    </Router>
  );
}

export default App;