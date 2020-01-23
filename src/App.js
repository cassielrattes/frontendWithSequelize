import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Navbar from "./pages/layouts/Navbar";
import Footer from "./pages/layouts/Footer";

import "./global.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
