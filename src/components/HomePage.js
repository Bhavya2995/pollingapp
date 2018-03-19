import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center mb-5">Polling App</h1>
        <Card className="col-sm-4 offset-sm-4">
          <CardTitle title="Sign Up" />
          <CardActions>
            <Link to="/signup">
              <FlatButton
                label="Sign Up"
                fullWidth={true}
                backgroundColor="#93bcff"
                style={{ color: "white" }}
              />
            </Link>
          </CardActions>
          <CardTitle title="Already Signed Up?" />
          <CardActions>
          <Link to = "/login">
            <FlatButton
              label="Log In"
              fullWidth={true}
              backgroundColor="#93bcff"
              style={{ color: "white" }}
            />
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default HomePage;
