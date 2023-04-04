import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ClientEdit = ({ selectedDemande, setIsEditing }) => {
  const [prediction, setPrediction] = useState(null);
  const [type, setType] = useState(null);


  const handlePredict = (demandeId) => {
    fetch(`http://localhost:8000/credit/banker/${demandeId}/`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        setPrediction(data);
    })
    .catch(error => console.error(error));
    console.log(demandeId)

  }

  const Refuse = e => {
    e.preventDefault();
    setIsEditing(false);
    setType('refusée')
    Swal.fire({
      icon: 'error',
      title: 'Refusée',
      text: `${selectedDemande.first_name}'s demande est acceptée.`,
      showConfirmButton: false,
      timer: 1500,
    });
  }
  const handleUpdate = e => {
    e.preventDefault();
    setIsEditing(false);
    Swal.fire({
      icon: 'success',
      title: 'Acceptée!',
      text: `${selectedDemande.first_name}'s demande est acceptée.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <div >
        <br />
        <h1>Details de la demande</h1>
        <br />
        <div style={{display: "inline-block", float: "left"}}>
        <h4>Nom</h4>
        {selectedDemande.first_name}
        <h4>Prénom</h4>
        {selectedDemande.last_name}     
        <h4>Age</h4>
        {selectedDemande.person_age}
        <h4>Salaire</h4> 
        {selectedDemande.person_income} 
        <h4>Propriété </h4>
        {selectedDemande.person_home_ownership}
        <h4>Emploi</h4>
        {selectedDemande.person_emp_length}
        </div>
        <div style={{display: "inline-block", float: "right"}}>
        
        <h4>Objectif</h4>
        {selectedDemande.loan_intent}
        <h4>Ctégorie</h4>
        {selectedDemande.loan_grade}
        <h4>Montant</h4>
        {selectedDemande.loan_amnt}
        <h4>Intérêt</h4>
        {selectedDemande.loan_int_rate}
        <h4>Pourcentage</h4>
        {selectedDemande.loan_percent_income}
        <h4>Résultat</h4>
        {prediction}
        </div>
        <div style={{clear: "both", textAlign: "center"}}>

        <div  style={{marginTop: "30px", display: "inline-block"}}>
        <button
            onClick={() => handlePredict(selectedDemande.DemandeId)}
            className="button muted-button"
                    >
                      Traiter
                    </button>
            &nbsp;&nbsp;&nbsp;
          <button
            style={{ backgroundColor: "#BBD6B8" }}
            className="button muted-button"
            onClick={handleUpdate}
          >
            Accepter
          </button>

          &nbsp;&nbsp;&nbsp;
          <button
            style={{ backgroundColor: "#E96479" }}

            className="button muted-button"
            onClick={Refuse}
          >
            Refuser
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

export default ClientEdit;
