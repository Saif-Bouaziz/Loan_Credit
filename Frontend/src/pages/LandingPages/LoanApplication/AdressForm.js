import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Axios from 'axios'
import Button from '@material-ui/core/Button';
import PublishIcon from '@mui/icons-material/Publish';
import Stack from '@mui/material/Stack';

import i18n from 'i18next';
i18n.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        'Hello': 'Hello',
        'Welcome to my app': 'Welcome to my app',
        'PERSONAL': 'PERSONAL',
        'EDUCATION': 'EDUCATION',
        'MEDICAL': 'MEDICAL',
        'VENTURE': 'VENTURE',
        'DEBT CONSOLIDATION': 'DEBT CONSOLIDATION',
        'OTHER': 'OTHER',
        'RENT': 'RENT',
        'MORTGAGE': 'MORTGAGE',
        'OWN': 'OWN',
        'MARRIED': 'MARRIED',
        'single': 'single',

      }
    },
    fr: {
      translation: {
        'Hello': 'Bonjour',
        'Welcome to my app': 'Bienvenue dans mon application',
        'PERSONAL': 'PERSONNEL',
        'EDUCATION': 'EDUCATION',
        'MEDICAL': 'MEDICAL',
        'VENTURE': 'ENTREPRISE',
        'DEBT CONSOLIDATION': 'CONSOLIDATION DE DETTE',
        'OTHER': 'AUTRE',
        'RENT': 'LOCATION',
        'MORTGAGE': 'HYPOTHÈQUE',
        'OWN': 'PROPRIÉTAIRE',
        'MARRIED': 'MARIÉ(E)',
        'single': 'SEUL(E)',


      }
    }
  }
});
i18n.changeLanguage('fr');


const currencies = [
  {
    value: 'EDUCATION',
    label: 'EDUCATION',
  },
  {
    value: 'MEDICAL',
    label: 'MEDICAL',
  },
  {
    value: 'VENTURE',
    label: 'VENTURE',
  },
  {
    value: 'PERSONAL',
    label: 'PERSONAL',
  },
  {
    value: 'DEBT CONSOLIDATION',
    label: 'DEBT CONSOLIDATION',
  },
  {
    value: 'OTHER',
    label: 'OTHER',
  },
];

