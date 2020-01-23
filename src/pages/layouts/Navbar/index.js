import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Gustavo's Company
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navcol-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav mr-auto">
              <li className="nav-item" role="presentation">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
            <span className="navbar-text actions">
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
