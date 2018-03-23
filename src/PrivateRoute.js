import React from "react";
import { Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";
// import setAuthorizationToken from "./service/setAuthToken";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
    //   (decode(localStorage.getItem("user"))!== undefined) 
    (localStorage.getItem('user'))
    ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);