export default function AddressForm({ onFormSubmit }) {
  const [fileName1, setFileName1] = useState();
  const [fileName2, setFileName2] = useState();
  const [fileName3, setFileName3] = useState();
  const [fileName4, setFileName4] = useState();
  const [fileName5, setFileName5] = useState();
  const [datas, setDatas] = React.useState([]);
  const table = []

  useEffect(() => {
    Axios.get('http://127.0.0.1:8000/auth/user/getall').then((response) => {
      setDatas(response.data)
      console.log(datas)
      const agents = datas.filter(agents => agents.is_agent === true);
      console.log(agents[0])
    })



    for (let i = 0; i < agents.length; i++) {
      table.push(agents[i].email)
    }
    console.log(table);


  });



  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const inputRef = useRef(null);

  const handleFileChange1 = (event) => {
    console.log(inputRef)
    // Access the selected file from the input event
    const selectedFile = event.target.files[0];
    setFileName1(selectedFile.name)

    // Read the binary data from the selected file using FileReader
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      // The binary data will be available as e.target.result
      const binaryData = event.target.result;
      formData.img_cin = btoa(binaryData)
      // Use the binary data as you wish, for example, send it to a server, display it in an img element, etc.
      console.log('Binary Data:', btoa(binaryData));
    };
    fileReader.readAsBinaryString(selectedFile); // Specify the desired read mode, e.g., readAsBinaryString, readAsArrayBuffer, etc.




  };

  const handleFileChange2 = (event) => {
    console.log(inputRef)
    // Access the selected file from the input event
    const selectedFile = event.target.files[0];
    setFileName2(selectedFile.name)

    // Read the binary data from the selected file using FileReader
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      // The binary data will be available as e.target.result
      const binaryData = event.target.result;
      formData.img_avis_imposition = btoa(binaryData)
      // Use the binary data as you wish, for example, send it to a server, display it in an img element, etc.
      console.log('Binary Data:', btoa(binaryData));
    };
    fileReader.readAsBinaryString(selectedFile); // Specify the desired read mode, e.g., readAsBinaryString, readAsArrayBuffer, etc.

  };

  const handleFileChange3 = (event) => {
    console.log(inputRef)
    // Access the selected file from the input event
    const selectedFile = event.target.files[0];
    setFileName3(selectedFile.name)

    // Read the binary data from the selected file using FileReader
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      // The binary data will be available as e.target.result
      const binaryData = event.target.result;
      formData.img_bulletins_salaire = btoa(binaryData)
      // Use the binary data as you wish, for example, send it to a server, display it in an img element, etc.
      console.log('Binary Data:', btoa(binaryData));
    };
    fileReader.readAsBinaryString(selectedFile); // Specify the desired read mode, e.g., readAsBinaryString, readAsArrayBuffer, etc.

  };

  const handleFileChange4 = (event) => {
    console.log(inputRef)
    // Access the selected file from the input event
    const selectedFile = event.target.files[0];
    setFileName4(selectedFile.name)

    // Read the binary data from the selected file using FileReader
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      // The binary data will be available as e.target.result
      const binaryData = event.target.result;
      formData.img_Releves_compte_banque = btoa(binaryData)
      // Use the binary data as you wish, for example, send it to a server, display it in an img element, etc.
      console.log('Binary Data:', btoa(binaryData));
    };
    fileReader.readAsBinaryString(selectedFile); // Specify the desired read mode, e.g., readAsBinaryString, readAsArrayBuffer, etc.

  };

  const handleFileChange5 = (event) => {
    console.log(inputRef)
    // Access the selected file from the input event
    const selectedFile = event.target.files[0];
    setFileName5(selectedFile.name)

    // Read the binary data from the selected file using FileReader
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      // The binary data will be available as e.target.result
      const binaryData = event.target.result;
      formData.img_justificatif_domicile_actuel = btoa(binaryData)
      // Use the binary data as you wish, for example, send it to a server, display it in an img element, etc.
      console.log('Binary Data:', btoa(binaryData));
    };
    fileReader.readAsBinaryString(selectedFile); // Specify the desired read mode, e.g., readAsBinaryString, readAsArrayBuffer, etc.

  };

  const [formData, setFormData] = React.useState({
    loan_intent: "",
    loan_amnt: "",
    loan_duration: "",
    loan_percent_income: "",
    loan_int_rate: "",
    person_income: "",
    image4: "",
    img_cin: "",
    img_avis_imposition: "",
    img_bulletins_salaire: "",
    img_Releves_compte_banque: "",
    img_justificatif_domicile_actuel: "",
    AgentMail: `${table[getRandomInt(table.length)]}`,


  });

  const handleInputChange = (e) => {
    const newdata = { ...formData }
    newdata[e.target.name] = e.target.value
    setFormData(newdata)
    onFormSubmit(newdata);
    console.log(newdata)
  };

  return (
    <React.Fragment>


      <Grid container spacing={3}>

        <Grid item xs={12} sm={10} >
          <TextField
            name='loan_intent'
            value={formData.loan_intent}
            onChange={(e) => handleInputChange(e)}
            id="outlined-select-currency"
            select
            label="Objet du prêt"
            helperText="Please select your Loan Type"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {i18n.t(option.label)}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Montant du prêt</InputLabel>
            <OutlinedInput
              name='loan_amnt'
              value={formData.loan_amnt}
              onChange={(e) => handleInputChange(e)}
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start">TND</InputAdornment>}
              label="Amount"
            />
          </FormControl>
        </Grid>


        <Grid item xs={12} sm={6}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Durée du prêt</FormLabel>
            {/*<RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="loan_duration"
              value={(e) => formData.loan_duration(e)}
              onChange={handleInputChange}
            >
              <FormControlLabel value="12m" control={<Radio />} label="12 mois" />
              <FormControlLabel value="24m" control={<Radio />} label="24 mois" />
              <FormControlLabel value="36m" control={<Radio />} label="36 mois" />
              <FormControlLabel value="48m" control={<Radio />} label="48 moiss" />
            </RadioGroup> */}
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name='loan_duration'
              value={formData.loan_duration}
              onChange={(e) => handleInputChange(e)}
            >
              <FormControlLabel value="12m" control={<Radio />} label="12 mois" />
              <FormControlLabel value="24m" control={<Radio />} label="24 mois" />
              <FormControlLabel value="36m" control={<Radio />} label="36 mois" />
              <FormControlLabel value="48m" control={<Radio />} label="48 mois" />

            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Pourcentage du revenu consacré au remboursement du prêt</InputLabel>
            <OutlinedInput
              name="loan_percent_income"
              value={formData.loan_percent_income}
              onChange={(e) => handleInputChange(e)}
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start">%</InputAdornment>}
              label="Amount"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Taux d'intérêt</InputLabel>
            <OutlinedInput
              name="loan_int_rate"
              value={formData.loan_int_rate}
              onChange={(e) => handleInputChange(e)}
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start">%</InputAdornment>}
              label="Amount"
            />

          </FormControl>



        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Revenu personnel</InputLabel>
            <OutlinedInput
              name="person_income"
              value={formData.person_income}
              onChange={(e) => handleInputChange(e)}
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start">TND</InputAdornment>}
              label="Amount"
            />

          </FormControl>



        </Grid>
        <Grid item xs={12} sm={6}>


        </Grid>


        <Grid item xs={12} sm={6}>
          <FormLabel>Les documents necessaires</FormLabel>

          <br />
          <br />

          <FormControl fullWidth sx={{ m: 1 }}>
            <Stack direction="row" spacing={4}>

              <input id="contained-button-file1" style={{ display: 'none' }} type="file" ref={inputRef} onChange={(e) => handleFileChange1(e)} />
              <label htmlFor="contained-button-file1">
                <Button variant="contained" color="tertiary" component="span">
                  <PublishIcon />
                  <h1>Justificatif d'identité</h1>
                </Button>
                <h1>{fileName1}</h1>
              </label>
              <br />
              <input id="contained-button-file2" style={{ display: 'none' }} type="file" ref={inputRef} onChange={(e) => handleFileChange2(e)} />
              <label htmlFor="contained-button-file2">
                <Button variant="contained" color="tertiary" component="span">
                  <PublishIcon />
                  <h3 >Avis d'imposition</h3>
                </Button>
                <h1>{fileName2}</h1>
              </label>
              <br />
              <input id="contained-button-file3" style={{ display: 'none' }} type="file" ref={inputRef} onChange={(e) => handleFileChange3(e)} />
              <label htmlFor="contained-button-file3">
                <Button variant="contained" color="tertiary" component="span">
                  <PublishIcon />
                  <h3 >Bulletins de salaire</h3>
                </Button>
                <h1>{fileName3}</h1>
              </label>
              <br />
            </Stack>
            <br />

            <Stack direction="row" spacing={4}>

              <input id="contained-button-file4" style={{ display: 'none' }} type="file" ref={inputRef} onChange={(e) => handleFileChange4(e)} />
              <label htmlFor="contained-button-file4">
                <Button variant="contained" color="tertiary" component="span">
                  <PublishIcon />
                  <h3 >Relevés de compte en banque</h3>
                </Button>
                <h1>{fileName4}</h1>
              </label>
              <br />
              <input id="contained-button-file5" style={{ display: 'none' }} type="file" ref={inputRef} onChange={(e) => handleFileChange5(e)} />
              <label htmlFor="contained-button-file5">
                <Button variant="contained" color="tertiary" component="span">
                  <PublishIcon />
                  <h3 >Justificatif de domicile actuel</h3>
                </Button>
                <h1>{fileName5}</h1>
              </label>
              <br />
            </Stack>

          </FormControl>
        </Grid>

      </Grid>
    </React.Fragment >
  );
}
