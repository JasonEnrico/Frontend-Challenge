import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaMale, FaFemale, FaUsers, FaFlag, FaWalking } from "react-icons/fa";
import "../style.css";
import { FaMars, FaVenus } from "react-icons/fa6";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({
    differentNationality: 0,
    mostGender: "Male",
    avgAge: 0,
    avgMembership: 0,
  });

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=25").then((response) => {
      const members = response.data.results;
      setUsers(members);

      const nationalitySet = new Set(members.map((user) => user.nat));
      const genderCounts = { male: 0, female: 0 };
      let totalAge = 0;
      let totalMembership = 0;

      members.forEach((user) => {
        genderCounts[user.gender]++;
        totalAge += user.dob.age;
        totalMembership += Math.floor(
          (new Date() - new Date(user.registered.date)) / (1000 * 60 * 60 * 24 * 365)
        );
      });

      setStats({
        differentNationality: nationalitySet.size,
        mostGender: genderCounts.male > genderCounts.female ? "male" : "female",
        avgAge: Math.round(totalAge / members.length),
        avgMembership: Math.round(totalMembership / members.length),
      });
    });
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-title">Member Dashboard</div>
      <div className="dashboard-grid">
        <div className="dashboard-item">
          <div className="dashboard-info">
            <h2>{stats.differentNationality}</h2>
            <p>Different Nationality</p>
          </div>
          <FaFlag className="dashboard-icon" />
        </div>
        <div className="dashboard-item">
          <div className="dashboard-info">
            <h2>{stats.mostGender === "male" ? "Male" : "Female"}</h2>
            <p>Most Gender</p>
          </div>
          {stats.mostGender === "male" ? <FaMars className="dashboard-icon" /> : <FaVenus className="dashboard-icon" />}
        </div>
        <div className="dashboard-item">
          <div className="dashboard-info">
            <h2>~{stats.avgAge}</h2>
            <p>Average Age</p>
          </div>
          <FaWalking className="dashboard-icon" />
        </div>
        <div className="dashboard-item">
          <div className="dashboard-info">
            <h2>~{stats.avgMembership} year</h2>
            <p>Average Membership</p>
          </div>
          <FaUsers className="dashboard-icon" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;