import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api";

export default function Dashboard({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams("");

  async function handleUpdate(e) {
    e.preventDefault();
    if (!name || !email) {
      alert("error");
    } else {
      try {
        const result = await api.get(`/users/${id}`);

        if (result) {
          await api.put(`/users/${id}`, { name, email });
          history.push("/dashboard");
        }
      } catch (err) {
        alert(err);
      }
    }
  }

  return (
    <>
      <div className="login-dark">
        <form onSubmit={handleUpdate}>
          <h2 className="sr-only">Login Form</h2>
          <div className="illustration">
            <i className="fa fa-lock"></i>
          </div>
          <h4>ID: {id}</h4>
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
            <button className="btn btn-primary btn-block" type="submit">
              <strong>Sign</strong>Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
