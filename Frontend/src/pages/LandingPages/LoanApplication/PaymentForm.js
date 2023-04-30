import * as React from 'react';
import ReactDOM from 'react-dom';
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
import Axios from 'axios'

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

const currencies = [
  {
    value: 'RENT',
    label: 'LOCATION',
  },
  {
    value: 'MORTGAGE',
    label: 'HYPOTHÈQUE',
  },
  {
    value: 'OWN',
    label: 'PROPRIÉTAIRE',
  },
  {
    value: 'OTHER',
    label: 'AUTRE',
  },
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function PaymentForm({ onFormSubmit }) {
  const theme = useTheme();
  //const [personName, setPersonName] = React.useState([]);

  /*const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };*/
  const [formData, setFormData] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    person_age: "",
    cin: "",
    num_tel: "",
    marriage_status: "",
    job: "",
    person_emp_length: "",
    adress: "",
    person_home_ownership: "",
    region: "",
    city: "",
    code_postal: "",
  })

  const handleInputChange = (e) => {
    const newdata = { ...formData }
    newdata[e.target.name] = e.target.value
    setFormData(newdata)
    onFormSubmit(newdata);
  }
  return (
    <React.Fragment>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="First Name" id="fullWidth" name='first_name'
            value={formData.first_name}
            onChange={(e) => handleInputChange(e)}
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
          <TextField fullWidth label="Last Name" id="fullWidth" name='last_name'
            value={formData.last_name}
            onChange={(e) => handleInputChange(e)}
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
          <TextField fullWidth label="Email" id="fullWidth" name='email'
            value={formData.email}
            onChange={(e) => handleInputChange(e)}
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
            name="person_age"
            value={formData.person_age}
            onChange={(e) => handleInputChange(e)}
          />
          <TextField

            id="demo-helper-text-aligned-no-helper"
            label="CIN"
            name='cin'
            value={formData.cin}
            onChange={(e) => handleInputChange(e)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Mobile Number" id="fullWidth" name='num_tel'
            value={formData.num_tel}
            onChange={(e) => handleInputChange(e)}
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
              name="marriage_status"
              value={formData.marriage_status}
              onChange={(e) => handleInputChange(e)}
            >
              <FormControlLabel value="married" control={<Radio />} label="MARIÉ(E)" />
              <FormControlLabel value="single" control={<Radio />} label="SEUL(E)" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Present Job" id="fullWidth" name='job'
            value={formData.job} onChange={(e) => handleInputChange(e)}
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
          <TextField fullWidth label="Years in Current Job" id="fullWidth" name="person_emp_length"
            value={formData.person_emp_length} onChange={(e) => handleInputChange(e)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Present Adress" id="fullWidth" name='adress' value={formData.adress} onChange={(e) => handleInputChange(e)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AddLocationIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>


        <Grid item xs={12} md={6} >
          <FormControl sx={{ width: 300 }}>
            <TextField
              name='person_home_ownership'
              value={formData.person_home_ownership}
              onChange={(e) => handleInputChange(e)}
              id="outlined-select-currency"
              select
              label="Home Ownership"
              helperText="Please select your Home ownership"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>


          <TextField
            name='region'
            value={formData.region}
            onChange={(e) => handleInputChange(e)}
            label="State"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '20ch' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SouthAmericaIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            name='city'
            value={formData.city}
            onChange={(e) => handleInputChange(e)}
            label="City"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '20ch' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationCityIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            name='code_postal'
            value={formData.code_postal}
            onChange={(e) => handleInputChange(e)}
            label="Postal/Zip Code"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '21ch' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MarkAsUnreadIcon />
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
