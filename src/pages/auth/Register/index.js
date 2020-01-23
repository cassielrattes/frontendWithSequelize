import React from "react";
import "./styles.css";

const Register = () => {
  return (
    <div class="login-dark">
      <form method="post">
        <h2 class="sr-only">Login Form</h2>
        <div class="illustration">
          <i class="icon ion-ios-locked-outline"></i>
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" type="submit">
            Log In
          </button>
        </div>
        <a href="#" class="forgot">
          Forgot your email or password?
        </a>
      </form>
    </div>
  );
};

export default Register;
