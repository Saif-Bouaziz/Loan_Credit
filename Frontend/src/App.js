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
import './scss/style.scss'


// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";

import Presentation from "layouts/pages/presentation";
import ListeClients from 'views/clients/ListeClients';
import Dashboard from 'views/dashboard/Dashboard';
import PretsAccordes from 'views/prets/PretsAccordes';
import PretsNonAccordes from 'views/prets/PretsNonAccordes';
import CompteMails from 'views/compte/CompteMails';
import ModifierCompte from 'views/compte/ModifierCompte';
import ComptesBancaire from 'views/clients/ComptesBancaire';
import DemandesCours from 'views/clients/DemandesCours';
import HistoriqueClients from 'views/clients/HistoriqueClients';
import AgentVerification from 'views/agents/AgentVerification';
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
            <Route path="/pages/LandingPages/Banquier/client/liste" element={<ListeClients />} />
            <Route path="/pages/LandingPages/Banquier/client/historique" element={<HistoriqueClients />} />
            <Route path="/pages/LandingPages/Banquier/client/comptes" element={<ComptesBancaire />} />
            <Route path="/pages/LandingPages/Banquier/client/demandes" element={<DemandesCours />} />
            <Route path="/pages/LandingPages/Banquier/dashboard" element={<Dashboard />} />
            <Route path="/pages/LandingPages/Banquier/prets/accordes" element={<PretsAccordes />} />
            <Route path="/pages/LandingPages/Banquier/prets/non-accordes" element={<PretsNonAccordes />} />
            <Route path="/pages/LandingPages/Banquier/agents" element={<AgentVerification />} />
            <Route path="/pages/LandingPages/Banquier/compte/modifier" element={<ModifierCompte />} />
            <Route path="/pages/LandingPages/Banquier/compte/mail" element={<CompteMails />} />


            <Route path="/register" element={<SignInPage />} />
            <Route path="/SignUp" element={<SignUp />} />

            <Route exact path='/reset-password' element={<ResetPassword />} />
            <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />} />
            <Route exact path='/activate/:uid/:token' element={<Activate />} />



          </Routes>
        </Layout>

      </ThemeProvider>
    </Provider>
  );
}
