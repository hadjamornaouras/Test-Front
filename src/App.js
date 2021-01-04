import React from "react";
import HomePage from "../src/pages/HomePage";
import ProductsList from "../src/pages/ProductsList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/product_list" component={ProductsList} />
      </Switch>
    </Router>
  );
}

export default App;
