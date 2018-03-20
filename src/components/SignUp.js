import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../actions";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import { Card, CardActions, CardTitle, CardText } from "material-ui/Card";
import Header from "./Header";
import AlertBox from "./AlertBox";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        username: "",
        password: ""
      },
      value: 1,
      success: false,
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    const data = { ...this.state.data };
    data[name] = value;
    this.setState({ data });
  }
  handleRoleChange = (event, index, value) => this.setState({ value });

  handleSubmit(e) {
    const errors = this.validate(this.state);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      let role;
      if (this.state.value === 1) {
        role = "Admin";
      } else if (this.state.value === 2) {
        role = "Staff";
      }
      const data = {
        username: this.state.data.username,
        password: this.state.data.password,
        role: role
      };
      console.log(data);
      this.setState({ success: true });
      this.props.signUp(data);
    }
  }
  validate(data) {
    const errors = {};
    if (!data.data.username) errors.username = "Username is required";
    if (!data.data.password) errors.password = "Password is required";
    return errors;
  }
  render() {
    const { data, value, errors } = this.state;
    const { userData } = this.props;
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <Card className = "text-center pb-3">
                <CardTitle title="Sign Up Form" titleStyle = {{fontSize:'20px', color : "#3a3939"}}/>
                <div className = "container">
                <TextField
                  floatingLabelText="Username"
                  floatingLabelFixed={true}
                  name="username"
                  value={data.username}
                  onChange={this.handleChange}
                  errorText={errors.username}
                  fullWidth = {true}
                />
                <br />

                <TextField
                  type="password"
                  floatingLabelText="Password"
                  floatingLabelFixed={true}
                  name="password"
                  value={data.password}
                  onChange={this.handleChange}
                  errorText={errors.password}
                  fullWidth = {true}
                />
                <br />
                <SelectField
                  floatingLabelText="Role"
                  value={value}
                  onChange={this.handleRoleChange}
                  style = {{textAlign:'left'}}
                  fullWidth = {true}
                >
                  <MenuItem value={1} primaryText="Admin" />
                  <MenuItem value={2} primaryText="Staff" />
                </SelectField>
                <br />
                <FlatButton
                  label="Sign Up"
                  primary={true}
                  onClick={this.handleSubmit}
                />
                </div>
              </Card>
              {userData.error === 0 ? (
                <AlertBox message="You have been registered successfully!" />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ userData: state.userData });

export default connect(mapStateToProps, { signUp })(SignUp);
