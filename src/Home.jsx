import React from "react";
import Layout from "./Layout";
import Admin from "./Admin";
import User from "./User";
import { useState } from "react";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  const [employee, setEmployee] = useState(mockEmployees);
  const [sector, setSector] = useState("");
  const [title, setTitle] = useState("React - Assessment");

  const handleUserSectorClick = () => {
    setSector("User");
    setTitle("User Home Sector");
  };

  const handleAdminSectorClick = () => {
    setSector("Admin");
    setTitle("Admin Home Sector");
  };

  return (
    <Layout>
      <div>
        <h1>
          Generation Thailand <br /> React - Assessment
        </h1>
        <button onClick={handleUserSectorClick}>User Home Sector</button>
        <button onClick={handleAdminSectorClick}>Admin Home Sector</button>
        {sector === "User" && <User employee={employee} />}
        {sector === "Admin" && <Admin employee={employee} />}
      </div>
    </Layout>
  );
};

export default Home;
