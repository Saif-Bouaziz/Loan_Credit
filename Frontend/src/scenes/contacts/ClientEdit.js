import React, {useState, useRef } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios'


const ClientEdit = ({ selectedDemande, setIsEditing }) => {
 // const [result, setResult] = useState(selectedDemande.prediction);
  const windowWidth = useRef(window.innerWidth);
  const[modify,setModify]=useState(selectedDemande)

  const handlePredict = (demandeId) => {
    fetch(`http://localhost:8000/credit/banker/${demandeId}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        console.log(data);
        const param={demandeId,data}
        console.log(param);
        updatePrediction(param.demandeId,param.data);
      })
      .catch(error => console.error(error));
  }
  
  const updatePrediction = async (demandeId, prediction) => {
    fetch(`http://127.0.0.1:8000/credit/update_prediction/${demandeId}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "prediction": prediction })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(response);
      return response.json();
    })
    .then(data=>{
      console.log(data);
      const updatedDemande = { ...selectedDemande }
      updatedDemande.prediction = data['prediction'];
      setModify(updatedDemande);
      console.log(modify)
    })
    .catch(error => console.error(error));
  }
    

  const handleClick1 = async () => {
    const response = await axios
      .patch(`http://127.0.0.1:8000/credit/demandeApi/${selectedDemande.DemandeId}`, { "status": "acceptée" })
      .catch((error) => console.log('Error: ', error));
    if (response && response.data) {
      console.log(response);
      console.log(response.data);
    }
    setIsEditing(false);
    Swal.fire({
      icon: 'success',
      title: 'Acceptée!',
      text: `la de demande de ${selectedDemande.last_name} est accptée.`,
      showConfirmButton: false,
      timer: 1500,
    });

  };
  const handleClick2 = async () => {
    const response = await axios
      .patch(`http://127.0.0.1:8000/credit/demandeApi/${selectedDemande.DemandeId}`, { 'status': 'refusée' })
      .catch((error) => console.log('Error: ', error));
    if (response && response.data) {
      console.log(response);
      console.log(response.data);
    }
    setIsEditing(false);
    Swal.fire({
      icon: 'error',
      title: 'Refusée!',
      text: `la demande de ${selectedDemande.last_name} est refusée.`,
      showConfirmButton: false,
      timer: 1500,
    });

  };

  return (
    <div style={{ fontSize: windowWidth.current * 0.01,marginLeft: '180px'  }}>
      <div >
        <br />
        <h1>Détails de la demande</h1>
        <br />
        <div  >
          <table >
            
            <thead>
                  <tr>
                    <th>Nom</th>
                    <td>{modify.first_name}</td>
                  </tr>
                  <tr>
                    <th>Prénom</th>
                    <td>{modify.last_name}</td>
                  </tr>
                  <tr>
                    <th>Age</th>
                    <td>{modify.person_age}</td>
                  </tr>
                  <tr>
                    <th>Salaire</th>
                    <td>{modify.person_income}</td>
                  </tr>
                  <tr>
                    <th>Propriété</th>
                    <td>{modify.person_home_ownership}</td>
                  </tr>
                  <tr>
                    <th>Emploi</th>
                    <td>{modify.person_emp_length}</td>
                  </tr>
                  <tr>
                    <th>Objectif</th>
                    <td>{modify.loan_intent}</td>
                  </tr>
                  <tr>
                    <th>Catégorie</th>
                    <td>{modify.loan_grade}</td>
                  </tr>
                  <tr>
                    <th>Montant</th>
                    <td>{modify.loan_amnt}</td>
                  </tr>
                  <tr>
                    <th>Intérêt</th>
                    <td>{modify.loan_int_rate}</td>
                  </tr>
                  <tr>
                    <th>Pourcentage</th>
                    <td>{modify.loan_percent_income}</td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td>{modify.status}</td>
                  </tr>
                  <tr>
                    <th>Résultat</th>
                    <td>{modify.prediction}</td>
                  </tr>
                </thead>

              </table>
     
        </div>
        <div style={{ clear: "both", textAlign: "center" }}>

          <div style={{ marginTop: "30px", display: "inline-block" }}>
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
