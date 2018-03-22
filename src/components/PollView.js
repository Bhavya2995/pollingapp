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
        <div>{this.props.polls.title}</div>
        <div>{this.props.polls._id}</div>
        <div>{this.props.polls.date}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ polls }) => ({ polls });
export default connect(mapStateToProps, { fetchPoll })(PollView);
