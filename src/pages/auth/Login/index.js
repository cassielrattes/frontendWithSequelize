import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../services/api";
import { login } from "../../../services/auth";

import "./styles.css";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn(e) {
    e.preventDefault();
    if (!email || !password) {
      alert("nois");
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
        login(response.data.token);
        history.push("/dashboard");
        window.location.reload();
      } catch (err) {
        alert("tmj");
      }
    }
  }

  return (
    <div className="login-dark">
      <form onSubmit={handleSignIn}>
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
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-block" type="submit">
            <strong>SignIn</strong>
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
