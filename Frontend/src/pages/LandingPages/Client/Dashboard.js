import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders'; 
import { Link } from 'react-router-dom'; 
import { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import Title from './Title'; 
import Depositss from './Depositss'; 
import Demo from './Graphe'; 
import DefaultNavbar from 'examples/Navbars/DefaultNavbar'; 
import routes from 'routes'; 
import App from './graphee'; 
import { connect } from "react-redux"; 
import Mail from 'scenes/cards/mail';



const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme({
  palette: {
    primary: {
      main: '#333533',
    },
    secondary: {
      main: '#f50057',
    },
  },
});
function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };  
  const [client, setClient] = React.useState(false); 
  const [datass, setDatass] = React.useState([]);  
  const [credit, setCredit] = React.useState([]);



  useEffect(() => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer  ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get('http://127.0.0.1:8000/auth/users/me', config).then((response) => {
        console.log(response.data)
        setClient(response.data)
    });
}); 
useEffect(() => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer  ${localStorage.getItem('access')}`,
      'Accept': 'application/json'
    }
  };
  
  axios.get('http://127.0.0.1:8000/credit/demandeApi').then((response) => {
    console.log(response.data)
    setDatass(response.data)
  });
});
useEffect(() => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer  ${localStorage.getItem('access')}`,
      'Accept': 'application/json'
    }
  };
  
  axios.get('http://127.0.0.1:8000/credit/get_credits').then((response) => {
    console.log(response.data)
    setCredit(response.data)
  });
}); 
  return ( 
    
    <ThemeProvider theme={mdTheme}>  
    
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
           
           // keep right padding when drawer closed
           
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton> 
            <IconButton onClick={toggleDrawer}>
   <ChevronLeftIcon />
 </IconButton>
            <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
            >
          Bienvenue dans votre espace personnel {client.name}
          </Typography>   
          

          {/*<Link to="/notification">
            <IconButton color="secondary">
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton> 
          </Link> 
            */}
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              
              px: [1],
            }}
          >
          </Toolbar>
          <List component="nav">
            {mainListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />  
          <div style={{ display: 'flex',flexDirection:'row'}}> 
          <div style={{ width: '700px'}}>
          <section  style={{ backgroundColor: '#f4f5f7'}}>
      <div className="container py-5 "style={{ marginLeft: '10px'}}>
              
                <div 
                  style={{display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  borderTopLeftRadius: '.5rem', 
                  borderBottomLeftRadius: '.5rem', 
                  width:'150px' , 
                  background: '#C0C0C0', 
                  borderTopRightRadius: '.5rem', 
                  borderBottomRightRadius: '.5rem' }}>
                  <div> 
                  <img src={`data:image/jpg;base64,${datass.img_cin}`} alt="Avatar"   />

                
                  <h5>{client.name}</h5>
                  <p> {datass.filter(data => data.email === `${client.email}`).map((datass) => (
                     datass.job
                  ))} </p>
                  <i className="far fa-edit mb-5"></i> 
                  </div>
                </div>
                
                
                <div style={{ display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderLeft: '3px solid white', 
                width: '500px', 
                background: '#C0C0C0', 
                borderTopLeftRadius: '.5rem',  
                borderBottomLeftRadius: '.5rem', 
                borderTopRightRadius: '.5rem', 
                borderBottomRightRadius: '.5rem'}}>
                  <div >
                    <Title> Informations Personelles </Title>
                    <div >
                      <div >
                        <h1><strong>Email</strong></h1>
                        <p >{client.email}</p>
                      </div>
                      <div >
                        <h6><strong>Télèphone</strong></h6>
                        <p> {datass.filter(data => data.email === `${client.email}`).map((datass) => (
                            datass.num_tel
                         ))} </p>
                      </div> 
                      <div >
                        <h6><strong>Adresse</strong></h6>
                        <p> {datass.filter(data => data.email === `${client.email}`).map((datass) => (
                            datass.adress
                         ))} </p>
                      </div>
                    </div>
                    <Title> Informations Sur les demandes</Title>
                    <div >
                      <div >
                        <h6><strong>Nombre de demandes passées</strong></h6>
                        <p >{datass.filter(data => data.email === `${client.email}`).length}</p>
                      </div>
                      <div >
                        <h6><strong>Nombre de crédit obtenus</strong></h6>
                        <p >{credit.filter(data => data.demande__first_name === `${client.name}`).length}</p>
                      </div>
                    </div>

                  </div>
                </div>
      </div>
    </section>    
    </div>  
    <div style={{ display: 'flex',flexDirection: 'row', marginTop:'30px', justifyContent: 'space-between'}} >
    <div style={{ flex: 1 }}>
        <Mail />
      </div>
      <div style={{ flex: 1 , marginLeft: 20 }}>

    <Grid item xs={12} md={4} lg={5}>
      <Paper
        sx={{
          p: 2,
          display: 'flex', 
          flexDirection: 'column',
          height: 240,
          width:200,
        }}
      >
        <Depositss />
           

      </Paper>
    </Grid>
    </div>
    </div>
  </div> 

    <hr />
    <Demo />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}> 
              {/* <h1>hello {client.name}</h1> */}
              {/* Chart */}
              {/* Recent Deposits 
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid> 
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Depositss />
                </Paper>
                </Grid> */}
           {/*   <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid> */}
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>  

              
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() { 
  return <DashboardContent />;
}
