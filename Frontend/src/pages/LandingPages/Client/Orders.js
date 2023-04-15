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

  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer  ${localStorage.getItem('access')}`,
        'Accept': 'application/json'
      }
    };
    
    axios.get('http://127.0.0.1:8000/credit/demandeApi').then((response) => {
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
            <TableCell>ID Demande</TableCell>
            <TableCell>Prénom</TableCell>
            <TableCell>Nom</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="right">Salaire</TableCell> 
            <TableCell align="right">Objectif du pret</TableCell> 
            <TableCell align="right">Montant</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {datass.map((datass) => (
            <TableRow key={datass.DemandeId}>
              <TableCell>{datass.DemandeId}</TableCell>
              <TableCell>{datass.first_name}</TableCell>
              <TableCell>{datass.last_name}</TableCell>
              <TableCell>{datass.email}</TableCell> 
              <TableCell align="right">{datass.person_income}</TableCell>
              <TableCell align="right">{datass.loan_intent}</TableCell>
              <TableCell align="right">{datass.loan_amnt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link to="/liste"  sx={{ mt: 3 }}>
        Voir liste des demandes
      </Link>
    </React.Fragment>
  );
}
