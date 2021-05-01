import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import GreetingCat from "./components/GreetingCat";
import RandomCat from "./components/RandomCat";
import PageNotFound from "./components/PageNotFound";


import { QueryClientProvider, QueryClient } from 'react-query'

import "./App.scss";

const defaultHistory = createBrowserHistory();

const queryClient = new QueryClient();

function App({ history = defaultHistory }) {
  return (
    <QueryClientProvider client={queryClient}>

      <Router>
        <Switch history={history}>
          <Route exact path="/" component={RandomCat} />
          <Route exact path="/cat/:greeting" component={GreetingCat} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
