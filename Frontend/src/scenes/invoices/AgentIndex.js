import React, { useState, useEffect } from 'react';
import AgentTable from './AgentTable';
import { useNavigate } from 'react-router-dom';



const AgentIndex = () => {
 // const [selectedDemande, setSelectedDemande] = useState(null);
  //const [isEditing, setIsEditing] = useState(false);
  const [agentsData, setAgentsData] = useState([]);


useEffect(() => {
  fetch('http://localhost:8000/credit/get_agent')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Process the data returned by the API
    setAgentsData(data)
  })
  .catch(error => {
    console.error(error); // Handle any errors that occurred during the request
  });
}, []);


const navigate = useNavigate();

  const handleAdd = ()=> {
    navigate("/ajout_agent");
  };




  return (
    <div className="container">
    
           
                <AgentTable
                agents={agentsData}
                handleAdd={handleAdd}
                />
           
      
    </div>
      
  );
};

export default AgentIndex;
