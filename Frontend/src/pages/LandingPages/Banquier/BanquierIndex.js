import React, { useEffect } from 'react'
import { useState } from "react";
import Dashboard from 'scenes/dashboard'
import Sidebar from 'scenes/global/Sidebar';
import Topbar from 'scenes/global/Topbar';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../../theme";
import './BanquierIndex.css'


export default function BanquierIndex() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isBanquier, setIsBanquier] = useState(false);

  async function accesDashboard() {
    try {
      const response = await fetch("http://127.0.0.1:8000/credit/acces_dashboard", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`, // include JWT token in the request header
        }
      });
      const data = await response.json();
      console.log(data['message']);
      const message = "you have the acces to the dashboard";
      if (data['message'] === message) {
        setIsBanquier(true);
      } else {
        setIsBanquier(false);
      }
    } catch (error) {
      console.error(error);
      setIsBanquier(false);
    }
  }
  
  useEffect(() => {
    accesDashboard();
  }, []);
  return (

    <div className='Banquier'>
    
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          { isBanquier ? (
          <div className="app">

          <Sidebar isSidebar={isSidebar} />
          <main className="content">

            <Dashboard />
          </main>
          </div>) 
          :
          (
            <h1>you don't have an acces</h1>    )}
             

          
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  )
}

