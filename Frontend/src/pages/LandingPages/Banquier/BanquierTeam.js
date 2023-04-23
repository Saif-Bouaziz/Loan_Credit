import React from 'react'
import { useState } from "react";
import Sidebar from 'scenes/global/Sidebar';
import Topbar from 'scenes/global/Topbar';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode ,tokens} from "../../../theme";
import './BanquierIndex.css'
import UsersIndex from 'scenes/team/UsersIndex';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Box, IconButton, useTheme } from "@mui/material";



export default function BanquierTeam() {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
    const colors = tokens(theme.palette.mode);

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
