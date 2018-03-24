import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPoll } from "../actions";
import NavBar from "./NavBar";
class PollView extends Component {
  componentDidMount() {
    this.props.fetchPoll(this.props.match.params.id);
  }
  render() {
    return (
      <div>
      <NavBar />
      <div className = "display-4 text-center">{this.props.poll.title}</div>
        <div>{this.props.poll.title}</div>
        <div>{this.props.poll._id}</div>
        <div>{this.props.poll.date}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ poll }) => ({ poll });
export default connect(mapStateToProps, { fetchPoll })(PollView);
