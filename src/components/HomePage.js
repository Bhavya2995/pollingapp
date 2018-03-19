import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardActions, CardTitle, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

const style = {
  stylePage: {
    height: "100vh",
    backgroundColor: "#edf2f9",
    backgroundRepeat: "repeat-y"
  },
  styleHeader: {
    border: "1px solid",
    backgroundColor: "#121926",
    color: "white"
  },
  styleCard: {
    borderRadius: "5px",
    backgroundColor: "#d6ddff"
  }
};

class HomePage extends Component {
  render() {
    return (
      <div style={style.stylePage}>
        <header className="mb-5" style={style.styleHeader}>
          <h1 className="display-4 text-center">Polling App</h1>
        </header>
        <div className="container">
          <Card className="col-sm-4 offset-sm-4 pb-1" style={style.styleCard}>
            <CardTitle
              title="Sign Up Here For App"
              titleStyle={{ fontSize: "18px" }}
            />
            <CardActions>
              <Link to="/signup">
                <FlatButton
                  label="Sign Up"
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

export default HomePage;
