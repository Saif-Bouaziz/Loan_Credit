import React, { useState } from 'react';
import Swal from 'sweetalert2';


const ClientEdit = ({ selectedDemande, setIsEditing }) => {
  const [prediction, setPrediction] = useState(null);
  const [demandes, setDemandes] = useState(selectedDemande.status);





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

  const handleClick1 = async () => {
    const url = `http://127.0.0.1:8000/credit/demande_status/${selectedDemande.DemandeId}/`;
    const data = { 'status': 'acceptée' };
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (response.ok) {
      setIsEditing(false);
      const updatedDemandes = demandes.map(demande => {
        if (demande.DemandeId === selectedDemande.DemandeId) {
          return {
            ...demande,
            status: data.status,
          };
        }
        return demande;
      });
      // Update the state of demandes to the new array with the updated status field
      setDemandes(updatedDemandes)
      Swal.fire({
        icon: 'success',
        title: 'Acceptée!',
        text: `la demande de ${selectedDemande.DemandeId} est acceptée.`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      console.log(`Error: ${response.status}`);
    }
  };

  const handleClick2 = async () => {
    const url = `http://127.0.0.1:8000/credit/demande_status/${selectedDemande.DemandeId}/`;
    const data = { 'status': 'refusée' };
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (response.ok) {
      setIsEditing(false);
      const updatedDemandes = demandes.map(demande => {
        if (demande.DemandeId === selectedDemande.DemandeId) {
          return {
            ...demande,
            status: data.status,
          };
        }
        return demande;
      });
      // Update the state of demandes to the new array with the updated status field
      setDemandes(updatedDemandes)
      Swal.fire({
        icon: 'error',
      title: 'Refusée!',
      text: `la demande numéro ${selectedDemande.DemandeId} est refusée.`,
      showConfirmButton: false,
      timer: 1500,
      });
    } else {
      console.log(`Error: ${response.status}`);
    }
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
        <h4>Status</h4>
        {selectedDemande.status}
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
            onClick={handleClick1}
          >
            Accepter
          </button>

          &nbsp;&nbsp;&nbsp;
          <button
            style={{ backgroundColor: "#E96479" }}

            className="button muted-button"
            onClick={handleClick2}
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
