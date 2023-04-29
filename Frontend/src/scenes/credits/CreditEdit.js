import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios'
import select from 'assets/theme/components/form/select';


const CreditEdit = ({handleClick1,selectedCredit, setIsEditing }) => {
  const windowWidth = useRef(window.innerWidth);
  const handleNbr = () => {
    fetch(`http://127.0.0.1:8000/credit/update_nb_email/${selectedCredit.DemandeId}/`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };
  return (
    <div style={{ fontSize: windowWidth.current * 0.01,marginLeft: '180px'  }}>
      <div >
        <br />
        <h1>Détails du crédit</h1>
        <br />
        <table >
            
            <thead>
                  <tr>
                    <th>Prénom</th>
                    <td>{selectedCredit.demande__last_name}</td>
                  </tr>
                  <tr>
                    <th>Nom</th>
                    <td>{selectedCredit.demande__first_name}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{selectedCredit.demande__email}</td>
                  </tr>
                  <tr>
                    <th>Salaire</th>
                    <td> {selectedCredit.demande__person_income}</td>
                  </tr>
                  <tr>
                    <th>Objectif du crédit</th>
                    <td>{selectedCredit.demande__loan_intent}</td>
                  </tr>
                  <tr>
                    <th>Mensualité</th>
                    <td>{selectedCredit.mensualite}</td>
                  </tr>
                  <tr>
                    <th>Pourcentage du crédit</th>
                    <td>{selectedCredit.demande__loan_percent_income}</td>
                  </tr>
            </thead>
        </table>

        <br />



        <div style={{ clear: "both", textAlign: "center" }}>

          <div style={{ marginTop: "30px", display: "inline-block" }}>

            <button
              style={{ backgroundColor: "#E96479" }}

              className="button muted-button"
              onClick={() => {
                handleClick1();
                handleNbr();
              }}            >
              Retrancher
            </button>
            &nbsp;&nbsp;&nbsp;
            <button
              className="button muted-button"
              onClick={() => setIsEditing(false)}
            >
              Retour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditEdit;
