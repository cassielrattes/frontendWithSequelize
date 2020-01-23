import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Login = () => {
  return (
    <div className="login-dark">
      <form>
        <h2 className="sr-only">Login Form</h2>
        <div className="illustration">
          <i class="fa fa-lock"></i>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-block" type="submit">
            <strong>Sign</strong>In
          </button>
        </div>
        <Link to="/" className="forgot">
          Forgot your email or password?
        </Link>
      </form>
    </div>
  );
};

export default Login;
