import React from 'react'
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
  return (

    <div className='Banquier'>
   
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>

          <div className="app">

            <Sidebar isSidebar={isSidebar} />
            <main className="content">
           
              <Dashboard />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  )
}

