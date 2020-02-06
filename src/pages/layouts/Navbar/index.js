import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { isAuthenticated, logout } from "../../../services/auth";

const Navbar = () => {
  async function sair() {
    logout();
    window.location.reload();
  }

  const authLinks = (
    <ul className="nav navbar-nav ml-auto">
      <li className="nav-item" role="presentation">
        <Link className="nav-link" to="/dashboard">
          <i className="fas fa-user"></i>{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li className="nav-item" role="presentation">
        <a className="nav-link" onClick={sair} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <span className="navbar-text actions ml-auto">
      <Link to="/login" className="login">
        Sign In
      </Link>
      <Link
        className="btn btn-light action-button"
        role="button"
        to="/register"
      >
        Sign Up
      </Link>
    </span>
  );

  return (
    <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
      <div className="container">
        <h1>
          <Link className="navbar-brand" to="/">
            <i className="fas fa-code"></i> Gustavo's Company
          </Link>
        </h1>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          {<Fragment>{isAuthenticated() ? authLinks : guestLinks}</Fragment>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
