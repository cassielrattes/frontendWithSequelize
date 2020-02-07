import React from "react";

const DashboardUser = ({ match }) => {
  return (
    <>
      <div>ID: {match.params.id}</div>
      <tr></tr>
    </>
  );
};

export default DashboardUser;

//react router params
