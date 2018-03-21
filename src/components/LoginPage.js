import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import { Card, CardTitle } from "material-ui/Card";
import Header from "./Header";
import { login } from "../actions";
import AlertBox from "./AlertBox";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        username: "",
        password: ""
      },
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    const data = { ...this.state.data };
    data[name] = value;
    this.setState({ data });
  }

  handleSubmit(e) {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.login(this.state.data);
    }
  }

  validate(data) {
    const errors = {};
    if (!data.username) errors.username = "Username is required";
    if (!data.password) errors.password = "Password is required";
    return errors;
  }
  render() {
    const { data, errors } = this.state;
    const { auth } = this.props;
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
                    style={{ textAlign: "left" }}
                    fullWidth={true}
                    name="username"
                    value={data.username}
                    errorText={errors.username}
                    onChange={this.handleChange}
                  />
                  <br />

                  <TextField
                    type="password"
                    floatingLabelText="Password"
                    floatingLabelFixed={true}
                    style={{ textAlign: "left" }}
                    fullWidth={true}
                    name="password"
                    value={data.password}
                    errorText={errors.password}
                    onChange={this.handleChange}
                  />
                  <br />

                  <FlatButton
                    label="Login"
                    primary={true}
                    onClick={this.handleSubmit}
                  />
                </div>
              </Card>
              <br />
              <br />
              {auth.loggingIn && (
                <span className="lead" style={{ color: "#4b4e51" }}>
                  Please Wait...
                </span>
              )}
              {(auth.loggedIn === false) ?(<AlertBox url = "no" message = "Username or password is incorrect" />):null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { login })(LoginPage);
