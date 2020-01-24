import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../../services/api";

import "./styles.css";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { name, email, password } = this.state;
    if (!name || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/users", { name, email, password });
        this.props.history.push("/login");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      }
    }
  };

  render() {
    return (
      <div className="login-dark">
        <form onSubmit={this.handleSignUp}>
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
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })}
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
  }
}

export default withRouter(Register);
