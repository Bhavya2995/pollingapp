import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'


const NavBar = ({auth}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-5">
        <div className="navbar-brand" href="#">
          <Link to ="/main" style ={{textDecoration:'none',color:"white"}}>PollingApp</Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
              <span className="nav-link">{auth.user.user_id}</span>
            </li>
          <li className="nav-item ">
              <Link className="nav-link" to = "/pollslist">List of Polls</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to = "/addpoll">Add Poll</Link>
            </li>
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

const mapStateToProps = ({auth}) =>({auth});
export default connect(mapStateToProps)(NavBar);
