import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../services/api";

import "./styles.css";

const Register = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp(e) {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("tmj");
    } else {
      try {
        await api.post("/users", { name, email, password });
        history.push("/login");
      } catch (err) {
        console.log(err);
<<<<<<< HEAD
        alert("tmj2");
=======
        alert("tmj");
>>>>>>> f396f3bd1cc072773bd6cb8cca6787616dd8ac03
      }
    }
  }

  return (
    <div className="login-dark">
      <form onSubmit={handleSignUp}>
        <h2 className="sr-only">Login Form</h2>
        <div className="illustration">
          <i className="fa fa-lock"></i>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="name"
            name="name"
            placeholder="Username"
            onChange={e => setName(e.target.value)}
          />
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
            <strong>Sign</strong>Up
          </button>
        </div>
        <Link to="/" className="forgot">
          Forgot your email or password?
        </Link>
      </form>
    </div>
  );
};

export default Register;
