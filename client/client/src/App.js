import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Banner from "./components/Banner";
import FavMovies from "./components/FavMovies";
import Home from "./components/Home";
import LatestMovies from "./components/LatestMovies";
import Nav from "./components/Nav";
import PopularMovies from "./components/PopularMovies";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Banner />
        <Switch>
          <Route path="/discover" component={Home} exact={true} />
          <Route path="/discover/popular" component={PopularMovies} />
          <Route path="/discover/latest" component={LatestMovies} />
          <Route path="/discover/favourite" component={FavMovies} />
          <Route path="/discover/login" component={Login} />
          <Route path="/discover/Register" component={Register} />
          <Redirect to="/discover" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
