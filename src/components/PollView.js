import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPoll, updatePollTitle, addOptionPoll } from "../actions";
import NavBar from "./NavBar";
import RaisedButton from "material-ui/RaisedButton";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField/TextField";
import DeletePollOpt from "./DeletePollOpt";
import AlertBox from "./AlertBox";
const style = {
  styleButton: {
    marginLeft: "10px"
  }
};

class PollView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: "",
      option: ""
    };
  }
  componentDidMount() {
    this.props.fetchPoll(this.props.match.params.id);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // handleUpdate = e => {
  //   console.log("working");
  // };
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleTitleSubmit = e => {
    this.props.updatePollTitle(this.props.match.params.id, this.state.title);
    this.handleClose();
    // window.location.reload();
  };

  handleAddOption = e => {
    this.props.addOptionPoll(this.props.match.params.id, this.state.option);
    // window.location.reload();
  };

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleTitleSubmit}
      />
    ];
    return (
      <div>
        <NavBar />

        <div className="display-4 text-center mb-5">
          {this.props.poll.title} Details
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="lead mb-3">Poll ID : {this.props.poll._id}</div>
              <div className="lead mb-3">
                Poll Title : {this.props.poll.title}
                <div>
                  <RaisedButton
                    label="Update Title"
                    primary={true}
                    onClick={this.handleOpen}
                  />
                  <Dialog
                    title="Update Title"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    <TextField
                      type="text"
                      floatingLabelText="New title"
                      name="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                    />
                  </Dialog>
                  {this.props.pollupdate.updated ? (
                    <AlertBox url="no" message="Title has been updated" />
                  ) : null}
                </div>
                <div className="lead mb-3">
                  <TextField
                    type="text"
                    floatingLabelText="Add New Option"
                    name="option"
                    value={this.state.option}
                    onChange={this.handleChange}
                  />
                  <RaisedButton
                    label="Add Options"
                    primary={true}
                    onClick={this.handleAddOption}
                  />
                  {this.props.pollupdate.added ? (
                    <AlertBox url="no" message="Poll option added" />
                  ) : null}
                </div>
                {this.props.poll.options ? (
                  <DeletePollOpt
                    id={this.props.match.params.id}
                    options={this.props.poll.options}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ poll, pollupdate }) => ({ poll, pollupdate });
export default connect(mapStateToProps, {
  fetchPoll,
  updatePollTitle,
  addOptionPoll
})(PollView);
