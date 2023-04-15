import React, { useState, useEffect } from 'react';
import Dashboard from '../../../components/Dashboard';
import './index.css'
import ButtonAppBar from '../../../components/Navbar1'
import axios from "axios"


function Agent() {
  const [agent, setAgent] = React.useState(true);

  useEffect(() => {


    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer  ${localStorage.getItem('access')}`,
        'Accept': 'application/json'
      }
    };
    /*axios.get('http://127.0.0.1:8000/auth/users/me', config).then((response) => {
      console.log(response.data.is_agent)
      setAgent(response.data.is_agent)
    });*/
  });
  return (
    <div className='agent'>
      {agent && (<div>
        <ButtonAppBar />
        <Dashboard />
      </div>)}
      {!agent && (<div>
        <h1>Vous n'etes pas un agent</h1>
      </div>)}
    </div>

  );
}
export default Agent;
