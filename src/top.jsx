import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import MetricsPage from "./component/metricspage";

export default function Top() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/open" component={MetricsPage} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </Router>
  );
}
