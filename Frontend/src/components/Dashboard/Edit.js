import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ selectedEmployee, setIsEditing }) => {

  const Refuse = e => {
    e.preventDefault();
    setIsEditing(false);
    selectedEmployee.type = "refused"
    Swal.fire({
      icon: 'error',
      title: 'Refused!',
      text: `${selectedEmployee.id}'s demand has been refused.`,
      showConfirmButton: false,
      timer: 1500,
    });
  }
  const handleUpdate = e => {
    e.preventDefault();
    setIsEditing(false);
    selectedEmployee.type = "accepted"

    Swal.fire({
      icon: 'success',
      title: 'Accepted!',
      text: `${selectedEmployee.firstName}'s demand has been accepted.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <div >
        <br />
        <h1>Employee Details</h1>
        <br />
        <h4>First Name</h4>
        {selectedEmployee.firstName}
        <h4>Last Name</h4>
        {selectedEmployee.lastName}
        <h4>Email</h4>
        {selectedEmployee.email}
        <h4>Salary ($)</h4>
        {selectedEmployee.salary}
        <h4>Date</h4>
        {selectedEmployee.date}
        <h4>Type</h4>
        {selectedEmployee.type}
        <div style={{ marginTop: '30px' }}>
          <button
            style={{ backgroundColor: "#BBD6B8" }}
            className="button muted-button"
            onClick={handleUpdate}
          >
            Accept
          </button>

          &nbsp;&nbsp;&nbsp;
          <button
            style={{ backgroundColor: "#E96479" }}

            className="button muted-button"
            onClick={Refuse}
          >
            Refuse
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            className="button muted-button"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
