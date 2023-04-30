import React from 'react'
import { useState } from "react";
import Sidebar from 'scenes/global/Sidebar';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode, tokens } from "../../../theme";
import './BanquierIndex.css'
import UsersIndex from 'scenes/team/UsersIndex';




export default function BanquierTeam() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <CssBaseline />
      <ThemeProvider theme={theme}>

        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <UsersIndex />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
