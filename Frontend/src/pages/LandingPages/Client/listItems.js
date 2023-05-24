import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment'; 
import { Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications'; 
import ReorderIcon from '@mui/icons-material/Reorder'; 
import FolderIcon from '@mui/icons-material/Folder'; 
import PersonIcon from '@mui/icons-material/Person';

export const mainListItems = (
  <React.Fragment> 
<Link to="/dashboardC" style={{ textDecoration: 'none', color: 'inherit' }}>    
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Accueil
" />
    </ListItemButton>  
</Link>
{/*
<Link to="/notification">    
    <ListItemButton>
      <ListItemIcon>
        <NotificationsIcon/>
      </ListItemIcon>
      <ListItemText primary="Notifications" />
    </ListItemButton>  
</Link>
*/}
<Link to="/liste" style={{ textDecoration: 'none', color: 'inherit' }}>    
    <ListItemButton>
      <ListItemIcon>
        <FolderIcon/>
      </ListItemIcon>
      <ListItemText primary="Liste des demandes" />
    </ListItemButton> 
</Link>
    
<Link to="/pages/LandingPages/LoanApplication/index" style={{ textDecoration: 'none', color: 'inherit' }}>    
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Obtenir un crédit" />
    </ListItemButton> 
</Link> 

  </React.Fragment>
);
