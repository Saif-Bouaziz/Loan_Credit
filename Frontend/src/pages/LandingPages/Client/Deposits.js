import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title'; 
import { useEffect } from 'react'; 
import { useState } from 'react';
import axios from 'axios'; 

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() { 
  const [datass, setDatass] = React.useState([]);
  const [client, setClient] = React.useState(false);

  useEffect(() => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer  ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get('http://127.0.0.1:8000/auth/users/me', config).then((response) => {
        console.log(response.data)
        setClient(response.data)
    });
});
  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer  ${localStorage.getItem('access')}`,
        'Accept': 'application/json'
      }
    };
    
    axios.get('http://127.0.0.1:8000/credit/get_credits').then((response) => {
      console.log(response.data)
      setDatass(response.data)
    });
  });
  return (
    <React.Fragment>
      <Title>Somme du montant des crédits</Title>      
      <Typography component="p" variant="h4">
  {datass
    .filter(data => data.demande__first_name === client.name)
    .reduce((total, data) => total + data.montant_principal, 0)}
</Typography>
      

<Typography color="text.secondary" sx={{ flex: 1 }}>
  Vous avez {datass.filter(data => data.demande__first_name === `${client.name}`).length} non encore payé
</Typography>

      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
