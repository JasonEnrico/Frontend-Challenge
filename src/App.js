import React from "react";
import Dashboard from "./components/Dashboard";
import UserTable from "./components/UserTable";
import "./style.css";

function App() {
  return (
    <div className="container">
      <Dashboard />
      <UserTable />
    </div>
  );
}

export default App;
