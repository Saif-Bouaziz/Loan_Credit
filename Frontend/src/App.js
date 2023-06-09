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


import Presentation from "layouts/pages/presentation";

import SignInPage from "layouts/pages/authentication/sign-in";
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
import Credits from "pages/LandingPages/Banquier/Credits";
import ListeAgents from "pages/LandingPages/Banquier/ListeAgents";
import AjoutAgent from "pages/LandingPages/Banquier/AjoutAgent";
import Chart from "components/BarChart";
import theme from "assets/theme";
import Dashboard from "pages/LandingPages/Client/Dashboard";
import Bilan from "pages/LandingPages/Client/Bilan";
import Notifications from "pages/LandingPages/Client/notifications";
import Profile from "pages/LandingPages/Client/Profile";
import Liste from "pages/LandingPages/Client/Liste";

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
            <Route path="/Dashboard" element={<BanquierIndex />} />
            <Route path="/Liste_utilisateurs" element={<BanquierTeam />} />
            <Route path="/Demandes" element={<Demandes />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/Liste_agents" element={<ListeAgents />} />
            <Route path="/ajout_agent" element={<AjoutAgent />} />
            <Route path="/bar" element={<Chart />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/dashboardC" element={<Dashboard />} />
            <Route path="/bilan" element={<Bilan />} />
            <Route path="/liste" element={<Liste />} />
            <Route path="/notification" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />








          </Routes>
        </Layout>

      </ThemeProvider>
    </Provider>
  );
}
