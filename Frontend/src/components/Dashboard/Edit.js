import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios'
import emailjs from '@emailjs/browser'

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
      text: `La demande de ${selectedDemande.last_name} est accéptée.`,
      showConfirmButton: false,
      timer: 1500,
    });

    var templateParams = {
      email_to: `${selectedDemande.email}`,
      message: `Cher/Chère ${selectedDemande.last_name},Nous tenons à vous informer que nous avons bien reçu votre demande ${selectedDemande.DemandeId} et que celle-ci a été vérifiée avec succès. Nous vous confirmons que votre demande est actuellement en cours de traitement par nos équipes.`
    };

    emailjs.send('service_a7ipo6k', 'template_16u38jh', templateParams, 'u0eiwSMN0Z1Wlo0Mz')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
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
      text: `La demande de ${selectedDemande.last_name} est refusée.`,
      showConfirmButton: false,
      timer: 1500,
    });


    var templateParams = {
      email_to: `${selectedDemande.email}`,
      message: `Cher/Chère ${selectedDemande.last_name},Nous avons bien reçu votre demande ${selectedDemande.DemandeId} et nous vous remercions de votre intérêt pour nos services. Cependant, nous regrettons de vous informer que nous n'avons pas pu vérifier votre demande en raison de documents manquants ou incomplets.`
    };

    emailjs.send('service_a7ipo6k', 'template_16u38jh', templateParams, 'u0eiwSMN0Z1Wlo0Mz')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
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
          <h4>Propriété</h4>
          {selectedDemande.person_home_ownership}

        </div>
        <div style={{ display: "inline-block", float: "right" }}>
          <h4>Addresse</h4>
          {selectedDemande.adress}
          <h4>Region</h4>
          {selectedDemande.region}
          <h4>Ville</h4>
          {selectedDemande.city}
          <h4>Code postal</h4>
          {selectedDemande.code_postal}
          <h4>Intention de prêt</h4>
          {selectedDemande.loan_intent}
          <h4>Montant du prêt</h4>
          {selectedDemande.loan_amnt}
          <h4>Durée du prêt</h4>
          {selectedDemande.loan_duration}
          <h4>Revenu en pourcentage</h4>
          {selectedDemande.loan_percent_income}
          <h4>Taux d'intérêt du prêt</h4>
          {selectedDemande.loan_int_rate}
          <h4>Catégorie de prêt</h4>
          {selectedDemande.loan_grade}
          <h4>Revenu de la personne</h4>
          {selectedDemande.person_income}
          <h4>Decision</h4>
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
