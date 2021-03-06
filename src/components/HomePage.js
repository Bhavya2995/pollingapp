import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardActions, CardTitle } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Header from './Header';
import { resetState,logout } from '../actions';
import { connect } from 'react-redux'


const style = {
  stylePage: {
    height: "100vh",
    backgroundColor: "#edf2f9",
    backgroundRepeat: "repeat-y"
  },

  styleCard: {
    borderRadius: "5px",
    backgroundColor: "#d6ddff"
  }
};

class HomePage extends Component {
  componentDidMount(){
    this.props.resetState();
    this.props.logout();
  }
  render() {
    return (
      <div style={style.stylePage}>
        <Header />
        <div className="container">
          <Card className="col-md-4 offset-md-4 pb-1" style={style.styleCard}>
            <CardTitle
              title="Sign Up Here For App"
              titleStyle={{ fontSize: "18px" }}
            />
            <CardActions>
              <Link to="/signup">
                <FlatButton
                  label="Click here to Sign Up"
                  fullWidth={true}
                  backgroundColor="#1b1d26"
                  style={{ color: "white" }}
                />
              </Link>
            </CardActions>
            <CardTitle
              title="Already Signed Up?"
              titleStyle={{ fontSize: "18px" }}
            />
            <CardActions>
              <Link to="/login">
                <FlatButton
                  label="Click Here For Login"
                  fullWidth={true}
                  backgroundColor="#1b1d26"
                  style={{ color: "white" }}
                />
              </Link>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

export default connect(null,{resetState,logout})(HomePage);
