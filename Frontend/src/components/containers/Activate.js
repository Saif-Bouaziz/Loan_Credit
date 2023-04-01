
import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom"; 
import { connect } from "react-redux"; 
import { Navigate } from 'react-router-dom'; 
import { verify } from "actions/auth";


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
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Activate({verify,match}) { 

const { email, password } = formData;
const[verified,setVerified]=useState(false);

const verify_account = e => {
    const uid = match.params.uid; 
    const token=match.params.token;
    verify(uid, token); 
    setVerified(true);
}; 
if (verified) {
  return <Navigate to='/' />
}
  return (    
   <div className='container'>
   <div 
       className='d-flex flex-column justify-content-center align-items-center'
       style={{ marginTop: '200px' }}
   >
       <h1>Verify your Account:</h1>
       <button
           onClick={verify_account}
           style={{ marginTop: '50px' }}
           type='button'
           className='btn btn-primary'
       >
           Verify
       </button>
   </div>
</div>
); 
   

   
  
};


export default connect(null,{verify}) (Activate);
