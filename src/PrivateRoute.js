import React from "react";
import { Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";
import jwt from 'jsonwebtoken';
import {SECRET_KEY} from "./keys";

let user = JSON.parse(localStorage.getItem("user"));
if(user){
let token = user.token;
var check;
jwt.verify(token,SECRET_KEY,function(err,decode){
  if(err){
    check = "Invalid"
  }
})
}
 const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>

    (check !== "Invalid" && user)
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

// const mapStateToProps = ({auth}) => ({auth});
export default PrivateRoute;
