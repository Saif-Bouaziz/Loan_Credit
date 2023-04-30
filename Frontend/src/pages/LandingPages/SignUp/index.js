
import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "actions/auth";
import { Navigate } from 'react-router-dom';
import axios from "axios";


// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Material Kit 2 React page layout routes
import routes from "routes";

// Images
import bgImage from "assets/images/abc.jpg";

function SignUp({ isAuthenticated }) {


  const initialFormData = Object.freeze({
    email: '',
    name: '',
    password: '',
    image4: '',
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axios
      .post(`http://127.0.0.1:8000/auth/user/register`, {
        email: formData.email,
        name: formData.name,
        password: formData.password,
        image4: formData.image4,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  if (isAuthenticated) {
    return <Navigate to='/' />
  }
  return (
    <>
      <DefaultNavbar
        routes={routes}
        transparent
        light
      />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  S'inscrire
                </MKTypography>
                <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
                </Grid>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form" > 
                <MKBox mb={2}>
                  <MKInput type="text" label="Nom" fullWidth name='name' onChange={handleChange}

                  required/>


                </MKBox> 
                  
                  
                  
                  <MKBox mb={2}>
                    <MKInput type="text" label="name" fullWidth name='name' onChange={handleChange}

                      required />


                  </MKBox>



                  <MKBox mb={2}>
                    <MKInput type="password" label="Mot de Passe" fullWidth name="password" 
                        						onChange={handleChange}
                                  
                        required/>
                  </MKBox>  

                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" fullWidth onClick={handleSubmit} >
                      S'inscrire
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                    Avez-vous un compte ?{" "}
                      <MKTypography
                        component={Link}
                        to="/register"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Se connecter
                      </MKTypography> 
                    </MKTypography>  
                    </MKBox> 
                  
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>



    </>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, null)(SignUp);
