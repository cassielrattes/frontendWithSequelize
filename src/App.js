import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Navbar from "./pages/layouts/Navbar";
import Footer from "./pages/layouts/Footer";
import Dashboard from "./pages/layouts/Dashboard";

import "./global.css";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
};

export default App;
