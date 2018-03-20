import React, { Component } from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import { Card, CardTitle } from "material-ui/Card";
import Header from "./Header";

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <Card className="text-center pb-3">
                <CardTitle
                  title="Log in To Your Account"
                  titleStyle={{ fontSize: "20px", color: "#3a3939" }}
                />
                <div className="container">
                  <TextField
                    floatingLabelText="Username"
                    floatingLabelFixed={true}
                    name="username"
                    
                    fullWidth={true}
                    style={{ textAlign: "left" }}
                  />
                  <br />

                  <TextField
                    type="password"
                    floatingLabelText="Password"
                    floatingLabelFixed={true}
                    name="password"
                    
                    fullWidth={true}
                    style={{ textAlign: "left" }}
                  />
                  <br />
      
                  <FlatButton
                    label="Login"
                    primary={true}
                    
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
