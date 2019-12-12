import React from "react";
import "./App.css";
import SeacrchPlanet from "./seacrchPlanet.component";
// import SeacrchPlanet1 from "./searchPlanet1.component";
import Login from "./login.component";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/search" component={SeacrchPlanet} />
    </Router>
  );
}

export default App;
