import React from 'react'
import { useState } from "react";
import Sidebar from 'scenes/global/Sidebar';
import Topbar from 'scenes/global/Topbar';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../../theme";
import './BanquierIndex.css'
import AgentIndex from 'scenes/invoices/AgentIndex';

export default function ListeAgents() {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
  return (
    <div>
          <ColorModeContext.Provider value={colorMode}>
    <CssBaseline />
    <ThemeProvider theme={theme}>

      <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <AgentIndex />
          </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
      
    </div>
  )
}
