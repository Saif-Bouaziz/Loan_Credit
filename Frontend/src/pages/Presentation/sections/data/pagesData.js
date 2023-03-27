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
import manage from "./manage-cash-img.png";  
import security from "./freelance-tab.png";   
import MKBox from "components/MKBox"; 
import a from "./1.png" 
import b from "./2.png" 
import c from "./3.png" 
import d from "./4.png" 

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages";

export default [
  {
    image: manage,
    name: (
      <MKBox textAlign="center">
        Manage your cash easily
      </MKBox>
    ),
    route: "/pages/landing-pages/about-us",
  },
  {
    image: security, 
    name: (
      <MKBox textAlign="center">
        Access to secure banking
      </MKBox>
    ),
    route: "/pages/landing-pages/contact-us",
  },
  /*{
    image: a,  
    name: "Personal loan",
    route: "/pages/authentication/sign-in",
  },
  {
    image: `${imagesPrefix}/author.jpg`,
    name: "Easy experience",
    route: "/pages/landing-pages/author",
  },*/ 
];
