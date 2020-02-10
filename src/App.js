import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { isAuthenticated } from "./services/auth";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Navbar from "./pages/layouts/Navbar";
// import Footer from "./pages/layouts/Footer";
import Dashboard from "./pages/layouts/Dashboard";

import "./global.css";
import DashboardUser from "./pages/layouts/DashboardUser";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute
            exact
            path={`/dashboard/user/:id`}
            component={DashboardUser}
          />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </Fragment>
  );
};

export default App;
