// EmployeeDetail.js
import React from "react";
import { useLocation } from "react-router-dom";

const EmployeeDetail = () => {
  const location = useLocation();
  const employee = location.state.employee;

  return (
    <div>
      <h1>Employee Detail</h1>
      <div>
        <strong>ID:</strong> {employee.id}
      </div>
      <div>
        <strong>Name:</strong> {employee.name}
      </div>
      <div>
        <strong>Age:</strong> {employee.age}
      </div>
    </div>
  );
};

export default EmployeeDetail;
