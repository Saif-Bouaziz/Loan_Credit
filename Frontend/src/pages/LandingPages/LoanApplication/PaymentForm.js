import * as React from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WorkIcon from '@mui/icons-material/Work';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';
import { useTheme } from '@mui/material/styles';

import MenuItem from '@mui/material/MenuItem';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;


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


export default function PaymentForm({ onFormSubmit }) {

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
          <TextField fullWidth label="Prénom" id="fullWidth" name='first_name'
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
          <TextField fullWidth label="Nom" id="fullWidth" name='last_name'
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
            label="Age"
            name="person_age"
            value={formData.person_age}
            onChange={(e) => handleInputChange(e)}
          />
          <TextField

            id="demo-helper-text-aligned-no-helper"
            label="Numéro CIN"
            name='cin'
            value={formData.cin}
            onChange={(e) => handleInputChange(e)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Numéro de téléphone" id="fullWidth" name='num_tel'
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
            <FormLabel id="demo-row-radio-buttons-group-label">Situation Sociale</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name='marriage_status'
              value={formData.marriage_status}
              onChange={(e) => handleInputChange(e)}
            >
              <FormControlLabel value="married" control={<Radio />} label="Marrié" />
              <FormControlLabel value="single" control={<Radio />} label="Célibataire" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Profession" id="fullWidth" name='job'
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
          <TextField fullWidth label="Durée dans le poste actuel" id="fullWidth" name="person_emp_length"
            value={formData.person_emp_length} onChange={(e) => handleInputChange(e)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Adresse" id="fullWidth" name='adress' value={formData.adress} onChange={(e) => handleInputChange(e)}
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
              label="Propriété de la maison"
              helperText="Veuillez sélectionner votre statut de propriété immobilière"
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
          <TextField fullWidth label="Travail actuel" id="fullWidth" name='job'
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


        <TextField
          name='region'
          value={formData.region}
          onChange={(e) => handleInputChange(e)}
          label="État"
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
          label="Ville"
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
          label="Code Postale"
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
    </React.Fragment >
  );
}
