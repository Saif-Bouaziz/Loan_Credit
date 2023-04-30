import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title'; 
import { useEffect } from 'react'; 
import { useState } from 'react'; 
import axios from 'axios'; 
import { Link } from 'react-router-dom';




function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {  
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
      <Title>Liste des Crédits</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>IdCredit</TableCell>
            <TableCell>demande__last_name</TableCell>
            <TableCell>demande__first_name</TableCell>
            <TableCell>montant_principal</TableCell>
            <TableCell align="right">montant_restant</TableCell> 
            <TableCell align="right">taux</TableCell> 
            <TableCell align="right">demande__loan_intent</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {datass.filter(data => data.demande__first_name === `${client.name}`).map((datass) => (
            <TableRow key={datass.IdCredit}>
              <TableCell>{datass.IdCredit}</TableCell>
              <TableCell>{datass.demande__last_name}</TableCell>
              <TableCell>{datass.demande__first_name}</TableCell>
              <TableCell>{datass.montant_principal}</TableCell> 
              <TableCell align="right">{datass.montant_restant}</TableCell>
              <TableCell align="right">{datass.taux}</TableCell>
              <TableCell align="right">{datass.demande__loan_intent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link to="/liste"  sx={{ mt: 3 }} style={{ textDecoration: 'none', color: 'inherit' }}>
        Voir liste des demandes
      </Link>
    </React.Fragment>
  );
}
