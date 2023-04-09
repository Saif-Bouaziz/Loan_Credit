import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AdressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import axios from 'axios'

const steps = ['Loan Details', 'Personal Details', 'Documents Upload'];



const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [addressFormData, setAddressFormData] = React.useState({});
  const [paymentFormData, setPaymentFormData] = React.useState({});

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleAddressFormSubmit = (data) => {
    setAddressFormData(data);
    //formDataList.push(data);
  };
  const handlePaymentFormSubmit = (data) => {
    setPaymentFormData(data);
    //formDataList.push(data);
  };
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PaymentForm onFormSubmit={handlePaymentFormSubmit} />;
      case 1:
        return <AddressForm onFormSubmit={handleAddressFormSubmit} />;
      case 2:
        return <Review />;
      default:
        throw new Error('Unknown step');
    }
  }

  const data = {
    addressFormData: addressFormData,
    paymentFormData: paymentFormData
  };
<<<<<<< HEAD
  const handleFormSubmit = () => {
    axios.post('http://127.0.0.1:8000/credit/CreatedemandeApi', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
=======
  const handleFormSubmit = () => { 
    axios.post('http://127.0.0.1:8000/credit/create_demande', data)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
>>>>>>> master
  };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h5" align="center">
            Thank you for filling this form
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  //onClick={handleNext}
                  onClick={activeStep === steps.length - 1 ? handleFormSubmit : handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place' : 'Next'}
                </Button>

              </Box>
            </React.Fragment>
          )}
        </Paper>

      </Container>
    </ThemeProvider>
  );
}