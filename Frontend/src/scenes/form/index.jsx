import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useState } from "react";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser'

import axios from 'axios'



const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password :"",
  });

  const handleFormSubmit = () => { 
    axios.post('http://127.0.0.1:8000/credit/add_agent', formData)
    .then(response => {
      console.log(response.data);
      Swal.fire({
        icon: 'success',
        title: 'Confirmé!',
        text: `Agent ajouté avec succés.`,
        showConfirmButton: false,
        timer: 1500,
      });
      var templateParams = {
        email_to: `${formData.email}`,
        message: `Cher/Chère ${formData.name},Votre compte a été créé avec succés ! Vous trouverez ci-joint les
        informations nécessaires pour votre identification. Email :${formData.email}, Mot de passe: ${formData.password} `
      };
  
      emailjs.send('service_a7ipo6k', 'template_16u38jh', templateParams, 'u0eiwSMN0Z1Wlo0Mz')
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
          console.log('FAILED...', error);
        });
    })
    .catch(error => {
      console.error(error);
    });
  };
  

  const handleInputChange = (e) => {
    const newdata={...formData}
    newdata[e.target.name]=e.target.value
    setFormData(newdata)
    console.log(newdata)
  };

  return (
    <Box m="20px">
      <Header title="CREATION AGENT" subtitle="Ajouter Nouveau Agent" />

      <Formik
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4"  },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nom et Prénom"
                onChange={(e)=>handleInputChange(e)}
                value={values.name}
                InputLabelProps={{ shrink: true, style: { color: "black" } }}
                name="name"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" , 
                "& .MuiFilledInput-input": { color: "black" }
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onChange={(e)=>handleInputChange(e)} 
                value={values.email}
                name="email"
                InputLabelProps={{ shrink: true,style: { color: "black" } }}

                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2",
                "& .MuiFilledInput-input": { color: "black" } }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Mot De Passe"
                InputLabelProps={{ shrink: true,style: { color: "black" } }}

                onChange={(e)=>handleInputChange(e)} 
                value={values.password}
                name="password"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2",
              
                "& .MuiFilledInput-input": { color: "black" }}}
              />

            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Ajouter Agent
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};



export default Form;
