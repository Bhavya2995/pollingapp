import React, { Component } from "react";
import { connect } from 'react-redux'
import { signUp } from '../actions';
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import { Card, CardActions, CardTitle, CardText } from "material-ui/Card";


class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      username:"",
      password : "",
      role:"staff"
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit(){
    //DummyData
    const data = this.state;
    this.props.signUp(data);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <Card>
              <CardTitle className="text-center" title="Sign Up Form" />
              <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                name = "username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <br />

              <TextField
                type="password"
                hintText="Enter your password"
                floatingLabelText="Password"
                name = 'password'
                value = {this.state.password}
                onChange = {this.handleChange}
              />
              <br />
              <SelectField floatingLabelText="Role">
                <MenuItem value={1} primaryText="Admin" />
                <MenuItem value={2} primaryText="Staff" />
              </SelectField>
              <br />
              <FlatButton label="Submit" primary={true} onClick = {this.handleSubmit}/>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null,{ signUp })(SignUp);