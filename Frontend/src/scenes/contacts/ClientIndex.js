import React, { useState, useEffect } from 'react';
import ClientTable from './ClientTable';
import ClientEdit from './ClientEdit';
import Axios from 'axios'




const ClientIndex = () => {
  const [selectedDemande, setSelectedDemande] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [demandesData, setDemandesData] = useState([]);




  useEffect(() => {
    Axios.get('http://127.0.0.1:8000/credit/get_demande').then((response) => {
      setDemandesData(response.data)

    });
  });

  const handleEdit = DemandeId => {
    const [demande] = demandesData.filter(demande => demande.DemandeId === DemandeId);
    setSelectedDemande(demande);
    setIsEditing(true);
  };


  return (
    <div className="container">
      {!isEditing && (
        <div>
          <ClientTable
            demandes={demandesData}
            handleEdit={handleEdit}
            setDemandesData={setDemandesData}
          />
          <br /><br /><br /><br /><br /><br /><br />

        </div>
      )}

      {isEditing && (
        <ClientEdit
          selectedDemande={selectedDemande}
          setIsEditing={setIsEditing}
        />
      )}
    </div>

  );
};

export default ClientIndex;
