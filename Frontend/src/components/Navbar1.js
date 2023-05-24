import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import axios from "axios"
import skander from "./Skander.jpg"

function ResponsiveAppBar() {
    const [agent, setAgent] = useState([]);
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
            setAgent(response.data)
        });

    }, []);

    return (
        <AppBar position="static">
            {agent.is_agent && (<Container maxWidth="xl">
                <Toolbar disableGutters>
                    <h1>Agent</h1>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    </Box>
                    <h4>{agent.name}</h4>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input id="image" style={{ display: 'none' }} type="file" />
                    <label htmlFor='image'>
                        <Avatar
                            src={skander} sx={{ width: 56, height: 56 }}
                        />
                    </label>
                </Toolbar>
            </Container>)}


        </AppBar >
    );
}
export default ResponsiveAppBar;