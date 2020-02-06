import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import DashboardItem from "./components/DashboardItem";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUser() {
      const result = await api.get("/users");

      setUsers(result.data);
    }
    loadUser();
  }, []);

  return (
    <>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <DashboardItem key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Dashboard;
