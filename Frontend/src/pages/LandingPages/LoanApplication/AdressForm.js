import * as React from 'react';
import { useRef } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Axios from 'axios'



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
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    console.log(inputRef)
    // Access the selected file from the input event
    const selectedFile = event.target.files[0];

    // Read the binary data from the selected file using FileReader
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      // The binary data will be available as e.target.result
      const binaryData = event.target.result;
      formData.image4 = btoa(binaryData)
      // Use the binary data as you wish, for example, send it to a server, display it in an img element, etc.
      console.log('Binary Data:', btoa(binaryData));
    };
    fileReader.readAsBinaryString(selectedFile); // Specify the desired read mode, e.g., readAsBinaryString, readAsArrayBuffer, etc.

  };


  const handleFileChange1 = (event) => {
    console.log(inputRef)
    // Access the selected file from the input event
    const selectedFile = event.target.files[0];

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
    img_justificatif_domicile_actuel: ""

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
                {option.label}
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
  onChange={(e)=>handleInputChange(e)}
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
          <FormControl fullWidth sx={{ m: 1 }}>
            <h3 >Justificatif d'identité</h3> <Input type="file" ref={inputRef} onChange={(e) => handleFileChange1(e)} />
            <h3 >Avis d'imposition</h3> <Input type="file" ref={inputRef} onChange={(e) => handleFileChange2(e)} />
            <h3 >Bulletins de salaire</h3> <Input type="file" ref={inputRef} onChange={(e) => handleFileChange3(e)} />
            <h3 >Relevés de compte en banque</h3> <Input type="file" ref={inputRef} onChange={(e) => handleFileChange4(e)} />
            <h3 >Justificatif de domicile actuel</h3> <Input type="file" ref={inputRef} onChange={(e) => handleFileChange5(e)} />
          </FormControl>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
