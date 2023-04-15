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
<Link to="/dashboardC">    
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Acceuil" />
    </ListItemButton>  
</Link>

<Link to="/notification">    
    <ListItemButton>
      <ListItemIcon>
        <NotificationsIcon/>
      </ListItemIcon>
      <ListItemText primary="Notifications" />
    </ListItemButton>  
</Link>

<Link to="/liste">    
    <ListItemButton>
      <ListItemIcon>
        <FolderIcon/>
      </ListItemIcon>
      <ListItemText primary="Liste des demandes" />
    </ListItemButton> 
</Link>
    
<Link to="/pages/LandingPages/LoanApplication/index">    
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Obtenir un crédit" />
    </ListItemButton> 
</Link> 

<Link to="/profile">    

    <ListItemButton>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton> 
</Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Liste des Credits
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
