import React from 'react'
import { useState } from "react";
import Sidebar from 'scenes/global/Sidebar';
import Topbar from 'scenes/global/Topbar';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../../theme";
import './BanquierIndex.css'

import ClientIndex from 'scenes/contacts/ClientIndex';

export default function Demandes() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className='Table'>
      <ColorModeContext.Provider value={colorMode}>
        <CssBaseline />
        <ThemeProvider theme={theme}>

          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <div style={{ height: "50%", width: "100%", overflowX: 'auto' }}>
                <ClientIndex />
              </div>


            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  )
}
