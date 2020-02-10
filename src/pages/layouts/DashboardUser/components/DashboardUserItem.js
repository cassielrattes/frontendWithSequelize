import React from "react";
// import { Link } from "react-router-dom";
// import api from "../../../../services/api";

const DashboardUserItem = ({ user }) => (
  <tr>
    <td>{user.name}</td>
    <td>{user.email}</td>
  </tr>
);

export default DashboardUserItem;
