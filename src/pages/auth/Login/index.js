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
<<<<<<< HEAD
      alert("nois");
=======
      alert("tmj");
>>>>>>> f396f3bd1cc072773bd6cb8cca6787616dd8ac03
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
        login(response.data.token);
        history.push("/dashboard");
<<<<<<< HEAD
        window.location.reload();
      } catch (err) {
        alert("EROU");
=======
      } catch (err) {
        alert("tmj");
>>>>>>> f396f3bd1cc072773bd6cb8cca6787616dd8ac03
      }
    }
  }

  return (
    <div className="login-dark">
      <form onSubmit={handleSignIn}>
        <h2 className="sr-only">Login Form</h2>
        <div className="illustration">
<<<<<<< HEAD
          <i class="fa fa-lock"></i>
=======
          <i className="fa fa-lock"></i>
>>>>>>> f396f3bd1cc072773bd6cb8cca6787616dd8ac03
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
