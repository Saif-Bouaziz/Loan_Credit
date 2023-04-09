import React, { useEffect, createContext, useReducer, Component, Suspense } from "react";
/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
//import { useEffect } from "react";

// react-router components

import { Routes, Route, Navigate, useLocation, HashRouter, BrowserRouter, Link } from "react-router-dom";


// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";

import Presentation from "layouts/pages/presentation"; 

import SignInPage from "layouts/pages/authentication/sign-in"; 
import Activate from "components/containers/Activate"; 
import ResetPassword from "components/containers/ResetPassword"; 
import ResetPasswordConfirm from "components/containers/ResetPasswordConfirm"; 
import SignUp from "pages/LandingPages/SignUp";
import store from "./store"; 
import Layout from "Layout";


import { Provider } from "react-redux"; 


// Material Kit 2 React routes
import routes from "routes";
import BanquierIndex from "pages/LandingPages/Banquier/BanquierIndex";
import Bar from "scenes/bar";
import Pie from "scenes/pie";
import Line from "scenes/line";
import FAQ from "scenes/faq";
import Geography from "scenes/geography";
import BanquierTeam from "pages/LandingPages/Banquier/BanquierTeam";
import Demandes from "pages/LandingPages/Banquier/Demandes";
import ListeAgents from "pages/LandingPages/Banquier/ListeAgents";
import AjoutAgent from "pages/LandingPages/Banquier/AjoutAgent";
import Chart from "components/BarChart";

export default function App() {
  const { pathname } = useLocation();
  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return ( 
    
    <Provider store={store} >
      <ThemeProvider theme={theme}>   
        <CssBaseline /> 
        <Layout>
        <Routes> 
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/presentation" />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/register" element={<SignInPage />} />    
          <Route path="/SignUp" element={<SignUp />} />   
          <Route exact path='/reset-password' element={<ResetPassword />} />
          <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />} />
          <Route exact path='/activate/:uid/:token' element={<Activate />} />
          <Route path="/Dashboard" element={<BanquierIndex />} /> 
          <Route path="/Liste_utilisateurs" element={<BanquierTeam />} />
          <Route path="/Demandes" element={<Demandes />} />
          <Route path="/Liste_agents" element={<ListeAgents/>} />
          <Route path="/ajout_agent" element={<AjoutAgent />} />
          <Route path="/bar" element={<Chart />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/line" element={<Line />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/geography" element={<Geography />} />

        </Routes> 
        </Layout>
      </ThemeProvider> 
    </Provider>
  );
}
