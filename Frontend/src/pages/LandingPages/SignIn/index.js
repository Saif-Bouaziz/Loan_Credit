
import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom"; 
import { connect } from "react-redux"; 
import { login } from "actions/auth"; 
import { Navigate } from 'react-router-dom';


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

function SignInBasic({login,isAuthenticated}) { 
  const [formData, setFormData] = useState({
    email: '',
    password: '' 
});

const { email, password } = formData;

const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

const onSubmit = e => {
    e.preventDefault();

    login(email, password);
}; 
if (isAuthenticated) {
  return <Navigate to='/dashboardC' />
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
                  Se connecter
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form" onSubmit={e => onSubmit(e)}> 
                  <MKBox mb={2}>
                    <MKInput type="email" label="Email" fullWidth name='email' value={email}
                    onChange={e => onChange(e)}
                    required/>
                    
                     
                  </MKBox> 
                  <MKBox mb={2}>
                    <MKInput type="password" label="Mot de passe" fullWidth name="password" value={password}
                        onChange={e => onChange(e)}
                        required/>
                  </MKBox> 
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" fullWidth type='submit' >
                      Se connecter
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                    Vous n'avez pas de compte ?{" "}
                      <MKTypography
                        component={Link}
                        to="/SignUp"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        S'inscrire
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

export default connect(mapStateToProps,{login}) (SignInBasic);
