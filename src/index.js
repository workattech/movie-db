import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoviePage from "./MoviePage";
import HomePage from "./HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/movies/:movieId" component={MoviePage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
