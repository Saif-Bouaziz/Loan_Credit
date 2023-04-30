/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components  
import { TextField } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="white">
              Feedback Box 
            </MKTypography>
            
            
            
            <MKTypography variant="body2" color="white" mb={6}>
            "We highly value your feedback and suggestions, as they help us improve our application and provide you with a better user experience. Please take a moment to share your thoughts with us and let us know how we can serve you better."
             
             
            </MKTypography> 
            <TextField fullWidth id="fullWidth" /> 
            <hr /> 
            <hr />
            <MKButton style={{marginTop:20}}
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href="/SignUp"
              sx={{ mb: 2 }}
            >
              Register Now
            </MKButton> 
            
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Download;
