import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios'

const Edit = ({ selectedDemande, setIsEditing }) => {

  const handleClick1 = async () => {
    const response = await axios
      .patch(`http://127.0.0.1:8000/credit/demandeApi/${selectedDemande.DemandeId}`, { "decision": "Accepted" })
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
      .patch(`http://127.0.0.1:8000/credit/demandeApi/${selectedDemande.DemandeId}`, { "decision": "Refused" })
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
        <h1>Details de Demande</h1>
        <br />
        <div style={{ display: "inline-block", float: "left" }}>
          <h4>Prénom</h4>
          {selectedDemande.first_name}
          <h4>Nom</h4>
          {selectedDemande.last_name}
          <h4>Email</h4>
          {selectedDemande.email}
          <h4>Salaire</h4>
          {selectedDemande.person_income}($)
          <h4>Age</h4>
          {selectedDemande.person_age}
          <h4>CIN</h4>
          {selectedDemande.cin}
          <h4>Numéro de téléphone</h4>
          {selectedDemande.num_tel}
          <h4>Statut matrimonial</h4>
          {selectedDemande.marriage_status}
          <h4>Travail</h4>
          {selectedDemande.job}
          <h4>Années de travail</h4>
          {selectedDemande.person_emp_length}
          <h4>Addresse</h4>
          {selectedDemande.adress}
          <h4>Propriété</h4>
          {selectedDemande.person_home_ownership}
          <h4>Region</h4>
          {selectedDemande.region}
        </div>
        <div style={{ display: "inline-block", float: "right" }}>

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
          <h4>decision</h4>
          {selectedDemande.decision}

        </div>

        <div style={{ display: "inline-block", float: "right" }}>
          <br /><br /><br />
          <h3>Pieces justificatifs : </h3>
          <br /><br /><br />
          <h4>Justificatif d'identité</h4>
          <img src={`data:image/jpeg;base64,${selectedDemande.img_cin}`} />
          <h4>Avis d'imposition</h4>
          <img src={`data:image/jpeg;base64,${selectedDemande.img_avis_imposition}`} />
          <h4>Bulletins de salaire</h4>
          <img src={`data:image/jpeg;base64,${selectedDemande.img_bulletins_salaire}`} />
          <h4>Relevés de compte en banque</h4>
          <img src={`data:image/jpeg;base64,${selectedDemande.img_Releves_compte_banque}`} />
          <h4>Justificatif de domicile actuel</h4>
          <img src={`data:image/jpeg;base64,${selectedDemande.img_justificatif_domicile_actuel}`} />
        </div>
        <div style={{ clear: "both", textAlign: "center" }}>
          <div style={{ marginTop: '30px', display: "inline-block" }}>


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
          </div>
          <br /><br /><br /><br /><br /><br /><br />

        </div>
      </div>
    </div>
  );
};

export default Edit;
