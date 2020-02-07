import React, { useEffect, useState } from "react";
import api from "../../../services/api";

import DashboardItem from "./components/DashboardItem";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUser() {
      const users = await api.get("/users");

      setUsers(users.data);
    }

    loadUser();
  }, []);

  return (
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <DashboardItem key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default Dashboard;
