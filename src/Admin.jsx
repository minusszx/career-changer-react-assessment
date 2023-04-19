import Layout from "./Layout";
import React from "react";
import { useState } from "react";

const Admin = ({ employee }) => {
  // const [employee, setEmployee] = useState();
  const [name, setName] = useState();
  const [lastName, setLastname] = useState();
  const [position, setPosition] = useState();

  return (
    <div>
      <h3>Create User Here</h3>
      <br />
      <input
        onChange={(event) => setName(event.target.value)}
        value={name}
        type="text"
        placeholder="name"
      />

      <input
        onChange={(event) => setLastname(event.target.value)}
        value={lastName}
        type="text"
        placeholder="lastname"
      />

      <input
        onChange={(event) => setPosition(event.target.value)}
        value={position}
        type="text"
        placeholder="position"
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((employee) => {
            return (
              <tr>
                <td>{employee.name}</td>
                <td>{employee.lastname}</td>
                <td>{employee.position}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
