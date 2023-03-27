import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox'; 
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';  
import Box from '@mui/material/Box'; 
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work'; 
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PasswordIcon from '@mui/icons-material/Password';
import AddLocationIcon from '@mui/icons-material/AddLocation'; 
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select'; 

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}; 

const names = [
  'RENT',
  'MORTGAGE',
  'OWN',
  'OTHER',
]; 

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function PaymentForm() { 
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <React.Fragment>
      
      
      
      <Grid container spacing={3}> 
        <Grid item xs={12} md={6}>
        <TextField fullWidth label="First Name" id="fullWidth" 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}  
        /> 
        </Grid> 

        <Grid item xs={12} md={6}>
        <TextField fullWidth label="Last Name" id="fullWidth"  
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}   
        />
        </Grid>   

        <Grid item xs={12} md={6}>
        <TextField fullWidth label="Email" id="fullWidth"  
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}  
        />
        </Grid> 

        <Grid item xs={12} md={6}> 
        <TextField
 
  id="demo-helper-text-aligned"
  label="AGE"
/>
<TextField
  
  id="demo-helper-text-aligned-no-helper"
  label="CIN"
/>
        </Grid>  
       
        <Grid item xs={12} md={6}>
        <TextField fullWidth label="Mobile Number" id="fullWidth"  
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocalPhoneIcon />
            </InputAdornment>
          ),
        }}  
        />
        </Grid> 

        <Grid item xs={12} md={6}>
        <FormControl>
 <FormLabel id="demo-row-radio-buttons-group-label">Marital Statas</FormLabel>
 <RadioGroup
  row
  aria-labelledby="demo-row-radio-buttons-group-label"
  name="row-radio-buttons-group"
 >
 <FormControlLabel value="female" control={<Radio />} label="Married" />
 <FormControlLabel value="male" control={<Radio />} label="Single" />
 </RadioGroup>
</FormControl>
</Grid> 
         
<Grid item xs={12} md={6}>
<TextField fullWidth label="Present Job" id="fullWidth"  
InputProps={{
  startAdornment: (
    <InputAdornment position="start">
      <WorkIcon />
    </InputAdornment>
  ),
}}  
/>
</Grid>  

<Grid item xs={12} md={6}>
<TextField fullWidth label="Years in Current Job" id="fullWidth" />
</Grid>  

<Grid item xs={12} md={6}>
<TextField fullWidth label="Present Adress" id="fullWidth"  
InputProps={{
  startAdornment: (
    <InputAdornment position="start">
      <AddLocationIcon />
    </InputAdornment>
  ),
}}  
/>
</Grid>  

<Grid item xs={12} md={6}>
<FormControl sx={{  width: 300 }}>
        <InputLabel id="demo-multiple-name-label" >Home Ownership </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
</Grid> 

<Grid item xs={12} md={6}>  

     
        <TextField
          label="State"
          id="outlined-start-adornment"
          sx={{ m:1,width: '20ch' }} 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SouthAmericaIcon />
              </InputAdornment>
            ),
          }}  
        />
        
        <TextField
  label="City"
  id="outlined-start-adornment"
  sx={{ m:1, width: '20ch' }} 
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <LocationCityIcon />
      </InputAdornment>
    ),
  }}  
/>
<TextField
 label="Postal/Zip Code"
 id="outlined-start-adornment"
 sx={{ m:1, width: '21ch' }}  
 InputProps={{
  startAdornment: (
    <InputAdornment position="start">
      <MarkAsUnreadIcon/>
    </InputAdornment>
  ),
}}  
 />   
        
        
        
        
        
</Grid>


        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="All informations given are correct"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}