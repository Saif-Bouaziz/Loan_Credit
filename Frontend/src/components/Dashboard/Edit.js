import Swal from 'sweetalert2';
import axios from 'axios'
import emailjs from '@emailjs/browser'
import i18n from 'i18next';
i18n.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        'Hello': 'Hello',
        'Welcome to my app': 'Welcome to my app',
        'PERSONAL': 'PERSONAL',
        'EDUCATION': 'EDUCATION',
        'MEDICAL': 'MEDICAL',
        'VENTURE': 'VENTURE',
        'DEBT CONSOLIDATION': 'DEBT CONSOLIDATION',
        'OTHER': 'OTHER',
        'RENT': 'RENT',
        'MORTGAGE': 'MORTGAGE',
        'OWN': 'OWN',
        'married': 'married',
        'single': 'single',
        'Refused': 'Refused'

      }
    },
    fr: {
      translation: {
        'Hello': 'Bonjour',
        'Welcome to my app': 'Bienvenue dans mon application',
        'PERSONAL': 'PERSONNEL',
        'EDUCATION': 'EDUCATION',
        'MEDICAL': 'MEDICAL',
        'VENTURE': 'ENTREPRISE',
        'DEBT CONSOLIDATION': 'CONSOLIDATION DE DETTE',
        'OTHER': 'AUTRE',
        'RENT': 'LOCATION',
        'MORTGAGE': 'HYPOTHÈQUE',
        'OWN': 'PROPRIÉTAIRE',
        'married': 'MARIÉ(E)',
        'single': 'SEUL(E)',
        'Refused': 'Non validée'


      }
    }
  }
});
i18n.changeLanguage('fr');



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
      title: 'Validée!',
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
      title: 'Non Validée!',
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
  const gradeA = async () => {
    const response = await axios
      .patch(`http://127.0.0.1:8000/credit/demandeApi/${selectedDemande.DemandeId}`, { "loan_grade": "A" })
      .catch((error) => console.log('Error: ', error));
    if (response && response.data) {
      console.log(response);
      console.log(response.data);
    }
    Swal.fire({
      icon: 'success',
      title: 'Catégorie changé',
      text: 'Catégorie changé avec succée',
      showConfirmButton: false,
      timer: 1500,
    });
    setIsEditing(false);


  };
  const gradeB = async () => {
    const response = await axios
      .patch(`http://127.0.0.1:8000/credit/demandeApi/${selectedDemande.DemandeId}`, { "loan_grade": "B" })
      .catch((error) => console.log('Error: ', error));
    if (response && response.data) {
      console.log(response);
      console.log(response.data);
    }
    Swal.fire({
      icon: 'success',
      title: 'Catégorie changé',
      text: 'Catégorie changé avec succée',
      showConfirmButton: false,
      timer: 1500,
    });
    setIsEditing(false);

  };
  const gradeC = async () => {
    const response = await axios
      .patch(`http://127.0.0.1:8000/credit/demandeApi/${selectedDemande.DemandeId}`, { "loan_grade": "C" })
      .catch((error) => console.log('Error: ', error));
    if (response && response.data) {
      console.log(response);
      console.log(response.data);
    }
    Swal.fire({
      icon: 'success',
      title: 'Catégorie changé',
      text: 'Catégorie changé avec succée',
      showConfirmButton: false,
      timer: 1500,
    });
    setIsEditing(false);

  };
  const gradeD = async () => {
    const response = await axios
      .patch(`http://127.0.0.1:8000/credit/demandeApi/${selectedDemande.DemandeId}`, { "loan_grade": "D" })
      .catch((error) => console.log('Error: ', error));
    if (response && response.data) {
      console.log(response);
      console.log(response.data);
    }
    Swal.fire({
      icon: 'success',
      title: 'Catégorie changé',
      text: 'Catégorie changé avec succée',
      showConfirmButton: false,
      timer: 1500,
    });
    setIsEditing(false);

  };
  const gradeE = async () => {
    const response = await axios
      .patch(`http://127.0.0.1:8000/credit/demandeApi/${selectedDemande.DemandeId}`, { "loan_grade": "E" })
      .catch((error) => console.log('Error: ', error));
    if (response && response.data) {
      console.log(response);
      console.log(response.data);
    }
    Swal.fire({
      icon: 'success',
      title: 'Catégorie changé',
      text: 'Catégorie changé avec succée',
      showConfirmButton: false,
      timer: 1500,
    });
    setIsEditing(false);

  };
  const gradeF = async () => {
    const response = await axios
      .patch(`http://127.0.0.1:8000/credit/demandeApi/${selectedDemande.DemandeId}`, { "loan_grade": "F" })
      .catch((error) => console.log('Error: ', error));
    if (response && response.data) {
      console.log(response);
      console.log(response.data);
    }
    Swal.fire({
      icon: 'success',
      title: 'Catégorie changé',
      text: 'Catégorie changé avec succée',
      showConfirmButton: false,
      timer: 1500,
    });
    setIsEditing(false);

  };
  const gradeG = async () => {
    const response = await axios
      .patch(`http://127.0.0.1:8000/credit/demandeApi/${selectedDemande.DemandeId}`, { "loan_grade": "G" })
      .catch((error) => console.log('Error: ', error));
    if (response && response.data) {
      console.log(response);
      console.log(response.data);
    }
    Swal.fire({
      icon: 'success',
      title: 'Catégorie changé',
      text: 'Catégorie changé avec succée',
      showConfirmButton: false,
      timer: 1500,
    });
    setIsEditing(false);

  };
  return (
    <div className="small-container">
      <div >
        <br />
        <h1>Details de Demande</h1>
        <br />
        <div  >
          <table >

            <thead>
              <tr>
                <th>Nom</th>
                <td>{selectedDemande.last_name}</td>
              </tr>
              <tr>
                <th>Prénom</th>
                <td>{selectedDemande.first_name}</td>
              </tr>
              <tr>
                <th>Age</th>
                <td>{selectedDemande.person_age}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{selectedDemande.email}</td>
              </tr>
              <tr>
                <th>CIN</th>
                <td>{selectedDemande.cin}</td>
              </tr>
              <tr>
                <th>Addresse</th>
                <td>{selectedDemande.adress}</td>
              </tr>
              <tr>
                <th>Region</th>
                <td>{selectedDemande.region}</td>
              </tr>
              <tr>
                <th>Ville</th>
                <td>{selectedDemande.city}</td>
              </tr>
              <tr>
                <th>Code postal</th>
                <td>{selectedDemande.code_postal}</td>
              </tr>
              <tr>
                <th>Numéro de téléphone</th>
                <td>{selectedDemande.num_tel}</td>
              </tr>
              <tr>
                <th>Statut matrimonial</th>
                <td>{i18n.t(selectedDemande.marriage_status)}</td>
              </tr>

              <tr>
                <th>Salaire</th>
                <td>{selectedDemande.person_income}</td>
              </tr>
              <tr>
                <th>Propriété</th>
                <td>{i18n.t(selectedDemande.person_home_ownership)}</td>
              </tr>
              <tr>
                <th>Emploi</th>
                <td>{selectedDemande.job}</td>
              </tr>
              <tr>
                <th>Années de travail</th>
                <td>{selectedDemande.person_emp_length}</td>
              </tr>
              <tr>
                <th>Objectif</th>
                <td>{i18n.t(selectedDemande.loan_intent)}</td>
              </tr>

              <tr>
                <th>Montant</th>
                <td>{selectedDemande.loan_amnt}</td>
              </tr>
              <tr>
                <th>Durée du prêt</th>
                <td>{selectedDemande.loan_duration}</td>
              </tr>
              <tr>
                <th>Intérêt</th>
                <td>{selectedDemande.loan_int_rate}</td>
              </tr>
              <tr>
                <th>Pourcentage</th>
                <td>{selectedDemande.loan_percent_income}</td>
              </tr>
              <tr>
                <th>Justificatif d'identité</th>
                <td><img src={`data:image/jpeg;base64,${selectedDemande.img_cin}`} /></td>
              </tr>
              <tr>
                <th>Avis d'imposition</th>
                <td><img src={`data:image/jpeg;base64,${selectedDemande.img_avis_imposition}`} /></td>
              </tr>
              <tr>
                <th>Bulletins de salaire</th>
                <td><img src={`data:image/jpeg;base64,${selectedDemande.img_bulletins_salaire}`} /></td>
              </tr>
              <tr>
                <th>Relevés de compte en banque</th>
                <td><img src={`data:image/jpeg;base64,${selectedDemande.img_Releves_compte_banque}`} /></td>
              </tr>
              <tr>
                <th>Justificatif de domicile actuel</th>
                <td><img src={`data:image/jpeg;base64,${selectedDemande.img_justificatif_domicile_actuel}`} /></td>
              </tr>
              <tr>
                <th>Catégorie</th>
                <td>{selectedDemande.loan_grade}
                  <br />
                  <button className="button muted-button" onClick={gradeA}>A</button>&nbsp;
                  <button className="button muted-button" onClick={gradeB}>B</button>&nbsp;
                  <button className="button muted-button" onClick={gradeC}>C</button>&nbsp;
                  <button className="button muted-button" onClick={gradeD}>D</button>&nbsp;
                  <button className="button muted-button" onClick={gradeE}>E</button>&nbsp;
                  <button className="button muted-button" onClick={gradeF}>F</button>&nbsp;
                  <button className="button muted-button" onClick={gradeG}>G</button>&nbsp;
                </td>
              </tr>
              <tr>
                <th>Decision</th>
                <td>{i18n.t(selectedDemande.decision)}</td>
              </tr>


            </thead>

          </table>

        </div>

        <div style={{ clear: "both", textAlign: "center" }}>
          <div style={{ marginTop: '30px', display: "inline-block" }}>


            <button
              style={{ backgroundColor: "#BBD6B8" }}
              className="button muted-button"
              onClick={handleClick1}
            >
              Validée
            </button>

            &nbsp;&nbsp;&nbsp;
            <button
              style={{ backgroundColor: "#E96479" }}

              className="button muted-button"
              onClick={handleClick2}
            >
              Non validée
            </button>
            &nbsp;&nbsp;&nbsp;
            <button
              className="button muted-button"
              onClick={() => setIsEditing(false)}
            >
              Retour
            </button>

          </div>
          <br /><br /><br /><br /><br /><br /><br />

        </div>
      </div>
    </div>
  );
};

export default Edit;
