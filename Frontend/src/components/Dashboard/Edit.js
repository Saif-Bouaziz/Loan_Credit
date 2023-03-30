import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios'

const Edit = ({ selectedDemande, setIsEditing }) => {

  const handleClick1 = async () => {
    const response = await axios
      .patch(`http://127.0.0.1:8000/credit/demande/${selectedDemande.DemandeId}`, { "first_name": "Accepted" })
      .catch((error) => console.log('Error: ', error));
    if (response && response.data) {
      console.log(response);
      console.log(response.data);
    }
    setIsEditing(false);
    Swal.fire({
      icon: 'success',
      title: 'Accepted!',
      text: `${selectedDemande.last_name}'s demand has been accepted.`,
      showConfirmButton: false,
      timer: 1500,
    });

  };

  const handleClick2 = async () => {
    const response = await axios
      .patch(`http://127.0.0.1:8000/credit/demande/${selectedDemande.DemandeId}`, { "first_name": "Refused" })
      .catch((error) => console.log('Error: ', error));
    if (response && response.data) {
      console.log(response);
      console.log(response.data);
    }
    setIsEditing(false);
    Swal.fire({
      icon: 'error',
      title: 'Refused!',
      text: `${selectedDemande.last_name}'s demand has been refused.`,
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
        {selectedDemande.first_name}
        <h4>Last Name</h4>
        {selectedDemande.last_name}
        <h4>Email</h4>
        {selectedDemande.email}
        <h4>person_income ($)</h4>
        {selectedDemande.person_income}
        <h4>person_age</h4>
        {selectedDemande.person_age}
        <h4>cin</h4>
        {selectedDemande.cin}
        <h4>num_tel</h4>
        {selectedDemande.num_tel}
        <h4>marriage_status</h4>
        {selectedDemande.marriage_status}
        <h4>job</h4>
        {selectedDemande.job}
        <h4>person_emp_length</h4>
        {selectedDemande.person_emp_length}
        <h4>adress</h4>
        {selectedDemande.adress}
        <h4>person_home_ownership</h4>
        {selectedDemande.person_home_ownership}
        <h4>region</h4>
        {selectedDemande.region}
        <h4>city</h4>
        {selectedDemande.city}
        <h4>code_postal</h4>
        {selectedDemande.code_postal}
        <h4>loan_intent</h4>
        {selectedDemande.loan_intent}
        <h4>loan_amnt</h4>
        {selectedDemande.loan_amnt}
        <h4>loan_duration</h4>
        {selectedDemande.loan_duration}
        <h4>loan_percent_income</h4>
        {selectedDemande.loan_percent_income}
        <h4>loan_int_rate</h4>
        {selectedDemande.loan_int_rate}
        <h4>loan_grade</h4>
        {selectedDemande.loan_grade}
        <h4>person_income</h4>
        {selectedDemande.person_income}
        <div style={{ marginTop: '30px' }}>
          <button
            style={{ backgroundColor: "#BBD6B8" }}
            className="button muted-button"
            onClick={handleClick1}
          >
            Accept
          </button>

          &nbsp;&nbsp;&nbsp;
          <button
            style={{ backgroundColor: "#E96479" }}

            className="button muted-button"
            onClick={handleClick2}
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
          <br /><br /><br /><br /><br /><br /><br />

        </div>
      </div>
    </div>
  );
};

export default Edit;
