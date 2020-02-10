import React from "react";
import { Link } from "react-router-dom";
import api from "../../../../services/api";

function DashboardItem({ user }) {
  async function handleDelete(data) {
    await api.delete(`/users/${data}`);

    window.location.reload();
  }

  // async function handleUpdate(data) {
  //   await api.get(`/users/${data}`);
  //   console.log(data);
  //   window.location.reload();
  // }

  return (
    <tr>
      <th>{user.id}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={handleDelete.bind(this, user.id)}
        >
          delete
        </button>
      </td>
      <td>
        <Link
          type="button"
          className="btn btn-outline-warning"
          to={`/dashboard/user/${user.id}`}
          // onClick={handleUpdate.bind(this, user.id)}
        >
          Update
        </Link>
      </td>
    </tr>
  );
}

export default DashboardItem;
