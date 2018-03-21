import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  const styleHeader = {
    border: "1px solid",
    backgroundColor: "#121926",
    color: "white",
    height: "7vh"
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
    </div>
  );
};

export default MainPage;
