import React from "react";
import useToken from "../Token/useToken";

function Dashboard() {
  const { token, setToken } = useToken();
  return (
    <div>
      Dashboard
      <br />
      <h4>{token}</h4>
    </div>
  );
}

export default Dashboard;
