import React, { useState, useEffect } from 'react';
import ClientTable from './ClientTable';
import ClientEdit from './ClientEdit';



const ClientIndex = () => {
  const [selectedDemande, setSelectedDemande] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [demandesData, setDemandesData] = useState([]);


useEffect(() => {
  fetch('http://localhost:8000/credit/demande')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Process the data returned by the API
    setDemandesData(data)
  })
  .catch(error => {
    console.error(error); // Handle any errors that occurred during the request
  });
}, []);



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
                />
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
