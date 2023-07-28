// Employee.js
import React from "react";
import { Link } from "react-router-dom";

const employees = [
  {
    id: 1,
    name: "Hoa",
    age: 20,
  },
  {
    id: 2,
    name: "Khánh",
    age: 25,
  },
  {
    id: 3,
    name: "Tú",
    age: 22,
  },
];

const Employee = () => {
  return (
    <div>
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>
                <Link
                  to={{
                    pathname: `/employee/${employee.id}`,
                    state: { employee },
                  }}
                >
                  <button>Detail</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
