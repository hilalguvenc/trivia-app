import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import Question from "./pages/Question";
import Welcome from "./pages/Welcome";
import Success from "./pages/Success";
import UnSuccessful from "./pages/UnSuccessful";
import TimesUp from "./pages/TimesUp";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/question">
            <Question />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
          <Route exact path="/unsuccessful">
            <UnSuccessful />
          </Route>
          <Route exact path="/timesup">
            <TimesUp />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
