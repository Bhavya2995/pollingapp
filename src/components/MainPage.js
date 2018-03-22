import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserList from "./UserList";

const styleHeader = {
  border: "1px solid",
  backgroundColor: "#121926",
  color: "white",
  height: "7vh"
};
class MainPage extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-5">
          <div className="navbar-brand" href="#">
            PollingApp
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <UserList />
      </div>
    );
  }
}

export default MainPage;
