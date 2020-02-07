import React, { useEffect, useState } from "react";
import api from "../../../services/api";
<<<<<<< HEAD
=======

>>>>>>> f396f3bd1cc072773bd6cb8cca6787616dd8ac03
import DashboardItem from "./components/DashboardItem";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUser() {
<<<<<<< HEAD
      const result = await api.get("/users");

      setUsers(result.data);
    }
=======
      const users = await api.get("/users");

      setUsers(users.data);
    }

>>>>>>> f396f3bd1cc072773bd6cb8cca6787616dd8ac03
    loadUser();
  }, []);

  return (
<<<<<<< HEAD
    <>
      <table className="table table-dark container">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <DashboardItem key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </>
=======
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
>>>>>>> f396f3bd1cc072773bd6cb8cca6787616dd8ac03
  );
};

export default Dashboard;
