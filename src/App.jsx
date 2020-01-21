import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Question from "./pages/Question";
import "./styles/App.css";
import Welcome from "./pages/Welcome";



const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/question" >
            <Question/>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
