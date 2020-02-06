import React from "react";

function DashboardItem({ user }) {
  return (
    <tr>
      <th>{user.id}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  );
}

export default DashboardItem;
