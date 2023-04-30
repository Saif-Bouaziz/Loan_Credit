import React, { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './actions/auth';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./Navbar.css"
import image from "./le-logo3.png"



const Navbar = ({ logout, isAuthenticated }) => {
    const [redirect, setRedirect] = useState(false);

    const logout_user = () => {
        logout();
        setRedirect(true);
    };

    const guestLinks = () => (
        <Fragment>
            <Button style={{ backgroundColor: "#E8EDDF" }} variant="contained" color="success" href="/register">
                Se connecter
            </Button>
            <Button variant="contained" color="success" href="/signup">
                Creer un compte
            </Button>
        </Fragment>
    );

    const authLinks = () => (
        <Button variant="contained" color="success" href="/" onClick={logout_user}>Se deconnecter
        </Button>
    );

    return (
        <div className='nav' style={{ display: "flex", flexDirection: "row" }}>
            <img src={image} />
            &nbsp;&nbsp;&nbsp;

            <div className='title' >
                LendEase
            </div>
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;

            <div style={{ marginTop: "15px" }}>
                <Stack spacing={5} direction="row">
                    <Button style={{ backgroundColor: "#F5CB5C", color: "white" }} variant="contained" color="success" href="/">Acceuil</Button>
                    {isAuthenticated ? authLinks() : guestLinks()}
                </Stack>
            </div>

        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);