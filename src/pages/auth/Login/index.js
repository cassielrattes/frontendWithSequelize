import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../../services/api";
import { login } from "../../../services/auth";

import "./styles.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
        login(response.data.token);
        this.props.history.push("/dashboard");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

  render() {
    return (
      <div className="login-dark">
        <form onSubmit={this.handleSignIn}>
          <h2 className="sr-only">Login Form</h2>
          <div className="illustration">
            <i class="fa fa-lock"></i>
          </div>
          {this.state.error && <p>{this.state.error}</p>}
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
              <strong>Sign</strong>In
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

export default withRouter(Login);
