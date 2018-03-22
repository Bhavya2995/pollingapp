import React, { Component } from "react";
import UserList from "./UserList";
import Pollslist from "./Pollslist";
import NavBar from "./NavBar";

const styleHeader = {
  border: "1px solid",
  backgroundColor: "#121926",
  color: "white",
  height: "7vh"
};
class MainPage extends Component {
  render() {
    return (
      <div className = "mb-5">
        <NavBar />
        <UserList />
      </div>
    );
  }
}

export default MainPage;
