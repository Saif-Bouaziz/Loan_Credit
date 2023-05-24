import Paper from '@mui/material/Paper';
import {
  Chart,
  PieSeries,
  Title,
  Legend,
  Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation, Palette } from '@devexpress/dx-react-chart';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Demo() {
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
<<<<<<< HEAD
    { region: `Montant des crédits (${datass.filter(data => data.demande__first_name === client.name).reduce((total, data) => total + data.montant_principal, 0)}Dt)`, val: totalMontantPrincipal },
    {
      region: `Montant déja payé (${datass.filter(data => data.demande__first_name === client.name).reduce((total, data) => total + (data.montant_principal - data.montant_restant), 0)}Dt)`
      , val: totalDifference
    },
  ];
  const colors = ['#0088FE', '#00C49F'];
=======
    { region: `Montant des crédits (${datass.filter(data => data.demande__first_name === client.name).reduce((total, data) => total + data.montant_principal, 0)}Dt)`, val: totalMontantPrincipal},
    { region: `Montant déja payé (${datass.filter(data => data.demande__first_name === client.name).reduce((total, data) => total + (data.montant_principal - data.montant_restant), 0)}Dt)`
    , val: totalDifference},
  ];   
  
>>>>>>> master

  
  return (
    <Paper>
      <Chart
        data={data}  

      >
        <PieSeries
          valueField="val"
          argumentField="region"
<<<<<<< HEAD
          innerRadius={0.6}
=======
          innerRadius={0.6}     
>>>>>>> master

        />
        <Title
          text="The Population of Continents and Regions"
        />
        <Legend />
        <Tooltip />

        <Animation />
      </Chart>
    </Paper>
  );
}


