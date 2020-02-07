import React from "react";
import api from "../../../../services/api";
import { logout } from "../../../../services/auth";

const DashboardItem = ({ user }) => {
  async function handleDelete(data) {
    await api.delete(`/users/${data}`);
    logout();
    window.location.reload(false);
  }

  return (
    <tr>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={handleDelete.bind(this, user.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DashboardItem;
