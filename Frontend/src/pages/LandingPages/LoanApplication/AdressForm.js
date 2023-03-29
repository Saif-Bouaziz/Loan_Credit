import * as React from 'react';
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
  const [formData, setFormData] = React.useState({
    loan_intent:"",
    loan_amnt:"",
    loan_duration:"",
    loan_percent_income:"",
    loan_int_rate:"",
    person_income:"",
  });
  const handleInputChange = (e) => {
    const newdata={...formData}
    newdata[e.target.name]=e.target.value
    setFormData(newdata)
    onFormSubmit(newdata);
    //console.log(newdata)
  };

  return (
    <React.Fragment>
       
      
      <Grid container spacing={3}>  
      
        <Grid item xs={12} sm={10} > 
          <TextField
           name='loan_intent'
           value={formData.loan_intent}
           onChange={(e)=>handleInputChange(e)}
            id="outlined-select-currency"
            select
            label="Type of Loan"
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
          <InputLabel htmlFor="outlined-adornment-amount">Loan Amount</InputLabel>
          <OutlinedInput
            name='loan_amnt'
           value={formData.loan_amnt}
            onChange={(e)=>handleInputChange(e)}
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
        </Grid> 


        <Grid item xs={12} sm={6}> 
             <FormControl>
             <FormLabel id="demo-row-radio-buttons-group-label">Loan Duration</FormLabel>
             <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="loan_duration"
              value={(e)=>formData.loan_duration(e)}
              onChange={handleInputChange}
             >
             <FormControlLabel value="12m" control={<Radio />} label="12 months" />
             <FormControlLabel value="24m" control={<Radio />} label="24 months" /> 
             <FormControlLabel value="36m" control={<Radio />} label="36 months" /> 
             <FormControlLabel value="48m" control={<Radio />} label="48 months" /> 
             </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Loan Percent Income</InputLabel>
            <OutlinedInput
              name="loan_percent_income"
             value={formData.loan_percent_income}
              onChange={(e)=>handleInputChange(e)}
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start">%</InputAdornment>}
              label="Amount"
            />
          </FormControl>
        </Grid>  
        <Grid item xs={12} sm={6}>
        <FormControl fullWidth sx={{ m: 1 }}>
   <InputLabel htmlFor="outlined-adornment-amount">Interest Rate</InputLabel>
   <OutlinedInput
    name="loan_int_rate"
    value={formData.loan_int_rate}
    onChange={(e)=>handleInputChange(e)}
     id="outlined-adornment-amount"
     startAdornment={<InputAdornment position="start">%</InputAdornment>}
     label="Amount"
   /> 
   
 </FormControl>
        
        
        
        </Grid>  

        <Grid item xs={12} sm={6}>
        <FormControl fullWidth sx={{ m: 1 }}>
   <InputLabel htmlFor="outlined-adornment-amount">Person Income</InputLabel>
   <OutlinedInput
    name="person_income"
    value={formData.person_income}
    onChange={(e)=>handleInputChange(e)}
     id="outlined-adornment-amount"
     startAdornment={<InputAdornment position="start">TND</InputAdornment>}
     label="Amount"
   /> 
   
 </FormControl>
        
        
        
        </Grid> 

      </Grid>
    </React.Fragment>
  );
}
