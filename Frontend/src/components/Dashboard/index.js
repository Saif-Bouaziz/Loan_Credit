import React, { useState, useEffect } from 'react';
import Table from './Table';
import Edit from './Edit';
import Axios from 'axios'

const Dashboard = () => {
  const [datas, setDatas] = React.useState([]);
  const [selectedDemande, setSelectedDemande] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    Axios.get('http://127.0.0.1:8000/credit/demande').then((response) => {
      console.log(response.data)
      setDatas(response.data)
    });

  });

  const handleEdit = id => {
    const [demande] = datas.filter(demande => demande.DemandeId === id);
    setSelectedDemande(demande);
    setIsEditing(true);
  };

  return (
    <div className="container">
      {!isEditing && (
        <div>
          <br />
          <h2>Skander Abid</h2>

          <br />
          <Table
            demandes={datas}
            handleEdit={handleEdit}
          />
        </div>
      )}

      {isEditing && (
        <Edit
          selectedDemande={selectedDemande}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
