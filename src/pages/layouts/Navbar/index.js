import React from "react";
import "./styles.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-light navbar-expand-md navigation-clean-button">
        <div class="container">
          <a class="navbar-brand" href="#">
            Company Name
          </a>
          <button
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navcol-1"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navcol-1">
            <ul class="nav navbar-nav mr-auto">
              <li class="nav-item" role="presentation">
                <a class="nav-link active" href="#">
                  First Item
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" href="#">
                  Second Item
                </a>
              </li>
              <li class="dropdown nav-item">
                <a
                  class="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                >
                  Dropdown{" "}
                </a>
                <div class="dropdown-menu" role="menu">
                  <a class="dropdown-item" role="presentation" href="#">
                    First Item
                  </a>
                  <a class="dropdown-item" role="presentation" href="#">
                    Second Item
                  </a>
                  <a class="dropdown-item" role="presentation" href="#">
                    Third Item
                  </a>
                </div>
              </li>
            </ul>
            <span class="navbar-text actions">
              <a href="#" class="login">
                Log In
              </a>
              <a class="btn btn-light action-button" role="button" href="#">
                Sign Up
              </a>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
