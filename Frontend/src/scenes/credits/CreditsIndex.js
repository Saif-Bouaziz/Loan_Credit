import React from 'react'
import { useState, useEffect } from 'react';
import CreditTable from './CreditTable'
import CreditEdit from './CreditEdit'
import Axios from 'axios'
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser'



const CreditsIndex= () => {
  const [selectedCredit, setSelectedCredit] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [creditsData, setCreditsData] = useState([]);

  useEffect(() => {
    Axios.get('http://127.0.0.1:8000/credit/get_credits')
      .then(response => {
        const updatedCreditsData = response.data.map(credit => ({
          ...credit,
          demande_last_name: credit.demande__last_name,
          demande_first_name: credit.demande__first_name,
          demande_person_income: credit.demande__person_income,
          demande_loan_intent: credit.demande__loan_intent,
          demande_loan_percent_income: credit.demande__loan_percent_income,
          demande_email : credit.demande__email,
          DemandeId : credit.demande__DemandeId
        }));
        setCreditsData(updatedCreditsData);
      })
      .catch(error => {
        console.log(error);
      });
  });
  
  const handleEdit = IdCredit => {
    const [credit] = creditsData.filter(credit => credit.IdCredit === IdCredit);
    console.log('IdCredit:', IdCredit);
    console.log('credit:', credit);
    setSelectedCredit(credit);
    setIsEditing(true);
  };
  const [payer,setPayer]=useState(false)
  //const [creditPayes,setCreditPayes]=useState([])
  const handleClick1 = async () => {
    try {
      const response = await Axios.patch(`http://127.0.0.1:8000/credit/retrancher_montant/${selectedCredit.IdCredit}/`);
      if (response && response.data.success) {
        console.log(response.data);
        console.log(response.data.montant_restant)
        setPayer(true)
        setIsEditing(false);
        Swal.fire({
          icon: 'success',
          title: 'Payé!',
          text: `${selectedCredit.IdCredit} est mis à jour.`,
          showConfirmButton: false,
          timer: 1500,
        });
        var templateParams = {
          email_to: `${selectedCredit.demande__email}`,
          message: `Cher/Chère ${selectedCredit.demande__last_name},Nous tenons à vous informer que le montant 
          mensuel est bien payé pour ce mois vous pouvez consulter votre espace personnel pour le suivi 
          de votre crédit, bonne journée .`
        };
    
        emailjs.send('service_a7ipo6k', 'template_16u38jh', templateParams, 'u0eiwSMN0Z1Wlo0Mz')
          .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
          }, function (error) {
            console.log('FAILED...', error);
          });
      }
    } catch (error) {
      console.log('Error: ', error);
    }
  };
  
  return (
    <div>
      <div className="container">
      {!isEditing && (
        <div>
          <CreditTable
            credits={creditsData}
            setCreditsData={setCreditsData}
            handleEdit={handleEdit}
            payer={payer}
          />
          <br /><br /><br /><br /><br /><br /><br />

        </div>
      )}

      {isEditing && (
        <CreditEdit
          selectedCredit={selectedCredit}
          setIsEditing={setIsEditing}
          handleClick1={handleClick1} 
                 />
      )}
    </div>    
    </div>
  )
}

export default CreditsIndex;

