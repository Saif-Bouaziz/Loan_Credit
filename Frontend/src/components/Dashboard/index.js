import React, { useState, useEffect } from 'react';
import Table from './Table';
import Edit from './Edit';
import Axios from 'axios'
import emailjs from '@emailjs/browser'

const Dashboard = () => {
  const [datas, setDatas] = React.useState([]);
  const [agent, setAgent] = React.useState(true);

  const [selectedDemande, setSelectedDemande] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {


    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer  ${localStorage.getItem('access')}`,
        'Accept': 'application/json'
      }
    };
    /*
    Axios.get('http://127.0.0.1:8000/auth/users/me', config).then((response) => {
      console.log(response.data.is_agent)
      setAgent(response.data.is_agent)
    });  
    */

    Axios.get('http://127.0.0.1:8000/credit/demandeApi').then((response) => {
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
          <Table
            demandes={datas}
            handleEdit={handleEdit}
          />
          <br /><br /><br /><br /><br /><br /><br />
        </div>
      )}

      {isEditing && (
        <Edit
          selectedDemande={selectedDemande}
          setIsEditing={setIsEditing}
        />)}

    </div>
  );
};

export default Dashboard;
