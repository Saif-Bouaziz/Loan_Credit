import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import SignInPage from "layouts/pages/authentication/sign-in";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const RedirectToLogin = () => (
    <div>
      Please <Link to="/login">login</Link> to view this page.
    </div>
  );

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default PrivateRoute;
