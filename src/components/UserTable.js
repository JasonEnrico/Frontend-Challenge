import React, { useEffect, useState } from "react";
import axios from "axios";
import UserRow from "./UserRow";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=25").then((response) => {
      setUsers(response.data.results);
    });
  }, []);

  return (
    <div className="table-container" style={{ overflowY: "auto" }}>
      <table className="user-table">
        <tbody>
          {users.slice(0, 25).map((user, index) => (
            <UserRow key={index} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
