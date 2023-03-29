import React, { useState, useEffect } from 'react';
import Table from './Table';
import Edit from './Edit';
import { employeesData } from '../../data';

const Dashboard = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isEditing, setIsEditing] = useState(false);


  const handleEdit = id => {
    const [employee] = employeesData.filter(employee => employee.id === id);
    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  return (
    <div className="container">
      {!isEditing && (
        <div>
          <br />
          <h2>Skander Abid</h2>
          <br />
          <Table
            employees={employeesData}
            handleEdit={handleEdit}
          />
        </div>
      )}

      {isEditing && (
        <Edit
          selectedEmployee={selectedEmployee}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
