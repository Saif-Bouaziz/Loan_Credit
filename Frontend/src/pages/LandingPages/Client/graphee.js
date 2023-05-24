import React from "react";
import { Chart } from "react-google-charts";
import axios from 'axios'; 
import { useEffect, useState } from 'react';







export const options = {
  title: "Suivi de votre crédit", 
  colors: ['#F5CB5C','#C0C0C0'],
};

export function Graphee() { 
  const [datass, setDatass] = useState([]);
  const [client, setClient] = useState(false);

  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer  ${localStorage.getItem('access')}`,
        'Accept': 'application/json'
      }
    };
    axios.get('http://127.0.0.1:8000/auth/users/me', config)
      .then((response) => {
        console.log(response.data)
        setClient(response.data)
      });
  }, []);

  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer  ${localStorage.getItem('access')}`,
        'Accept': 'application/json'
      }
    };
    
    axios.get('http://127.0.0.1:8000/credit/get_credits')
      .then((response) => {
        console.log(response.data)
        setDatass(response.data)
      });
  }, []);

  const totalMontantPrincipal = datass
    .filter(data => data.demande__first_name === client.name)
    .reduce((total, data) => total + data.montant_principal, 0); 

    const totalDifference = datass
  .filter(data => data.demande__first_name === client.name)
  .reduce((total, data) => total + (data.montant_principal - data.montant_restant), 0); 
  const data = [ 
  
    ["Task", "Hours per Day"],
    [`Montant des crédits (${datass.filter(data => data.demande__first_name === client.name).reduce((total, data) => total + data.montant_principal, 0)}Dt)`, totalMontantPrincipal],
    [`Montant déja payé (${datass.filter(data => data.demande__first_name === client.name).reduce((total, data) => total + (data.montant_principal - data.montant_restant), 0)}Dt)`, totalDifference],
  ];
  return (
    <Chart style={{ marginLeft:100 }}
      chartType="PieChart"
      data={data}
      options={options}
      width={"80%"}
      height={"400px"}
    />
  );
}
